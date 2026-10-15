'use client';
import {useEffect,useState} from 'react';import Link from 'next/link';
const NL='https://mindcrafteduniverse.substack.com';
const shuf=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
function fresh(key,items){let a=shuf(items);try{const last=localStorage.getItem('last-'+key);if(a.length>1&&a[0].slug===last)[a[0],a[1]]=[a[1],a[0]];if(a[0])localStorage.setItem('last-'+key,a[0].slug);}catch(e){}return a;}
function Candles(){return(<svg aria-hidden="true" viewBox="0 0 400 240" className="candles" fill="none" stroke="currentColor"><path d="M30 200V140M85 180V100M140 160V70M195 150V60M250 120V40M305 130V50M360 90V20" opacity=".6"/><rect x="22" y="160" width="16" height="30"/><rect x="77" y="120" width="16" height="45"/><rect x="132" y="90" width="16" height="50"/><rect x="187" y="80" width="16" height="45"/><rect x="242" y="55" width="16" height="45"/><rect x="297" y="70" width="16" height="40" fill="currentColor" fillOpacity=".25"/><rect x="352" y="35" width="16" height="40" fill="currentColor" fillOpacity=".25"/></svg>);}
export default function Site({poems,articles,fiction}){
  const [ready,setReady]=useState(false);const [mode,setMode]=useState(null);const [m,setM]=useState([600,300]);
  const [p,setP]=useState({poems:[],articles:[],fiction:[]});
  useEffect(()=>{setP({poems:fresh('poem',poems),articles:fresh('article',articles),fiction:fresh('fiction',fiction)});try{setMode(localStorage.getItem('mode'));}catch(e){}setReady(true);},[]);
  const pick=x=>{setMode(x);try{localStorage.setItem('mode',x);}catch(e){}};
  if(!ready)return <div className="boot"/>;
  if(!mode)return(<div className="split">
    <button className="half" data-mode="market" onClick={()=>pick('market')}><span className="logo">XAITOPIA</span><Candles/><small>MARKET</small><h2>Words that move <em>markets.</em></h2><p>Research, market structure and the Pine Script and MQL5 models behind it.</p><i>ENTER MARKET →</i></button>
    <button className="half" data-mode="page" onClick={()=>pick('page')}><small>PAGE</small><h2>Poems for the hours <em>in between.</em></h2><p className="verse">{(p.poems[0]?.excerpt||[]).slice(0,2).map((l,i)=><span key={i}>{l}<br/></span>)}</p><i>ENTER PAGE →</i></button>
  </div>);
  const mk=mode==='market';
  const head=(<header><Link href="/" className="logo" onClick={()=>{try{localStorage.removeItem('mode');}catch(e){}}}>XAITOPIA</Link>
    <nav>{mk?<><Link href="/writing">Research</Link><a href={NL}>Newsletter</a></>:<><Link href="/poetry">Poetry</Link><Link href="/fiction">Fiction</Link><a href={NL}>Newsletter</a></>}</nav>
    <div className="toggle"><button aria-pressed={mk} onClick={()=>pick('market')}>MARKET</button><button aria-pressed={!mk} onClick={()=>pick('page')}>PAGE</button></div></header>);
  const move=e=>setM([e.clientX,e.clientY]);
  if(mk){const [L,...r]=p.articles;return(<div className="wrap" data-mode="market" onMouseMove={move}>{head}
    <div className="xh v" style={{left:m[0]}}/><div className="xh h" style={{top:m[1]}}/>
    <section className="cols"><div className="lead">{L&&<><small>{L.tags[0]||'RESEARCH'}</small><h1>{L.title}</h1><p>{L.description}</p><Link className="btn" href={`/writing/${L.slug}`}>READ THE PAPER →</Link></>}
      <div className="cards">{r.slice(0,2).map(a=><Link key={a.slug} href={`/writing/${a.slug}`}><small>{a.tags[0]}</small><b>{a.title}</b></Link>)}</div></div>
      <aside><div className="panel"><div className="pt"><span>XAI HTF CANDLES</span><span>PINE SCRIPT</span></div><Candles/></div><div className="panel"><small>MQL5 · EXPERT ADVISOR</small>XAI_TBR_CISD_EA</div></aside></section></div>);}
  const [L,...r]=p.poems;const f=p.fiction[0];
  return(<div className="wrap" data-mode="page" onMouseMove={move}>{head}
    <section className="cols pg"><div className="meta">{L&&<>Poetry<br/>{L.date.slice(0,4)}<div className="tags">{L.tags.join(' · ')}</div></>}</div>
    {L&&<div className="poem"><h1 style={{transform:`translate(${(m[0]-640)/70}px,${(m[1]-380)/90}px)`}}>{L.title}</h1>
      {L.excerpt.map((l,i)=><div key={i} style={{opacity:Math.max(.15,1-i*.17)}}>{l}</div>)}<Link className="btn" href={`/poetry/${L.slug}`}>READ THE POEM →</Link></div>}
    <aside><small>MORE POEMS</small>{r.slice(0,3).map(x=><Link className="row" key={x.slug} href={`/poetry/${x.slug}`}>{x.title}</Link>)}
      {f&&<><small className="gap">FICTION</small><Link className="row it" href={`/fiction/${f.slug}`}>{f.title}</Link></>}</aside></section></div>);
}
