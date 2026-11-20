// 背景圖：首頁顯示新大殿背景；遊戲內六張依月份輪替（新三張＋原三張）
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const errs=[],f=[];const p=await (await b.newContext({viewport:{width:390,height:844}})).newPage();p.on('pageerror',e=>errs.push(e.message));
await p.goto(''+(process.env.HG_URL||('file://'+require('path').resolve(__dirname,'../index.html')))+'');await p.waitForSelector('text=開始新遊戲');await p.waitForTimeout(600);
const h=await p.evaluate(()=>[getComputedStyle(document.getElementById('bgh101')).display,getComputedStyle(document.getElementById('bg')).display]);if(h[0]!=='block'||h[1]!=='none')f.push('首頁背景不正確 '+h);
await p.click('text=開始新遊戲');await p.waitForTimeout(300);await p.click('text=隨機入宮');await p.waitForTimeout(1500);
const seen=new Set();for(const m of [0,2,4,6,8,10]){const sig=await p.evaluate(m=>{S.ev=null;S.q=[];S.ch=null;S.scn=null;S.t=m;render();return document.getElementById('bg63').style.backgroundImage.slice(0,300).length+':'+document.getElementById('bg63').style.backgroundImage.length},m);seen.add(sig)}
if(seen.size<5)f.push('背景輪替種類不足：'+seen.size);
const hh=await p.evaluate(()=>getComputedStyle(document.getElementById('bgh101')).display);if(hh!=='none')f.push('遊戲內不應顯示首頁背景');
console.log(f,errs);await b.close();if(f.length||errs.length)process.exit(1)})()
