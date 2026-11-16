/* ===== 存檔：4 格 ===== */
let UID=0,PEND=null,SMSG='';const MEM={},SK=i=>'shengong_slot_'+i;
const stg={get(k){try{const v=localStorage.getItem(k);if(v!==null)return v}catch(e){}return MEM[k]||null},set(k,v){let ok=1;try{localStorage.setItem(k,v)}catch(e){ok=0}MEM[k]=v;return ok},del(k){try{localStorage.removeItem(k)}catch(e){}delete MEM[k]}};
function allKids(){return S.me.kids.concat(...S.npcs.map(n=>n.kids))}
function snap(){allKids().forEach(k=>{if(!k.uid)k.uid=++UID});const wrap=k=>k&&(k.uid||(k.uid=++UID),{__ref:k.uid,copy:JSON.parse(JSON.stringify(k))}),sv={heir:S.heir,nk:S.nk},rk=S.reg?S.reg.k:null;S.heir=wrap(S.heir);S.nk=wrap(S.nk);if(S.reg)S.reg.k=wrap(rk);let j;try{j=JSON.stringify({ver:1,S,G,T,N,AVI,UID})}finally{S.heir=sv.heir;S.nk=sv.nk;if(S.reg)S.reg.k=rk}return j}
function restore(o){S=o.S;G=o.G;T=o.T;N=o.N;AVI=o.AVI;UID=o.UID||0;const mp={};allKids().forEach(k=>{if(k.uid)mp[k.uid]=k});const un=w=>w&&w.__ref?(mp[w.__ref]||w.copy):w;S.heir=un(S.heir);S.nk=un(S.nk);if(S.reg)S.reg.k=un(S.reg.k);S.ev=null;S.ch=null;S.scn=null;S.q=[];S.aut=0;S.res=null;TAB=0}
function slotSum(i){const r=stg.get(SK(i));if(!r)return null;try{return JSON.parse(r).sum}catch(e){return null}}
function slotAct(kind,i){const has=!!stg.get(SK(i));if((kind=='save'||kind=='del')&&has&&PEND!==kind+i){PEND=kind+i;return refreshSlots()}PEND=null;SMSG='';
if(kind=='save'){if(!S||S.over)SMSG='目前無法存檔。';else if(S.ev||S.ch||S.scn||S.q.length)SMSG='請先處理完眼前的事件再存檔。';else{const sum=`${S.me.n}・${S.reg?S.reg.title:RK[S.me.rank]}・第${Math.floor(S.t/12)+1}年${S.t%12+1}月`,ok=stg.set(SK(i),JSON.stringify({sum,time:new Date().toLocaleString('zh-TW',{hour12:false}),data:snap()}));SMSG=ok?`已存入存檔 ${i+1}。`:`已暫存於存檔 ${i+1}，但此環境無法永久保存（關閉頁面後會消失）。`}}
else if(kind=='load'){try{const o=JSON.parse(JSON.parse(stg.get(SK(i))).data);if(o.ver!==1||!o.S||!o.S.me)throw 0;restore(o);return render()}catch(e){SMSG='存檔損毀，無法讀取。'}}
else if(kind=='del'){stg.del(SK(i));SMSG=`已刪除存檔 ${i+1}。`}
refreshSlots()}
function refreshSlots(){if(S)render();else intro()}
function slotPanel(){let h='<div class=cd><h3>存檔</h3><div class=m>共 4 格，存在這個瀏覽器裡。存檔請在行動選單時進行。</div>';for(let i=0;i<4;i++){const r=stg.get(SK(i));let sm=null,tm='';if(r){try{const j=JSON.parse(r);sm=j.sum;tm=j.time}catch(e){}}
h+=`<div class=slot><div class=sl><b>存檔 ${i+1}</b><div class=m>${sm?sm+'<br>'+tm:'（空）'}</div></div><div class=sb>`+(S?`<button onclick="slotAct('save',${i})">${PEND=='save'+i?'再按一次覆蓋':'存入'}</button>`:'')+(sm?`<button class=s onclick="slotAct('load',${i})">讀取</button><button class=s onclick="slotAct('del',${i})">${PEND=='del'+i?'確認刪除':'刪除'}</button>`:'')+'</div></div>'}
return h+(SMSG?`<div class=m style="margin-top:8px;color:var(--verm2)">${SMSG}</div>`:'')+'</div>'}
