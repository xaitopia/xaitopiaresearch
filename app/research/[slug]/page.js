import Shell from '../../../components/Shell';
import Link from 'next/link';
const R={'market-intelligence':{title:'Bi-Weekly Market Intelligence',desc:'Institutional-grade market analysis delivered every two weeks — macro context, structural shifts, and actionable intelligence.'},
 'macro-analysis':{title:'Macro & Data Analysis',desc:'Deep-dive quantitative research on capital rotation, emerging market dynamics, and systematic market structure.'}};
export const dynamicParams=false;
export function generateStaticParams(){return Object.keys(R).map(slug=>({slug}));}
export function generateMetadata({params}){return {title:`${R[params.slug].title} — Xaitopia`,description:R[params.slug].desc};}
export default function Soon({params}){const r=R[params.slug];
  return(<Shell mode="market"><main className="read cs" data-mode="market"><div className="spine" style={{margin:'48px auto 32px',width:48,background:'linear-gradient(90deg,#c9a84c,#a07830)'}}/><small>COMING SOON</small><h1>{r.title}</h1><p className="desc">{r.desc}</p><div className="csd"/>
  <p className="csn">This is being prepared. Get notified when it goes live.</p><a className="btn" href={`mailto:xaitopia@gmail.com?subject=${encodeURIComponent('Notify me: '+r.title)}`}>EMAIL ME TO BE NOTIFIED →</a>
  <p><Link href="/" className="csb">← Return to homepage</Link></p></main></Shell>);}
