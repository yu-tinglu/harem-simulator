const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const errs=[];const c=await b.newContext({viewport:{width:390,height:844},deviceScaleFactor:2,isMobile:true,hasTouch:true});const p=await c.newPage();p.on('pageerror',e=>errs.push(e.message));p.on('console',x=>{if(/r8[2-6]/.test(x.text()))errs.push(x.text())});
await p.goto(''+(process.env.HG_URL||('file://'+require('path').resolve(__dirname,'../index.html')))+'');await p.waitForSelector('text=開始新遊戲');await p.tap('text=開始新遊戲');await p.waitForTimeout(400);await p.tap('text=隨機入宮');await p.waitForTimeout(1500);
await p.evaluate(()=>{S.ch=null;S.ev=null;S.scn=null;S.q=[];TAB=0;render();document.querySelectorAll('.ob31').forEach(e=>e.remove())});await p.waitForTimeout(600);
await p.evaluate(()=>{S.me.preg=6;S.me.silver=300;autoRun(12)});await p.waitForTimeout(1500);
console.log(await p.evaluate(()=>document.getElementById('rc86')?.innerText.replace(/\s+/g,' ').slice(0,400)));
await p.screenshot({path:'v201a.png'});console.log(errs);await b.close()})()
