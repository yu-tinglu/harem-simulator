const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const errs=[];const c=await b.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});const p=await c.newPage();p.on('pageerror',e=>errs.push(e.message));p.on('console',x=>{if(/r8[2345]/.test(x.text()))errs.push(x.text())});
await p.goto(''+(process.env.HG_URL||('file://'+require('path').resolve(__dirname,'../index.html')))+'');await p.waitForSelector('text=開始新遊戲');await p.tap('text=開始新遊戲');await p.waitForTimeout(400);await p.tap('text=隨機入宮');await p.waitForTimeout(1500);
await p.evaluate(()=>{S.ch=null;S.ev=null;S.scn=null;S.q=[];TAB=0;render();document.querySelectorAll('.ob31').forEach(e=>e.remove())});await p.waitForTimeout(600);
const r=await p.evaluate(()=>{const bad=[];let n=0,opts=0;const snapS=JSON.stringify(S.me);
 PLC.forEach(pl=>pl[2].forEach((fn,fi)=>{for(let rep=0;rep<6;rep++){try{S.me.silver=500;S.me.preg=rep%2?5:0;S.dow=S.dow||null;const e=fn();if(!e){bad.push(pl[0]+fi+' null');continue}n++;
  e.o.forEach((o,oi)=>{for(let k=0;k<3;k++){try{S.q=[];const out=o[1]();opts++;if(out!==undefined&&typeof out!=='string')bad.push(pl[0]+fi+'.'+oi+' ret '+typeof out);if(typeof out==='string'&&/undefined|NaN|\[object/.test(out))bad.push(pl[0]+fi+'.'+oi+' txt '+out.slice(0,20));
   // chain follow-ups
   (S.q||[]).slice().forEach(f=>f.o.forEach(g=>{try{const o2=g[1]();if(typeof o2==='string'&&/undefined|NaN/.test(o2))bad.push('chain txt')}catch(x){bad.push(pl[0]+fi+' chain '+x.message)}}))}catch(x){bad.push(pl[0]+fi+'.'+oi+' ERR '+x.message)}}})}catch(x){bad.push(pl[0]+fi+' ERR '+x.message)}}}));
 return {places:PLC.length,events:PLC.reduce((a,p)=>a+p[2].length,0),n,opts,bad:[...new Set(bad)].slice(0,20)}});
console.log(JSON.stringify(r));
// UI: wander choose lists new places
await p.evaluate(()=>{S.ev=null;S.q=[];S.ch=null;S.me.preg=0;S.me.hp=90;S.me.silver=300;S.me.favor=50;wanderAct()});await p.waitForTimeout(300);
console.log('places',await p.evaluate(()=>S.ch.o.map(o=>o.l.split('（')[0]).join('、')));
// choose 慈寧宮
const ix=await p.evaluate(()=>S.ch.o.findIndex(o=>/慈寧宮/.test(o.l)));await p.evaluate(i=>{C(i)},ix);await p.waitForTimeout(500);
console.log('ev',await p.evaluate(()=>S.ev&&S.ev.t.slice(0,30)));
// ambient
const amb=await p.evaluate(()=>{let got=0;for(let i=0;i<300&&!got;i++){S.ev=null;S.q=[];S.ch=null;S.lw85=-99;S.preg=0;mend();if(S.ev&&/偶遇/.test(S.ev.t))got=S.ev.t.slice(0,20)}return got});console.log('amb',amb);
console.log(errs);await b.close()})()
