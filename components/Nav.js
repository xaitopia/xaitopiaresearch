'use client';
import {useState} from 'react';import Link from 'next/link';import SearchBox from './SearchBox';
const MK=[{n:'Financial Writing',h:'/writing'},
 {n:'Research & Intelligence',c:[['Bi-Weekly Market Intelligence','/research/market-intelligence'],['Macro & Data Analysis','/research/macro-analysis']]},
 {n:'Quantitative Models',c:[['TradingView — Pine Script','/quant/tradingview'],['MetaTrader — MQL5','/quant/mql5']]},
 {n:'Newsletter',h:'/newsletter/financial'},{n:'About',h:'/about'}];
const PG=[{n:'Poetry',h:'/poetry'},{n:'Fiction',h:'/fiction'},{n:'Newsletter',h:'/newsletter/creative'},{n:'About',h:'/about'}];
export default function Nav({mode}){const M=mode==='page'?PG:MK;const [open,setOpen]=useState(false);const [dd,setDd]=useState(null);
  const close=()=>{setOpen(false);setDd(null);};
  return(<><button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={()=>setOpen(!open)}><span/><span/><span/></button>
  <nav className={open?'open':''}>{M.map(m=>m.c?(<div key={m.n} className={'dd'+(dd===m.n?' on':'')} onMouseLeave={()=>setDd(null)}>
    <button className="ddb" aria-expanded={dd===m.n} onClick={()=>setDd(dd===m.n?null:m.n)}>{m.n} <span aria-hidden="true">▾</span></button>
    <div className="ddm">{m.c.map(([n,h])=><Link key={h} href={h} onClick={close}>{n}</Link>)}</div></div>)
   :<Link key={m.n} href={m.h} onClick={close}>{m.n}</Link>)}<SearchBox onPick={close}/></nav></>);}
