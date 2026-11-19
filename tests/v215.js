const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const errs=[];const c=await b.newContext({viewport:{width:390,height:844}});const p=await c.newPage();p.on('pageerror',e=>errs.push(e.message));p.on('console',x=>{if(/r98|r92/.test(x.text()))errs.push(x.text())});
await p.goto('file://'+require('path').resolve(__dirname,'../index.html'));await p.waitForSelector('text=開始新遊戲');await p.click('text=開始新遊戲');await p.waitForTimeout(300);await p.click('text=隨機入宮');await p.waitForTimeout(1500);
await p.evaluate(()=>{S.ev=null;S.q=[];S.ch=null;S.scn=null;TAB=4;render()});await p.waitForTimeout(300);
console.log('tab4 btn',await p.evaluate(()=>!!document.querySelector('.fb98t')));
await p.evaluate(()=>helpOpen());await p.waitForTimeout(300);console.log('help btn',await p.evaluate(()=>!!document.querySelector('#help .fb98')));
await p.click('#help .fb98 button');await p.waitForTimeout(200);console.log('modal',await p.evaluate(()=>!!document.getElementById('fb92')));
await p.fill('#fbt','遊戲中回報測試');await p.evaluate(()=>{window.__t=rep92('x')});console.log(await p.evaluate(()=>/HGS1:/.test(window.__t)&&/遊戲狀態:第/.test(window.__t)));
console.log(errs);await b.close()})()
