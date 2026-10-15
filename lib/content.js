import fs from 'fs';import path from 'path';import matter from 'gray-matter';import {remark} from 'remark';import html from 'remark-html';
const dir=p=>path.join(process.cwd(),'content',p);
export function list(section){
  return fs.readdirSync(dir(section)).filter(f=>f.endsWith('.md')).map(f=>{
    const {data,content}=matter(fs.readFileSync(path.join(dir(section),f),'utf8'));
    const date=data.date instanceof Date?data.date.toISOString().slice(0,10):String(data.date||'');
    const excerpt=content.split('\n').map(l=>l.trim()).filter(l=>l&&!l.startsWith('#')&&!l.startsWith('*')&&l!=='---').slice(0,6);
    return {slug:f.replace(/\.md$/,''),title:String(data.title||f),description:String(data.description||''),tags:data.tags||[],date,excerpt};
  }).sort((a,b)=>b.date.localeCompare(a.date));
}
export async function get(section,slug){
  const {data,content}=matter(fs.readFileSync(path.join(dir(section),slug+'.md'),'utf8'));
  const out=await remark().use(html).process(content);
  return {title:String(data.title||slug),body:String(out)};
}
