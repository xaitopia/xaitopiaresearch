'use client';
import {useEffect,useRef} from 'react';import {SYMBOLS} from '../lib/ticker';
export default function Tape(){const ref=useRef(null);
  useEffect(()=>{const el=ref.current;if(!el)return;
    const s=document.createElement('script');s.src='https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';s.async=true;
    s.innerHTML=JSON.stringify({symbols:SYMBOLS.map(([proName,title])=>({proName,title})),showSymbolLogo:false,colorTheme:'dark',isTransparent:true,displayMode:'adaptive',locale:'en'});
    el.appendChild(s);return()=>{el.innerHTML='<div class="tradingview-widget-container__widget"></div>';};},[]);
  return <div className="tape tradingview-widget-container" ref={ref}><div className="tradingview-widget-container__widget"></div></div>;}
