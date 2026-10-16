import fs from 'fs';import path from 'path';import matter from 'gray-matter';
const out=[];
for(const s of ['poetry','fiction','writing']){const d=path.join('content',s);
  for(const f of fs.readdirSync(d).filter(f=>f.endsWith('.md'))){const {data,content}=matter(fs.readFileSync(path.join(d,f),'utf8'));
    const x=content.split('\n').map(l=>l.trim()).filter(l=>l&&!l.startsWith('#')&&!l.startsWith('*')&&l!=='---').slice(0,6).join(' ').slice(0,300);
    out.push({s,slug:f.replace(/\.md$/,''),t:String(data.title||f),d:String(data.description||''),g:(data.tags||[]).join(' '),x});}}
fs.writeFileSync(path.join('public','search.json'),JSON.stringify(out));console.log('search index:',out.length,'items');
