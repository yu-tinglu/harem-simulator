const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const errs=[];const c=await b.newContext({viewport:{width:390,height:844},deviceScaleFactor:2});const p=await c.newPage();p.on('pageerror',e=>errs.push(e.message));p.on('console',x=>{if(/r97|r9\d/.test(x.text()))errs.push(x.text())});
await p.goto(''+(process.env.HG_URL||('file://'+require('path').resolve(__dirname,'../index.html')))+'');await p.waitForSelector('text=開始新遊戲');await p.click('text=開始新遊戲');await p.waitForTimeout(300);await p.click('text=隨機入宮');await p.waitForTimeout(1500);
await p.evaluate(()=>{S.ev=null;S.q=[];S.ch=null;S.scn=null;TAB=0;render()});await p.waitForTimeout(300);
console.log('welcome',await p.evaluate(()=>!!document.querySelector('.wc97')));await p.screenshot({path:'v214a.png'});
await p.evaluate(()=>{TAB=1;render()});await p.waitForTimeout(300);console.log('btn',await p.evaluate(()=>!!document.querySelector('.pg97b')));
await p.evaluate(()=>pg97open());await p.waitForTimeout(300);console.log('rows',await p.evaluate(()=>document.querySelectorAll('#pg97 .r').length));await p.screenshot({path:'v214b.png'});
// upload test
await p.setInputFiles('#pg97 input[type=file]',{name:'a.png',mimeType:'image/png',buffer:Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==','base64')});await p.waitForTimeout(800);
console.log('after upload modal open',await p.evaluate(()=>!!document.getElementById('pg97')),await p.evaluate(()=>Object.keys(PH83).length));
await p.evaluate(()=>{document.getElementById('pg97')?.remove();window.PG97=0;sfx97('up');sfx97('end');S.me.rank++;render()});
console.log('sfx ctx',await p.evaluate(()=>!!SFX97.ctx));
await p.goto(''+(process.env.HG_URL||('file://'+require('path').resolve(__dirname,'../index.html')))+'');await p.waitForSelector('text=讀取存檔');await p.click('text=設定');await p.waitForTimeout(300);console.log('sfx panel',await p.evaluate(()=>/提示音效/.test(document.body.innerText)));
console.log(errs.slice(0,6));await b.close()})()
