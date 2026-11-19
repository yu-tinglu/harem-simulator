const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const errs=[];const c=await b.newContext({viewport:{width:390,height:844}});const p=await c.newPage();p.on('pageerror',e=>errs.push(e.message));p.on('console',x=>{if(/r9\d/.test(x.text()))errs.push(x.text())});
await p.goto(''+(process.env.HG_URL||('file://'+require('path').resolve(__dirname,'../index.html')))+'');await p.waitForSelector('text=開始新遊戲');await p.click('text=開始新遊戲');await p.waitForTimeout(300);await p.click('text=隨機入宮');await p.waitForTimeout(1500);
const out=await p.evaluate(()=>{const r=[];const clean=()=>{S.ev=null;S.q=[];S.ch=null;S.scn=null;S.over=null;S.reg=null};const m=S.me;
 const mk=(n,b)=>({n:'子'+n,sex:'男',b:S.t-12*25,mom:'me',t:0,cai:60,de:60,pow:60,chong:50,bond:b});
 const rr=Math.random;
 // 兒孫繞膝
 clean();S.t=12*40;m.hp=50;m.kids=[mk(1,80),mk(2,80),mk(3,80)];Math.random=()=>0.01;try{end99()}finally{Math.random=rr}r.push('A:'+(S.over&&S.over.t));
 // 骨肉離心
 clean();S.t=12*30;m.kids=[mk(1,10),mk(2,10)];Math.random=()=>0.01;try{end99()}finally{Math.random=rr}r.push('B:'+(S.over&&S.over.t));
 // 母家傾覆
 clean();S.t=12*20;m.kids=[];m.favor=10;S.cl96fall=2;m.fam.forEach(x=>x.pw=5);Math.random=()=>0.01;try{end99()}finally{Math.random=rr}r.push('C:'+(S.over&&S.over.t));
 // 派系事件選項
 clean();S.fc99=null;for(let k=0;k<12;k++){const e=fev99();for(let i=0;i<e.o.length;i++){const t=e.o[i][1]();if(typeof t!=='string'||!t)r.push('BAD opt');}}
 r.push('fc:'+JSON.stringify(S.fc99));
 // 派系結果事件
 clean();S.fcq99=0;S.fc99={q:40,w:0,m:0};const e1=fres99();r.push('res:'+(e1&&e1.t.slice(0,10)));if(e1)e1.o[0][1]();
 S.fc99={q:-40,w:0,m:0};const e2=fres99();r.push('hostile:'+(e2&&e2.t.slice(0,10)));if(e2)e2.o[1][1]();
 // 成就
 unlock('a70');unlock('a73');r.push('ach:'+(ACH().has('a70')&&ACH().has('a73')));
 // 觸發 mend 排程
 clean();S.t=12*12+2;S.w=0;S.fcT99=undefined;S.fc99={q:0,w:0,m:0};const c2=Math.random;let n=0;Math.random=()=>(n++<30?0.01:c2());try{mend()}finally{Math.random=c2}
 r.push('fcT:'+(S.fcT99!==undefined));r.push('mendq:'+((S.q[0]&&S.q[0].t)||(S.ev&&S.ev.t)||'none').slice(0,12));
 r.push('AL:'+AL.length);return r});
console.log(out);console.log(errs);await b.close()})()
