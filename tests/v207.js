const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const errs=[];const c=await b.newContext({viewport:{width:390,height:844},deviceScaleFactor:2,isMobile:true,hasTouch:true});const p=await c.newPage();p.on('pageerror',e=>errs.push(e.message));p.on('console',x=>{if(/r9|r8[2-9]/.test(x.text()))errs.push(x.text())});
await p.goto(''+(process.env.HG_URL||('file://'+require('path').resolve(__dirname,'../index.html')))+'');await p.waitForSelector('text=開始新遊戲');await p.tap('text=開始新遊戲');await p.waitForTimeout(400);await p.tap('text=隨機入宮');await p.waitForTimeout(1500);
await p.evaluate(()=>{S.ch=null;S.ev=null;S.scn=null;S.q=[];TAB=0;render();document.querySelectorAll('.ob31').forEach(e=>e.remove())});await p.waitForTimeout(500);
await p.evaluate(()=>{S.ev=mkEv84();render()});await p.waitForTimeout(600);
console.log(await p.evaluate(()=>[...document.querySelectorAll('.scrim .scroll button')].map(b=>b.textContent)));
await p.screenshot({path:'v207a.png'});console.log(errs);await b.close()})()
