const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const errs=[];const c=await b.newContext({viewport:{width:390,height:844},deviceScaleFactor:2,isMobile:true,hasTouch:true});const p=await c.newPage();p.on('pageerror',e=>errs.push(e.message));p.on('console',x=>{if(/r9|r8[2-9]/.test(x.text()))errs.push(x.text())});
await p.goto(''+(process.env.HG_URL||('file://'+require('path').resolve(__dirname,'../index.html')))+'');await p.waitForSelector('text=開始新遊戲');await p.tap('text=開始新遊戲');await p.waitForTimeout(400);await p.tap('text=隨機入宮');await p.waitForTimeout(1500);
const R=await p.evaluate(()=>{const evs={};const oR=Math.random;
 const reset=()=>{S.over=null;S.ev=null;S.q=[];S.ch=null;S.scn=null;S.reg=null;S.scand=0};
 const trial=(name,setup,mo,pat)=>{reset();setup();S.t=mo+12*12;const q0=S.q.length;Math.random=()=>0.01;try{end90()}finally{Math.random=oR}const e=[S.ev].concat(S.q).filter(Boolean).find(x=>pat.test(x.t));if(!e){evs[name]='none';return}
  const res=[];for(let i=0;i<e.o.length;i++){const sv=JSON.stringify([S.me.favor,S.me.hp]);S.over=null;try{const r=e.o[i][1]();res.push((S.over?S.over.t:'-')+'/'+String(r).slice(0,8))}catch(x){res.push('ERR '+x.message)}}evs[name]=res};
 trial('為子',()=>{S.me.kids=[];S.me.kids.push(kid('測','男',S.t-12*30,'me'));const k=S.me.kids[0];k.sex='男';k.b=-300;k.pow=80;S.me.silver=500;S.me.preg=0;S.me.rank=5;S.me.hp=70;S.me.scand=0},6,/結黨謀逆/);
 trial('青燈',()=>{S.me.hp=30;S.me.preg=0;S.me.rank=4;S.me.scand=0;S.me.bt=-12*40},9,/真正笑過/);
 trial('知己',()=>{S.me.hp=70;S.me.bt=-12*60;S.npcs[1].al=95;S.npcs[1].st='';nAge=()=>55;S.me.scand=0},3,/並肩走過/);
 trial('幕後',()=>{S.me.hp=70;S.me.bt=-12*50;S.me.ally=90;S.me.scheme=90;S.me.rank=4;S.me.scand=0},6,/織下的網/);
 return evs});console.log(JSON.stringify(R));console.log(errs);await b.close()})()
