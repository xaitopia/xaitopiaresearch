'use client';
import {useState} from 'react';
export default function CommentBox({title}){const [st,setSt]=useState('idle');
  const submit=async e=>{e.preventDefault();setSt('sending');const f=new FormData(e.target);f.set('page',title);f.set('url',window.location.href);
    try{const r=await fetch('/__forms.html',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams(f).toString()});if(!r.ok)throw new Error('failed');setSt('done');}catch(err){setSt('error');}};
  return(<section className="cb"><small>LEAVE A COMMENT</small><p className="cbn">Comments are private. Only the author reads them, and they are not shown on the site.</p>
  {st==='done'?<p className="cbd">Thank you. Your comment has been sent privately to the author.</p>
  :<form className="cf" name="comment" onSubmit={submit}><input type="hidden" name="form-name" value="comment"/><p hidden><label>Leave this empty <input name="bot-field"/></label></p>
    <label>Name (optional)<input name="name" autoComplete="name"/></label>
    <label>Email (optional, only if you would like a reply)<input type="email" name="email" autoComplete="email"/></label>
    <label>Your comment<textarea name="message" rows="4" required/></label>
    <button className="btn" type="submit" disabled={st==='sending'}>{st==='sending'?'SENDING...':'SEND COMMENT →'}</button>
    {st==='error'&&<p className="nlmsg">Something went wrong. Please try again, or use the contact page.</p>}</form>}</section>);}
