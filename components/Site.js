'use client';
import {useEffect,useState} from 'react';import Link from 'next/link';
const NL='https://mindcrafteduniverse.substack.com';
const shuf=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
function fresh(key,items){let a=shuf(items);try{const last=localStorage.getItem('last-'+key);if(a.length>1&&a[0].slug===last)[a[0],a[1]]=[a[1],a[0]];if(a[0])localStorage.setItem('last-'+key,a[0].slug);}catch(e){}return a;}
function Candles(){return(<svg aria-hidden="true" viewBox="0 0 400 240" className="candles" fill="none" stroke="currentColor"><path d="M30 200V140M85 180V100M140 160V70M195 150V60M250 120V40M305 130V50M360 90V20" opacity=".6"/><rect x="22" y="160" width="16" height="30"/><rect x="77" y="120" width="16" height="45"/><rect x="132" y="90" width="16" height="50"/><rect x="187" y="80" width="16" height="45"/><rect x="242" y="55" width="16" height="45"/><rect x="297" y="70" width="16" height="40" fill="currentColor" fillOpacity=".25"/><rect x="352" y="35" width="16" height="40" fill="currentColor" fillOpacity=".25"/></svg>);}
const K=[['HTF',140,200,160,30],['Session',100,180,120,45],['Sweep',70,160,90,50],['Reject',60,150,80,45],['SMT',40,120,55,45],['CISD',50,130,70,40],['TBR',20,90,35,40]];
function LiveChart(){const [h,setH]=useState(null);
  const mv=e=>{const r=e.currentTarget.getBoundingClientRect();setH(Math.max(0,Math.min(6,Math.floor((e.clientX-r.left)/r.width*7))));};
  return(<svg role="img" aria-label="Interactive candlestick chart" viewBox="0 0 400 240" className="candles lc" fill="none" stroke="currentColor" onMouseMove={mv} onMouseLeave={()=>setH(null)}>
    {h!==null&&<path d={`M${30+h*55} 0V240`} strokeDasharray="3 4" opacity=".4"/>}
    {K.map((k,i)=>{const x=30+i*55;return(<g key={k[0]} className={h===i?'on':''}><path d={`M${x} ${k[1]}V${k[2]}`}/><rect x={x-8} y={k[3]} width="16" height={k[4]} fill={i>4?'currentColor':'none'} fillOpacity={i>4?.25:0} className={i===6?'pulse':''}/></g>);})}
    {h!==null&&<text x={30+h*55} y="228" textAnchor="middle" fontSize="11" fill="currentColor" stroke="none" fontFamily="IBM Plex Mono">{K[h][0]}</text>}</svg>);}
function Ticker({articles}){const [t,setT]=useState(new Date());useEffect(()=>{const id=setInterval(()=>setT(new Date()),1000);return()=>clearInterval(id);},[]);
  const items=[...articles.map(a=>({k:a.slug,t:a.title,h:`/writing/${a.slug}`})),...['XAI HTF Candles','Sessions Map','TBR·CISD','Single Candle Model'].map(n=>({k:n,t:n,h:'/quant/tradingview'}))];
  const row=x=>items.map(i=><Link key={x+i.k} href={i.h} tabIndex={x==='b'?-1:0}>{i.t}</Link>);
  return(<div className="tick"><span className="clk">UTC {t.toISOString().slice(11,19)}</span><div className="mq"><div className="tk">{row('a')}{row('b')}</div></div></div>);}
