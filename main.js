const CA="0xCommingSoon", BUY_LINK="#", X_LINK="https://x.com/";
document.getElementById('ca').textContent=CA;
['buyTop','buyHero'].forEach(i=>document.getElementById(i).href=BUY_LINK);
document.getElementById('xLink').href=X_LINK;
document.getElementById('copy').onclick=async e=>{try{await navigator.clipboard.writeText(CA)}catch(_){}e.target.textContent='COPIED';setTimeout(()=>e.target.textContent='COPY',1500)};
const t0=Date.now();setInterval(()=>{let s=Math.floor((Date.now()-t0)/1000),p=n=>String(n).padStart(2,'0');document.getElementById('clock').textContent=p(Math.floor(s/3600))+':'+p(Math.floor(s/60)%60)+':'+p(s%60)},1000);
