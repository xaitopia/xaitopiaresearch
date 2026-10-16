export function score(items,q){const t=q.trim().toLowerCase();if(t.length<2)return [];const w=t.split(/\s+/);
  return items.map(i=>{let sc=0;for(const k of w){if(i.t.toLowerCase().includes(k))sc+=3;if(i.g.toLowerCase().includes(k))sc+=2;if(i.d.toLowerCase().includes(k))sc+=1;if(i.x.toLowerCase().includes(k))sc+=1;}return {...i,sc};}).filter(i=>i.sc>0).sort((a,b)=>b.sc-a.sc);}
