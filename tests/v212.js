const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const errs=[];const c=await b.newContext({viewport:{width:390,height:844}});const p=await c.newPage();p.on('pageerror',e=>errs.push(e.message));p.on('console',x=>{if(/r9\d/.test(x.text()))errs.push(x.text())});
await p.goto(''+(process.env.HG_URL||('file://'+require('path').resolve(__dirname,'../index.html')))+'');await p.waitForSelector('text=開始新遊戲');await p.click('text=開始新遊戲');await p.waitForTimeout(300);await p.click('text=隨機入宮');await p.waitForTimeout(1500);
const out=await p.evaluate(()=>{const r=[];S.ev=null;S.q=[];S.ch=null;const n=S.npcs[1],m=S.me;
 for(let i=0;i<3;i++){n.al=70;n.host=0;S.ev=betray95(n);const t=S.ev.o[i][1]();r.push(t.slice(0,40)+' al'+n.al+' h'+n.host)}
 for(let i=0;i<3;i++){n.host=70;n.al=0;S.ev=plead95(n);const t=S.ev.o[i][1]();r.push(t.slice(0,40)+' al'+n.al+' h'+n.host)}
 // trigger via mend
 S.ev=null;S.q=[];const k=S.npcs[2];S.t=40;S.arc95={};S.arc95[k.n]={a:30,f:0,b:0,p:0};k.al=80;k.host=0;k.rank=m.rank;const rr=Math.random;let c=0;Math.random=()=>(c++<25?0.01:rr());try{mend()}finally{Math.random=rr}
 r.push('mend:'+(S.ev&&S.ev.t||(S.q[0]&&S.q[0].t)||'none'));return r});
console.log(out);console.log(errs);await b.close()})()
