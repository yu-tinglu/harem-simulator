const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const errs=[];const c=await b.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});const p=await c.newPage();p.on('pageerror',e=>errs.push(e.message));
await p.goto(''+(process.env.HG_URL||('file://'+require('path').resolve(__dirname,'../index.html')))+'');await p.waitForSelector('text=開始新遊戲');await p.tap('text=開始新遊戲');await p.waitForTimeout(400);await p.tap('text=隨機入宮');await p.waitForTimeout(1500);
console.log('default',await p.evaluate(()=>rlxOn()));
console.log('cap',await p.evaluate(()=>evCap()));
await p.evaluate(()=>{localStorage.setItem('hg_rlx','on')});console.log('explicit on',await p.evaluate(()=>rlxOn()));
console.log(errs);await b.close()})()
