const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const errs=[];const c=await b.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});const p=await c.newPage();p.on('pageerror',e=>errs.push(e.message));p.on('console',x=>{if(/r8[2-9]/.test(x.text()))errs.push(x.text())});
await p.goto(''+(process.env.HG_URL||('file://'+require('path').resolve(__dirname,'../index.html')))+'');await p.waitForSelector('text=開始新遊戲');await p.tap('text=開始新遊戲');await p.waitForTimeout(400);await p.tap('text=隨機入宮');await p.waitForTimeout(1500);
const r=await p.evaluate(()=>{const bad=[];const seen=new Set();S.me.rank=4;S.me.scand=40;S.me.silver=300;S.npcs.forEach(n=>{n.host=70;n.rank=Math.max(n.rank,3)});
 const oR=Math.random;
 for(let rep=0;rep<60;rep++){S.ev=null;S.q=[];S.ch=null;S.scn=null;S.t=9+12*(1+(rep%5));S.me.rank=4;Math.random=()=>0.001+(rep%7)/7;try{storm89()}finally{Math.random=oR}
  const e=S.ev||S.q[0];if(!e){continue}seen.add(e.t.slice(0,8));e.o.forEach(o=>{try{S.me.silver=300;const x=o[1]();if(typeof x!=='string'||/undefined|NaN/.test(x))bad.push(e.t.slice(0,8)+':'+String(x).slice(0,20))}catch(z){bad.push('ERR '+z.message)}})}
 return {seen:[...seen],bad:[...new Set(bad)]}});console.log(JSON.stringify(r));
// promo gating message
console.log(await p.evaluate(()=>{S.me.rank=2;S.me.favor=99;S.t=6;S.me.rk86=null;const a=promoOK86(S.me);S.t=18;const b=promoOK86(S.me);S.t=60;let c=0;for(let i=0;i<20;i++)c+=promoOK86(S.me)?1:0;return [a,b,c]}));
console.log(errs);await b.close()})()
