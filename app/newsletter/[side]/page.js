import Link from 'next/link';import Issues from '../../../components/Issues';
const SUB='https://mindcrafteduniverse.substack.com';
export const dynamicParams=false;
export function generateStaticParams(){return [{side:'financial'},{side:'creative'}];}
export function generateMetadata({params}){return {title:(params.side==='creative'?'Mindcrafted Universe':'Financial newsletter')+' — Xaitopia'};}
export default function Side({params}){
  if(params.side==='financial')return(<main className="read" data-mode="market"><Link href="/">← Xaitopia</Link><small style={{marginTop:32}}>FINANCIAL NEWSLETTER</small><h1 style={{marginTop:0}}>Coming soon</h1>
    <p className="desc">The newsletter for the financial side of Xaitopia is in the works. There is nothing to subscribe to just yet.</p><p style={{marginTop:40}}><Link href="/newsletter" style={{font:'12px IBM Plex Mono,monospace',color:'var(--ac)'}}>All newsletters →</Link></p></main>);
  return(<main className="read" data-mode="page"><Link href="/">← Xaitopia</Link><div className="spine" style={{background:'linear-gradient(90deg,#4a8cc9,#2d5fa0)'}}/><small>NEWSLETTER</small><h1 style={{marginTop:0}}>Mindcrafted Universe</h1>
    <p className="desc">Essays on how to think, build, and live well — sent when something is worth saying. No filler, no schedule pressure.</p>
    <div className="nl" data-mode="page" style={{background:'var(--bg)',color:'var(--fg)'}}><small>SUBSCRIBE</small><h2>Join the readers</h2><p>New essays on finance, culture, and the examined life. Free, always.</p><a className="btn" href={SUB+'/subscribe'}>SUBSCRIBE ON SUBSTACK →</a></div>
    <small className="gap">RECENT ISSUES</small><Issues/>
    <a className="nlfoot" href={SUB}><span className="si">S</span><span>All issues live on Substack — read, share, and subscribe there too.<br/><em>mindcrafteduniverse.substack.com</em></span></a>
    <p style={{marginTop:32}}><Link href="/newsletter" style={{font:'12px IBM Plex Mono,monospace',color:'var(--ac)'}}>All newsletters →</Link></p></main>);}
