const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const errs=[];const c=await b.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});const p=await c.newPage();p.on('pageerror',e=>errs.push(e.message));p.on('console',x=>{if(/r82|r79|r7/.test(x.text()))errs.push(x.text())});
await p.goto(''+(process.env.HG_URL||('file://'+require('path').resolve(__dirname,'../index.html')))+'');await p.waitForSelector('text=開始新遊戲');await p.tap('text=開始新遊戲');await p.waitForTimeout(400);await p.tap('text=隨機入宮');await p.waitForTimeout(1500);
await p.evaluate(()=>{S.ch=null;S.ev=null;S.scn=null;TAB=0;render();document.querySelectorAll('.ob31').forEach(e=>e.remove())});await p.waitForTimeout(700);
await p.tap('.goal82');await p.waitForTimeout(900);
console.log('goal click',await p.evaluate(()=>{const o=[...document.querySelectorAll('main details,main .cd')].filter(e=>/^恩寵聖眷/.test(e.textContent.trim()));return o.map(e=>e.tagName+(e.open?' open':'')+' '+(e.getAttribute('data-open')||'')+' top'+(e.getBoundingClientRect().top|0)).join(';')}));
await p.screenshot({path:'/tmp/m/t82a.png'});
await p.evaluate(()=>{TAB=1;render();window.scrollTo(0,0)});await p.waitForTimeout(500);
console.log('card h',await p.evaluate(()=>[...document.querySelectorAll('details.pc40')].slice(0,3).map(e=>e.getBoundingClientRect().height|0)));
await p.evaluate(()=>{TAB=0;render();helpOpen()});await p.waitForTimeout(600);
console.log('help font',await p.evaluate(()=>!!document.querySelector('#help .fz82')));
await p.tap('#help .fz82 button[data-k="l"]');await p.waitForTimeout(300);console.log('fz',await p.evaluate(()=>[localStorage.hg81fz,getComputedStyle(document.documentElement).getPropertyValue('--fz81')]));
await p.screenshot({path:'/tmp/m/t82b.png'});
console.log(errs);await b.close()})()
