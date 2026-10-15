import Link from 'next/link';import Nav from './Nav';
export default function Shell({mode,children}){return(<div className="wrap" data-mode={mode}><header>
  <Link href="/" className="brand"><img src="/logo.png" alt="Xaitopia Research" className="bm"/><span><b>Xaitopia Research</b><i>Emmanuel Chukwu</i></span></Link><Nav mode={mode}/></header>{children}</div>);}
