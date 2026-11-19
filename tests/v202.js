const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const errs=[];const c=await b.newContext({viewport:{width:390,height:844},deviceScaleFactor:2,isMobile:true,hasTouch:true});const p=await c.newPage();p.on('pageerror',e=>errs.push(e.message));p.on('console',x=>{if(/r8[2-7]/.test(x.text()))errs.push(x.text())});
await p.goto(''+(process.env.HG_URL||('file://'+require('path').resolve(__dirname,'../index.html')))+'');await p.waitForSelector('text=開始新遊戲');await p.tap('text=開始新遊戲');await p.waitForTimeout(400);await p.tap('text=隨機入宮');await p.waitForTimeout(1500);
await p.evaluate(()=>{S.ch=null;S.ev=null;S.scn=null;S.q=[];TAB=0;S.t=30;render();document.querySelectorAll('.ob31').forEach(e=>e.remove())});await p.waitForTimeout(600);
// ledger via V
console.log('ledger',await p.evaluate(()=>{S.ev=null;S.q=[];const L=S.npcs,n=L[Math.min(2,L.length-1)],n2=L[L.length-1];S.ev={t:'測試',o:[['x',()=>{n.al+=15;n2.host+=12;return'ok'}]]};V(0);return JSON.stringify(led86())}));
// payback each variant
const pb=await p.evaluate(()=>{const outs=[];for(let rep=0;rep<40;rep++){S.ev=null;S.q=[];S.ch=null;S.scn=null;S.lp86=-99;S.me.preg=rep%3==0?5:0;S.me.silver=200;const L=led86();L.length=0;L.push({n:S.npcs[2].n,t:S.t-10,k:rep%2?'恩':'怨'});const oR=Math.random;Math.random=()=>0.01;try{payback86()}finally{Math.random=oR}
 const e=S.ev||S.q[0];if(e){e.o.forEach(o=>{try{const r=o[1]();if(typeof r!=='string'||/undefined|NaN/.test(r))outs.push('bad:'+e.t.slice(0,10))}catch(x){outs.push('ERR '+x.message)}})}else outs.push('none'+rep)}return [...new Set(outs)]});console.log('payback',pb);
// conf86 all options, sure/unsure
const cf=await p.evaluate(()=>{const outs=[];const g=pg84();for(const sure of [true,false])for(let oi=0;oi<4;oi++)for(let k=0;k<6;k++){g.cul=1;g.done=0;g.known=1;g.sure=sure?1:0;S.me.silver=200;const e=conf86(sure?1:2,sure);try{const r=e.o[oi][1]();if(typeof r!=='string'||/undefined|NaN/.test(r))outs.push('bad '+oi)}catch(x){outs.push('ERR '+oi+x.message)}}return [...new Set(outs)]});console.log('conf',cf);
// miscarriage follow-up
const mc=await p.evaluate(()=>{S.q=[];S.ev=null;S.me.preg=5;miscarry(S.me,'測試');const e=S.q[0];const o=[];e.o.forEach(x=>o.push(String(x[1]()).slice(0,14)));return o});console.log('mc',mc);
// kid memory
const km=await p.evaluate(()=>{S.q=[];S.ev=null;S.t=29;if(!S.me.kids.length){birth(S.me.kids,'me')}const k=S.me.kids[0];k.b=S.t-12*10;k.bond=90;k.m86=0;kidMem86();const e=S.q[0]||S.ev;return e?e.t.slice(0,20):'none'});console.log('kid',km);
await p.evaluate(()=>{S.ev=conf86(1,true);S.ev.t=S.ev.t;render()});await p.waitForTimeout(500);await p.screenshot({path:'v202a.png'});
console.log(errs);await b.close()})()
