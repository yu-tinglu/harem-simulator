const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const errs=[];const c=await b.newContext({viewport:{width:390,height:844},deviceScaleFactor:2,isMobile:true,hasTouch:true});const p=await c.newPage();p.on('pageerror',e=>errs.push(e.message));p.on('console',x=>{if(/r8[23]/.test(x.text()))errs.push(x.text())});
await p.goto(''+(process.env.HG_URL||('file://'+require('path').resolve(__dirname,'../index.html')))+'');await p.waitForSelector('text=開始新遊戲');await p.tap('text=開始新遊戲');await p.waitForTimeout(400);await p.tap('text=隨機入宮');await p.waitForTimeout(1500);
await p.evaluate(()=>{S.ch=null;S.ev=null;S.scn=null;S.q=[];TAB=0;render();document.querySelectorAll('.ob31').forEach(e=>e.remove())});await p.waitForTimeout(900);
console.log('strip',await p.evaluate(()=>document.querySelectorAll('.rt83 .f83').length));
await p.screenshot({path:'v196a.png'});
// event w/ npc
await p.evaluate(()=>{const n=S.npcs[1];S.ev={t:n.n+'在御花園攔住了你的去路，言語間帶著幾分挑釁。',o:[['忍讓',()=>'你退了一步。']]};render()});await p.waitForTimeout(500);
console.log('ev',await p.evaluate(()=>document.querySelector('.ev83')?.innerText.replace(/\s+/g,' ')));await p.screenshot({path:'v196b.png'});
await p.evaluate(()=>{S.ev={t:'皇上今夜翻了你的牌子。',o:[['謝恩',()=>'ok']]};render()});await p.waitForTimeout(300);
console.log('ev2',await p.evaluate(()=>document.querySelector('.ev83')?.innerText.replace(/\s+/g,' ')));
// roster upload
await p.evaluate(()=>{S.ev=null;S.q=[];TAB=1;render()});await p.waitForTimeout(600);
await p.evaluate(()=>{const d=document.querySelector('[data-list=roster]>details:not(.meRow)');d.open=true;d.scrollIntoView()});await p.waitForTimeout(300);
console.log('up83',await p.evaluate(()=>document.querySelectorAll('.up83').length));
await p.setInputFiles('.up83 input[type=file]','/tmp/m/v192.png');await p.waitForTimeout(1200);
console.log('photo',await p.evaluate(()=>Object.keys(PH83).length),await p.evaluate(()=>document.querySelectorAll('[data-list=roster] summary .av18 img').length));
await p.screenshot({path:'v196c.png'});
// moment
await p.evaluate(()=>{TAB=0;S.me.rank++;render()});await p.waitForTimeout(1000);
console.log('mo',await p.evaluate(()=>document.getElementById('mo83')?.innerText.replace(/\s+/g,' ')));await p.screenshot({path:'v196d.png'});
console.log(errs);await b.close()})()
