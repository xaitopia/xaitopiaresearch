import Link from 'next/link';
export default function Footer({mode}){const mem=mode==='page';
  return(<footer className="foot"><div className="fl"><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/search">Search</Link><Link href="/newsletter">Newsletters</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><a href="/index.xml">RSS</a></div>
  <p>© {new Date().getFullYear()} {mem?'Xaitopia':'Xaitopia Research'}. All rights reserved.</p>
  {mem?<p className="disc">Poems and stories on this site are protected by copyright. Please share links freely, and do not republish a piece in full without permission.</p>
  :<p className="disc">Everything on this site, including articles, indicators, expert advisors and price data, is provided for educational and informational purposes only and is not financial, investment or trading advice. Trading involves substantial risk of loss. Prices in the ticker are supplied by TradingView and may be delayed.</p>}</footer>);}
