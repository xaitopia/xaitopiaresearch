import Link from 'next/link';import Shell from '../../components/Shell';import Search from '../../components/Search';import {SECTIONS,list} from '../../lib/content';
export const metadata={title:'Search — Xaitopia'};
export default function Page(){const items=SECTIONS.flatMap(s=>list(s)).map(i=>({s:i.section,slug:i.slug,t:i.title,d:i.description,g:i.tags.join(' '),x:i.excerpt.join(' ').slice(0,400)}));
  return(<Shell mode="market"><main className="read" data-mode="market"><Link href="/">← Xaitopia</Link><h1>Search</h1><Search items={items}/></main></Shell>);}
