// 新版提示：舊版頁面遇到網站上較新的版本時要跳提示，同版本不誤報（需要本機 http 伺服器，由測試自己啟動）
const {chromium}=require('playwright');const http=require('http');const fs=require('fs');const path=require('path');
(async()=>{const html=fs.readFileSync(path.resolve(__dirname,'../index.html'),'utf8');const cur=/VER92='(V\d+)'/.exec(html)[1];const old='V'+(parseInt(cur.slice(1))-1);
const srv=http.createServer((q,s)=>{s.setHeader('content-type','text/html;charset=utf-8');s.end(q.url.includes('?v=')?html:html.replace("VER92='"+cur+"'","VER92='"+old+"'"))}).listen(0);
const port=srv.address().port;const b=await chromium.launch();const errs=[];const f=[];
const p=await (await b.newContext()).newPage();p.on('pageerror',e=>errs.push(e.message));
await p.goto('http://127.0.0.1:'+port+'/index.html');await p.waitForTimeout(5500);
if(!await p.evaluate(()=>!!document.getElementById('nv100')))f.push('舊版頁面沒有跳出新版提示');
// 同版本：伺服器兩邊都回傳目前版本
srv.removeAllListeners('request');srv.on('request',(q,s)=>{s.setHeader('content-type','text/html;charset=utf-8');s.end(html)});
const p2=await (await b.newContext()).newPage();await p2.goto('http://127.0.0.1:'+port+'/index.html');await p2.waitForTimeout(5500);
if(await p2.evaluate(()=>!!document.getElementById('nv100')))f.push('同版本不應跳提示');
console.log(f,errs);srv.close();await b.close();if(f.length||errs.length)process.exit(1)})()
