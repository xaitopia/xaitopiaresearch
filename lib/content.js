import fs from 'fs';import path from 'path';import matter from 'gray-matter';import {remark} from 'remark';import html from 'remark-html';
const dir=p=>path.join(process.cwd(),'content',p);
export const SECTIONS=['poetry','fiction','writing'];
export const slugTag=t=>String(t).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const fd=d=>d instanceof Date?d.toISOString().slice(0,10):String(d||'');
export function list(section){
  return fs.readdirSync(dir(section)).filter(f=>f.endsWith('.md')).map(f=>{
    const {data,content}=matter(fs.readFileSync(path.join(dir(section),f),'utf8'));
    const excerpt=content.split('\n').map(l=>l.trim()).filter(l=>l&&!l.startsWith('#')&&!l.startsWith('*')&&l!=='---').slice(0,6);
    return {section,slug:f.replace(/\.md$/,''),title:String(data.title||f),description:String(data.description||''),tags:data.tags||[],date:fd(data.date),setting:String(data.setting||''),theme:String(data.theme||''),shelf:String(data.shelf||''),excerpt};
  }).sort((a,b)=>b.date.localeCompare(a.date));
}
export async function get(section,slug){
  const {data,content}=matter(fs.readFileSync(path.join(dir(section),slug+'.md'),'utf8'));
  const out=await remark().use(html).process(content);
  return {title:String(data.title||slug),description:String(data.description||''),tags:data.tags||[],date:fd(data.date),setting:String(data.setting||''),theme:String(data.theme||''),author:String(data.author||''),shelf:String(data.shelf||''),words:content.split(/\s+/).filter(Boolean).length,body:String(out)};
}
export function allTags(){const m={};SECTIONS.forEach(s=>list(s).forEach(i=>i.tags.forEach(t=>{const k=slugTag(t);(m[k]=m[k]||{name:t,items:[]}).items.push(i);})));return m;}
