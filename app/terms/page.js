import Link from 'next/link';import Shell from '../../components/Shell';
export const metadata={title:'Terms and Disclaimer — Xaitopia',description:'Important information about using this site, its research and its trading tools.'};
export default function Terms(){return(<Shell mode="market"><main className="read" data-mode="market"><Link href="/">← Xaitopia</Link><small style={{marginTop:32}}>LEGAL</small><h1 style={{marginTop:0}}>Terms and Disclaimer</h1>
<p className="desc">Last updated: October 2026</p>
<div className="body writing">
<h2>Not financial advice</h2><p>Everything on this site, including articles, research, indicators, expert advisors, examples and price data, is provided for educational and informational purposes only. It is not financial, investment, legal or tax advice, and it is not a recommendation to buy or sell anything. Please speak to a qualified professional before you make financial decisions.</p>
<h2>Trading involves risk</h2><p>Trading and investing carry a substantial risk of loss, and you can lose more than you expect. Past performance does not guarantee future results. The indicators and expert advisors shown here are educational tools. They are not guaranteed to be profitable, and you should test any tool on a demo account first. You are responsible for your own decisions and for any gains or losses.</p>
<h2>Market data</h2><p>Prices in the ticker are supplied by TradingView. They may be delayed, incomplete or inaccurate, and they are not suitable for making trading decisions.</p>
<h2>No client relationship</h2><p>Reading this site or sending a message does not create a professional or client relationship. Any paid work is agreed separately and in writing.</p>
<h2>Ownership of the content</h2><p>The articles, poems, fiction, designs and code on this site belong to Emmanuel Chukwu and Xaitopia Research unless stated otherwise. You are welcome to share links and to quote short passages with credit. Please do not republish pieces in full without my permission.</p>
<h2>Third-party links</h2><p>This site links to other websites, including TradingView, MetaTrader and Substack. I do not control them and am not responsible for their content or practices.</p>
<h2>No warranty and limits on liability</h2><p>The site and everything on it is provided as it is, without any promise that it is accurate, complete or always available. To the fullest extent the law allows, I am not liable for any loss arising from using this site or relying on its content.</p>
<h2>Changes and contact</h2><p>I may update these terms and will post the new version here with a new date. Questions can go to <a href="mailto:xaitopia@gmail.com">xaitopia@gmail.com</a>. See also the <Link href="/privacy">Privacy Policy</Link>.</p>
</div></main></Shell>);}
