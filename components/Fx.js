'use client';
import {useEffect} from 'react';
export default function Fx(){useEffect(()=>{
  if(window.matchMedia('(hover: none), (prefers-reduced-motion: reduce)').matches)return;
  const sel='.cards a,.panel,.svcg div,.tools .card,.nl';
  const on=e=>{const el=e.target.closest&&e.target.closest(sel);if(!el)return;const r=el.getBoundingClientRect();const x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
    el.style.setProperty('--rx',((.5-y)*8)+'deg');el.style.setProperty('--ry',((x-.5)*8)+'deg');el.style.setProperty('--gx',(x*100)+'%');el.style.setProperty('--gy',(y*100)+'%');};
  const off=e=>{const el=e.target.closest&&e.target.closest(sel);if(el){el.style.setProperty('--rx','0deg');el.style.setProperty('--ry','0deg');}};
  document.addEventListener('mousemove',on);document.addEventListener('mouseout',off);
  return()=>{document.removeEventListener('mousemove',on);document.removeEventListener('mouseout',off);};
},[]);return null;}
