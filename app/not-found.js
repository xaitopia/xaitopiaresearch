import Link from 'next/link';import Shell from '../components/Shell';
export const metadata={title:'Page not found — Xaitopia'};
export default function NotFound(){return(<Shell mode="market"><main className="read cs"><div className="spine" style={{margin:'48px auto 32px',width:48,background:'linear-gradient(90deg,#c9a84c,#a07830)'}}/><small>404</small><h1>This page does not exist</h1>
  <p className="desc">The link may be broken, or the page may have moved.</p><p><Link className="btn" href="/">BACK TO HOMEPAGE →</Link></p><p><Link href="/search" className="csb">Search the site</Link></p></main></Shell>);}
