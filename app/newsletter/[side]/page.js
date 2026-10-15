import Link from 'next/link';
const N={
 financial:{mode:'market',tag:'FINANCIAL NEWSLETTER',title:'Coming soon',body:'The newsletter for the financial side of Xaitopia is in the works. There is nothing to subscribe to just yet.'},
 creative:{mode:'page',tag:'CREATIVE NEWSLETTER',title:'Mindcrafted Universe',body:"The newsletter for Xai's creative work, on Substack.",cta:'https://mindcrafteduniverse.substack.com/subscribe',label:'SUBSCRIBE ON SUBSTACK →'}};
export const dynamicParams=false;
export function generateStaticParams(){return Object.keys(N).map(side=>({side}));}
export function generateMetadata({params}){return {title:N[params.side].title+' — Xaitopia'};}
export default function Side({params}){const n=N[params.side];
  return(<main className="read" data-mode={n.mode}><Link href="/">← Xaitopia</Link><small style={{marginTop:32}}>{n.tag}</small><h1 style={{marginTop:0}}>{n.title}</h1>
  <p style={{font:'18px/1.8 Playfair Display,serif',color:'var(--mu)',maxWidth:560}}>{n.body}</p>
  {n.cta&&<a className="btn" href={n.cta}>{n.label}</a>}
  <p style={{marginTop:40}}><Link href="/newsletter" style={{font:'12px IBM Plex Mono,monospace',color:'var(--ac)'}}>All newsletters →</Link></p></main>);}
