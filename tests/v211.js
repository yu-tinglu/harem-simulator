const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const errs=[];const c=await b.newContext({viewport:{width:390,height:844},deviceScaleFactor:2});const p=await c.newPage();p.on('pageerror',e=>errs.push(e.message));p.on('console',x=>{if(/r9\d/.test(x.text()))errs.push(x.text())});
await p.goto(''+(process.env.HG_URL||('file://'+require('path').resolve(__dirname,'../index.html')))+'');await p.waitForSelector('text=開始新遊戲');await p.click('text=開始新遊戲');await p.waitForTimeout(300);await p.click('text=隨機入宮');await p.waitForTimeout(1500);
await p.evaluate(()=>{window._rl=localStorage.getItem('hg_rlx')});
// play ~60 months automatically choosing option 0 for events
for(let k=0;k<400;k++){const r=await p.evaluate(()=>{try{if(S.over)return 'over';if(S.ev){V(0);return 'v'}if(S.ch){C(0);return 'c'}if(S.scn){return 'scn'}if(S.q&&S.q.length&&!S.ev){next();return 'n'}if(S.w>0){const a=ACT.findIndex(x=>/休息|養|請安/.test(x[0]));A(a>=0?a:0);return 'a'}return 'x'}catch(e){return 'err '+e.message}});if(r=='over'||r.startsWith('err'))break;if(k%40==0)await p.waitForTimeout(30)}
console.log(await p.evaluate(()=>JSON.stringify({n:(S.dec94||[]).length,top:top94().slice(0,3)})));
await p.evaluate(()=>{if(!S.over){S.over={t:'壽終正寢'};render()}});await p.waitForTimeout(800);
console.log(await p.evaluate(()=>!!document.querySelector('.dec94')));
await p.evaluate(()=>{const d=document.querySelector('.dec94');if(d){d.open=true;d.scrollIntoView()}});await p.screenshot({path:'v211a.png'});console.log(errs.slice(0,5));await b.close()})()
