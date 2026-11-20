// 開場頁：?splash=1 時顯示、按鈕可進入、同一工作階段重整不再出現；自動化瀏覽器預設略過
const {chromium}=require('playwright');
(async()=>{const base=process.env.HG_URL||('file://'+require('path').resolve(__dirname,'../index.html'));const b=await chromium.launch();const errs=[],f=[];
const c=await b.newContext({viewport:{width:390,height:844}});const p=await c.newPage();p.on('pageerror',e=>errs.push(e.message));
await p.goto(base);await p.waitForSelector('text=開始新遊戲');await p.waitForTimeout(500);if(await p.evaluate(()=>!!document.getElementById('sp102')))f.push('自動化瀏覽器不應顯示開場頁');
await p.goto(base+'?splash=1');await p.waitForSelector('#sp102');if(!await p.evaluate(()=>/踏入宮門/.test(document.getElementById('sp102').innerText)))f.push('缺少進入按鈕');
const sz=await p.evaluate(()=>{const i=document.querySelector('#sp102 .pic').getBoundingClientRect();return [i.width,i.height]});if(sz[0]<330)f.push('開場圖太小 '+sz);
await p.click('#sp102go');await p.waitForTimeout(800);if(await p.evaluate(()=>!!document.getElementById('sp102')))f.push('按下後開場頁沒有消失');
if(!await p.evaluate(()=>/開始新遊戲/.test(document.body.innerText)))f.push('進入後沒有主畫面');
await p.goto(base+'?splash=1');await p.waitForTimeout(1200);
// force=1 會再顯示；確認主畫面頂端為文字標題而非重複的大圖
const cov=await p.evaluate(()=>{const m=document.querySelector('.menuhero .mcover');return m?getComputedStyle(m).display:'none'});if(cov!=='none')f.push('主畫面不應再顯示封面圖');
console.log(f,errs);await b.close();if(f.length||errs.length)process.exit(1)})()
