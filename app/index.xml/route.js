import {SITE} from '../../lib/site';import {SECTIONS,list} from '../../lib/content';
const esc=s=>String(s).replace(/[<>&'"]/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;',"'":'&apos;','"':'&quot;'}[c]));
export const dynamic='force-static';
export function GET(){
  const items=SECTIONS.flatMap(s=>list(s)).sort((a,b)=>b.date.localeCompare(a.date)).slice(0,60).map(i=>`<item><title>${esc(i.title)}</title><link>${SITE}/${i.section}/${i.slug}</link><guid>${SITE}/${i.section}/${i.slug}</guid>${i.date?`<pubDate>${new Date(i.date).toUTCString()}</pubDate>`:''}<description>${esc(i.description)}</description></item>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Xaitopia Research</title><link>${SITE}</link><description>Financial research, poetry and fiction by Xaitopia Research.</description>${items}</channel></rss>`,{headers:{'Content-Type':'application/xml; charset=utf-8'}});}
