const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const errs=[];const c=await b.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});const p=await c.newPage();p.on('pageerror',e=>errs.push(e.message));p.on('console',x=>{if(/r8[23]/.test(x.text()))errs.push(x.text())});
await p.goto(''+(process.env.HG_URL||('file://'+require('path').resolve(__dirname,'../index.html')))+'');await p.waitForSelector('text=開始新遊戲');await p.tap('text=開始新遊戲');await p.waitForTimeout(400);await p.tap('text=隨機入宮');await p.waitForTimeout(1500);
await p.evaluate(()=>{S.ch=null;S.ev=null;S.scn=null;S.q=[];TAB=0;render();document.querySelectorAll('.ob31').forEach(e=>e.remove())});await p.waitForTimeout(900);
await p.evaluate(()=>{S.me.preg=10;render()});await p.waitForTimeout(900);
console.log('mo',await p.evaluate(()=>document.getElementById('mo83')?.innerText.replace(/\s+/g,' ')));
console.log('strip',await p.evaluate(()=>document.querySelector('.rt83')?.innerText.replace(/\s+/g,' ')));
await p.evaluate(()=>{document.getElementById('mo83')?.remove()});
await p.evaluate(()=>{autoRun(3)});await p.waitForTimeout(1200);
console.log('nt',await p.evaluate(()=>JSON.stringify((S.nt||[]).slice(-3).map(x=>x.t)).slice(0,300)),'preg',await p.evaluate(()=>S.me.preg));
console.log(errs);await b.close()})()
