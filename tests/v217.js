// 數值與流程斷言：不只檢查「不報錯」，也檢查規則是否成立
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const errs=[];const c=await b.newContext({viewport:{width:390,height:844}});const p=await c.newPage();p.on('pageerror',e=>errs.push(e.message));
await p.goto(''+(process.env.HG_URL||('file://'+require('path').resolve(__dirname,'../index.html')))+'');await p.waitForSelector('text=開始新遊戲');await p.click('text=開始新遊戲');await p.waitForTimeout(300);await p.click('text=隨機入宮');await p.waitForTimeout(1500);
const R=await p.evaluate(()=>{const f=[];const ok=(c,m)=>{if(!c)f.push(m)};render=function(){};
 // 1. 每月 4 次行動，用完換月
 S.ev=null;S.q=[];S.ch=null;S.scn=null;const t0=S.t;ok(S.w===4,'月初應有 4 次行動，實際 '+S.w);
 // 2. 長時間隨機遊玩後的不變量
 let bad=[];const chk=()=>{const m=S.me;['favor','hp','scheme','ally','silver'].forEach(k=>{if(!isFinite(m[k]))bad.push('me.'+k+'='+m[k])});if(m.hp>100)bad.push('hp>100');(S.npcs||[]).forEach(n=>{if(!n)return;['al','host'].forEach(k=>{if(!isFinite(n[k]))bad.push(n.n+'.'+k+'='+n[k]);else if(n[k]<0||n[k]>100)bad.push(n.n+'.'+k+'='+n[k])})});(m.kids||[]).forEach(k=>['cai','de','pow','chong','bond'].forEach(x=>{if(k[x]!==undefined&&!isFinite(k[x]))bad.push(k.n+'.'+x)}))};
 let g=0,steps=0;while(S&&!S.over&&g++<2500&&S.t<12*25){try{if(S.ev){V(Math.floor(Math.random()*S.ev.o.length))}else if(S.ch){C(Math.floor(Math.random()*S.ch.o.length))}else if(S.scn){S.scn=null}else if(S.w>0&&g%3==0){A(Math.floor(Math.random()*8))}else autoRun(2)}catch(e){f.push('loop '+e.message.slice(0,60));break}steps++;if(g%20==0)chk()}
 chk();ok(bad.length===0,'不變量被破壞：'+bad.slice(0,4).join(', '));ok(steps>100,'遊玩步數過少');
 // 3. 選項標籤判斷
 ok(tag91('冷眼旁觀').some(x=>x[1]==='穩妥'),'冷眼旁觀應標穩妥');ok(tag91('落井下石').some(x=>x[1]==='冒險'),'落井下石應標冒險');ok(tag91('花銀兩（耗銀40）').some(x=>x[1]==='耗銀'),'耗銀未標示');
 // 4. 十大抉擇只記重大變化，且不超過上限
 ok((S.dec94||[]).length<=60,'抉擇紀錄超出上限');(S.dec94||[]).forEach(d=>{if(!(d.sc>=14))f.push('抉擇分數低於門檻')});
 // 5. 存檔往返：snap() 之後能還原關鍵欄位
 if(!S.over){const sn=snap();const o=JSON.parse(sn);ok(o&&o.S&&o.S.me&&o.S.me.n===S.me.n,'存檔缺少主角');ok(o.S&&o.S.t===S.t,'存檔時間不符');ok(o.ver!==undefined,'存檔缺少版本')}
 // 6. 結局之後會留下前世羈絆
 const before=linGet().length;S.over=S.over||{t:'壽終正寢'};S.lin93=0;lin93Save();ok(linGet().length===before+1,'前世羈絆沒有記錄');
 return f});
console.log(R);console.log(errs);if(R.length||errs.length)process.exit(1);await b.close()})()
