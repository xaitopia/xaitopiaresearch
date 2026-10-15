import Link from 'next/link';import {TOOLS} from '../../../lib/tools';
export const dynamicParams=false;
export function generateStaticParams(){return Object.keys(TOOLS).map(platform=>({platform}));}
export function generateMetadata({params}){return {title:TOOLS[params.platform].title+' — Xaitopia'};}
export default function Quant({params}){const t=TOOLS[params.platform];
  return(<main className="read tools" data-mode="market"><Link href="/">← Xaitopia</Link><small style={{marginTop:32}}>{t.tag}</small><h1 style={{marginTop:0}}>{t.title}</h1>
  <p style={{font:'18px/1.8 Playfair Display,serif',color:'var(--mu)',maxWidth:600}}>{t.intro}</p>
  {t.items.map(i=>(<div className="card" key={i.name}><b>{i.name}</b><p>{i.desc}</p>{i.link?<a className="btn" style={{marginTop:0}} href={i.link}>VIEW →</a>:<span className="soon">LINK COMING SOON</span>}</div>))}
  <p className="note">Educational tools, not financial advice. Trading involves risk.</p></main>);}
