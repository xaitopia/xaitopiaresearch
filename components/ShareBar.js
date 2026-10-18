'use client';
import {useState,useEffect} from 'react';
export default function ShareBar({title,mode,path}){
  const [url,setUrl]=useState(path);const [native,setNative]=useState(false);const [copied,setCopied]=useState(false);
  useEffect(()=>{setUrl(window.location.origin+path);setNative(typeof navigator!=='undefined'&&!!navigator.share);},[path]);
  const u=encodeURIComponent(url),t=encodeURIComponent(title);
  const N={wa:['WhatsApp',`https://wa.me/?text=${t}%20${u}`],x:['X',`https://twitter.com/intent/tweet?text=${t}&url=${u}`],li:['LinkedIn',`https://www.linkedin.com/sharing/share-offsite/?url=${u}`],tg:['Telegram',`https://t.me/share/url?url=${u}&text=${t}`],em:['Email',`mailto:?subject=${t}&body=${u}`]};
  const order=mode==='market'?['li','x','wa','em']:['wa','x','tg','em'];
  const copy=async()=>{try{await navigator.clipboard.writeText(url);setCopied(true);setTimeout(()=>setCopied(false),2000);}catch(e){window.prompt('Copy this link',url);}};
  const share=async()=>{try{await navigator.share({title,url});}catch(e){}};
  return(<div className="sharebar"><small>SHARE</small>
    {native&&<button type="button" className="sh" onClick={share}>Share…</button>}
    <button type="button" className="sh" onClick={copy}>{copied?'Link copied':'Copy link'}</button>
    {order.map(k=><a key={k} className="sh" href={N[k][1]} target={k==='em'?undefined:'_blank'} rel="noopener noreferrer">{N[k][0]}</a>)}</div>);}