export default function Site({poems,articles,fiction}){
  const [ready,setReady]=useState(false);const [mode,setMode]=useState(null);const [m,setM]=useState([600,300]);const [sw,setSw]=useState(null);
  const [p,setP]=useState({poems:[],articles:[],fiction:[]});
  useEffect(()=>{setP({poems:fresh('poem',poems),articles:fresh('article',articles),fiction:fresh('fiction',fiction)});try{setMode(localStorage.getItem('mode'));}catch(e){}setReady(true);},[]);
  const commit=x=>{setMode(x);try{localStorage.setItem('mode',x);}catch(e){}};
  const pick=x=>{if(x===mode)return;if(!mode||window.matchMedia('(prefers-reduced-motion: reduce)').matches){commit(x);return;}setSw(x);setTimeout(()=>commit(x),450);setTimeout(()=>setSw(null),1000);};
  if(!ready)return <div className="boot"/>;
  if(!mode)return(<div className="split">
    <button className="half" data-mode="market" onClick={()=>pick('market')}><span className="logo">XAITOPIA</span><Candles/><small>MARKET</small><h2>Words that move <em>markets.</em></h2><p>Research, market structure and the Pine Script and MQL5 models behind it.</p><i>ENTER MARKET →</i></button>
    <button className="half" data-mode="page" onClick={()=>pick('page')}><small>PAGE</small><h2>Poems for the hours <em>in between.</em></h2><p className="verse">{(p.poems[0]?.excerpt||[]).slice(0,2).map((l,i)=><span key={i}>{l}<br/></span>)}</p><i>ENTER PAGE →</i></button>
  </div>);
  const mk=mode==='market';
  const ov=sw&&(<div className="sweep" data-mode={sw} aria-hidden="true">{sw==='market'?<Candles/>:<p>At 2 AM the world closes its eyes<br/>and pretends it cannot hear you.</p>}</div>);
  const head=(<header><Link href="/" className="logo" onClick={()=>{try{localStorage.removeItem('mode');}catch(e){}}}>XAITOPIA</Link>
    <nav>{mk?<><Link href="/writing">Research</Link><Link href="/quant/tradingview">Pine Script</Link><Link href="/quant/mql5">MQL5</Link><Link href="/about">About</Link><Link href="/newsletter/financial">Newsletter</Link></>:<><Link href="/poetry">Poetry</Link><Link href="/fiction">Fiction</Link><Link href="/about">About</Link><Link href="/newsletter/creative">Newsletter</Link></>}</nav>
    <div className="toggle"><button aria-pressed={mk} onClick={()=>pick('market')}>MARKET</button><button aria-pressed={!mk} onClick={()=>pick('page')}>PAGE</button></div></header>);
  const move=e=>setM([e.clientX,e.clientY]);
  if(mk){const [L,...r]=p.articles;return(<div className="wrap" data-mode="market" onMouseMove={move}>{head}{ov}
    <Ticker articles={p.articles}/><div className="xh v" style={{left:m[0]}}/><div className="xh h" style={{top:m[1]}}/>
    <section className="cols"><div className="lead">{L&&<><small>{L.tags[0]||'RESEARCH'}</small><h1>{L.title}</h1><p>{L.description}</p><Link className="btn" href={`/writing/${L.slug}`}>READ THE PAPER →</Link></>}
      <div className="cards">{r.slice(0,2).map(a=><Link key={a.slug} href={`/writing/${a.slug}`}><small>{a.tags[0]}</small><b>{a.title}</b></Link>)}</div></div>
      <aside><div className="panel"><div className="pt"><span>XAI HTF CANDLES</span><span>PINE SCRIPT</span></div><LiveChart/></div><div className="panel"><small>MQL5 · EXPERT ADVISOR</small>XAI_TBR_CISD_EA</div></aside></section><section className="svc"><small>SERVICES</small><div className="svcg">{['White Papers|In-depth technical research documents for institutional and professional audiences.','Market Intelligence Reports|Data-informed editorial covering macro trends, sector analysis, and emerging markets.','Editorial Strategy|Content architecture and publishing strategy for financial media and research platforms.','Technical Finance Writing|Translating complex quantitative and market concepts into authoritative editorial content.'].map(t=>{const [a,b]=t.split('|');return <div key={a}><b>{a}</b><p>{b}</p></div>;})}</div><a className="btn" href="mailto:xaitopia@gmail.com">WORK WITH ME →</a></section></div>);}
  const [L,...r]=p.poems;const f=p.fiction[0];
  return(<div className="wrap" data-mode="page" onMouseMove={move}>{head}{ov}
    <section className="cols pg"><div className="meta">{L&&<>Poetry<br/>{L.date.slice(0,4)}<div className="tags">{L.tags.join(' · ')}</div></>}</div>
    {L&&<div className="poem"><h1 style={{transform:`translate(${(m[0]-640)/70}px,${(m[1]-380)/90}px)`}}>{L.title}</h1>
      {L.excerpt.map((l,i)=><div key={i} style={{opacity:Math.max(.15,1-i*.17)}}>{l}</div>)}<Link className="btn" href={`/poetry/${L.slug}`}>READ THE POEM →</Link></div>}
    <aside><small>MORE POEMS</small>{r.slice(0,3).map(x=><Link className="row" key={x.slug} href={`/poetry/${x.slug}`}>{x.title}</Link>)}
      {f&&<><small className="gap">FICTION</small><Link className="row it" href={`/fiction/${f.slug}`}>{f.title}</Link></>}</aside></section></div>);
}
