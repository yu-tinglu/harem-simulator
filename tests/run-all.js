// 一鍵跑完全部測試：node tests/run-all.js [檔名片段]
// 需要 playwright 與 chromium。可用 HG_URL 指定要測的網址（預設測上一層的 index.html）。
const {spawnSync}=require('child_process');const fs=require('fs');const path=require('path');
const only=process.argv[2]||'';const files=fs.readdirSync(__dirname).filter(f=>/^(t82|v\d+[a-z]?|sim1)\.js$/.test(f)&&f.includes(only)).sort();
const BAD=/TimeoutError|ReferenceError|TypeError|SyntaxError|Uncaught|pageerror|Error:|^\s+at .*\.js:\d+/m;
let pass=0,fail=[];
for(const f of files){const t0=Date.now();const args=f==='sim1.js'?[f,'3']:[f];
 const r=spawnSync('node',args,{cwd:__dirname,encoding:'utf8',timeout:240000,env:process.env});
 const out=(r.stdout||'')+(r.stderr||'');const ok=r.status===0&&!BAD.test(out.replace(/ERR_TUNNEL_CONNECTION_FAILED|ERR_FILE_NOT_FOUND|fonts\.googleapis[^\n]*/g,''));
 console.log((ok?'PASS ':'FAIL ')+f+' ('+((Date.now()-t0)/1000).toFixed(0)+'s)');if(ok)pass++;else{fail.push(f);console.log(out.split('\n').slice(0,8).join('\n'))}}
console.log('\n通過 '+pass+' / '+files.length+(fail.length?'，失敗：'+fail.join(', '):''));process.exit(fail.length?1:0);
