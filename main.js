const CA="0xCommingSoon", BUY_LINK="#", X_LINK="https://x.com/";
document.getElementById('ca').textContent=CA;
['buyTop','buyHero'].forEach(i=>document.getElementById(i).href=BUY_LINK);
document.getElementById('xLink').href=X_LINK;
document.getElementById('copy').onclick=async e=>{try{await navigator.clipboard.writeText(CA)}catch(_){}e.target.textContent='COPIED';setTimeout(()=>e.target.textContent='COPY',1500)};
const t0=Date.now();setInterval(()=>{let s=Math.floor((Date.now()-t0)/1000),p=n=>String(n).padStart(2,'0');document.getElementById('clock').textContent=p(Math.floor(s/3600))+':'+p(Math.floor(s/60)%60)+':'+p(s%60)},1000);
const m=document.getElementById('modal'),v=document.getElementById('vid');
function fallback(){v.hidden=true;const e=document.getElementById('embed');e.hidden=false;if(!window.twttr){const sc=document.createElement('script');sc.src='https://platform.twitter.com/widgets.js';sc.async=true;document.body.appendChild(sc)}else twttr.widgets.load(e)}
v.addEventListener('error',fallback,true);v.querySelector('source').addEventListener('error',fallback);
document.getElementById('play').onclick=()=>{m.classList.add('on');if(!v.hidden)v.play().catch(()=>{})};
const close=()=>{m.classList.remove('on');v.pause()};document.getElementById('mx').onclick=close;m.onclick=e=>{if(e.target===m)close()};document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
