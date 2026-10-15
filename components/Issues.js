'use client';
import {useEffect,useState} from 'react';
const FEED='https://mindcrafteduniverse.substack.com/feed';
const C=['#4a8cc9','#c9a84c','#4a9c7c'];
const strip=h=>{const d=document.createElement('div');d.innerHTML=h;const t=(d.textContent||'').replace(/\s+/g,' ').trim();return t.length>180?t.slice(0,180)+'...':t;};
export default function Issues(){const [s,setS]=useState({st:'load',items:[]});
  useEffect(()=>{const ok=items=>setS({st:'ok',items});
    fetch(FEED).then(r=>r.text()).then(t=>{const x=new DOMParser().parseFromString(t,'text/xml');
      const n=[...x.querySelectorAll('item')].slice(0,3).map(e=>({title:e.querySelector('title')?.textContent||'',link:(e.querySelector('link')?.textContent||'').trim(),pubDate:e.querySelector('pubDate')?.textContent||'',description:e.querySelector('description')?.textContent||''}));
      if(!n.length)throw new Error('empty');ok(n);})
    .catch(()=>fetch('https://api.rss2json.com/v1/api.json?rss_url='+encodeURIComponent(FEED)+'&count=3').then(r=>r.json()).then(d=>{if(!d.items||!d.items.length)throw new Error('empty');ok(d.items);}).catch(()=>setS({st:'err',items:[]})));},[]);
  if(s.st==='load')return <p className="nlmsg">Loading recent issues...</p>;
  if(s.st==='err')return <p className="nlmsg">Could not load recent posts automatically. <a href="https://mindcrafteduniverse.substack.com" style={{color:'var(--ac)'}}>Visit Substack</a> to read the latest.</p>;
  return s.items.map((i,n)=>(<a key={i.link} className="issue" href={i.link} target="_blank" rel="noopener noreferrer"><span className="isp" style={{background:C[n%3]}}/><div className="isb"><small>{i.pubDate?new Date(i.pubDate).toLocaleDateString('en-GB',{month:'short',year:'numeric'}):''}</small><b>{i.title}</b><p>{strip(i.description||'')}</p><em>Read on Substack →</em></div></a>));}
