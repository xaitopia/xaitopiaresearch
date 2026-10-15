import Link from 'next/link';import {list,get} from '../../../lib/content';
const S=['poetry','fiction','writing'];
export const dynamicParams=false;
export function generateStaticParams(){return S.flatMap(section=>list(section).map(i=>({section,slug:i.slug})));}
export default async function Entry({params}){const {section,slug}=params;const p=await get(section,slug);
  return(<main className="read" data-mode={section==='writing'?'market':'page'}><Link href={`/${section}`}>← {section}</Link><h1>{p.title}</h1><div className={'body '+section} dangerouslySetInnerHTML={{__html:p.body}}/></main>);}
