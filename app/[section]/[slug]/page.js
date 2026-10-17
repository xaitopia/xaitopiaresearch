import Shell from '../../../components/Shell';
import Link from 'next/link';import {SECTIONS,list,get,slugTag} from '../../../lib/content';
const G={writing:['#4a8cc9,#2d5fa0','#4a9c7c,#2d7a5a','#9c7c4a,#7a5a2d'],poetry:['#9b6abf,#7a3da0','#bf6a8c,#a03d5a','#6a7cbf,#3d4fa0','#bf9b6a,#a07a3d','#6abfb0,#3da090'],fiction:['#c9a84c,#a07830','#4a7c6f,#2d5a50','#7c4a6f,#5a2d50']};
const LBL={writing:'Essay',poetry:'Poem',fiction:'Fiction'};
export const dynamicParams=false;
export function generateStaticParams(){return SECTIONS.flatMap(section=>list(section).map(i=>({section,slug:i.slug})));}
export async function generateMetadata({params}){const p=await get(params.section,params.slug);
  return {title:`${p.title} — Xaitopia`,description:p.description,openGraph:{title:p.title,description:p.description,type:'article',images:[params.section==='writing'?'/opengraph-image':'/og-memories']}};}
export default async function Entry({params}){const {section,slug}=params;const p=await get(section,slug);
  const L=list(section);const i=L.findIndex(x=>x.slug===slug);const older=L[i+1],newer=L[i-1];
  const g=G[section][p.words%G[section].length];const w=section==='writing';
  const date=p.date?new Date(p.date+'T00:00:00Z').toLocaleDateString('en-US',w?{year:'numeric',month:'long',day:'numeric',timeZone:'UTC'}:{year:'numeric',timeZone:'UTC'}):'';
  return(<Shell mode={w?'market':'page'}><main className="read" data-mode={w?'market':'page'}><Link href={`/${section}`}>← {section==='writing'?'Writing':section}</Link>
  <div className="spine" style={{background:`linear-gradient(90deg,${g})`}}/><small>{p.tags[0]||LBL[section]}</small><h1 style={{marginTop:0}}>{p.title}</h1>
  {p.description&&<p className="desc">{p.description}</p>}
  <div className="meta2">{date&&<span>{date}</span>}{w&&<span>{Math.max(1,Math.round(p.words/200))} min read</span>}{p.author&&<span>{p.author}</span>}{p.setting&&<span>{p.setting}</span>}{p.theme&&<span>{p.theme}</span>}</div>
  <div className={'body '+section} dangerouslySetInnerHTML={{__html:p.body}}/>
  {p.tags.length>0&&<div className="tagrow">{p.tags.map(t=><Link key={t} href={`/tags/${slugTag(t)}`}>{t}</Link>)}</div>}
  <nav className="pn">{older?<Link href={`/${section}/${older.slug}`}>← {older.title}</Link>:<span/>}{newer?<Link href={`/${section}/${newer.slug}`}>{newer.title} →</Link>:<span/>}</nav></main></Shell>);}
