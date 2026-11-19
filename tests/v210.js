const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const errs=[];const c=await b.newContext({viewport:{width:390,height:844}});const p=await c.newPage();p.on('pageerror',e=>errs.push(e.message));p.on('console',x=>{if(/r93|r9\d/.test(x.text()))errs.push(x.text())});
await p.goto(''+(process.env.HG_URL||('file://'+require('path').resolve(__dirname,'../index.html')))+'');await p.waitForSelector('text=開始新遊戲');await p.click('text=開始新遊戲');await p.waitForTimeout(300);await p.click('text=隨機入宮');await p.waitForTimeout(1500);
console.log(await p.evaluate(()=>{const L=S.npcs;L[1].al=80;L[1].host=0;L[L.length-1].host=70;S.over={t:'壽終正寢'};lin93Save();return JSON.stringify(linGet())}));
await p.evaluate(()=>{S=null});await p.reload();await p.waitForSelector('text=開始新遊戲');
await p.click('text=前世傳承').catch(()=>{});await p.waitForTimeout(300);console.log((await p.textContent('body')).match(/前世羈絆[^。]*。/)?.[0]);
await p.evaluate(()=>menuGo&&0);await p.goto(''+(process.env.HG_URL||('file://'+require('path').resolve(__dirname,'../index.html')))+'');await p.waitForSelector('text=開始新遊戲');await p.click('text=開始新遊戲');await p.waitForTimeout(300);await p.click('text=隨機入宮');await p.waitForTimeout(1800);
console.log(await p.evaluate(()=>JSON.stringify({q:(S.q||[]).concat(S.ev?[S.ev]:[]).map(e=>e.t),lin:S.npcs.filter(n=>n.lin93).map(n=>[n.n,n.lin93,n.al,n.host])})));
console.log(await p.evaluate(()=>document.body.innerText.slice(0,200)));console.log(errs);await b.close()})()
