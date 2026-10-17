'use client';
import {useEffect} from 'react';
const SEL='.cards a,.svcg div,.hg>*,.svc>small,.hire h2,.tools .card,.fc,.row,.issue,.nl,.nlfoot,.about .card,.about>p,.body>p,.body>h2,.tagrow,.pn,.foot';
export default function Reveal(){useEffect(()=>{
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver' in window))return;
  const io=new IntersectionObserver(es=>{let k=0;es.forEach(e=>{if(!e.isIntersecting)return;const el=e.target;io.unobserve(el);el.style.transitionDelay=(Math.min(k,6)*70)+'ms';k++;el.classList.add('in');setTimeout(()=>{el.style.transitionDelay='';},1100);});},{rootMargin:'0px 0px -6% 0px',threshold:.08});
  const scan=()=>{document.querySelectorAll(SEL).forEach(el=>{if(el.dataset.rv)return;el.dataset.rv='1';const r=el.getBoundingClientRect();if(r.top<window.innerHeight*0.95&&r.bottom>0)return;el.classList.add('rv');io.observe(el);});};
  let t=null;scan();const mo=new MutationObserver(()=>{clearTimeout(t);t=setTimeout(scan,120);});mo.observe(document.body,{childList:true,subtree:true});
  return()=>{io.disconnect();mo.disconnect();};},[]);return null;}
