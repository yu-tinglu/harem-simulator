const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const errs=[];const c=await b.newContext({viewport:{width:390,height:844},deviceScaleFactor:2,permissions:['clipboard-read','clipboard-write']});const p=await c.newPage();p.on('pageerror',e=>errs.push(e.message));
await p.goto(''+(process.env.HG_URL||('file://'+require('path').resolve(__dirname,'../index.html')))+'');await p.waitForSelector('text=回報問題');
await p.screenshot({path:'v209a.png'});
await p.click('text=回報問題');await p.fill('#fbt','測試：按鈕卡住');await p.click('#fbc');await p.waitForTimeout(300);
console.log(await p.textContent('#fbm'));console.log((await p.evaluate(()=>navigator.clipboard.readText())).slice(0,260));
await p.screenshot({path:'v209b.png'});await p.click('#fbx');
await p.tap?.('text=開始新遊戲').catch(()=>{});await p.click('text=開始新遊戲');await p.waitForTimeout(300);await p.click('text=隨機入宮');await p.waitForTimeout(1500);
console.log(await p.evaluate(()=>rep92('x').slice(-120)));console.log(errs);await b.close()})()
