import {ImageResponse} from 'next/og';import fs from 'fs';import path from 'path';
export const alt='Xaitopia Research';export const size={width:1200,height:630};export const contentType='image/png';
export default function Image(){const logo='data:image/png;base64,'+fs.readFileSync(path.join(process.cwd(),'public','og-logo.png')).toString('base64');
  return new ImageResponse(<div style={{width:'100%',height:'100%',display:'flex',alignItems:'center',background:'#0c0c0e',padding:'0 90px',color:'#e8e4dc'}}>
    <img src={logo} width="230" height="245" style={{marginRight:60,borderRadius:28}}/>
    <div style={{display:'flex',flexDirection:'column',width:660}}><div style={{display:'flex',fontSize:30,letterSpacing:8,color:'#c9a84c',marginBottom:24}}>XAITOPIA RESEARCH</div><div style={{display:'flex',fontSize:62,lineHeight:1.1}}>Words that move markets.</div><div style={{display:'flex',fontSize:26,color:'#9a958c',marginTop:28,lineHeight:1.4}}>Financial research, quant models, poetry and fiction by Emmanuel Chukwu</div></div></div>,size);}
