import {SITE} from '../lib/site';import {SECTIONS,list} from '../lib/content';
export default function sitemap(){const now=new Date();
  const st=['','/about','/newsletter','/newsletter/financial','/newsletter/creative','/quant/tradingview','/quant/mql5','/research/market-intelligence','/research/macro-analysis',...SECTIONS.map(s=>'/'+s)].map(p=>({url:SITE+p,lastModified:now}));
  const items=SECTIONS.flatMap(s=>list(s).map(i=>({url:`${SITE}/${s}/${i.slug}`,lastModified:i.date?new Date(i.date):now})));
  return [...st,...items];}
