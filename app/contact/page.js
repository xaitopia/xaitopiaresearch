import Link from 'next/link';import Shell from '../../components/Shell';import ContactForm from '../../components/ContactForm';
export const metadata={title:'Contact — Xaitopia',description:'Enquiries for white papers, market intelligence reports, editorial strategy and technical finance writing.'};
export default function Page(){return(<Shell mode="market"><main className="read" data-mode="market"><Link href="/">← Xaitopia</Link><small style={{marginTop:32}}>CONTACT</small><h1 style={{marginTop:0}}>Let us work together</h1>
  <p className="desc">Tell me what you need. Available for white papers, market intelligence reports, editorial strategy and technical finance writing. Response within 24 hours.</p><ContactForm/></main></Shell>);}
