const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const errs=[];const c=await b.newContext({viewport:{width:390,height:844}});const p=await c.newPage();p.on('pageerror',e=>errs.push(e.message));p.on('console',x=>{if(/r9\d/.test(x.text()))errs.push(x.text())});
await p.goto(''+(process.env.HG_URL||('file://'+require('path').resolve(__dirname,'../index.html')))+'');await p.waitForSelector('text=開始新遊戲');await p.click('text=開始新遊戲');await p.waitForTimeout(300);await p.click('text=隨機入宮');await p.waitForTimeout(1500);
const out=await p.evaluate(()=>{const r=[];S.ev=null;S.q=[];S.ch=null;const m=S.me;
 m.kids=m.kids||[];const k={n:'測兒',sex:'男',b:S.t-12*17,mom:'me',t:0,cai:60,de:55,pow:50,chong:50,bond:50};m.kids.push(k);
 for(let st=0;st<3;st++){for(let i=0;i<3;i++){const e=kEv96(k,st);if(!e.o[i])continue;const t=e.o[i][1]();r.push(st+'-'+i+':'+String(t).slice(0,22))}}
 r.push('log'+k.g96.length);
 for(let i=0;i<3;i++){const e=rise96();r.push('R'+i+':'+e.o[i][1]().slice(0,20)+' clan'+m.clan)}
 m.silver=200;for(let i=0;i<3;i++){const e=fall96();r.push('F'+i+':'+e.o[i][1]().slice(0,20)+' clan'+m.clan)}
 S.t=8+12*10;S.cl96t=-99;S.q=[];S.ev=null;m.favor=70;m.rank=4;m.fam.forEach(x=>x.pw=70);const rr=Math.random;let c=0;Math.random=()=>(c++<25?.01:rr());try{clanTick96()}finally{Math.random=rr}r.push('tick:'+(S.q[0]&&S.q[0].t.slice(0,12)));return r});
console.log(out);console.log(errs);await b.close()})()
