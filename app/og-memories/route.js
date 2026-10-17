import {ImageResponse} from 'next/og';import fs from 'fs';import path from 'path';
export const dynamic='force-static';
export function GET(){const logo='data:image/png;base64,'+fs.readFileSync(path.join(process.cwd(),'public','og-logo.png')).toString('base64');
  return new ImageResponse(<div style={{width:'100%',height:'100%',display:'flex',alignItems:'center',background:'#efe7d6',padding:'0 90px',color:'#1d1a16'}}>
    <img src={logo} width="230" height="245" style={{marginRight:60,borderRadius:28}}/>
    <div style={{display:'flex',flexDirection:'column',width:660}}><div style={{display:'flex',fontSize:30,letterSpacing:8,color:'#7d5c14',marginBottom:24}}>XAITOPIA</div><div style={{display:'flex',fontSize:62,lineHeight:1.1}}>Poems for the hours in between.</div><div style={{display:'flex',fontSize:26,color:'#4a4339',marginTop:28,lineHeight:1.4}}>Poetry and fiction by Emmanuel Chukwu</div></div></div>,{width:1200,height:630});}
