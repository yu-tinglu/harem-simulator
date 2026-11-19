const {chromium}=require('playwright');
const N=+process.argv[2]||20;
(async()=>{const b=await chromium.launch();const c=await b.newContext({viewport:{width:390,height:844}});const p=await c.newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto(''+(process.env.HG_URL||('file://'+require('path').resolve(__dirname,'../index.html')))+'');await p.waitForSelector('text=開始新遊戲');
const res=await p.evaluate(async(N)=>{
 render=function(){};const out=[];window.__cnt={mis:0,pre:0,weak:0,att:0,die:0,evs:0,crit:0};
 const _m=miscarry;miscarry=function(n){if(n===S.me)__cnt.mis++;return _m.apply(this,arguments)};
 const _w=setWeak84;setWeak84=function(k){__cnt.pre++;return _w.apply(this,arguments)};
 const _mk=mkEv84;mkEv84=function(){__cnt.att++;return _mk.apply(this,arguments)};
 const _an=announceEv;announceEv=function(){__cnt.preg=(__cnt.preg||0)+1;return _an.apply(this,arguments)};const _dv=deliver;deliver=function(){const n0=S.me.kids.length;const r=_dv.apply(this,arguments);__cnt.lab=(__cnt.lab||0)+1;if(S.me.kids.length>n0)__cnt.born=(__cnt.born||0)+1;return r};
 for(let g=0;g<N;g++){
  S=null;try{qs30()}catch(e){out.push({err:'start '+e.message});continue}
  if(!S||!S.me){out.push({err:'nostart'});continue}
  let guard=0,evn=0,stuck=0;const c0=JSON.stringify(__cnt);
  const rb={};let q8=null;while(S&&!S.over&&guard++<4000&&S.t<60*12){if(S.me){for(const y of [5,10,20,30]){if(S.t>=y*12&&rb[y]===undefined)rb[y]=S.me.rank}if(q8===null&&S.me.rank>=8)q8=Math.floor(S.t/12)}
   try{
    if(S.ev){evn++;const o=S.ev.o;V(Math.floor(Math.random()*o.length));continue}
    if(S.ch){const o=S.ch.o;C(Math.floor(Math.random()*o.length));continue}
    if(S.scn){try{if(S.scn.o)S.scn.o[0][1]();else S.scn=null}catch(e){S.scn=null}continue}
    if(S.w>0&&guard%3==0){A(Math.floor(Math.random()*8));continue}
    autoRun(3);
   }catch(e){out.push({err:'loop '+e.message.slice(0,60)});stuck=1;break}
  }
  const m=S&&S.me;
  out.push({rb,q8,rk:m&&RK[m.rank],title:S&&S.over&&S.over.t,yrs:S?Math.floor(S.t/12):0,rank:m&&m.rank,kids:m&&m.kids.length,hp:m&&m.hp,evn,over:!!(S&&S.over),guard,stuck});
 }
 return {out,cnt:__cnt}},N);
const o=res.out;const ok=o.filter(x=>!x.err);const errsx=o.filter(x=>x.err);
const titles={};ok.forEach(x=>{const k=x.over?x.title:'(未結束)';titles[k]=(titles[k]||0)+1});
const avg=a=>a.length?(a.reduce((s,x)=>s+x,0)/a.length).toFixed(1):0;
const byY={};[5,10,20,30].forEach(y=>{const v=ok.map(x=>x.rb&&x.rb[y]).filter(z=>z!==undefined);byY[y]=v.length?(v.reduce((a,b)=>a+b,0)/v.length).toFixed(1):'-'});const q8=ok.map(x=>x.q8).filter(z=>z!==null);const rk={};ok.forEach(x=>{rk[x.rk]=(rk[x.rk]||0)+1});console.log(JSON.stringify({byY,queenYear:q8.length?(q8.reduce((a,b)=>a+b,0)/q8.length).toFixed(1):'-',queenN:q8.length,rk,games:o.length,errors:errsx.slice(0,5),avgYears:avg(ok.map(x=>x.yrs)),avgKids:avg(ok.map(x=>x.kids)),avgRank:avg(ok.map(x=>x.rank)),avgEv:avg(ok.map(x=>x.evn)),unfinished:ok.filter(x=>!x.over).length,cnt:res.cnt,titles},null,1));
console.log(errs.slice(0,5));await b.close()})()
