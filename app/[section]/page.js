import Link from 'next/link';import {list} from '../../lib/content';
const S=['poetry','fiction','writing'];
const D={poetry:['Poetry','Poems by Emmanuel Chukwu — rooted in Nigerian landscape, memory, and the small ceremonies of daily life.'],fiction:['Fiction','Nigerian literary and young adult novels.'],writing:['Writing','Financial writing and research by Xaitopia Research.']};
const FG=['#c9a84c,#a07830','#4a7c6f,#2d5a50','#7c4a6f,#5a2d50'];
export const dynamicParams=false;
export function generateStaticParams(){return S.map(section=>({section}));}
export function generateMetadata({params}){return {title:`${D[params.section][0]} — Xaitopia`,description:D[params.section][1]};}
export default function Index({params}){const s=params.section;const items=list(s);
  return(<main className="read" data-mode={s==='writing'?'market':'page'} style={s==='fiction'?{maxWidth:1000}:undefined}><Link href="/">← Xaitopia</Link><h1>{D[s][0]}</h1><p className="desc">{D[s][1]}</p>
  {s==='writing'&&<p className="alsolinks"><Link href="/research/market-intelligence">Market Intelligence</Link><Link href="/research/macro-analysis">Macro &amp; Data Analysis</Link></p>}
  {s==='fiction'?<div className="fgrid">{items.map((i,n)=>(<Link key={i.slug} href={`/fiction/${i.slug}`} className="fc"><div className="fs" style={{background:`linear-gradient(90deg,${FG[n%3]})`}}/><div className="fb"><small>{i.setting||'Fiction'}</small><b>{i.title}</b><p>{i.description}</p>{i.theme&&<div className="fm">{i.theme}</div>}</div></Link>))}</div>
  :items.map(i=><Link key={i.slug} className="row" href={`/${s}/${i.slug}`}><b>{i.title}</b><span>{i.description}</span></Link>)}</main>);}
