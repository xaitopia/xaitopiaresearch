'use client';
import {useState} from 'react';
const TOPICS=['White paper','Market intelligence report','Editorial strategy','Technical finance writing','Something else'];
export default function ContactForm(){const [st,setSt]=useState('idle');
  const submit=async e=>{e.preventDefault();setSt('sending');const f=new FormData(e.target);
    try{const r=await fetch('/__forms.html',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams(f).toString()});if(!r.ok)throw new Error('failed');setSt('done');}catch(err){setSt('error');}};
  if(st==='done')return <p className="desc">Thank you. Your message is on its way, and you can expect a reply within 24 hours.</p>;
  return(<form className="cf" name="contact" onSubmit={submit}><input type="hidden" name="form-name" value="contact"/><p hidden><label>Do not fill this out <input name="bot-field"/></label></p>
    <label>Name<input name="name" required/></label><label>Email<input type="email" name="email" required/></label>
    <label>What do you need?<select name="topic">{TOPICS.map(t=><option key={t}>{t}</option>)}</select></label>
    <label>Message<textarea name="message" rows="6" required/></label>
    <p className="nlmsg">By sending this you agree to the <a href="/privacy" style={{color:'var(--ac)'}}>Privacy Policy</a>.</p>
    <button className="btn" type="submit" disabled={st==='sending'}>{st==='sending'?'SENDING...':'SEND MESSAGE →'}</button>
    {st==='error'&&<p className="nlmsg">Something went wrong. Please email xaitopia@gmail.com instead.</p>}</form>);}
