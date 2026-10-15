import Link from 'next/link';import {list} from '../../lib/content';
const S=['poetry','fiction','writing'];
export const dynamicParams=false;
export function generateStaticParams(){return S.map(section=>({section}));}
export default function Index({params}){const s=params.section;
  return(<main className="read" data-mode={s==='writing'?'market':'page'}><Link href="/">← Xaitopia</Link><h1>{s}</h1>
  {list(s).map(i=><Link key={i.slug} className="row" href={`/${s}/${i.slug}`}><b>{i.title}</b><span>{i.description}</span></Link>)}</main>);}
