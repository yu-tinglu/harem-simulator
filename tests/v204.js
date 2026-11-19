const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const errs=[];const c=await b.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});const p=await c.newPage();p.on('pageerror',e=>errs.push(e.message));p.on('console',x=>{if(/r8[2-9]/.test(x.text()))errs.push(x.text())});
await p.goto(''+(process.env.HG_URL||('file://'+require('path').resolve(__dirname,'../index.html')))+'');await p.waitForSelector('text=開始新遊戲');await p.tap('text=開始新遊戲');await p.waitForTimeout(400);await p.tap('text=隨機入宮');await p.waitForTimeout(1500);
console.log(await p.evaluate(()=>{S.ev=null;S.q=[];S.ch=null;S.scn=null;S.nt=[];S.t=11;mend();const a=(S.nt||[]).some(x=>/匯出一份備份/.test(x.t));localStorage.setItem('hg89_bk',String(Date.now()));S.nt=[];S.t=35;mend();const b2=(S.nt||[]).some(x=>/匯出一份備份/.test(x.t));return [a,b2]}));
console.log(errs);await b.close()})()
