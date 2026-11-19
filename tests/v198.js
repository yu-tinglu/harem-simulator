const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const errs=[];const c=await b.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});const p=await c.newPage();p.on('pageerror',e=>errs.push(e.message));p.on('console',x=>{if(/r8[234]/.test(x.text()))errs.push(x.text())});
await p.goto(''+(process.env.HG_URL||('file://'+require('path').resolve(__dirname,'../index.html')))+'');await p.waitForSelector('text=開始新遊戲');await p.tap('text=開始新遊戲');await p.waitForTimeout(400);await p.tap('text=隨機入宮');await p.waitForTimeout(1500);
await p.evaluate(()=>{S.ch=null;S.ev=null;S.scn=null;S.q=[];TAB=0;render();document.querySelectorAll('.ob31').forEach(e=>e.remove())});await p.waitForTimeout(800);
// 1 buttons hidden when not pregnant
console.log('btn no preg',await p.evaluate(()=>/安胎調養|追查孕事/.test(document.body.innerText)));
await p.evaluate(()=>{S.me.preg=7;S.me.silver=999;render()});await p.waitForTimeout(500);
console.log('btn preg',await p.evaluate(()=>/安胎調養/.test(document.body.innerText)),await p.evaluate(()=>/追查孕事/.test(document.body.innerText)));
// 2 force attack events across all kinds & options
const res=await p.evaluate(()=>{const out=[];for(let t=0;t<30;t++){S.me.preg=7;S.me.hp=80;S.me.kids=[];const g=pg84();g.act=1;g.dmg=0;g.pre=0;g.n=0;g.cul=null;const ev=mkEv84();const k=t%3;const r=ev.o[k][1]();out.push((ev.t.slice(0,6))+'|'+k+'|'+String(r).slice(0,26)+'|pre'+g.pre+'|preg'+S.me.preg+'|dmg'+g.dmg)}return out});console.log(res.slice(0,12).join('\n'));
// 3 tick triggers an event & autoRun stops
const t3=await p.evaluate(()=>{S.ev=null;S.q=[];S.ch=null;S.me.preg=8;S.me.favor=90;S.npcs.forEach(n=>n.host=90);const g=pg84();rst84(g);g.act=0;g.cul=null;S.me.kids=[];let got=0;for(let i=0;i<40&&!got;i++){S.ev=null;S.q=[];S.me.preg=8;g.n=0;tick84();if(S.ev&&S.ev.p84)got=1}return [got,g.cul,g.n,S.ev&&S.ev.t.slice(0,12)]});console.log('tick',t3);
await p.screenshot({path:'v198a.png'});
// 4 choose the option, then investigation
const t4=await p.evaluate(()=>{const g=pg84();V(0);S.ev=null;S.q=[];S.ch=null;g.hint=9;const before=S.me.silver;A(ACT.findIndex(a=>a[0]=='追查孕事'));return [JSON.stringify(S.ch&&S.ch.o.map(o=>o.l))]});
console.log('inv',t4);
console.log(errs);await b.close()})()
