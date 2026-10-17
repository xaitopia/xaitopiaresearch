import Link from 'next/link';import Shell from '../../components/Shell';
export const metadata={title:'Privacy Policy — Xaitopia',description:'What this site collects, why, and who else handles it.'};
export default function Privacy(){return(<Shell mode="market"><main className="read" data-mode="market"><Link href="/">← Xaitopia</Link><small style={{marginTop:32}}>LEGAL</small><h1 style={{marginTop:0}}>Privacy Policy</h1>
<p className="desc">Last updated: October 2026</p>
<div className="body writing">
<h2>Who I am</h2><p>This site is run by Emmanuel Chukwu, trading as Xaitopia Research. You can reach me at <a href="mailto:xaitopia@gmail.com">xaitopia@gmail.com</a> about anything in this policy.</p>
<h2>What I collect</h2>
<p><b>Contact form.</b> If you send a message, I receive your name, email address, the topic you pick and your message. I use them only to reply to you and to keep a record of the enquiry.</p>
<p><b>Technical data.</b> Like any website, the host records basic technical data when you visit, such as your IP address, browser type and the pages requested. I do not use this to identify you.</p>
<p><b>On your device.</b> The site stores two small items in your browser: whether you chose Market or Memories mode, and which pieces were last featured, so that the featured pieces change on each visit. They stay on your device. I do not set tracking cookies, and I do not currently run analytics or advertising trackers.</p>
<h2>Who else handles data</h2>
<p><b>Netlify</b> hosts this site and receives contact form submissions. <b>TradingView</b> supplies the live price strip, which loads a script from its servers and may collect data or set cookies under its own policy. <b>Google Fonts</b> supplies the typefaces, so Google receives your IP address when the fonts load. <b>Substack</b> runs the Mindcrafted Universe newsletter. If you subscribe, you do so on Substack under its policy. Each of these has its own privacy policy, and I do not control it.</p>
<h2>How long I keep it</h2><p>I keep enquiries for as long as I need to respond and to keep a record of our conversation. You can ask me to delete yours at any time.</p>
<h2>Your choices</h2><p>You can ask me what I hold about you, ask me to correct it, or ask me to delete it, by emailing the address above. You can also clear your browser's site data to remove the two items stored on your device.</p>
<h2>Children</h2><p>This site is not aimed at children, and I do not knowingly collect their personal data.</p>
<h2>Changes</h2><p>If I change this policy, I will post the new version here and update the date above.</p>
</div></main></Shell>);}
