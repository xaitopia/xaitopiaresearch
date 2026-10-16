'use client';
import {useState,useRef,useEffect} from 'react';import Link from 'next/link';import {useRouter} from 'next/navigation';import {score} from '../lib/score';
const L={poetry:'Poem',fiction:'Fiction',writing:'Article'};
export default function SearchBox({onPick}){const [q,setQ]=useState('');const [idx,setIdx]=useState(null);const [open,setOpen]=useState(false);const box=useRef(null);const router=useRouter();
  const load=()=>{if(!idx)fetch('/search.json').then(r=>r.json()).then(setIdx).catch(()=>setIdx([]));};
  useEffect(()=>{const h=e=>{if(box.current&&!box.current.contains(e.target))setOpen(false);};document.addEventListener('mousedown',h);return()=>document.removeEventListener('mousedown',h);},[]);
  const res=idx?score(idx,q):[];const done=()=>{setOpen(false);setQ('');onPick&&onPick();};
  const submit=e=>{e.preventDefault();if(q.trim().length<2)return;router.push('/search?q='+encodeURIComponent(q.trim()));done();};
  return(<div className="sb" ref={box}><form onSubmit={submit} role="search"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>
    <input type="search" placeholder="Search" aria-label="Search the site" value={q} onFocus={()=>{load();setOpen(true);}} onChange={e=>{setQ(e.target.value);setOpen(true);}} onKeyDown={e=>{if(e.key==='Escape')setOpen(false);}}/></form>
    {open&&q.trim().length>=2&&<div className="sbr">{idx===null?<span className="sbm">Loading...</span>:res.length===0?<span className="sbm">No results</span>:<>
      {res.slice(0,6).map(i=><Link key={i.s+i.slug} href={`/${i.s}/${i.slug}`} onClick={done}><b>{i.t}</b><span>{L[i.s]} · {i.d.length>70?i.d.slice(0,70).trim()+'…':i.d}</span></Link>)}
      {res.length>6&&<Link className="all" href={'/search?q='+encodeURIComponent(q.trim())} onClick={done}>See all {res.length} results →</Link>}</>}</div>}</div>);}
