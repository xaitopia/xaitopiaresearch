import Shell from '../../../components/Shell';
import Link from 'next/link';import {allTags} from '../../../lib/content';
export const dynamicParams=false;
export function generateStaticParams(){return Object.keys(allTags()).map(tag=>({tag}));}
export function generateMetadata({params}){return {title:`${allTags()[params.tag].name} — Xaitopia`};}
export default function Tag({params}){const t=allTags()[params.tag];
  return(<Shell mode="page"><main className="read" data-mode="page"><Link href="/">← Xaitopia</Link><small style={{marginTop:32}}>TAG</small><h1 style={{marginTop:0}}>{t.name}</h1>
  {t.items.map(i=><Link key={i.section+i.slug} className="row" href={`/${i.section}/${i.slug}`}><b>{i.title}</b><span>{i.section} · {i.description}</span></Link>)}</main></Shell>);}
