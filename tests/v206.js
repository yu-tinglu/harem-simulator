const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const errs=[];const c=await b.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});const p=await c.newPage();p.on('pageerror',e=>errs.push(e.message));p.on('console',x=>{if(/r9|r8[2-9]/.test(x.text()))errs.push(x.text())});
await p.goto(''+(process.env.HG_URL||('file://'+require('path').resolve(__dirname,'../index.html')))+'');await p.waitForSelector('text=開始新遊戲');await p.tap('text=開始新遊戲');await p.waitForTimeout(400);await p.tap('text=隨機入宮');await p.waitForTimeout(1500);
const R=await p.evaluate(()=>{const out={};const reset=()=>{S.over=null;S.ev=null;S.q=[];S.ch=null;S.scn=null;S.reg=null};
 // 廢位
 reset();S.me.rank=3;S.me.scand=80;const oR=Math.random;Math.random=()=>0.01;try{end90()}finally{Math.random=oR}out.dep=S.over&&S.over.t;
 // 毒發
 reset();S.me.hp=10;S.me.preg=7;Math.random=()=>0.01;try{hurt84(2,'測試')}finally{Math.random=oR}out.poi=S.over&&S.over.t;
 // 產子殞命
 reset();S.me.hp=10;S.me.preg=1;const g=pg84();g.dmg=2;Math.random=()=>0.01;try{fatal90('labour',g)}finally{Math.random=oR}out.lab=S.over&&S.over.t;
 // events
 const evs={};
 const run=(name,setup,mo)=>{reset();setup();S.t=mo+12*10;Math.random=()=>0.01;try{end90()}finally{Math.random=oR}const e=S.ev||S.q[0];if(!e){evs[name]='none';return}const opts=[];e.o.forEach(o=>{try{reset();S.q=[];const keepE=null;const r=o[1]();opts.push((S.over?S.over.t:'-')+':'+String(r).slice(0,6))}catch(x){opts.push('ERR '+x.message)}});evs[name]=opts};
 run('子',()=>{S.me.kids=[];birth(S.me.kids,'me');const k=S.me.kids[0];k.sex='男';k.b=S.t-12*20;k.pow=80;S.me.silver=500;S.me.preg=0;S.me.scand=0;S.me.rank=5;S.t=0},6);
 return {out,evs}});console.log(JSON.stringify(R));console.log(errs);await b.close()})()
