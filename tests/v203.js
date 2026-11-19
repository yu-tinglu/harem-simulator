const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const errs=[];const c=await b.newContext({viewport:{width:390,height:844},deviceScaleFactor:2,isMobile:true,hasTouch:true});const p=await c.newPage();p.on('pageerror',e=>errs.push(e.message));p.on('console',x=>{if(/r8[2-9]/.test(x.text()))errs.push(x.text())});
await p.goto(''+(process.env.HG_URL||('file://'+require('path').resolve(__dirname,'../index.html')))+'');await p.waitForSelector('text=開始新遊戲');await p.tap('text=開始新遊戲');await p.waitForTimeout(400);await p.tap('text=隨機入宮');await p.waitForTimeout(1500);
await p.evaluate(()=>{S.ch=null;S.ev=null;S.scn=null;S.q=[];TAB=0;S.t=30;S.npcs[3].host=80;render();document.querySelectorAll('.ob31').forEach(e=>e.remove())});await p.waitForTimeout(900);
console.log('strip',await p.evaluate(()=>document.querySelector('.rt83')?.innerText.replace(/\s+/g,' ')));
await p.screenshot({path:'v203a.png'});
// festivals: run all options
console.log(await p.evaluate(()=>{const bad=[];FEST88.forEach(f=>{for(let r=0;r<8;r++){S.me.silver=300;const e=f[2]();e.o.forEach(o=>{try{const x=o[1]();if(typeof x!=='string'||/undefined|NaN/.test(x))bad.push(f[1])}catch(z){bad.push(f[1]+z.message)}})}});return [...new Set(bad)]}));
// month trigger
console.log(await p.evaluate(()=>{S.ev=null;S.q=[];S.ch=null;S.scn=null;S.t=7;S.fest88={};mend();return S.ev?S.ev.t.slice(0,8):'none'}));
// kid event subject
console.log(await p.evaluate(()=>{if(!S.me.kids.length)birth(S.me.kids,'me');const k=S.me.kids[0];const s=subj83('今天'+k.n+'在學堂挨了先生的訓');return s&&s[2]+'|'+s[3]}));
console.log(errs);await b.close()})()
