'use client';
import {useState,useMemo} from 'react';import Link from 'next/link';
const L={poetry:'Poem',fiction:'Fiction',writing:'Article'};
export default function Search({items}){const [q,setQ]=useState('');
  const res=useMemo(()=>{const t=q.trim().toLowerCase();if(t.length<2)return [];const w=t.split(/\s+/);
    return items.map(i=>{let sc=0;for(const k of w){if(i.t.toLowerCase().includes(k))sc+=3;if(i.g.toLowerCase().includes(k))sc+=2;if(i.d.toLowerCase().includes(k))sc+=1;if(i.x.toLowerCase().includes(k))sc+=1;}return {...i,sc};}).filter(i=>i.sc>0).sort((a,b)=>b.sc-a.sc).slice(0,30);},[q,items]);
  return(<><input className="sin" type="search" autoFocus placeholder="Search poems, fiction and articles" value={q} onChange={e=>setQ(e.target.value)} aria-label="Search"/>
  {q.trim().length>=2&&<p className="nlmsg">{res.length} result{res.length===1?'':'s'}</p>}
  {res.map(i=><Link key={i.s+i.slug} className="row" href={`/${i.s}/${i.slug}`}><b>{i.t}</b><span>{L[i.s]} · {i.d}</span></Link>)}</>);}
