import Shell from '../../components/Shell';
import Link from 'next/link';
export const metadata={title:'Newsletters — Xaitopia'};
export default function Newsletters(){return(<Shell mode="market"><main className="read" data-mode="market"><Link href="/">← Xaitopia</Link><h1>Newsletters</h1>
<Link href="/newsletter/financial" className="nl" data-mode="market" style={{background:'var(--bg)',color:'var(--fg)'}}><small>FINANCIAL</small><h2>Coming soon</h2><p>The financial newsletter is in the works.</p></Link>
<Link href="/newsletter/creative" className="nl" data-mode="page" style={{background:'var(--bg)',color:'var(--fg)'}}><small>CREATIVE</small><h2>Mindcrafted Universe</h2><p>The newsletter for Xai&apos;s creative work, on Substack.</p></Link></main></Shell>);}
