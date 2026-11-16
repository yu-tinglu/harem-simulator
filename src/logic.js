const RK=['答應','常在','貴人','嬪','貴嬪','妃','貴妃','皇貴妃','皇后'],TOP=7,SN=['承祜','承煜','承瑾','承琰','承璋','承瑜','承琮','承昭','承祺','承禛','承璟','承琬'],DN=['靜和','端敏','長寧','淑慎','永安','榮嘉','靜怡','和碩','固倫','溫恪'];
const NN=['葉答應','秦常在','韓貴人','許答應','周常在','陸貴人','顧答應','莊常在','裴貴人','崔答應','杜常在','魏答應'],JB=['縣令','知州','員外郎','鹽商','參將','主簿','翰林侍講','道臺'];
const R=(a,b)=>a+Math.floor(Math.random()*(b-a+1)),P=p=>Math.random()<p,cl=(v,a=0,b=100)=>Math.max(a,Math.min(b,v)),$=i=>document.getElementById(i);
const GC=['選秀入宮','南巡江南','和親公主','特殊出身'],FAC=['外戚勳貴','清流文官','武將集團','寒門新貴','宗室親王'];
const EPS=[['英明勤政','勤於政事，國力漸盛，難被迷惑',{nd:.2,vol:4,fm:.9,trust:.7,harsh:1}],['昏庸好色','沉迷美色，國力漸衰，易被枕邊風左右',{nd:-.2,vol:6,fm:1.25,trust:1.3,harsh:1}],['猜忌多疑','疑心極重，失寵時處罰更重',{nd:0,vol:7,fm:.9,trust:.6,harsh:1.4}],['仁厚寬和','寬厚待人，處罰較輕',{nd:.05,vol:4,fm:1,trust:1,harsh:.6}],['好大喜功','愛面子愛排場，情緒起伏大',{nd:-.05,vol:7,fm:1,trust:1.1,harsh:1}],['優柔寡斷','耳根子軟，易受人左右',{nd:-.05,vol:5,fm:1,trust:1.25,harsh:.8}],['暴戾嗜殺','喜怒無常，失寵時處罰極重',{nd:-.1,vol:10,fm:1,trust:.8,harsh:1.7}]];
const GS=[['一品大員之家','父為宰輔，權傾朝野，樹大招風。起始位份：貴人',{s:80,a:25,r:2},[['父親','內閣首輔',85,75,60],['母親','一品誥命夫人',40,55,90],['兄長','翰林院學士',45,70,70],['幼弟','紈絝子弟',10,25,50]],0,1],
['二品大員之家','父掌兵部，手握實權。起始位份：貴人',{s:60,a:18,r:2},[['父親','兵部尚書',70,65,70],['母親','當家主母',30,60,85],['兄長','禁軍統領',50,60,75],['妹妹','待字閨中',5,40,90]],0,2],
['三品京官之家','清貴體面，根基不深。起始位份：常在',{s:45,a:12,r:1},[['父親','光祿寺卿',55,55,75],['母親','賢淑主母',25,50,90],['兄長','國子監生',20,65,80]],0,1],
['五品地方官之家','地方小官，助力有限。起始位份：常在',{s:30,a:8,r:1},[['父親','州府同知',35,50,80],['母親','持家主婦',15,45,95],['兄長','縣學生員',10,60,85],['幼弟','垂髫稚子',3,35,95]],0,3],
['九品寒門','幾無助力，但心機＋10、健康＋10。起始位份：答應',{s:10,sc:10,hp:10,r:0},[['父親','九品小吏',10,40,90],['母親','浣衣婦人',3,35,98],['兄長','田間農夫',2,30,95]],0,3],
['商賈巨富之家','富可敵國，但地位低微。起始位份：答應',{s:200,a:5,r:0},[['父親','皇商',30,70,60],['母親','商號當家',15,60,80],['兄長','商號掌櫃',15,60,50],['弟弟','遊手好閒',5,30,40]],0,3],
['江南書香世家之女','皇上南巡，見你吟詩作畫，一見傾心帶回宮中。聖寵＋15，但人脈薄弱、皇后好感－10。起始位份：貴人',{s:60,a:2,sc:8,r:2,f:15,e:-10,jn:1},[['父親','江南名儒',25,75,85],['母親','書香主母',10,55,95],['兄長','秀才',8,65,90]],1,1],
['揚州鹽商之女','富甲江南，被南巡的皇上相中。銀兩極多，朝中無人，被視為商賈之女。起始位份：貴人',{s:220,a:3,r:2,f:12,e:-8,jn:1},[['父親','兩淮鹽商',35,70,60],['母親','鹽商夫人',10,50,85],['兄長','商號少東',15,55,50]],1,3],
['蘇州評彈藝人','賣藝為生的清倌人，一曲琵琶被皇上聽見，帶回宮中。聖寵＋20，毫無母家助力，宮中人瞧你不起。起始位份：常在',{s:20,a:0,r:1,f:20,e:-12,jn:1},[['養母','梨園班主',5,45,75],['師兄','琴師',3,50,90]],1,-1],
['暹羅公主','南洋暹羅王室的公主，帶著象牙香料與豐厚嫁妝和親。銀兩極多，言語不通人脈薄弱。起始位份：貴嬪',{s:260,a:2,r:4,f:10,e:-6,hp:5,fo:'暹羅'},[['父王','暹羅國王',70,60,85],['兄長','暹羅象軍統帥',55,65,80],['母后','暹羅王后',30,55,90]],2,-1],
['高麗公主','來自禮儀之邦高麗，通曉詩書。起始位份：貴嬪',{s:140,a:8,sc:6,r:4,f:6,e:2,fo:'高麗'},[['父王','高麗國王',60,65,85],['世子','高麗世子',45,60,85],['王妃','高麗王妃',25,55,90]],2,-1],
['蒙古科爾沁公主','草原上騎射長大的格格，部族手握鐵騎。健康＋20，但不通漢禮。起始位份：妃',{s:120,a:6,r:5,f:4,e:-4,hp:20,fo:'蒙古'},[['汗父','科爾沁部汗王',80,60,75],['兄長','蒙古騎兵統帥',70,65,70],['額娘','福晉',25,50,90]],2,-1],
['吐蕃公主','雪域高原的公主，信奉佛法，聖潔神秘。起始位份：貴嬪',{s:150,a:5,r:4,f:8,hp:8,fo:'吐蕃'},[['贊普','吐蕃贊普',70,60,80],['舅父','吐蕃大相',50,70,75],['兄長','吐蕃武士首領',45,55,80]],2,-1],
['安南公主','南方屬國安南的公主，為鞏固邦交而來。起始位份：貴嬪',{s:130,a:4,r:4,f:6,fo:'安南'},[['父王','安南國王',55,60,80],['兄長','安南水師將領',40,60,75]],2,-1],
['準噶爾公主','西域準噶爾部以和親換取邊境和平，其父野心不小，忠誠難測。健康＋10。起始位份：貴嬪',{s:160,a:2,r:4,f:6,e:-8,hp:10,fo:'準噶爾'},[['父親','準噶爾汗',80,65,50],['兄長','準噶爾大將',70,70,45]],2,-1],
['罪臣之女','父親因案獲罪，你被沒入宮中為奴，一路熬到服侍皇上。心機＋15，家中已無助力，背負血仇，或許有昭雪之日。起始位份：答應',{s:5,a:0,sc:15,hp:5,r:0,e:-5,cr:1},[['父親','已故罪臣',5,70,60],['兄長','流放寧古塔',3,55,90]],3,-1],
['宮女出身','原是浣衣局宮女，被皇上偶然臨幸。人脈尚可，毫無家世。起始位份：答應',{s:15,a:12,sc:8,r:0,f:6},[['父親','貧農',2,30,95],['母親','織戶',2,35,98]],3,3]];
const TS=[['傾城之貌','聖寵＋15',{f:15}],
['才情出眾','獻藝、宮宴更易成功，心機＋5',{perf:.3,sc:5}],
['心思縝密','心機＋20，設計更易成功',{sc:20,plot:.08}],
['通曉醫理','健康＋10，不懼下毒，子女少夭折',{hp:10,pois:1,kh:1}],
['宜男之相','易受孕，子女才德＋8',{fert:.12,kc:8,kd:8}],
['八面玲瓏','人脈＋15，皇后好感＋10',{a:15,e:10}],
['過目不忘','心機＋10，子女才學＋10',{sc:10,kc:10}],
['能歌善舞','獻藝更易成功，聖寵＋8',{perf:.25,f:8}],
['巧舌如簧','設計更易成功，皇后好感＋8',{plot:.1,e:8}],
['福澤深厚','聖寵＋5，健康＋8，晉位更易',{f:5,hp:8,luck:1}],
['鐵血手腕','心機＋10，設計大幅更易成功，人脈－5',{sc:10,plot:.13,a:-5}],
['溫婉賢淑','皇后好感＋15，聖寵＋5，子女德行＋10',{e:15,f:5,kd:10}],
['家財萬貫','初始銀兩＋80',{s:80}],
['將門虎女','健康＋20，子女勢力＋8',{hp:20,kp:8}],
['清冷孤高','聖寵＋15，但人脈－10、皇后好感－5',{f:15,a:-10,e:-5}],
['善於斂財','銀兩＋20，每月額外進帳',{rich:1,s:20}],
['慧眼識人','人脈＋8，不易被人欺瞞',{a:8,insight:1}],
['命格貴重','子女少夭折，更易受孕',{fert:.06,kh:1,luck:1}],
['武藝傍身','健康＋15，遇襲受傷較輕',{hp:15,guard:1}],
['賢內助之才','母家全員權勢＋8，人脈＋5',{c:8,a:5}],
['繡藝絕倫','聖寵＋8，皇后好感＋8',{f:8,e:8}],
['知書達理','心機＋8，子女才學＋10、德行＋5',{sc:8,kc:10,kd:5}],
['隱忍不發','心機＋15，健康＋5，受罰損傷較輕',{sc:15,hp:5,bear:1}],
['紅顏易老','聖寵＋25，但健康－15',{f:25,hp:-15}],
['野心勃勃','心機＋25，但皇后好感－10',{sc:25,e:-10}],
['天生媚骨','聖寵＋12，更易受孕',{f:12,fert:.06}],
['仁厚慈愛','人脈＋5，子女德行＋8、孝心＋12',{a:5,kd:8,kb:12}],
['醫毒雙絕','心機＋12，不懼下毒，設計更易成功',{sc:12,pois:1,plot:.06}],
['廣結善緣','人脈＋20',{a:20}],
['膽識過人','心機＋5，健康＋8，設計更易成功',{sc:5,hp:8,plot:.07}]];
const KT=[['聰慧過人','才學＋12',{cai:12}],['早慧','才學＋8，聖寵＋5',{cai:8,chong:5}],['過目不忘','才學＋15',{cai:15}],['仁厚寬和','德行＋12',{de:12}],['沉穩持重','德行＋8，孝心＋5',{de:8,bond:5}],['孝順乖巧','孝心＋20',{bond:20}],['討喜','聖寵＋12',{chong:12}],['弓馬嫻熟','勢力＋10，才學＋3',{pow:10,cai:3}],['天生神力','勢力＋12',{pow:12}],['口才出眾','聖寵＋6，勢力＋6',{chong:6,pow:6}],['野心勃勃','勢力＋12，德行－8',{pow:12,de:-8}],['體弱多病','才學＋6，但易生病夭折',{cai:6,weak:1}],['福星高照','聖寵＋8，不易夭折',{chong:8,luck:1}],['倔強執拗','勢力＋8，德行－5，孝心－5',{pow:8,de:-5,bond:-5}],['溫文爾雅','德行＋8，才學＋6',{de:8,cai:6}],['膽小怯懦','德行＋5，聖寵－6',{de:5,chong:-6}]];
let S,G=0,T=0,N='沈氏',GCt=0,AT=null;
const tf=k=>(S&&S.me&&TS[S.me.g][2][k])||0;
/* ===== 人物屬性：技藝、容貌、身體、疾病 ===== */
const SKN=['棋','琴','書','畫','禮','樂','射','御','數','廚藝','女紅','舞藝','醫理','詩詞'];
const DS=[['氣喘','',1,{hp:1}],['心悸','',1,{hp:.5,lab:.06}],['體寒宮冷','',0,{fert:-.05}],['失眠多夢','',0,{hp:.3,sp:2}],['弱視','',1,{perf:-.04}],['消渴','',1,{hp:1.2}],['血虛','',0,{hp:1,lab:.04}],['肺癆','',0,{hp:2.5}],['癲癇','',1,{hp:.8,perf:-.06}],['脾胃虛弱','',0,{hp:.6}],['痛經','',0,{hp:.3,fert:-.03}],['風疾','',1,{hp:.5,perf:-.03}],['先天不足','',1,{hp:.8,weak:1}]];
const ONSET=[0,2,3,5,6,7,9,10,2,3,9,10];
const ATB={'傾城之貌':{lk:25,sf:8},'才情出眾':{qi:8,sk:{琴:20,詩詞:18,畫:10}},'心思縝密':{iq:12,sk:{棋:22,數:10}},'通曉醫理':{sk:{醫理:38}},'宜男之相':{ht:0,wt:3},'過目不忘':{iq:20,sk:{書:12,詩詞:10}},'能歌善舞':{lk:8,sk:{舞藝:32,樂:22,琴:10}},'清冷孤高':{qi:25,lk:6},'溫婉賢淑':{qi:15,sk:{禮:22,女紅:12}},'將門虎女':{ht:6,sk:{射:32,御:28}},'武藝傍身':{sk:{射:26,御:16}},'繡藝絕倫':{sk:{女紅:42}},'知書達理':{iq:8,sk:{書:20,詩詞:16,禮:12}},'紅顏易老':{lk:25,sf:10},'天生媚骨':{lk:15,sk:{舞藝:12}},'善於斂財':{sk:{數:34}},'醫毒雙絕':{iq:8,sk:{醫理:34}},'慧眼識人':{iq:10},'賢內助之才':{sk:{禮:15,廚藝:15,數:12}},'八面玲瓏':{qi:10,sk:{禮:15}},'巧舌如簧':{iq:6,sk:{詩詞:10}},'仁厚慈愛':{qi:8,sk:{廚藝:10}},'福澤深厚':{sf:6,hr:8},'鐵血手腕':{iq:10,sk:{棋:12}},'隱忍不發':{sk:{棋:10}}};
function mkAt(o){o=o||{};const sk=o.sk||{},s=SKN.map(n=>cl(R(15,60)+(o.sb||0)+(sk[n]||0))),ds=[];
DS.forEach((d,i)=>{if(d[2]&&P(.06))ds.push(i)});[2,3,6,9,10].forEach(i=>{if(P(.05))ds.push(i)});
return{sk:s,lk:cl(R(35,80)+(o.lk||0)),qi:cl(R(35,80)+(o.qi||0)),iq:cl(R(35,80)+(o.iq||0)),sf:cl(R(35,85)+(o.sf||0)),wh:cl(R(25,80)+(o.wh||0)),hr:cl(R(30,90)+(o.hr||0)),sp:cl(R(50,85)),ft:+(R(200,250)/10+(o.ft||0)).toFixed(1),ht:R(150,170)+(o.ht||0),wt:+(R(40,54)+(o.wt||0)).toFixed(1),ds:ds.slice(0,3)}}
function applyTb(a,name){const t=ATB[name];if(!t)return a;['lk','qi','iq','sf','hr','sp','wh'].forEach(k=>a[k]=cl(a[k]+(t[k]||0)));a.ht+=t.ht||0;a.wt=+(a.wt+(t.wt||0)).toFixed(1);if(t.sk)for(const n in t.sk){const i=SKN.indexOf(n);if(i>=0)a.sk[i]=cl(a.sk[i]+t.sk[n])}return a}
function originAt(gi){const c=GS[gi][4],n=GS[gi][0],o={sk:{}};const add=(k,v)=>{o.sk[k]=(o.sk[k]||0)+v};
if(c==1){['琴','書','畫','詩詞'].forEach(k=>add(k,22));o.wh=18;o.sf=14;o.qi=10;o.lk=6}
if(n.includes('鹽商')){add('數',22);add('廚藝',14);add('琴',-10);add('書',-10)}
if(n.includes('評彈')){add('琴',30);add('樂',30);add('舞藝',18);o.qi=-6}
if(c==0){if(gi<=2){['禮','書','棋','琴','畫'].forEach(k=>add(k,16));o.qi=8;o.sf=6}else if(gi==3){add('禮',10);add('書',8)}else if(gi==4){add('廚藝',16);add('女紅',16);o.sf=-18;o.hr=-8;o.wt=-2}else{add('數',30);add('禮',-6);o.sf=8}}
if(c==2){o.lk=4;if(n.includes('暹羅')){o.wh=-24;add('舞藝',26);o.ft=.5}else if(n.includes('高麗')){o.wh=16;['書','詩詞','禮'].forEach(k=>add(k,18))}else if(n.includes('蒙古')||n.includes('準噶爾')){o.wh=-10;add('射',34);add('御',34);o.ht=8;o.wt=8;o.ft=1}else if(n.includes('吐蕃')){o.wh=-8;add('樂',20);add('禮',8);o.sp=8}else{o.wh=-14;add('廚藝',12);add('舞藝',10)}}
if(n.includes('罪臣')){add('禮',12);add('書',14);o.qi=6}
if(n.includes('宮女')){add('廚藝',26);add('女紅',26);o.sf=-10;o.hr=-6}
return o}
function newAt(gi,tn){return applyTb(mkAt(originAt(gi)),tn)}
function kidAt(mom){const pa=S&&S.me&&(mom==='me'?S.me.at:(typeof mom=='number'&&S.npcs&&S.npcs[mom]?S.npcs[mom].at:null));const a=mkAt();if(!pa){a.ds=a.ds.filter(d=>DS[d][2]);return a}
const mix=v=>cl(Math.round((v+R(35,80))/2+R(-8,8)));['lk','qi','iq','sf','wh','hr'].forEach(k=>a[k]=mix(pa[k]));a.sk=pa.sk.map(v=>cl(Math.round(v*.45+R(10,50)*.55)));
a.ds=pa.ds.filter(d=>DS[d][2]&&P(.4));if(P(.04)&&!a.ds.includes(12))a.ds.push(12);return a}
function dfx(o){const r={hp:0,fert:0,lab:0,weak:0,perf:0,sp:0},a=o.at;if(!a)return r;a.ds.forEach(d=>{const f=DS[d][3];for(const k in f)r[k]+=f[k]});const b=a.wt/Math.pow(a.ht/100,2);if(b<17.5){r.hp+=.5;r.fert-=.03}else if(b>26){r.hp+=.4;r.fert-=.03;r.lab+=.03}return r}
function cb(o){const a=o.at,t=S&&S.tas;if(!a||!t)return 0;const c=a.lk*.4+a.qi*.25+a.sf*.1+a.hr*.1+(100-Math.abs(a.wh-t.wh))*.15;return Math.max(-4,Math.min(5,(c-50)/9+(a.sk[t.sk]-45)/30))}
function perfB(o){const a=o.at;return((a.sk[1]+a.sk[11]+a.sk[13]+a.sk[5])/4-45)/250+(a.sp-50)/500+dfx(o).perf}
function whT(v){return v<20?'黝黑':v<40?'健康麥色':v<60?'自然膚色':v<80?'白皙':'冷白如雪'}
function bmiT(a){const b=a.wt/Math.pow(a.ht/100,2);return b<17.5?'纖瘦':b<21?'勻稱':b<24?'豐盈':b<27?'偏胖':'肥胖'}
function tasteTxt(){const t=S.tas;return `愛${t.wh<40?'麥色健康':t.wh<65?'自然膚色':'冰肌玉膚'}、好${SKN[t.sk]}`}
const abar=(l,v)=>`<div class=r><span>${l}</span><i><b style="width:${Math.max(0,Math.min(100,v))}%"></b></i><em>${v|0}</em></div>`;
function dsPills(a){return a.ds.length?a.ds.map(d=>`<span class="pill ${DS[d][2]?'r':''}">${DS[d][0]}${DS[d][2]?'・遺傳':''}</span>`).join(' '):'<span class="pill g">身無疾患</span>'}
function topSk(a,n){return a.sk.map((v,i)=>[v,i]).sort((x,y)=>y[0]-x[0]).slice(0,n).map(([v,i])=>`${SKN[i]}${v|0}`).join('・')}
function atPanel(a){return`<div class=g>${[['顏值',a.lk],['氣質',a.qi],['智商',a.iq],['膚質',a.sf],['髮質',a.hr],['精神',a.sp]].map(([l,v])=>abar(l,v)).join('')}</div><div class=m style="margin:6px 0">膚色：${whT(a.wh)}（${a.wh|0}）・身高 ${a.ht} cm・體重 ${a.wt} kg（${bmiT(a)}）・腳長 ${a.ft} cm</div><div>${dsPills(a)}</div><h3 style="margin-top:12px">技藝</h3><div class=g>${SKN.map((s,i)=>abar(s,a.sk[i])).join('')}</div>`}

const cc=f=>Math.round(Math.max(...f.map(x=>x.pw))*.6+f.reduce((a,x)=>a+x.pw,0)/f.length*.4);
const mkF=a=>a.map(x=>({rel:x[0],job:x[1],pw:x[2],ab:x[3],lo:x[4]}));
const famH=f=>f.map(x=>`${x[0]}・${x[1]}　權${x[2]} 才${x[3]} 忠${x[4]}`).join('<br>');
let pf=()=>S.me.fam[R(0,S.me.fam.length-1)];
const ids=()=>S.npcs.map((n,i)=>i).filter(i=>!S.npcs[i].st);
const Q=()=>typeof S.qi=='number'?S.npcs[S.qi]:null;
const qo=()=>S.qi!=='me'&&Q();
const rn=()=>{const a=ids().filter(i=>i!==S.qi);return a.length?a[R(0,a.length-1)]:ids()[0]};
const yr=k=>Math.floor((S.t-k.b)/12),on=o=>o==='me'?S.me.n:S.npcs[o].n,tag=k=>`${k.n}（${S.reg&&S.reg.k===k?'皇帝':k.sex=='男'?(S.reg?'親王':'皇子'):'公主'}${yr(k)}歲・${KT[k.t][0]}）`;
const sc=k=>k.cai*.25+k.de*.2+k.chong*.3+k.pow*.35+(yr(k)<3?-30:yr(k)<6?-15:yr(k)<12?-5:0);
const L=s=>{S.log.unshift(s);S.log.length=Math.min(S.log.length,18)},pay=n=>S.me.silver>=n?(S.me.silver-=n,1):0;
function kid(n,sex,b,mom,o){const me=mom==='me',t=R(0,KT.length-1),q=KT[t][2],nm=(typeof mom=='number'&&S&&S.npcs&&S.npcs[mom])||0;
const at=kidAt(mom);return Object.assign({n,sex,b,mom,t,at,cai:R(30,60)+((at.iq-50)/6|0)+(q.cai||0)+(me?tf('kc'):0),de:R(30,60)+(q.de||0)+(me?tf('kd'):0),chong:R(25,55)+(q.chong||0),pow:R(5,25)+(q.pow||0)+(me?(S.me.clan/3|0)+tf('kp'):0)+(nm?nm.pow/6|0:0),bond:40+(q.bond||0)+(me?tf('kb'):0)},o||{})}
function mkN(n,rank,favor,fam,kids){const g=R(0,TS.length-1),q=TS[g][2],o={n,rank,favor:cl(favor+(q.f||0)),fam:mkF(fam),kids:kids||[],g,at:applyTb(mkAt(),TS[g][0]),arc:newArc(),pb:(q.a||0)/2|0,sc:cl(R(30,60)+(q.sc||0)),hp:70,al:0,host:R(10,40),st:'',preg:0,fac:R(0,4)};o.fam.forEach(x=>x.pw=cl(x.pw+(q.c||0)));o.pow=cl(cc(o.fam)+o.pb);return o}
function newbie(){if(S.npcs.length>=24||!S.nn.length)return null;const e0=S.nn.splice(R(0,S.nn.length-1),1)[0].split('|'),nm=e0[0],r=+e0[1],n=mkN(nm,r,R(35,60),famFor(r));S.npcs.push(n);return n}
function kinIn(lab){const m=S.me;if(S.npcs.length>=24||!S.nn.length)return null;let x=m.fam.find(f=>f.sx=='女'&&!f.pal&&typeof fAge=='function'&&fAge(f)>=14&&fAge(f)<=24&&/妹/.test(f.rel||''));const n=newbie();if(!n)return null;n.al=62;if(x){n.n=x.nm||n.n;if(x.bt!=null)n.bt=x.bt;n.kin='你的'+(x.rel||lab);m.fam.splice(m.fam.indexOf(x),1)}else{const sn=(m.n||'沈')[0];if(n.n[0]!==sn)n.n=sn+n.n.slice(1);n.kin='你的'+lab}if(typeof ensureAges=='function')ensureAges();msPush&&msPush(n.kin+n.n+'入宮');return n}
function birth(arr,mom){const sex=P(.55)?'男':'女',n=sex=='男'?SN[S.sn++%SN.length]:DN[S.dn++%DN.length];arr.push(kid(n,sex,S.t,mom));S.mood=cl(S.mood+(sex=='男'?5:2)+(mom==='me'?4:0));if(mom==='me')S.me.favor+=6;L(mom==='me'?`你誕下${sex=='男'?'皇子':'公主'}「${n}」！`:`${on(mom)}誕下${sex=='男'?'皇子':'公主'}「${n}」。`)}
function start0(){const g=GS[G][2],q=TS[T][2],m={n:N||'沈氏',g:T,rank:g.r,favor:35+(g.f||0),scheme:30,ally:15,hp:75,emp:30+(g.e||0),silver:30,clan:10,preg:0,kids:[],fo:g.fo||'',jn:g.jn||0,cr:g.cr||0,dw:35,fac:GS[G][5],at:(AT&&AT.g===G?applyTb(JSON.parse(JSON.stringify(AT.a)),TS[T][0]):newAt(G,TS[T][0]))};AT=null;m.shops=initShops(GS[G][0],GS[G][4],G,TS[T][0]);m.scand=0;
m.fam=mkF(GS[G][3]);m.fam.forEach(x=>x.pw=cl(x.pw+(q.c||0)));m.clan=cc(m.fam);
m.ally+=(g.a||0)+(q.a||0);m.silver+=(g.s||0)+(q.s||0);m.scheme+=(g.sc||0)+(q.sc||0);m.hp+=(g.hp||0)+(q.hp||0);m.favor+=q.f||0;m.emp+=q.e||0;
const ea=R(20,48),ep=R(0,EPS.length-1),ka=f=>-(Math.round((ea-18)*f)*12+R(0,11)),dow=P(cl(.8-(ea-20)*.025,.15,.8))?{age:ea+R(18,26),pet:P(.5)?0:R(1,7)}:null;
S=null;
const npcs=genHarem(ka);
npcs[0].host=cl(npcs[0].host+10);
S={earc:{k:ep,s:0,t:0,w:R(6,20),f:{}},darc:dow?{k:R(0,2),s:0,t:0,w:R(8,24),f:{}}:null,cr:genCourt(),chr:[],tas:{wh:[28,50,80][R(0,2)],sk:[0,1,2,3,5,11,13][R(0,6)]},t:0,w:4,ea0:ea,eage:ea,ep,ehp:R(60,95),dow,nat:{eco:R(40,70),mil:R(40,70),pop:R(40,70),stab:R(40,70)},fp:[R(45,70),R(45,65),R(40,65),R(30,55),R(35,60)],heir:null,lowN:0,dip:60,mood:55,sn:gsn,dn:gdn,q:[],harm:{},evid:{},qi:0,nn:genNN(),log:[`你出身${GS[G][0]}，身負「${TS[T][0]}」，入宮為${RK[m.rank]}。當今皇上${ea}歲，性情${EPS[ep][0]}。${dow?'皇太后尚在，後宮之上還有一重天。':'太后早已薨逝，後宮由皇后執掌。'}`],me:m,npcs,set:{me:0,no:0,sn:0},xiu:null};xiuBegin()}
/* ===== 宮鬥 ===== */
function hit(n,i,d,kk,rk){const m=S.me;S.harm[i]=(S.harm[i]||0)+1;n.host=cl(n.host+8);if(P(cl(.3+m.scheme/150+m.ally/300+tf('plot')-rk-(n.sc-40)/400,.1,.85))){n.favor-=d;if(kk)n.kids.forEach(k=>k.chong-=10);m.scheme+=2;L(`你設局讓${n.n}失了聖心。`)}else{m.favor-=10;m.ally-=5;L(`事敗！${n.n}反咬一口，你損了聖眷。`)}}
function hitFam(n,i){const m=S.me;S.harm[i]=(S.harm[i]||0)+1;n.host=cl(n.host+10);if(P(cl(.2+m.scheme/160+m.ally/300+tf('plot')-n.pow/400,.08,.75))){const f=n.fam[R(0,n.fam.length-1)];f.pw-=R(15,25);n.favor-=6;n.kids.forEach(k=>k.pow-=6);m.scheme+=2;L(`你羅織罪證，${n.n}的${f.rel}（${f.job}）遭了彈劾，母家元氣大傷。`)}else{m.favor-=12;m.ally-=6;L(`彈劾不成反被察覺，${n.n}一黨對你恨之入骨。`)}}
function gather(n,i){const m=S.me,e=S.evid[i]||0;n.host=cl(n.host+4);if(P(cl(.35+m.scheme/160+m.ally/250+tf('insight')*.15-n.pow/500,.1,.8))){S.evid[i]=e+1;L(`你的眼線拿到了${n.n}的一條把柄（罪證共${e+1}）。`)}else{m.ally-=3;L(`蒐證不成，險些驚動${n.n}的人。`)}}
function poison(n,i){const m=S.me;S.harm[i]=(S.harm[i]||0)+3;n.host=cl(n.host+12);
if(P(cl(.35+m.scheme/200+tf('plot')+(tf('pois')?.1:0),.15,.8))){n.hp-=R(18,35);n.favor-=3;L(`${n.n}忽然病倒，太醫束手無策。`);
if(n.hp<=0&&P(cl(.45-m.scheme/250-m.ally/400-tf('plot'),.12,.5)))return over('事發賜死',`${n.n}不治身亡，皇上震怒徹查，順著線索查到了你頭上。一杯鴆酒，了結了你的一生。`)}
else if(P(.5)){m.favor-=15;m.ally-=8;L(`下毒之事險些敗露，你被皇上厲聲申斥，${n.n}也生了警覺。`)}else{m.ally-=4;L('你派去的人失了手，所幸沒查到你頭上。')}}
function harmKid(n,i){const m=S.me;S.harm[i]=(S.harm[i]||0)+3;n.host=cl(n.host+15);
if(P(cl(.4+m.scheme/200+tf('plot')-.1,.15,.8))){const k=n.kids[R(0,n.kids.length-1)];k.chong-=15;k.pow-=8;if(yr(k)<6&&P(.15)){n.kids=n.kids.filter(x=>x!==k);L(`${k.n}忽然夭折，${n.n}悲痛欲絕，誓要查出元兇。`)}else L(`${n.n}的孩子${k.n}遭了暗算，大病一場。`)}
else{m.favor-=18;m.ally-=8;L('加害皇嗣之事敗露，皇上震怒，你名聲大損。')}}
function report(n,i){const m=S.me,e=S.evid[i]||0;S.evid[i]=0;n.host=cl(n.host+20);if(P(cl(.35+e*.15+m.favor/300+(50-S.mood)/500-n.favor/400,.2,.85))){n.favor-=25;n.rank=Math.max(0,n.rank-1);L(`皇上看了罪證，${n.n}被降為${RKN(n)}，禁足思過。`)}else{m.favor-=10;L('皇上覺得證據不足，反疑你構陷他人。')}}
function depose(n,i){const m=S.me,e=S.evid[i]||0;S.evid[i]=0;S.harm[i]=(S.harm[i]||0)+3;
if(P(cl(.12+e*.1+m.favor/300+m.ally/400+tf('plot')+(50-S.mood)/400+(S.dow?(S.me.dw-50)/500-(S.dow.pet===i?.12:0):0)-n.pow/300-n.favor/500,.05,.7))){n.st='廢后';n.favor=0;n.kids.forEach(k=>k.chong-=20);vacancy(`皇后${n.n}罪證確鑿，被皇上廢黜，打入冷宮`)}
else{m.favor-=25;m.ally-=12;n.host=cl(n.host+30);if(P(.35)&&m.rank>0){m.rank--;L(`廢后之議不成，你被指干預中宮，降為${RK[m.rank]}。`)}else L('廢后之議不成，皇上對你起了疑心，皇后一黨更是恨你入骨。')}}
function plot(i){const n=S.npcs[i],m=S.me,q=i===S.qi,e=S.evid[i]||0,o=[{l:'散播流言（穩妥）',f(){hit(n,i,12,0,.1)}},{l:'構陷失德（兇險，波及子女）',f(){hit(n,i,22,1,.35)}},{l:'重金收買近侍（耗銀30）',f(){pay(30)?hit(n,i,16,0,.05):L('銀兩不足。')}},{l:'羅織罪證，彈劾其母家（兇險）',f(){hitFam(n,i)}},{l:`暗中蒐證（罪證現有${e}）`,f(){gather(n,i)}},{l:'暗中下毒（極兇險，可能被賜死）',f(){poison(n,i)}}];
if(n.kids.length)o.push({l:'陷害其子嗣（極兇險）',f(){harmKid(n,i)}});
o.push({l:'栽贓巫蠱（兇險，成功得2條罪證）',f(){frame(n,i)}});
if(n.preg>0)o.push({l:`對其腹中胎兒下手（極兇險，孕${11-n.preg}月）`,f(){hurtPreg(n,i)}});
if(q&&m.rank>=5&&(m.clan>=55||m.fam.some(x=>/兵|軍|統領|侯|參將/.test(x.job)&&x.pw>=45)))o.push({l:'發動宮變，逼宮廢后（極兇險，耗銀100）',f(){coup(n,i)}});
if(e>=1&&!q)o.push({l:`呈交罪證，請皇上降罪（罪證${e}）`,f(){report(n,i)}});
if(q&&m.rank>=5)o.push({l:`聯絡言官，上奏廢后（需罪證3，現有${e}）`,f(){e>=3?depose(n,i):L('罪證不足，貿然上奏只會自取其辱，你按下不表。')}});
choose(`對${n.n}用什麼手段？`,o)}
function vacancy(why){if(S.reg){S.qi=null;L(why+'。');return}S.qi=null;L(`${why}，中宮虛懸，六宮蠢蠢欲動。`);if(S.me.rank>=6)S.q.unshift(crownEv());else L(crown(0))}
function crownEv(){const m=S.me;return{t:`中宮空懸，皇上有意在六宮中擇賢立后。你位居${RK[m.rank]}，足以一爭。`,o:[['廣結人脈、重金疏通（耗銀60）',()=>crown(pay(60)?14:3)],['聯合嬪妃共同舉薦自己',()=>crown(m.ally/6)],['按兵不動，靜觀其變',()=>crown(0)]]}}
function crown(b){const m=S.me,c=ids().filter(i=>S.npcs[i].rank>=6).map(i=>{const n=S.npcs[i];return{i,s:n.rank*6+n.favor*.35+n.pow*.3+(n.kids.some(k=>k.sex=='男')?8:0)+R(0,18)}});
if(m.rank>=6)c.push({i:'me',s:m.rank*6+m.favor*.35+m.clan*.3+m.ally*.15+(m.kids.some(k=>k.sex=='男')?8:0)+(b||0)+R(0,18)});
if(!c.length){const a=ids().sort((x,y)=>S.npcs[y].rank-S.npcs[x].rank);c.push({i:a[0],s:0})}
c.sort((x,y)=>y.s-x.s);const w=c[0].i;S.qi=w;
if(w==='me'){m.rank=8;L('皇上下旨冊封你為皇后！');return'冊封大典上，你身著鳳冠霞帔，母儀天下！'}
const n=S.npcs[w];n.rank=8;L(`${n.n}被冊立為新后。`);return`${n.n}被冊立為新的皇后。`}
function kill(i,why){const n=S.npcs[i];n.st='薨逝';n.favor=0;L(`${n.n}${why}。`);if(S.qi===i)vacancy(`皇后${n.n}崩逝`)}
function courtFight(){const a=ids();if(a.length<3)return;const x=a[R(0,a.length-1)],y=a[R(0,a.length-1)];if(x==y)return;const A=S.npcs[x],B=S.npcs[y],sa=A.sc+A.pow/2+A.favor/2+R(0,40),sb=B.sc+B.pow/2+B.favor/2+R(0,40),w=sa>sb?A:B,l=sa>sb?B:A,k=R(0,2);
if(k==0){l.favor-=R(6,12);w.favor+=3;L(`${w.n}暗中設局，${l.n}失了聖心。`)}else if(k==1){l.hp-=R(8,20);L(`${l.n}忽然染病，宮中傳言是${w.n}所為。`)}else{l.kids.forEach(c=>c.chong-=6);l.favor-=4;L(`${w.n}與${l.n}在御前互相攻訐，${l.n}落了下風。`)}
if(l.preg&&P(.35))miscarry(l,`${l.n}遭人暗算，不慎小產`);if(l.favor<10&&l.rank>0&&l.rank<8&&P(.4)){l.rank--;L(`${l.n}因失寵被降為${RK[l.rank]}。`)}}
const trace=(a,n)=>{if(P(cl(.3+S.me.scheme/150+S.me.ally/200+tf('insight')*.15,.1,.85))){S.evid[a]=(S.evid[a]||0)+1;return`你順藤摸瓜，查出幕後主使是${n.n}，並握住一條罪證。`}return'你查來查去，始終沒有確鑿證據。'};
const ATK=[(a,n)=>({t:'你宮裡的一道點心被人動了手腳。',o:[['請太醫驗毒',()=>{if(P(.6+tf('pois')*.3)){S.me.ally+=2;return'驗出毒物！'+trace(a,n)}S.me.hp-=tf('guard')?6:15;return'驗不出來，你已吃下少許，腹痛了好幾日。'}],['讓宮人試毒',()=>{S.me.ally-=4;return'宮人替你受了毒，你保住了自己，卻失了一個心腹。'}],['將計就計，佯裝中毒',()=>{if(P(.4+S.me.scheme/200)){S.me.favor+=6;n.favor-=6;S.evid[a]=(S.evid[a]||0)+1;return'你裝病引出了下毒之人，皇上心疼你，你也抓住了對方把柄。'}S.me.hp-=10;return'被對方看穿，你真的中了毒。'}]]}),
(a,n)=>({t:'宮中忽然流傳你與侍衛有私的流言，越傳越兇。',o:[['請皇上明察',()=>{if(P(.45+S.me.favor/200)){S.me.favor+=3;return'皇上信你清白，下令杖斃造謠的宮人。'+trace(a,n)}S.me.favor-=12;return'皇上將信將疑，你受了冷落。'}],['以牙還牙，反散播對方的流言',()=>{hit(n,a,10,0,.15);return'你借力打力，不管是不是她。'}],['閉門不出，靜待風頭過去',()=>{S.me.favor-=4;S.me.hp+=3;return'流言慢慢散去，你的名聲卻有些受損。'}]]}),
(a,n)=>({t:'有人在你的寢宮搜出一個寫著皇上生辰的巫蠱人偶，這是要置你於死地！',o:[['哭訴求皇上徹查',()=>{if(P(cl(.35+S.me.favor/150+S.me.ally/300,.1,.85))){S.me.favor+=4;return'皇上查明是栽贓，震怒不已。'+trace(a,n)}S.me.favor-=22;if(P(.4)&&S.me.rank>0){S.me.rank--;return`皇上龍顏大怒，將你降為${RK[S.me.rank]}。`}return'皇上雖未治罪，卻對你冷淡了許多。'}],['動用母家人脈周旋',()=>{const f=pf();if(P(cl(S.me.clan/110,.1,.8))){f.lo+=3;return`${f.rel}在朝中奔走，壓下了此事。`}f.pw-=8;S.me.favor-=12;return'母家使了力卻不奏效，你受了牽連。'}],['請嬪妃作證，拉人下水',()=>{S.me.ally-=8;S.me.favor+=2;hit(n,a,10,0,.2);return'你拉了幾位嬪妃替你作證，事情不了了之。'}]]}),
(a,n)=>{const f=pf();return{t:`御史突然上疏彈劾你的${f.rel}（${f.job}），背後似有人指使。`,o:[['重金疏通（耗銀40）',()=>{if(!pay(40)){f.pw-=15;return'銀兩不足，家人受了處分。'}f.lo+=4;return'風波平息。'+trace(a,n)}],['反擊其母家',()=>{hitFam(n,a);return'你以牙還牙。'}],['認栽，設法保全家人',()=>{f.pw-=10;S.me.scheme+=1;return'你斷臂求生，母家元氣小傷。'}]]}},
(a,n)=>{const c=S.me.kids[R(0,S.me.kids.length-1)];return{t:`${c.n}身邊的奶母忽然暴斃，孩子也病懨懨的，似有人暗中加害。`,o:[['親自守護',()=>{S.me.hp-=8;c.bond+=6;return`你寸步不離，${c.n}平安渡過難關。`}],['請御醫診治並徹查（耗銀30）',()=>{if(!pay(30)){c.chong-=5;return'銀兩不足，孩子受了苦。'}c.bond+=3;return'孩子平安。'+trace(a,n)}],['交由乳母看顧，自己查案',()=>{if(P(.2)&&yr(c)<6){S.me.kids=S.me.kids.filter(x=>x!==c);S.me.hp-=12;return`${c.n}不幸夭折，你痛不欲生，誓要報仇。`}c.chong-=4;return'孩子雖挺了過來，卻受了不少罪。'+trace(a,n)}]]}},
(a,n)=>({t:'有人對你腹中的孩子動了殺心，安胎藥似乎被人調換了。',o:[['請太醫驗藥並加強守衛（耗銀25）',()=>{if(!pay(25)){if(P(.4)){S.me.preg=0;S.me.hp-=15;return'銀兩不足，防備不周，胎兒沒能保住。'}return'你勉強保住了胎兒。'}S.me.ally+=2;return'你及時察覺，保住了胎兒。'+trace(a,n)}],['以靜制動，裝作不知',()=>{if(P(.35-(tf('insight')?.15:0))){S.me.preg=0;S.me.hp-=15;return'你的大意葬送了孩子。'}S.me.scheme+=2;return'你順利挺過，並暗暗記下了對方。'}],['請皇上派人保護',()=>{S.me.favor+=3;return'皇上增派了侍衛，對你更為疼惜。'}]]})];
function atkEv(){const m=S.me,c=ids().filter(i=>P(cl((S.npcs[i].host+(i===S.qi?50-m.emp/2:0)-S.npcs[i].al/2)/260,0,.3))&&!(S.dow&&m.dw>=60&&P(.4)));if(!c.length)return null;const a=c[R(0,c.length-1)],n=S.npcs[a],ty=[0,1,2,3];if(m.kids.length)ty.push(4,4);if(m.preg)ty.push(5);if(m.preg&&m.pub)ty.push(5,5);const e=ATK[ty[R(0,ty.length-1)]](a,n);e.atk=1;return e}
function announceEv(){return{t:'太醫診出你有了身孕！此事要不要公開？',o:[['立即稟報皇上，大張旗鼓',()=>{S.me.favor+=10;S.mood=cl(S.mood+8);S.me.pub=1;return'皇上龍顏大悅，賞賜不斷，但六宮的目光也都盯在了你的肚子上。'}],['隱瞞幾個月，待胎穩再說',()=>{S.me.pub=0;S.me.scheme+=2;return'你按下不表，暗中保胎，反倒安全。'}]]}}
function labourEv(){return{t:'你臨盆在即，陣痛襲來，產房內外人心各異。',o:[['請最好的穩婆與太醫守著（耗銀30）',()=>deliver(pay(30)?0.04:0.15,0)],['依宮中慣例，由內務府安排',()=>deliver(0.1,4)],['服參湯強撐生產',()=>{S.me.hp-=8;return deliver(0.07,0)}]]}}
function deliver(risk,hl){const m=S.me,r=risk-(tf('kh')?0.03:0)-(tf('luck')?0.02:0)+dfx(m).lab;m.hp-=hl;m.pub=0;
if(P(r)){m.hp-=18;L('你難產了，九死一生，孩子沒能保住。');return'你難產血崩，雖保住性命，孩子卻沒能活下來。'}
birth(m.kids,'me');const c=m.kids[m.kids.length-1];return`母子平安，你誕下${c.sex=='男'?'皇子':'公主'}「${c.n}」。皇上賞賜不斷。`}
function miscarry(n,why){n.preg=0;n.hp-=R(8,18);n.favor-=4;L(why+'。')}
function mw(){return S.mood>=80?'龍顏大悅':S.mood>=60?'心情舒暢':S.mood>=40?'平和':S.mood>=22?'不悅':'雷霆震怒'}
function adj(b){const m=S.me,d=m.favor-b,ep=EPS[S.ep][2];if(d>0)m.favor=b+Math.round(d*(0.6+S.mood/125)*ep.fm);else if(d<0)m.favor=b+Math.round(d*ep.harsh*(S.mood<30?1.3:1))}
function hurtPreg(n,i){const m=S.me;S.harm[i]=(S.harm[i]||0)+3;n.host=cl(n.host+20);
if(P(cl(.4+m.scheme/200+tf('plot')-.1,.15,.8))){miscarry(n,`${n.n}忽然小產，宮中人心惶惶`);if(P(cl(.3-m.scheme/300,.08,.3))){m.favor-=20;m.ally-=10;L('小產之事查出疑點，矛頭隱隱指向你，皇上對你起了疑心。')}}
else{m.favor-=18;m.ally-=8;S.mood=cl(S.mood-6);if(P(.3)&&m.rank>0){m.rank--;L(`謀害龍胎之事敗露，你被降為${RK[m.rank]}。`)}else L('謀害龍胎之事敗露，皇上大怒，你被申斥禁足。')}}
function frame(n,i){const m=S.me;S.harm[i]=(S.harm[i]||0)+2;n.host=cl(n.host+15);
if(P(cl(.35+m.scheme/180+tf('plot')+m.ally/400-n.pow/500,.1,.75))){S.evid[i]=(S.evid[i]||0)+2;L(`你暗中將巫蠱人偶埋入${n.n}宮中，只待「意外」發現。`)}
else{m.favor-=18;m.ally-=8;if(P(.15)&&m.rank>0){m.rank--;L(`栽贓之事敗露，你被降為${RK[m.rank]}。`)}else L('栽贓之事被識破，皇上對你起了疑心。')}}
const MIL=/兵|軍|統領|侯|參將|汗|統帥|將/;
function coup(n,i){const m=S.me;if(!pay(100)){L('銀兩不足，宮變只是空想。');return}
const mil=Math.max(0,...m.fam.filter(x=>MIL.test(x.job)).map(x=>x.pw)),p=cl(.1+mil/250+m.ally/300+m.scheme/300+(S.mood<30?.08:0)-n.pow/350,.05,.55);S.harm[i]=(S.harm[i]||0)+5;
if(P(p)){n.st='廢后';n.favor=0;n.kids.forEach(k=>k.chong-=25);m.favor+=5;S.mood=cl(S.mood-15);vacancy(`${m.n}聯合母家武將發動宮變，控制了中宮，皇后${n.n}被廢並幽禁`)}
else if(P(.5))over('謀逆伏誅','你勾結外臣發動宮變，卻被禁軍當場拿下。皇上震怒，賜你三尺白綾，母家滿門抄斬。');
else{m.favor=0;m.ally-=25;m.rank=Math.max(0,m.rank-2);m.fam.forEach(x=>x.pw-=30);L('宮變失敗，皇上念舊情未殺你，但將你降位幽禁，母家元氣大傷。')}}
function seize(s,w){const m=S.me,win=S.npcs[w.o],mil=Math.max(0,...m.fam.filter(x=>MIL.test(x.job)).map(x=>x.pw)),poor=m.silver<100;m.silver=Math.max(0,m.silver-100);
const p=cl(.1+(m.clan+mil)/450+m.ally/300+s.pow/300+(S.qi==='me'?.08:0)-(w.k.pow+win.pow)/450-(poor?.12:0),.04,.6);
if(P(p)){S.nk=s;S.nko='me';over('宮變奪位',`新帝${w.k.n}繼位不過數日，你聯合母家與禁軍發動宮變，擁立自己的兒子${s.n}登基。${yr(s)>=16?'新帝感念生母，你被尊為皇太后。':'新帝年幼，你垂簾聽政，成為實際的掌權者。'}${win.n}${P(.5)?'被幽禁終身':'被賜死'}，${w.k.n}被廢為庶人。`)}
else over('謀逆伏誅',`你發動宮變扶${s.n}登基，卻在關鍵時刻被禁軍倒戈出賣。新帝${w.k.n}下令將你賜死，母家滿門抄斬，${s.n}被圈禁終身。`)}
/* ===== 行動 ===== */
const ACT=[['經營產業','開鋪子、賣官鬻爵、整頓經營',()=>bizAct()],
['獻藝邀寵','聖寵＋＋',()=>{const m=S.me;if(P(cl(.6+tf('perf')+perfB(m),.1,.95))){m.favor+=9+Math.max(0,cb(m)/2);L('一曲驚鴻，皇上龍心大悅。')}else{m.favor+=2;L('獻藝平平，皇上只淡淡賞了些綢緞。')}}],
['結交宮人','人脈＋',()=>{S.me.ally+=7;L('你籠絡宮人，耳目漸多。')}],
['巴結皇后','皇后好感＋',()=>{if(S.qi==='me'){choose('處置哪位妃嬪？',ids().map(i=>{const n=S.npcs[i];return{l:`${n.n}（${RKN(n)}・盟${n.al|0} 怨${n.host|0}）`,f(){choose('如何處置？',[{l:'賞賜安撫（耗銀20）',f(){if(!pay(20))return L('銀兩不足。');n.al+=15;n.host-=10;L(`你賞了${n.n}，以示中宮寬厚。`)}},{l:'申斥立威',f(){n.favor-=6;n.host+=8;S.me.scheme+=1;L(`你當眾申斥${n.n}，六宮肅然。`)}},{l:'降位處罰（需她有過失，否則損聖眷）',f(){if(n.rank>0&&P(cl(.45+S.me.favor/200,.2,.85))){n.rank--;n.favor-=8;n.host+=25;L(`你以中宮之權降${n.n}為${RKN(n)}。`)}else{S.me.favor-=4;L('皇上覺得你處置過苛，略有微詞。')}}}])}}}));return 1}
if(!qo()){L('中宮空懸，你無處請安，只在宮中靜靜等待。');return}
S.me.emp+=8;L('你向皇后請安奉承，皇后面色稍霽。')}],
['調養身子','健康、精神＋，體態回復',()=>{const a=S.me.at;S.me.hp+=12;a.sp=cl(a.sp+6);const ib=20.5*Math.pow(a.ht/100,2);a.wt=+(a.wt+Math.sign(ib-a.wt)*Math.min(1.5,Math.abs(ib-a.wt))).toFixed(1);L('你靜心調養，氣色漸好。')}],
['讀書習藝','心機＋，書、詩詞略進',()=>{const a=S.me.at;a.sk[2]=cl(a.sk[2]+R(0,2));a.sk[13]=cl(a.sk[13]+R(0,2));S.me.scheme+=4;S.me.favor+=1;L('你苦讀詩書，漸有城府。')}],
['打點賄賂','耗銀20，聖寵、人脈＋',()=>{if(pay(20)){S.me.favor+=8;S.me.ally+=4;L('你打點了御前近侍。')}else L('銀兩不足，白白耽誤了一週。')}],
['傳書母家','資助或差遣家人',()=>{choose('聯絡哪位家人？',S.me.fam.map(f=>({l:`${f.rel}・${f.job}（權${f.pw|0} 才${f.ab|0} 忠${f.lo|0}）`,f(){choose('做什麼？',[{l:'資助銀兩（耗銀30，提升其權勢、才幹、忠誠）',f(){if(!pay(30))return L('銀兩不足。');f.pw+=6;f.lo+=4;f.ab+=2;L(`${f.rel}收到銀兩，感念不已。`)}},{l:'差遣出力（得銀兩與人脈，耗其忠誠）',f(){S.me.silver+=Math.round(f.ab/2+f.pw/4);S.me.ally+=Math.round(f.pw/10)+1;f.lo-=3;L(`${f.rel}為你奔走，母家替你打點了一番。`)}}])}})));return 1}],
['暗中設計','宮鬥：流言、蒐證、下毒、廢后…',()=>{choose('設計誰？',ids().map(i=>{const n=S.npcs[i];return{l:`${n.n}（${RKN(n)}${i===S.qi?'・中宮':''}・母族${n.pow|0}・罪證${S.evid[i]||0}）`,f(){plot(i)}}}));return 1}],
['結盟拉攏','贈禮結交妃嬪，化敵為友',()=>{choose('拉攏誰？',ids().map(i=>{const n=S.npcs[i];return{l:`${n.n}（${RKN(n)}・盟${n.al|0} 怨${n.host|0}）`,f(){if(!pay(25))return L('銀兩不足。');n.al+=R(12,22);n.host-=R(6,12);S.me.ally+=2;L(`你贈禮給${n.n}，兩人走得更近了。`)}}}));return 1}],
['教養子女','才德孝心＋',()=>{if(!S.me.kids.length){L('你還沒有子嗣可教養。');return}choose('教養哪位？',S.me.kids.map(k=>({l:tag(k),f(){k.cai=cl(k.cai+R(3,7));k.de=cl(k.de+R(2,5));k.bond=cl(k.bond+4);L(`你親自教導${k.n}，進益不小。`)}})));return 1}],
['為子籌謀','拉攏朝臣／公主聯姻',()=>{if(!S.me.kids.length){L('你還沒有子嗣。');return}choose('為誰籌謀？',S.me.kids.map(k=>({l:tag(k),f(){S.me.ally-=2;if(k.sex=='男'){k.pow=cl(k.pow+R(6,10));L(`你暗中為${k.n}籠絡朝臣，聲勢漸起。`)}else{k.pow=cl(k.pow+8);S.me.ally+=6;L(`你替${k.n}結交名門，母家多了助力。`)}}})));return 1}],
['寬慰聖心','安撫皇上情緒，聖寵＋',()=>{const m=S.me;if(S.mood<25){if(P(.5+tf('perf')/2+(tf('insight')?.15:0))){S.mood+=15;m.favor+=8;L('你以軟語寬慰，皇上的怒氣漸消。')}else{m.favor-=6;L('皇上遷怒於你，你只得退下。')}}else{S.mood+=R(5,10);m.favor+=3;L('你陪皇上說了會兒話，皇上心情舒緩了不少。')}S.mood=cl(S.mood)}],
['侍奉太后','太后好感＋，或得賞賜',()=>{if(!S.dow){L('太后已不在人世。');return}S.me.dw+=R(6,12);if(P(.25)){S.me.silver+=15;L('你向太后請安，太后賞了你些體己。')}else L('你到慈寧宮陪太后說了半日話。')}],
['研習技藝','選一項技藝苦練（棋琴書畫、六藝、廚藝…）',()=>{const a=S.me.at;choose('練習哪項技藝？',SKN.map((s,i)=>({l:`${s}（現${a.sk[i]|0}）`,f(){const g=a.sk[i]>=90?1:Math.max(1,Math.round(R(3,6)+(a.iq-50)/20+(a.sp>60?1:0)));a.sk[i]=cl(a.sk[i]+g);a.sp=cl(a.sp-2);L(`你日夜勤練${s}，進益${g}點。`)}})));return 1}],
['梳妝保養','顏值、膚質、髮質＋，耗銀10',()=>{if(!pay(10))return L('銀兩不足，只得素面度日。');const a=S.me.at;a.lk=cl(a.lk+R(1,3));a.sf=cl(a.sf+R(1,3));a.hr=cl(a.hr+R(1,3));a.sp=cl(a.sp+2);L('你悉心梳妝保養，膚如凝脂、髮若流雲。')}],
['延醫問藥','診治疾病，耗銀25',()=>{const a=S.me.at;if(!a.ds.length){S.me.hp+=4;L('太醫請脈，說你身子無大礙，只開了些補藥。');return}choose('診治哪種病？',a.ds.map(d=>({l:DS[d][0]+(DS[d][2]?'（遺傳之疾，難以根治）':''),f(){if(!pay(25))return L('銀兩不足，請不起太醫。');const p=(DS[d][2]?.1:.45)+a.sk[12]/300+(tf('hp')>=10?.05:0);if(P(p)){a.ds=a.ds.filter(x=>x!==d);L(`太醫對症下藥，你的「${DS[d][0]}」痊癒了。`)}else{S.me.hp+=5;L(`太醫開了方子，「${DS[d][0]}」緩解了些，但未根治。`)}}})));return 1}],
['求子調理','耗銀20，服藥調養，受孕率＋',()=>{const m=S.me;if(m.preg)return L('你已有身孕，無需再服。');if(!pay(20))return L('銀兩不足，抓不起藥。');m.fb=Math.min(.18,(m.fb||0)+.04);m.hp+=3;L(`你請太醫開了調養的方子，受孕率提升（目前每次侍寢約${Math.round(pregRate()*100)}%）。`)}]];
/* ===== 事件 ===== */
const e=(t,fx)=>({env:1,t,o:[['知道了',fx]]});
const ENV=[()=>e('今年大旱，皇上下令六宮縮減用度，為百姓祈雨。',()=>{S.me.silver=Math.max(0,S.me.silver-12);return'你的用度被縮減了。'}),
()=>e('江南水患，朝廷開倉賑災，後宮也要捐出體己。',()=>{S.me.silver=Math.max(0,S.me.silver-15);S.me.favor+=1;return'你捐了些銀兩，落了個賢名。'}),
()=>e('邊關告急，朝廷徵調兵馬，武將之家聲勢大漲。',()=>{[S.me].concat(S.npcs).forEach(o=>o.fam.forEach(x=>{if(/兵|軍|總兵|統領|侯|參將/.test(x.job))x.pw+=8}));return'武將世家的權勢水漲船高。'}),
()=>e('新一批秀女入宮，後宮又添新人。',()=>{const n=newbie();return n?`${n.n}入宮，位居${RKN(n)}。`:'今年的選秀人數不多。'}),
()=>e('萬壽節將至，六宮需獻禮賀壽。',()=>{S.me.silver=Math.max(0,S.me.silver-10);return'你備了賀禮，花了一筆銀兩。'}),
()=>e('京中時疫蔓延，宮中人心惶惶。',()=>{S.me.hp-=6;S.me.kids.forEach(k=>k.chong-=1);return'你受了些影響，身子有些沉重。'}),
()=>e('日有食之，皇上下罪己詔，後宮噤若寒蟬。',()=>{S.me.favor-=2;return'皇上這陣子心緒不佳，連帶冷落了後宮。'}),
()=>e('歲末年終，皇上大賞六宮。',()=>{const g=20+S.me.rank*6;S.me.silver+=g;return`你得了賞銀${g}兩。`}),
()=>e('今年風調雨順，五穀豐登，皇上龍心大悅。',()=>{S.me.silver+=15;S.me.favor+=2;return'宮中上下喜氣洋洋，你也沾了喜氣。'}),
()=>e('朝堂黨爭激烈，幾家權貴此起彼落。',()=>{const a=ids(),o=P(.3)?S.me:S.npcs[a[R(0,a.length-1)]],x=o.fam[R(0,o.fam.length-1)],d=R(-14,14);x.pw+=d;return`${o===S.me?'你':o.n}的${x.rel}在這場黨爭中${d>=0?'得勢':'失勢'}。`}),
()=>e('皇上近日獨寵一位妃嬪，六宮側目。',()=>{const n=S.npcs[rn()];n.favor+=15;return`${n.n}風頭無兩。`}),
()=>e('欽天監奏報天象有異，朝野議論紛紛。',()=>{S.npcs.forEach(n=>n.kids.forEach(k=>k.pow+=R(0,2)));return'朝中各派都在借題發揮。'})];
const NE=[[-6,0,-6,0],[-4,0,-5,-2],[-3,-4,0,-5],[-1,0,0,0],[-2,0,1,1],[-2,0,-6,-2],[0,0,-2,-4],[-2,0,2,1],[7,0,6,0],[0,0,0,-6],[0,0,0,-1],[0,0,-1,-3]];
const EM=[-8,-6,-8,5,6,-6,-10,8,10,-4,0,-5];ENV.forEach((f,i)=>{const o=f;ENV[i]=()=>{const x=o(),fx=x.o[0][1];x.o[0][1]=()=>{S.mood=cl(S.mood+EM[i]);addN(NE[i]);return fx()};return x}});
const PE=[()=>qo()&&{t:'皇后賜你一盞參茶，氣味似乎有些怪。',o:[['一飲而盡',()=>{if(P(.35)&&!tf('pois')){S.me.hp-=tf('guard')?8:20;return'茶中有藥！你腹痛如絞，險些喪命。'}S.me.emp+=8;return'茶無異樣，皇后滿意地點頭。'}],['藉口推辭',()=>{S.me.emp-=8;return'皇后臉色一沉，你得罪了中宮。'}],['請太醫當場驗茶',()=>{if(tf('pois')||tf('insight')||S.me.scheme>45){S.me.ally+=3;S.evid[S.qi]=(S.evid[S.qi]||0)+1;return'你驗出茶中有異，卻不動聲色，反攥住了皇后的把柄。'}S.me.emp-=8;return'驗不出什麼，皇后拂袖而去。'}]]},
()=>S.me.favor>35&&{t:'皇上夜遊御花園，似乎想找人說話。',o:[['上前吟詩相伴',()=>{S.me.favor+=8+(tf('perf')*20|0);return'皇上聽得入神，賞了你一支玉簪。'}],['遠遠避開，不爭鋒',()=>{S.me.ally+=4;S.me.hp+=3;return'你平靜度日，旁人對你多了幾分好感。'}]]},
()=>{const i=rn(),n=S.npcs[i];return{t:`${n.n}因言行失當被罰跪，向你遞眼色求助。`,o:[['出言求情',()=>{S.me.ally+=6;n.al+=12;return`${n.n}記下了你的恩情。`}],['袖手旁觀',()=>{S.me.ally-=2;return'你明哲保身，卻有些寒了人心。'}],['落井下石',()=>{n.favor-=10;n.host+=15;S.harm[i]=(S.harm[i]||0)+1;S.me.scheme+=2;return`${n.n}顏面盡失，從此恨你入骨。`}]]}},
()=>{const f=pf();return{t:`${f.rel}（${f.job}）在朝中有升遷之機，但需銀兩打點。`,o:[['寄銀三十兩相助',()=>{if(!pay(30))return'銀兩不足，只得作罷。';f.pw+=10;f.lo+=3;return`${f.rel}順利升遷，權勢大增。`}],['回信勸其謹慎',()=>{f.ab+=3;S.me.scheme+=2;return`${f.rel}聽勸，行事更穩。`}]]}},
()=>{const f=pf();return{t:`${f.rel}（${f.job}）被御史彈劾，牽連母家。`,o:[['重金疏通（耗銀40）',()=>{if(!pay(40)){f.pw-=15;return'銀兩不足，家人受了處分。'}f.lo+=5;return'風波平息，家人感激你。'}],['動用宮中人脈說情',()=>{if(S.me.ally<30){f.pw-=15;return'人脈不夠，家人受貶。'}S.me.ally-=8;f.pw-=3;return'有驚無險。'}],['撇清關係，明哲保身',()=>{S.me.fam.forEach(x=>x.lo-=6);f.pw-=20;S.me.scheme+=2;return'你保住自己，母家卻寒了心。'}]]}},
()=>{const f=S.me.fam.find(x=>x.lo<40);return f&&{t:`${f.rel}（${f.job}）對你心生怨懟，私下與別家來往。`,o:[['修書安撫，許以好處',()=>{f.lo+=12;S.me.silver-=10;return`${f.rel}回心轉意。`}],['嚴詞敲打',()=>{f.lo+=4;f.pw-=4;return`${f.rel}收斂了，卻心有芥蒂。`}],['任其自便',()=>{if(P(.5)){S.me.favor-=8;return`${f.rel}洩露了你的話柄，你失了聖心。`}return'暫時相安無事。'}]]}},
()=>{const f=pf();return{t:`皇上問起你的${f.rel}（${f.job}），似有任用之意。`,o:[['謙辭，不敢居功',()=>{S.me.favor+=3;f.lo+=3;return'皇上讚你知進退。'}],['藉機舉薦',()=>{if(P(.5+f.ab/200)){f.pw+=12;return`${f.rel}得了重用，權勢大增。`}f.pw-=4;S.me.favor-=3;return'皇上覺得你干預朝政。'}]]}},
()=>S.me.preg&&{t:'你有孕在身，有人送來「安胎」補品。',o:[['照單全收',()=>{if(P(.3)&&!tf('pois')){S.me.preg=0;S.me.hp-=tf('guard')?8:20;return'補品含麝香！胎兒沒能保住。'}S.me.favor+=4;return'補品無恙，皇上聽聞大為歡喜。'}],['請太醫查驗',()=>{S.me.ally+=4;return'查出補品有問題，你順藤摸瓜，揪出一名眼線。'}],['全部拒收',()=>{S.me.ally-=2;return'你滴水不漏，胎象平穩。'}]]},
()=>S.me.rank>=2&&S.me.rank<TOP&&{t:'皇上心情大好，問你想要什麼賞賜。',o:[['金銀財帛',()=>{S.me.silver+=60;return'你得了豐厚賞銀。'}],['請求晉位',()=>{if(P(.4+tf('luck')*.2)){S.me.rank++;return`皇上准了，你晉為${RK[S.me.rank]}！`}S.me.favor-=4;return'皇上不悅你貪心，只道再議。'}],['只求皇上常來',()=>{S.me.favor+=12;return'皇上笑你癡心，當夜便宿在你宮中。'}]]},
()=>({t:'貼身宮女被人收買，你發現她偷看你的書信。',o:[['處死立威',()=>{S.me.scheme+=3;S.me.ally-=6;return'宮中人人噤若寒蟬。'}],['將計就計，傳假消息',()=>{const n=S.npcs[rn()];n.favor-=8;S.me.scheme+=4;return`對方中計，${n.n}吃了啞巴虧。`}],['寬恕並收為心腹',()=>{if(P(.3-tf('insight')*.25)){S.me.favor-=8;return'她終究反水，你吃了大虧。'}S.me.ally+=8;return'她感激涕零，從此死心塌地。'}]]}),
()=>qo()&&S.me.rank<6&&S.qi!==1&&!S.npcs[1].st&&{t:'柳貴妃遣人邀你結盟，共同對付皇后。',o:[['答應結盟',()=>{S.me.ally+=10;S.me.emp-=10;S.npcs[1].al+=20;return'你與貴妃達成默契，皇后冷眼相看。'}],['婉拒',()=>{S.me.emp+=2;return'你兩邊不得罪。'}],['假意答應，轉告皇后',()=>{S.me.emp+=14;S.me.ally-=6;S.npcs[1].host+=20;if(P(.4)){S.me.favor-=10;return'陰謀敗露，貴妃恨你，皇上也有耳聞。'}return'皇后大為讚賞，你卻成了孤身一人。'}]]},
()=>(S.ehp<55||S.eage>=45)&&{t:'皇上龍體欠安，召嬪妃侍疾。',o:[['衣不解帶侍疾',()=>{S.me.favor+=10;S.me.hp-=8;return'皇上病中感念你的忠心。'}],['推說身體不適',()=>{S.me.favor-=4;return'皇上略有微詞。'}],['暗中打探病情與儲位',()=>{S.me.scheme+=3;S.npcs.forEach(n=>n.kids.forEach(k=>k.pow+=R(0,2)));return'你探得朝堂風向，各方都在暗暗佈局。'}]]},
()=>({t:'中秋宮宴，皇上命你當眾獻藝。',o:[['獻舞',()=>{if(P(.5+tf('perf'))){S.me.favor+=12;return'滿座驚艷！'}S.me.favor-=3;return'失足出醜，淪為笑柄。'}],['獻詩',()=>{if(P(.5+tf('perf'))){S.me.favor+=10;return'皇上擊節讚賞。'}S.me.favor+=1;return'詩作平平。'}],['稱病推辭',()=>{S.me.favor-=3;return'你錯過了一次露臉的機會。'}]]}),
()=>({t:'新一批秀女入宮，其中一位容貌出眾，皇上多看了她幾眼。',o:[['主動示好，結為姐妹',()=>{S.me.ally+=6;return'新人感念你的提攜，成了你的耳目。'}],['暗中使絆子，讓她出醜',()=>{if(P(.5+tf('plot'))){S.me.favor+=3;S.me.scheme+=2;return'新人當眾出醜，風頭盡失。'}S.me.favor-=6;S.me.ally-=4;return'事情敗露，你落了個善妒的名聲。'}],['不予理會',()=>{S.me.favor-=3;return'新人漸得聖寵，你略感失落。'}]]}),
()=>{const n=S.npcs[rn()];return{t:`${n.n}（${RKN(n)}）生辰，六宮皆送賀禮。`,o:[['送上厚禮（耗銀25）',()=>{if(!pay(25))return'銀兩不足，只送了些尋常物件。';S.me.ally+=6;n.al+=8;return`${n.n}對你另眼相看。`}],['親手繡一幅屏風',()=>{S.me.ally+=3;S.me.favor+=2;return'心意難得，旁人讚你賢淑。'}],['稱病不去',()=>{S.me.ally-=4;n.host+=5;return'你缺席賀宴，被人記在心裡。'}]]}},
()=>({t:'宮中丟了一件貴重玉器，有人把矛頭指向你的宮人。',o:[['徹查到底',()=>{if(tf('insight')||P(.5)){S.me.scheme+=3;return'你揪出真正的賊人，反而立了威。'}S.me.favor-=5;return'查無結果，落了個辦事不力的名聲。'}],['息事寧人，賠銀了事（耗銀20）',()=>{if(!pay(20)){S.me.ally-=4;return'銀兩不足，只得硬扛。'}return'風波平息。'}],['推給旁人',()=>{S.me.scheme+=2;S.me.ally-=5;return'禍水東引，卻失了人心。'}]]}),
()=>qo()&&{t:'皇后以你「儀態不端」為由，罰你在殿外跪著。',o:[['默默受罰',()=>{S.me.hp-=tf('bear')?2:8;S.me.emp+=2;return'你忍了下來，皇后的氣消了些。'}],['裝暈博同情',()=>{if(P(.5)){S.me.favor+=6;return'皇上聽聞，心疼不已。'}S.me.favor-=4;S.me.emp-=6;return'被識破，皇后更加不悅。'}],['請皇上評理',()=>{S.me.favor+=2;S.me.emp-=8;return'皇上出面打了圓場，皇后顏面無光。'}]]},
()=>({t:'花朝節，皇上命嬪妃賞花作詩，拔得頭籌者有賞。',o:[['作詩',()=>{if(P(.4+tf('perf'))){S.me.favor+=9;S.me.silver+=15;return'你的詩句被皇上連連稱讚，得了賞賜。'}S.me.favor+=1;return'詩作平平，無功無過。'}],['作畫',()=>{if(P(.35+tf('perf')/2+S.me.scheme/300)){S.me.favor+=8;return'一幅春景圖博得滿堂彩。'}return'畫作中規中矩。'}],['稱病不去',()=>{S.me.favor-=2;return'你錯過了這次露臉的機會。'}]]}),
()=>({t:'內務府剋扣了你這個月的份例，炭火、綢緞都短了一截。',o:[['忍氣吞聲',()=>{S.me.hp-=3;S.me.silver-=5;return'日子過得有些清苦。'}],['賄賂總管太監（耗銀15）',()=>{if(!pay(15))return'銀兩不足，反被奚落。';S.me.ally+=5;return'總管笑著賠了不是，往後對你多有照拂。'}],['向皇后告狀',()=>{if(!qo())return'中宮無人替你做主。';if(P(.5)){S.me.emp+=6;return'皇后處置了總管，賣了你一個人情。'}S.me.emp-=6;return'皇后嫌你小題大做。'}]]}),
()=>{const i=rn(),n=S.npcs[i];return{t:`${n.n}被診出有孕，六宮前來道賀。`,o:[['備厚禮道賀（耗銀20）',()=>{if(!pay(20))return'銀兩不足，只送了些尋常物件。';n.al+=12;n.host-=8;return`${n.n}對你心存感激。`}],['暗中在她的飲食上動手腳',()=>{S.harm[i]=(S.harm[i]||0)+2;n.host+=15;if(P(cl(.3+S.me.scheme/200+tf('plot'),.1,.75))){L(`${n.n}小產，宮中人心惶惶。`);n.favor-=8;n.hp-=10;return'你的手腳做得乾淨，無人察覺。'}S.me.favor-=12;S.me.ally-=6;return'事情敗露，皇上對你怒目而視。'}],['置身事外',()=>{S.me.ally-=1;return'你只遞了句客套話。'}]]}},
()=>({t:'一位太醫私下找到你，願意為你效力，但要一筆「謝禮」。',o:[['給他三十兩銀',()=>{if(!pay(30))return'銀兩不足。';S.me.hp+=8;S.me.ally+=4;return'有了他的照拂，你的身子好了許多，也多了一雙耳目。'}],['婉拒',()=>{S.me.scheme+=1;return'你不願與太醫私下往來，免得落人口實。'}],['反過來試探其來歷',()=>{if(tf('insight')||P(.5)){S.me.scheme+=3;S.me.ally+=3;return'你察覺他是別宮派來的探子，將計就計用了他。'}S.me.ally-=4;return'你問不出什麼，他悻悻而去。'}]]}),
()=>{const f=pf();return{t:`${f.rel}（${f.job}）獲准入宮探視，你們只有一炷香的時間。`,o:[['厚賞並勉勵（耗銀15）',()=>{if(!pay(15))return'銀兩不足，只說了些體己話。';f.lo+=6;f.pw+=3;return`${f.rel}感念不已。`}],['託其在宮外辦事',()=>{S.me.ally+=Math.round(f.pw/12)+1;f.lo-=3;return`${f.rel}答應替你打點宮外人脈。`}],['叮囑小心行事',()=>{f.ab+=3;S.me.scheme+=1;return`${f.rel}連連點頭，行事更為謹慎。`}]]}},
()=>({t:'幾位嬪妃組了詩社，邀你加入。',o:[['欣然加入（耗銀10）',()=>{if(!pay(10))return'銀兩不足，只得婉謝。';S.me.ally+=7;S.me.scheme+=1;return'詩社中多了幾個相熟的姐妹。'}],['婉拒',()=>{S.me.ally-=1;return'你獨來獨往。'}],['借詩社打探消息',()=>{S.me.scheme+=3;S.me.ally+=2;return'你聽到了不少宮中秘聞。'}]]}),
()=>{const d=S.npcs.find(n=>n.st=='廢后');return d&&{t:`冷宮中的${d.n}託人遞來口信，求你看在舊日情分上周濟一二。`,o:[['暗中接濟（耗銀20）',()=>{if(!pay(20))return'銀兩不足。';d.al+=20;S.me.scheme+=1;return'她感激涕零，日後或許有用。'}],['裝作不知',()=>'你置身事外。'],['告發她私通外朝',()=>{S.me.favor+=3;d.kids.forEach(k=>k.chong-=5);return'皇上對她更為冷淡，也對你多看了一眼。'}]]}},
()=>{const i=rn(),n=S.npcs[i];return{t:`${n.n}被皇上冷落多日，來求你幫忙在皇上面前說句好話。`,o:[['答應幫忙',()=>{n.favor+=10;n.al+=14;S.me.favor-=2;return`${n.n}承了你的情。`}],['婉拒',()=>'你不想蹚渾水。'],['順勢踩她一腳',()=>{n.favor-=8;n.host+=12;S.me.favor+=2;return`${n.n}更失了聖心，也記恨上你。`}]]}},
()=>{const f=pf();return{t:`皇上有意將你的${f.rel}（${f.job}）指婚給宗室之女。`,o:[['欣然接受',()=>{f.pw+=14;f.lo+=2;S.me.emp-=2;return'母家與宗室結親，聲勢更盛。'}],['婉言謝絕',()=>{f.lo+=4;S.me.favor-=2;return'皇上略感掃興。'}]]}},
()=>({t:'你的貼身宮女想趁夜侍奉皇上，一旦成了，也是你的助力。',o:[['成全她',()=>{if(P(.5)){S.me.ally+=8;S.me.favor+=2;return'她得了寵幸，成了你在御前的眼線。'}S.me.favor-=5;return'她得寵後翻臉不認人，奪走了你的恩寵。'}],['嚴厲訓斥',()=>{S.me.ally-=3;return'宮人們都不敢再有異心。'}]]}),
()=>({t:'皇上忽然問起朝政，似乎想聽聽後宮的看法。',o:[['直言進諫',()=>{if(P(.4+S.me.scheme/200)){S.me.favor+=8;return'皇上驚於你的見識，對你另眼相看。'}S.me.favor-=8;return'皇上嫌你干政，臉色沉了下來。'}],['溫言迴避',()=>{S.me.favor+=2;return'皇上笑你識大體。'}]]}),
()=>({t:'你忽然病倒，高燒不退。',o:[['請太醫診治（耗銀20）',()=>{if(!pay(20)){S.me.hp-=8;return'銀兩不足，只得熬著。'}S.me.hp+=5;return'太醫用藥及時，不日痊癒。'}],['硬撐著不聲張',()=>{S.me.hp-=(tf('bear')?5:12);return'你咬牙挺過，元氣大傷。'}],['託人向皇上遞話',()=>{if(P(.5+S.me.favor/200)){S.me.favor+=8;S.me.hp+=8;return'皇上親自來探，賞了藥材。'}S.me.favor-=2;return'皇上政務繁忙，沒有露面。'}]]}),
()=>({t:'夜半宮中傳來陣陣怪響，有人在裝神弄鬼嚇唬你。',o:[['請高僧做法事（耗銀20）',()=>{if(!pay(20))return'銀兩不足。';S.me.hp+=3;return'法事過後，怪響不再。'}],['設下埋伏抓人',()=>{if(P(.4+S.me.scheme/200+tf('insight')*.2)){S.me.scheme+=3;const i=rn();S.evid[i]=(S.evid[i]||0)+1;return`你抓住了裝鬼之人，順藤摸瓜牽出了${S.npcs[i].n}。`}S.me.hp-=3;return'人影一閃就不見了。'}],['置之不理',()=>{S.me.hp-=4;return'你數夜難眠，精神不濟。'}]]}),
()=>{const i=rn(),n=S.npcs[i];return{t:`${n.n}遣人送來厚禮，希望與你結為同盟。`,o:[['收下並結盟',()=>{n.al+=25;n.host-=15;S.me.ally+=3;return`你與${n.n}結成同盟。`}],['收禮不表態',()=>{S.me.silver+=15;n.al+=5;return'你收了禮，兩邊都不得罪。'}],['拒收並告知中宮',()=>{if(S.qi==='me')return'你身為中宮，此舉只是立了威。';S.me.emp+=8;n.host+=18;return`${n.n}自此視你為眼中釘。`}]]}},
()=>S.mood<26&&{t:'皇上今日龍顏震怒，朝堂與後宮都人人自危。',o:[['上前溫言勸慰',()=>{if(P(.4+S.me.favor/200+tf('perf')/2)){S.mood+=15;S.me.favor+=8;return'你的軟語化解了皇上的怒氣，皇上對你格外依賴。'}S.me.favor-=10;S.me.hp-=3;return'你撞在槍口上，被遷怒了。'}],['避而不見，閉門自守',()=>{S.me.ally+=1;return'風頭過後，你毫髮無傷。'}],['趁機在皇上面前進讒',()=>{const n=S.npcs[rn()];if(P(.45+S.me.scheme/250)){n.favor-=15;n.rank=Math.max(0,n.rank-1);S.me.scheme+=2;return`皇上盛怒之下降了${n.n}的位份。`}S.me.favor-=12;return'皇上嫌你挑撥是非。'}]]},
()=>S.mood>80&&{t:'皇上今日龍心大悅，問你想要什麼恩典。',o:[['求晉位',()=>{if(S.me.rank<TOP&&P(.6)){S.me.rank++;return`皇上准了，你晉為${RK[S.me.rank]}！`}S.me.favor+=6;return'皇上讚你知足，賞了不少東西。'}],['為母家求官職',()=>{const f=pf();f.pw+=14;f.lo+=3;return`皇上擢升了你的${f.rel}。`}],['求皇上赦免冷宮中人',()=>{const d=S.npcs.find(n=>n.st=='廢后');if(d){d.st='';d.rank=3;d.favor=20;d.al+=30;return`${d.n}被赦出冷宮，對你感激涕零。`}S.me.silver+=40;return'皇上笑你心善，另賞了銀兩。'}]]},
()=>S.me.preg&&S.me.preg<8&&{t:'你孕吐得厲害，連飯也吃不下，卻還有宮務與請安要應付。',o:[['稱病靜養，推掉請安',()=>{S.me.hp+=6;S.me.emp-=3;return'你養足了精神，胎象平穩。'}],['強撐著照常行事',()=>{S.me.hp-=8;S.me.emp+=2;return'你硬撐過來，卻累得臉色蒼白。'}],['藉孕向皇上撒嬌，討個恩典',()=>{S.me.favor+=6;S.me.silver+=20;return'皇上憐惜你辛苦，賞了不少東西。'}]]},
()=>{const n=S.npcs.find(x=>x.preg>0&&!x.st);return n&&{t:`${n.n}身懷六甲，皇上對她呵護備至。`,o:[['送上安胎禮物',()=>{if(!pay(15))return'銀兩不足，只送了些簡單的東西。';n.al+=10;return`${n.n}對你多了幾分好感。`}],['暗中盤算她的胎',()=>{n.host+=5;S.me.scheme+=1;return'你記下她的孕期與用藥，等待時機。'}],['不聞不問',()=>'你不想沾這渾水。']]}},
()=>S.me.fo&&{t:`母國${S.me.fo}遣使入朝，帶來國書與貢品。`,o:[['請求皇上厚待使臣',()=>{S.dip=cl(S.dip+10);S.me.favor+=2;S.mood=cl(S.mood+3);return'使臣滿意而歸，邦交更為融洽。'}],['託使臣帶回家書與禮物（耗銀8）',()=>{pay(8);S.me.fam.forEach(x=>x.lo+=4);return'家人收到你的消息，更加忠心。'}],['打探母國情勢',()=>{S.me.scheme+=2;return'你從使臣口中聽到不少消息。'}]]},
()=>S.me.fo&&S.dip<45&&{t:`母國${S.me.fo}與大朝邊境摩擦不斷，朝中有人主張問罪母國，你的處境尷尬。`,o:[['上書求皇上息怒，願以身為質',()=>{S.dip=cl(S.dip+12);S.me.favor-=3;return'皇上念你識大體，暫緩了用兵。'}],['暗中傳信勸母國退讓',()=>{if(P(.6)){S.dip=cl(S.dip+8);S.me.fam.forEach(x=>x.lo-=3);return'母國收斂，但家人頗有微詞。'}S.me.favor-=8;S.me.ally-=4;return'密信被截獲，你被疑為里通外國。'}],['置身事外',()=>{S.dip=cl(S.dip-8);addN([0,-2,0,-2]);return'邊境局勢進一步惡化。'}]]},
()=>S.me.fo&&{t:`母國${S.me.fo}遭了災荒，請求大朝援助。`,o:[['勸皇上賑濟，並自己出銀30',()=>{if(!pay(30))return'銀兩不足。';S.dip=cl(S.dip+10);S.me.fam.forEach(x=>{x.lo+=5;x.pw+=2});addN([-2,0,1,0]);return'母國感念大朝恩德。'}],['袖手旁觀',()=>{S.dip=cl(S.dip-6);S.me.fam.forEach(x=>x.lo-=5);return'家人對你頗為失望。'}]]},
()=>S.me.fo&&S.me.ally<30&&{t:'你初入宮，語言不通，宮人暗中取笑你。',o:[['苦學漢語與宮規',()=>{S.me.scheme+=3;S.me.ally+=3;return'你進步神速，漸漸融入。'}],['以母國禮儀自持，不卑不亢',()=>{S.me.favor+=3;S.me.emp-=2;return'皇上覺得你別有風情。'}],['託人送禮收買人心（耗銀20）',()=>{if(!pay(20))return'銀兩不足。';S.me.ally+=8;return'宮人們對你態度好了許多。'}]]},
()=>S.me.jn&&{t:'皇上忽然念起江南的煙雨，召你說起舊事。',o:[['以江南小曲相伴',()=>{S.me.favor+=10;S.mood=cl(S.mood+8);return'皇上聽得出神，賞賜不斷。'}],['請皇上再次南巡，帶你回鄉省親',()=>{if(P(.4+S.me.favor/250)){S.me.fam.forEach(x=>x.pw+=8);S.me.favor+=4;addN([-3,0,2,0]);return'皇上應允南巡，你風光省親，母家聲勢大漲，國庫卻有些吃緊。'}S.me.favor-=3;return'皇上道出行勞民傷財，並未應允。'}],['謹言慎行，不提過往',()=>{S.me.ally+=2;return'你低調行事，少了一分張揚。'}]]},
()=>S.me.jn&&{t:'宮中有人嘲笑你是「江南來的狐媚子」，說你出身低賤。',o:[['以才藝讓她們閉嘴',()=>{if(P(.5+tf('perf'))){S.me.favor+=4;S.me.ally+=3;return'你技驚四座，流言不攻自破。'}S.me.ally-=2;return'你用力過猛，反成笑話。'}],['忍氣吞聲',()=>{S.me.hp-=3;return'你默默承受。'}],['查出帶頭者，以牙還牙',()=>{const i=rn();S.npcs[i].favor-=8;S.npcs[i].host+=10;S.me.scheme+=2;return`你反擊了${S.npcs[i].n}一黨。`}]]},
()=>S.me.cr&&{t:'你查到當年父親一案另有隱情，主審之人至今位高權重。',o:[['暗中蒐集證據，圖謀昭雪',()=>{S.me.scheme+=4;S.me.ally-=3;S.crn=(S.crn||0)+1;if(S.crn>=3){S.me.cr=0;S.me.fam.forEach(x=>{x.pw+=15;x.lo+=4});S.me.favor+=4;return'多年蒐證終見天日，你將證據呈上，舊案昭雪，母家重見天日！'}return'你收集到一些線索，離真相又近一步。'}],['借枕邊風試探皇上',()=>{if(P(.3+S.me.favor/250)){S.me.cr=0;S.me.fam.forEach(x=>{x.pw+=12;x.lo+=4});S.me.favor+=3;return'皇上下令重審舊案，你的家人得以平反！'}S.me.favor-=8;return'皇上厭惡你翻舊案，將你冷落了一陣。'}],['隱忍不發，等待時機',()=>{S.me.scheme+=2;return'你把仇恨深埋心底。'}]]},
()=>S.ep==0&&{t:'皇上夜以繼日批閱奏摺，龍體疲憊。',o:[['親手燉湯送去',()=>{S.me.hp-=2;S.me.favor+=8;S.ehp=cl(S.ehp+3);return'皇上喝了湯，笑著說你有心。'}],['勸皇上早些休息',()=>{if(P(.5)){S.me.favor+=4;S.ehp=cl(S.ehp+5);return'皇上聽了你的勸。'}S.me.favor-=3;return'皇上說正事要緊，讓你退下。'}],['不敢打擾',()=>{S.me.favor-=1;return'你只遠遠看了一眼。'}]]},
()=>S.ep==1&&{t:'皇上又寵幸了新人，連日不曾踏足你宮中。',o:[['精心打扮，製造偶遇',()=>{if(P(.5+tf('perf'))){S.me.favor+=9;return'皇上被你吸引，又宿在你宮裡。'}S.me.favor-=2;return'偶遇不成，白費心機。'}],['大度地送去賀禮',()=>{S.me.ally+=3;S.me.favor+=2;return'皇上誇你賢惠。'}],['暗中給新人使絆子',()=>{const n=S.npcs[rn()];n.favor-=8;n.host+=10;return`${n.n}失了顏色，也記恨上你。`}]]},
()=>S.ep==2&&{t:'皇上懷疑有人結黨營私，召你問話。',o:[['坦誠相告，絕無二心',()=>{if(P(.5+S.me.favor/300)){S.me.favor+=4;return'皇上緩和了臉色。'}S.me.favor-=8;return'皇上冷笑，更疑心你有隱瞞。'}],['反告他人結黨',()=>{const n=S.npcs[rn()];if(P(.45+S.me.scheme/250)){n.favor-=12;S.me.scheme+=2;return`皇上轉而疑心${n.n}。`}S.me.favor-=10;return'皇上嫌你轉移視線。'}],['推說一無所知',()=>{S.me.favor-=3;return'皇上不置可否。'}]]},
()=>S.ep==6&&{t:'皇上盛怒之下杖斃了一名宮人，六宮噤若寒蟬。',o:[['低頭噤聲，不敢多言',()=>{S.me.hp-=2;return'你躲過了遷怒。'}],['趁機勸諫',()=>{if(P(.3+S.me.favor/300)){S.mood=cl(S.mood+10);S.me.favor+=6;return'皇上怒氣稍息，記住了你的好。'}S.me.favor-=12;S.me.hp-=5;return'你被一併遷怒。'}],['藉機打壓對手',()=>{const n=S.npcs[rn()];n.favor-=10;S.me.scheme+=2;return`皇上盛怒下厭棄了${n.n}。`}]]},
()=>natv()<35&&{t:'國勢衰微，物價飛漲，宮中份例一減再減。',o:[['節衣縮食，與宮人共度時艱',()=>{S.me.ally+=4;S.me.hp-=2;return'你的仁厚贏得了人心。'}],['變賣首飾補貼用度',()=>{S.me.silver+=25;S.me.favor-=2;return'你換了些銀兩，皇上略有不滿。'}],['向母家求援',()=>{const f=pf();f.lo-=3;S.me.silver+=Math.round(f.pw/4);return`${f.rel}勉力接濟了你。`}]]}];
const KE=[c=>(yr(c)<4||KT[c.t][2].weak)&&{t:`${c.n}夜裡發起高熱，哭鬧不止。`,o:[['親自守夜照顧',()=>{S.me.hp-=6;c.bond+=8;return`你衣不解帶，${c.n}終於退燒，與你更親。`}],['交給奶娘照料',()=>{c.chong-=6;c.bond-=2;return`${c.n}病了一場，皇上有些不滿。`}],['請太醫診治（耗銀10）',()=>{if(!pay(10))return'銀兩不足，只能乾著急。';c.bond+=3;c.chong+=3;return'太醫用藥及時，孩子平安無事。'}]]},
c=>yr(c)>=3&&yr(c)<8&&{t:`${c.n}到了啟蒙之年，請哪位師傅？`,o:[['延請當朝大儒（耗銀30）',()=>{if(!pay(30))return'銀兩不足，只得作罷。';c.cai+=10;c.pow+=4;return'大儒悉心教導，朝臣也多看重。'}],['母親親自授課',()=>{c.cai+=5;c.bond+=6;return'母子朝夕相伴，感情深厚。'}],['入上書房隨眾皇子',()=>{c.cai+=4;c.chong+=3;return'皇上見他勤學，頗為欣慰。'}]]},
c=>yr(c)>=6&&c.sex=='男'&&{t:`皇上親自考校皇子功課，輪到${c.n}。`,o:[['臨時惡補',()=>{if(P(.4+c.cai/200)){c.chong+=10;return'他對答如流，皇上龍顏大悅。'}c.chong-=5;return'他答得磕磕絆絆，皇上皺眉。'}],['順其自然',()=>{if(P(c.cai/130)){c.chong+=6;return'他從容應答，頗有風度。'}c.chong-=2;return'表現平平。'}]]},
c=>yr(c)>=8&&{t:`${c.n}與一位兄弟在書房起了衝突，被先生告到皇上面前。`,o:[['教他先低頭認錯',()=>{c.de+=6;c.chong+=2;return'皇上誇他有容人之量。'}],['讓他據理力爭',()=>{if(P(.5)){c.chong+=6;return'他辯得有理有據，皇上點頭。'}c.chong-=8;return'他爭得面紅耳赤，皇上不悅。'}],['暗中施壓，讓對方受罰',()=>{const n=S.npcs[rn()];n.kids.forEach(k=>k.chong-=8);n.host+=10;S.me.scheme+=2;return`${n.n}的孩子挨了罰，對方記恨在心。`}]]},
c=>yr(c)>=10&&c.sex=='男'&&{t:'秋獮圍獵，皇上讓皇子們一展身手。',o:[['讓他全力表現',()=>{if(P(.5+(KT[c.t][2].pow||0)/60)){c.pow+=6;c.chong+=8;return'他獵得頭彩，朝臣側目。'}c.chong-=3;c.pow-=2;return'他墜馬受傷，鬧了笑話。'}],['教他藏拙',()=>{c.de+=4;c.chong+=3;return'皇上讚他穩重。'}]]},
c=>yr(c)>=12&&{t:`${c.n}的詩文被傳誦宮外，引來朝臣關注。`,o:[['低調壓下',()=>{c.de+=3;return'風頭漸息，孩子更為沉穩。'}],['順勢揚名',()=>{c.pow+=8;c.chong+=5;S.me.emp-=3;return'朝臣爭相結交，其他皇子的母妃也有警覺。'}]]},
c=>c.chong<60&&{t:`有人在皇上面前誣陷${c.n}品行不端。`,o:[['動用人脈替他洗清',()=>{if(S.me.ally<25){c.chong-=6;return'人脈不夠，無力迴天。'}S.me.ally-=6;c.chong+=4;return'事情真相大白。'}],['讓他自己辯白',()=>{if(P(c.de/110)){c.chong+=4;return'他言辭誠懇，皇上信了。'}c.chong-=8;return'他百口莫辯。'}],['重金打點（耗銀30）',()=>{if(!pay(30))return'銀兩不足，只得作罷。';c.chong+=6;return'風波被壓了下去。'}]]},
c=>yr(c)>=14&&{t:c.sex=='男'?`皇上要為${c.n}選妃。`:`皇上要為${c.n}選駙馬。`,o:[['選重臣之家',()=>{c.pow+=12;S.me.emp-=4;return'結下高門姻親，其他勢力有些不安。'}],['選寒門才俊',()=>{c.de+=5;c.bond+=8;c.pow+=3;return'孩子歡喜，母子更加親近。'}],['請皇上自行決斷',()=>{c.chong+=5;return'皇上滿意你的識大體。'}]]},
c=>yr(c)>=2&&yr(c)<8&&{t:`${c.n}鬧著要你陪著，不肯睡。`,o:[['放下手邊事陪伴',()=>{c.bond+=8;return'母子倆說了一夜的話。'}],['讓乳母哄睡',()=>{c.bond-=3;return'孩子有些委屈。'}]]},
c=>c.sex=='女'&&yr(c)>=12&&{t:`邊關求和，朝臣提議以${c.n}和親。`,o:[['以死相諫',()=>{if(P(.5)){c.bond+=10;S.me.favor-=6;return'皇上收回成命，卻對你不滿。'}c.chong-=4;return'皇上不為所動，此事暫且擱置。'}],['動用人脈換人頂替',()=>{if(S.me.ally<30)return'人脈不足，無力迴天。';S.me.ally-=12;c.chong+=3;return'你保住了女兒。'}],['接受，換取母家封賞',()=>{c.bond-=20;S.me.fam.forEach(x=>x.pw+=8);return'母家因此得了封賞，女兒對你心生怨懟。'}]]},
c=>yr(c)>=12&&c.sex=='男'&&{t:`有朝臣主動結交${c.n}，欲結為黨羽。`,o:[['順水推舟',()=>{c.pow+=10;c.de-=4;S.me.emp-=4;return'他羽翼漸豐，卻也招了猜忌。'}],['嚴令他謹守本分',()=>{c.de+=5;c.bond+=3;return'他聽了你的話，朝臣漸漸疏遠。'}]]},
c=>yr(c)>=16&&c.sex=='男'&&{t:`${c.n}已成年，請旨出宮建府。`,o:[['留在宮中',()=>{c.chong+=3;c.pow-=3;return'皇上欣慰他孝順。'}],['出宮建府，自立門戶',()=>{c.pow+=10;c.chong-=2;return'他有了自己的府邸和人脈。'}]]}];

const MILC=/兵|軍|統領|侯|參將|汗|統帥|將/;
const natv=()=>{const n=S.nat;return(n.eco+n.mil+n.pop+n.stab)/4};
function addN(a){const n=S.nat;n.eco+=a[0];n.mil+=a[1];n.pop+=a[2];n.stab+=a[3]}
function edeath(){return cl(Math.max(.0004,(S.eage-38)*.0008)+(60-S.ehp)/8000,0,.12)}
function court(){const n=S.nat,ep=EPS[S.ep][2],m=S.me;
['eco','mil','pop','stab'].forEach(k=>{n[k]=cl(n[k]+R(-1,1)+ep.nd+(52-n[k])*.04)});
S.ehp=cl(S.ehp+R(-1,1)-(S.eage>=40?(S.eage-38)*.04:0));
S.fp=S.fp.map(v=>cl(v+R(-2,2)+(50-v)*.03));
S.npcs.forEach(x=>{if(!x.st&&x.fac>=0)x.favor+=(S.fp[x.fac]-50)/80});
if(m.fac>=0)m.favor+=(S.fp[m.fac]-50)/80;
if(S.dow)m.dw=cl(m.dw-.5);
if(S.t%12==0){[m].concat(S.npcs).forEach(o=>{if(o.fac>=0)o.fam.forEach(x=>x.pw+=(S.fp[o.fac]-50)/12)});if(S.dow)S.dow.age++;if(m.fo)m.fam.forEach(x=>x.pw+=(S.dip-50)/60)}
if(m.fo&&S.dip<20&&P(.03)){m.favor-=15;L(`大朝與${m.fo}交惡，你被疑為奸細，一度被禁足。`)}
if(natv()<18)S.lowN++;else S.lowN=Math.max(0,S.lowN-1);
if(S.lowN>=18)return over('山河破碎','連年天災人禍，民變四起，叛軍攻入京城。後宮傾覆，你在亂世中顛沛流離，下落不明。');
const q=Q();if(q&&q.fac===0&&S.fp[0]<18&&P(.05)){q.st='廢后';q.favor=0;vacancy(`外戚勢力傾覆，皇后${q.n}受母家牽連被廢`)}
if(S.dow&&P(Math.max(.001,(S.dow.age-60)/1500))){const p=S.dow.pet;S.dow=null;S.mood=cl(S.mood-8);addN([0,0,-1,-3]);if(typeof p=='number'&&!S.npcs[p].st)S.npcs[p].favor-=10;L('皇太后崩逝，舉國大喪，後宮再無人能壓制皇上。')}
const all=m.kids.concat(...S.npcs.map(x=>x.kids));if(S.heir&&!all.includes(S.heir))S.heir=null;
if(S.heir&&(S.heir.de<30||S.heir.chong<25)&&P(.03)){L(`${S.heir.n}失德失寵，被皇上廢去儲君之位。`);S.heir.chong=cl(S.heir.chong-20);S.heir=null}}
const cO=(l,w,x,r)=>({l,w,x,r});
const courtEv=(t,A,B)=>({t,o:[[`吹枕邊風，支持「${A.l}」`,()=>decide(A,B,0)],[`吹枕邊風，支持「${B.l}」`,()=>decide(A,B,1)],['命母家依派系表態',()=>decide(A,B,S.me.fac===A.w?0:S.me.fac===B.w?1:-1,true)],['置身事外，靜觀其變',()=>decide(A,B,-1)]]});
function decide(A,B,pick,fam){const m=S.me,ep=EPS[S.ep][2];let W,txt;
if(pick<0){W=P(.5)?A:B;txt=`皇上與群臣議定，採納了「${W.l}」。`}
else{const p=cl((.2+m.favor/250+(S.mood-50)/400)*ep.trust*(fam?.6:1),.08,.75),pk=pick==0?A:B;if(P(p)){W=pk;txt=`皇上採納了你的意見，決定「${W.l}」。`;m.favor+=fam?1:4}else{W=pk===A?B:A;txt=`你的建言沒能說服皇上，最終朝廷選了「${W.l}」。`;if(!fam)m.favor-=2}}
if(W.w>=0)S.fp[W.w]=cl(S.fp[W.w]+10);if(W.x>=0)S.fp[W.x]=cl(S.fp[W.x]-8);
txt+=W.r();
if(m.fac>=0){if(m.fac===W.w){m.favor+=3;m.fam.forEach(x=>x.pw+=4)}else if(m.fac===W.x){m.favor-=3;m.fam.forEach(x=>x.pw-=4)}}
S.npcs.forEach(n=>{if(n.st||n.fac<0)return;if(n.fac===W.w){n.favor+=4;n.fam.forEach(x=>x.pw+=3)}else if(n.fac===W.x){n.favor-=4;n.fam.forEach(x=>x.pw-=3)}});
L(txt);return txt}
function stEv(){if(S.heir||S.eage<30)return false;const c=[];S.me.kids.forEach(k=>c.push([k,'me']));S.npcs.forEach((n,i)=>n.kids.forEach(k=>c.push([k,i])));const cs=c.filter(x=>x[0].sex=='男'&&yr(x[0])>=4).sort((a,b)=>sc(b[0])-sc(a[0])).slice(0,3);if(!cs.length)return false;
const setH=(w,wo)=>{S.heir=w;w.chong=cl(w.chong+15);w.pow=cl(w.pow+10);if(wo==='me'){S.me.favor+=6;S.me.fam.forEach(x=>x.pw+=8)}else{S.npcs[wo].favor+=8;S.npcs[wo].fam.forEach(x=>x.pw+=6)}L(`皇上立${w.n}為儲君。`)};
return{t:'朝臣聯名上疏，請皇上早立儲君，以安天下。',o:cs.map(([k,o])=>[`擁立${k.n}（${on(o)}之子・${yr(k)}歲）`,()=>{const mine=o==='me',p=cl(.25+(mine?S.me.favor/250:0)+(S.mood-50)/500,.1,.7);let w=k,wo=o;if(!P(mine?p:.45)){w=cs[0][0];wo=cs[0][1]}cs.forEach(x=>{if(x[0]!==w)x[0].chong-=5});setH(w,wo);return`${w.n}被立為太子（${on(wo)}之子）。`+(w===k?'你的擁立之議被採納。':'皇上另有屬意。')}]).concat([['袖手旁觀',()=>{setH(cs[0][0],cs[0][1]);return`皇上自行決定立${cs[0][0].n}為太子。`}]])}}
const COURT=[()=>courtEv('邊關告急，朝議是否出兵北伐。',cO('主戰北伐',2,4,()=>{if(P(S.nat.mil/100+.1)){addN([2,8,4,3]);S.mood=cl(S.mood+10);return'大軍告捷，舉國振奮。'}addN([-8,-8,-6,-6]);S.mood=cl(S.mood-10);return'北伐受挫，損兵折將，朝野震動。'}),cO('議和安撫',1,2,()=>{addN([2,-2,2,2]);return'邊境暫時安寧，主戰派頗為不滿。'})),
()=>courtEv('國庫吃緊，戶部奏請加稅。',cO('加稅充實國庫',0,3,()=>{addN([6,0,-6,-2]);return'國庫充實了，百姓怨聲載道。'}),cO('輕徭薄賦與民休息',1,0,()=>{addN([-3,0,6,2]);return'民心大悅，國庫略顯空虛。'})),
()=>courtEv('宗室親王擁兵自重，朝臣議論是否削藩。',cO('削奪宗室兵權',2,4,()=>{addN([0,3,-1,-4]);return'宗室不滿，朝局暗流洶湧。'}),cO('安撫宗室，維持現狀',4,2,()=>{addN([0,-2,0,3]);return'朝局暫穩，兵權旁落之憂未消。'})),
()=>courtEv('科舉改革之議再起，是否擴大寒門取士。',cO('擴大寒門取士',3,0,()=>{addN([2,0,3,-3]);return'寒門子弟得進，世家頗有怨言。'}),cO('維持舊制',0,3,()=>{addN([0,0,-2,3]);return'舊制未動，朝局安穩。'})),
()=>courtEv('黃河水患，是賑災還是繼續修建皇家園林？',cO('撥款賑災',1,0,()=>{addN([-5,0,6,1]);return'災民得救，國庫又空了一些。'}),cO('先修園林，再議賑災',0,1,()=>{addN([-4,0,-6,-2]);S.mood=cl(S.mood+8);return'皇上心情大好，百姓怨聲四起。'})),
()=>courtEv('外戚權勢日盛，朝臣上書請抑外戚。',cO('抑制外戚',3,0,()=>{addN([0,0,1,-4]);return'外戚勢力受挫，朝局動盪。'}),cO('重用外戚',0,3,()=>{addN([0,0,-2,1]);return'外戚更為得意，清議不滿。'})),
()=>courtEv('是否開放海禁、通商番邦？',cO('開海通商',3,1,()=>{addN([7,0,1,-2]);return'海貿大興，國庫豐盈。'}),cO('閉關鎖國',1,3,()=>{addN([-2,0,0,2]);return'朝局安穩，商路蕭條。'})),
()=>courtEv('一樁貪腐大案牽連數位高官。',cO('嚴懲不貸',1,0,()=>{addN([3,0,3,5]);return'吏治一新，朝臣人人自危。'}),cO('輕判了事',0,1,()=>{addN([0,0,-3,-5]);return'事情淡化，貪風卻更盛。'})),
()=>stEv()];
const dn=()=>{if(!S.dow)return'太后';const p=S.dow.pet;return p==='me'?'你':S.npcs[p].st?'某位已故妃嬪':S.npcs[p].n};
const DOW=[()=>({t:'太后召你到慈寧宮問話，語氣不辨喜怒。',o:[['恭順侍奉，有問必答',()=>{S.me.dw+=8;return'太后微微頷首。'}],['展現才學，吟詩作對',()=>{if(P(.5+tf('perf')/2)){S.me.dw+=12;S.me.favor+=2;return'太后誇你才思敏捷。'}S.me.dw-=4;return'太后嫌你賣弄。'}],['試探太后的心意',()=>{if(tf('insight')||P(.4)){S.me.scheme+=2;S.me.dw+=3;return`你看出太后偏愛${dn()}。`}S.me.dw-=3;return'太后一眼看穿了你的心思。'}]]}),
()=>({t:'太后禮佛，要人替她抄經祈福。',o:[['親手抄經三日',()=>{S.me.hp-=4;S.me.dw+=10;return'太后深受感動。'}],['捐一筆香油錢（耗銀20）',()=>{if(!pay(20))return'銀兩不足。';S.me.dw+=8;return'太后覺得你有心。'}],['推說身子不適',()=>{S.me.dw-=8;return'太后面露不悅。'}]]}),
()=>({t:'太后有意為皇上添些新人，問你有何意見。',o:[['推薦自己家族的女子',()=>{const n=kinIn('族人');if(!n)return'名額已滿，作罷。';S.me.fam.forEach(x=>x.pw+=4);S.me.dw-=2;return`${n.kin}${n.n}入宮，封為${RK[n.rank]}，成了你的助力。可在「後宮」名冊中找到她。`}],['贊同太后的人選',()=>{S.me.dw+=5;return'太后滿意地點頭。'}],['婉言反對',()=>{S.me.dw-=8;return'太后不悅你多嘴。'}]]}),
()=>({t:'太后賜了你一名貼身宮女。',o:[['歡喜收下',()=>{S.me.dw+=3;if(P(.4)){S.me.ally-=4;return'這宮女其實是太后的眼線，你的一舉一動都被看在眼裡。'}S.me.ally+=5;return'這宮女手腳麻利，成了你的得力幫手。'}],['婉拒',()=>{S.me.dw-=4;return'太后淡淡說了句「隨你」。'}]]}),
()=>({t:'太后鳳體違和，臥床不起。',o:[['親自侍疾',()=>{S.me.hp-=8;S.me.dw+=15;return'太后拉著你的手，連連稱好。'}],['請最好的太醫並送去藥材（耗銀40）',()=>{if(!pay(40))return'銀兩不足。';S.me.dw+=10;return'太后病情好轉，記下了你的心意。'}],['不聞不問',()=>{S.me.dw-=15;return'太后冷了心。'}]]}),
()=>S.me.dw<30&&{t:'太后對你不滿，傳你前去訓話。',o:[['跪地請罪',()=>{S.me.hp-=4;S.me.dw+=8;return'太后訓了半日，氣漸消了。'}],['據理辯解',()=>{if(P(.4)){S.me.dw+=5;return'太后覺得你並非全無道理。'}S.me.dw-=8;S.me.favor-=4;return'太后更怒，罰你抄經。'}],['託皇上轉圜',()=>{S.me.favor-=2;S.me.dw+=4;return'皇上出面打了圓場。'}]]},
()=>qo()&&{t:'太后與皇后為一件小事起了齟齬，兩邊都想拉攏你。',o:[['站在太后一邊',()=>{S.me.dw+=10;S.me.emp-=8;return'太后記下了你的立場。'}],['站在皇后一邊',()=>{S.me.emp+=8;S.me.dw-=8;return'皇后對你另眼相看。'}],['兩不相幫',()=>'你誰也沒得罪，也誰都沒討好。']]}];
/* ===== 流程 ===== */
function choose(t,o){S.ch={t,o}}
function A(i){if(S.ch||S.over||S.scn||S.ev)return;S.res=null;const b=S.me.favor,r=(S.reg?RACT:ACT)[i][2]();adj(b);if(S.over)return;if(!r)spend();else render()}
function C(i){const o=S.ch.o[i];S.ch=null;const b=S.me.favor;o.f();adj(b);if(S.over)return;fix();if(S.over)return;S.ch?render():spend()}
function V(i){const b=S.me.favor,r=S.ev.o[i][1]();adj(b);S.ev=null;if(r){S.res=r;L(r)}fix();if(!S.over)next()}
function next(){S.ev=S.q.shift()||null;render()}
function fix(){achTick();goalTick();const m=S.me;['favor','ally','hp','emp','scheme','dw'].forEach(s=>m[s]=cl(m[s]));Object.keys(S.nat).forEach(k=>S.nat[k]=cl(S.nat[k]));S.fp=S.fp.map(v=>cl(v));S.dip=cl(S.dip);m.silver=Math.max(0,m.silver);m.fam.forEach(x=>['pw','ab','lo'].forEach(k=>x[k]=cl(x[k])));m.clan=cc(m.fam);m.kids.forEach(k=>['cai','de','chong','pow','bond'].forEach(s=>k[s]=cl(k[s])));
S.npcs.forEach((n,i)=>{n.favor=cl(n.favor);n.al=cl(n.al);n.host=cl(n.host);n.hp=Math.min(100,n.hp);n.fam.forEach(x=>x.pw=cl(x.pw));n.pow=cl(cc(n.fam)+n.pb);n.kids.forEach(k=>['cai','de','chong','pow'].forEach(s=>k[s]=cl(k[s])));if(!n.st&&n.hp<=0)kill(i,'病逝，宮中舉哀')});
if(m.hp<=0&&!S.over)S.reg?over('太后薨逝',`你操勞一生，在${S.reg.title}之位上薨逝。${S.reg.k.n}為你輟朝致哀，後世對你的功過各有評說。`):over('香消玉殞','你在深宮的算計與勞損中病逝，一生如夢，終究沒能等到塵埃落定。')}
function spend(){S.w--;fix();if(S.over)return;if(!S.reg){const ne=nightEv();if(ne)S.q.unshift(ne)}if(S.w<=0)(S.reg?rmend():mend());else if(S.q.length)next();else render()}
function mend(){const m=S.me;S.t++;S.w=4;S.eage=S.ea0+Math.floor(S.t/12);
if(m.preg&&--m.preg==0)S.q.unshift(labourEv());
{const f=dfx(m),a=m.at;m.hp=Math.min(100,m.hp+1-f.hp*.7);a.sp=cl(a.sp+(60-a.sp)*.08-f.sp);if(P(.004+(a.sp<30?.006:0))&&a.ds.length<4){const d=ONSET[R(0,ONSET.length-1)];if(!a.ds.includes(d)){a.ds.push(d);L(`你染上了「${DS[d][0]}」。`)}}}
ids().forEach(i=>{const n=S.npcs[i],q=TS[n.g][2];n.hp=Math.min(100,n.hp+2-dfx(n).hp*.7);{const a=n.at;if(P(.5)){const s=R(0,13);a.sk[s]=cl(a.sk[s]+(P(.7)?1:-1)*R(0,2))}a.sp=cl(a.sp+R(-3,3)+(60-a.sp)*.05);a.wt=+(a.wt+R(-3,3)/10).toFixed(1);a.hr=cl(a.hr+R(-1,1));if(S.t%12==0){a.lk=cl(a.lk+(S.t>96?-R(0,2):R(-1,1)));a.sf=cl(a.sf+R(-2,1));a.iq=cl(a.iq+R(0,1));n.sc=cl(n.sc+R(-2,3))}}if(P(.003)&&n.at.ds.length<3){const d=ONSET[R(0,ONSET.length-1)];if(!n.at.ds.includes(d)){n.at.ds.push(d);L(`${n.n}染上了「${DS[d][0]}」。`)}}if(P(.012)){n.hp-=R(15,35);L(`${n.n}病了一場。`)}n.host=cl(n.host-1);n.favor=cl(n.favor+R(-3,3)+(q.perf||0)*3+(q.f||0)/20+cb(n)*.4);if(n.preg){n.preg--;if(n.preg==0){n.hp-=R(0,8);birth(n.kids,i)}}else if(n.kids.length<4&&P(Math.max(.002,.008+n.favor/4000+(q.fert||0)/10+dfx(n).fert/8))){n.preg=10;if(P(.7))L(`${n.n}被診出有孕。`)}});
{const ep=EPS[S.ep][2];S.mood=cl(Math.round(S.mood+R(-ep.vol,ep.vol)+(50+(natv()-50)*.3-S.mood)*.12))}const qn=Q();if(qn&&S.t>36&&P(.0012))qn.hp=0;
if(P(.5))courtFight();court();if(S.over)return;
m.kids=m.kids.filter(k=>{const q=KT[k.t][2];if(yr(k)<3&&P((.004+(q.weak?.012:0)+(k.at&&k.at.ds.includes(12)?.012:0))*((q.luck||tf('kh'))?.5:1))){L(`${k.n}不幸夭折，你肝腸寸斷。`);m.hp-=10;return false}return true});
shopTick();m.favor-=1;m.silver+=Math.max(0,3+m.rank*2+(tf('rich')?5:0)+Math.round((natv()-50)/15));
if(S.t%12==0){[m].concat(S.npcs).forEach(o=>o.fam.forEach(x=>{x.pw+=R(-3,4);x.ab+=R(0,2)}));
S.npcs.forEach(n=>n.kids.forEach(k=>{k.cai+=R(0,3);k.de+=R(0,2);k.pow+=R(0,2)+Math.round((n.pow-45)/30);k.chong+=R(-3,3)}));m.kids.forEach(k=>k.chong+=R(-2,2));
ids().forEach(i=>{const n=S.npcs[i];if(i!==S.qi&&n.rank<7&&n.favor>=55&&P(.4)){n.rank++;L(`${n.n}晉封為${RKN(n)}。`)}})}
if(S.t%6==0&&m.rank<TOP&&m.favor>=34+m.rank*8-(m.clan/10|0)-(S.dow&&m.dw>=60?4:0)){m.rank++;L(`恭喜！你晉封為${RK[m.rank]}。`)}
fix();if(S.over)return;
if(m.favor<=0&&S.t>24)return over('打入冷宮','聖寵盡失，你被貶入冷宮，在寂寥歲月中度過餘生。');
if(P(edeath()))return succ();
const se=storyTick();const ev=[],a=atkEv();if(m.scand>0&&P(m.scand/250))ev.push(scandalEv());if(m.shops.some(s=>!s.dw)&&P(.004*m.shops.filter(s=>!s.dw).length))ev.push(shopExpoEv());
if(P(.3))ev.push(ENV[R(0,ENV.length-1)]());
if(P(.32)){const f=COURT.map(f=>f()).filter(Boolean);if(f.length)ev.push(f[R(0,f.length-1)])}
if(S.dow&&P(.3)){const f=DOW.map(f=>f()).filter(Boolean);if(f.length)ev.push(f[R(0,f.length-1)])}
if(P(.55)){const f=PE.map(f=>f()).filter(Boolean);ev.push(f[R(0,f.length-1)])}
if(m.kids.length&&P(.55)){const c=m.kids[R(0,m.kids.length-1)],f=KE.map(f=>f(c)).filter(Boolean);if(f.length)ev.push(f[R(0,f.length-1)])}
ev.sort(()=>Math.random()-.5);S.q=S.q.concat((a?[a]:[]).concat(ev).slice(0,4)).concat(se).concat(mxMonth()).concat(playMonth());next()}
function over(t,x){endMark(t);if(S.nk&&REGT.includes(t)&&!S.reg)return regStart(t,x);S.over={t,x};render()}
function fin(h,t,x,w){const m=S.me,o=[{l:'看結局',f(){over(t,x)}}],sons=m.kids.filter(k=>k.sex=='男'&&yr(k)>=1);
if(w&&w.o!=='me'&&sons.length&&m.rank>=2){const s=sons.slice().sort((a,b)=>b.pow-a.pow)[0];o.push({l:`發動宮變，扶${s.n}登基（耗銀100，極兇險）`,f(){seize(s,w)}})}
S.scn={h,o};render()}
function succ(){const m=S.me;let c=[];m.kids.forEach(k=>c.push({k,o:'me'}));S.npcs.forEach((n,i)=>n.kids.forEach(k=>c.push({k,o:i})));c=c.filter(x=>x.k.sex=='男');
if(!c.length)return over('宗室入繼','皇帝駕崩，膝下無皇子，朝臣擁立宗室旁支入繼大統。你作為先帝'+(S.qi==='me'?'皇后':'太妃')+'，在寂靜的宮苑中安度餘年。');
c.forEach(x=>x.s=sc(x.k)+R(0,18)+(x.o===S.qi?10:0)+(x.k===S.heir?25:0)+(S.dow&&x.o===S.dow.pet?8:0));c.sort((a,b)=>b.s-a.s);const w=c[0],a=yr(w.k);S.nk=w.k;S.nko=w.o;
let h=`<p>皇帝駕崩，享年${S.eage}歲。朝臣議立新君：</p>`+c.slice(0,4).map(x=>`<div class=k>${x.k.n}（${on(x.o)}之子，${yr(x.k)}歲）${x==w?'　👑':''}</div>`).join('')+`<p><b>${w.k.n}繼位，時年${a}歲。</b></p><p class=m>此時國力${natv()|0}${natv()<35?'，國勢衰微，新君一繼位就面臨內憂外患':natv()>70?'，國泰民安':''}。${S.dow?'太后仍在世，成了太皇太后。':''}</p>`;
if(w.o=='me')return mine(w,a,h);
const wm=S.npcs[w.o],h2=S.harm[w.o]||0,sons=m.kids.filter(k=>k.sex=='男'),fate=sons.length?sons.map(k=>(k.de+k.chong+k.pow)/3>45?`${k.n}受封親王，安享富貴`:`${k.n}被圈禁高牆，抑鬱終身`).join('；')+'。':'';
let t,x;
if(S.qi==='me'){t='嫡母皇太后';x=`${wm.n}之子繼位，而你是中宮皇后，名分最正，被尊為皇太后。${wm.n}${P(.6)?'僅被尊為太妃，從此仰你鼻息':'與你並尊為兩宮太后'}。${fate}`;return fin(h,t,x,w)}
if(wm.st=='薨逝'){t='追封太后';x=`${wm.n}雖已不在，其子繼位，她被追封為皇太后。你只是先帝太妃，看著別人的兒子君臨天下。${fate}`}
else if(wm.st=='廢后'){t='廢后之子';x=`${wm.n}之子繼位，她雖曾被廢，也被接出冷宮尊為太妃。${Q()?Q().n+'仍居後位。':''}${fate}`}
else if(w.o===S.qi){t='嫡子承統';x=`${wm.n}之子繼位，${wm.n}成為唯一的皇太后。`}
else{t='他人之勝';x=Q()?`${wm.n}母憑子貴，與${Q().n}並為東西兩宮太后。`:`${wm.n}母憑子貴，成為唯一的皇太后。`}
if(!wm.st)x+=h2&&P(.55+h2*.1)?`你曾暗算新帝之母，太后翻出舊賬，你被賜白綾。${fate}`:`你只是先帝太妃，遷居壽康宮，看著別人的兒子君臨天下。${fate}`;
fin(h,t,x,w)}
function mine(w,a,h){const m=S.me,E=Q(),k=w.k.n,tail=a>=16?`${k}親政，孝順生母，你頤養天年。`:a>=6?'你垂簾聽政，大權在握。':'新帝年幼，你與攝政王共理朝政，大權在握。';
if(S.qi==='me')return fin(h,'唯一皇太后',`你既是中宮皇后，又是新帝生母。${k}（${a}歲）登基，你被尊為皇太后，母儀天下。${tail}`);
if(!E)return fin(h,'唯一皇太后',`中宮空懸，無人與你相爭。${k}（${a}歲）登基，你憑子成為獨一無二的皇太后。${tail}`);
const my=m.ally*.5+m.scheme*.3+m.rank*6+w.k.pow*.4+w.k.chong*.1+m.clan*.3,ep=E.pow+(E.kids.length?10:0)+25-m.emp*.2;
const stg=a>=16?'新帝已成年，可以親政，嫡母與生母之爭，全看皇帝如何裁決。':a>=6?'新帝年少，須太后垂簾聽政，兩宮暗中角力，朝臣各懷心思。':'新帝尚在稚齡，朝政由攝政王與太后共議，前朝後宮都盯著你。';
const pe=cl(.4+m.emp/200+(a>=16?.25:a>=6?.05:.15),.15,.9),ct=cl((a>=16?.3:a>=6?.2:.12)+(my-ep)/220+(w.k.bond-50)/250,.05,.75);
h+=`<p>你的兒子登基了！你將成為太后，而${E.n}是名正言順的嫡母。<br>${stg}</p><p class=m>你的實力約 ${my|0}　皇后一方約 ${ep|0}　新帝孝心 ${w.k.bond|0}</p>`;
S.scn={h,o:[{l:`與皇后並尊，成為東西太后（成功率約${pe*100|0}%）`,f(){if(P(pe))over('東西太后',`你與${E.n}並尊兩宮：皇后為東太后，你是西太后。${a>=16?`${k}親政，兩宮頤養天年，母子同心。`:`${k}年幼，兩宮垂簾聽政，${my>ep?'實權漸漸落入你手。':'東宮名分更重，你需步步忍讓。'}`}`);else over('母以子貴，止於太妃',`皇后一黨以「妃嬪不得稱太后」駁回尊號之議，你只被尊為太妃。${a>=16?`所幸${k}日後追尊生母，母子終得團聚。`:`${k}年幼，母子相見受限，你在壽康宮苦熬歲月。`}`)}},
{l:`爭奪唯一太后之位（成功率約${ct*100|0}%）`,f(){if(P(ct))over('唯一太后',`你一舉壓過${E.n}，成為獨一無二的皇太后。皇后${P(.5)?'被迫遷居別宮，閒居終老':'自請為先帝守陵，不問世事'}。${tail}`);else over('爭而不得',`禮法站在嫡母一邊，你的奪位之舉觸怒朝臣。${P(.4)?'你被迫出宮為先帝祈福，終身不得見子。':'你被尊為太妃，從此低皇后一頭。'}`)}}]};render()}
function natPanel(){const n=S.nat,b=(l,v)=>`<div class=r><span>${l}</span><i><b style="width:${v}%;background:var(--gd)"></b></i><em>${v|0}</em></div>`,e=EPS[S.ep];
return`<div class=cd><h3>天下大勢　國力 ${natv()|0}</h3><div class=m>皇帝：${e[0]}（${e[1]}）・${S.eage}歲</div><div class=m>聖上喜好：${tasteTxt()}</div>${b('國庫',n.eco)}${b('軍力',n.mil)}${b('民心',n.pop)}${b('朝局',n.stab)}<div class=m style="margin-top:6px">朝中派系：${FAC.map((f,i)=>`${f}${S.fp[i]|0}${S.me.fac===i?'（母家）':''}`).join('・')}</div>${S.dow?`<div class=m>皇太后在世（${S.dow.age}歲），偏愛：${dn()}　太后好感：${S.me.dw|0}</div>`:'<div class=m>太后已薨</div>'}${S.heir?`<div class=m>儲君：${S.heir.n}（${on(S.heir.mom)}之子）</div>`:'<div class=m>儲君未立</div>'}${S.me.fo?`<div class=m>母國${S.me.fo}與大朝邦交：${S.dip|0}</div>`:''}</div>`}
/* ===== 每夜翻牌 ===== */
const ckp=p=>P(cl(p+dfv(),.06,.92));
function nightEv(){if(S.reg||S.over)return null;const m=S.me,L2=[];const wt=(o,me)=>Math.max(4,o.favor)*(1+cb(o)/12)*(o.preg&&o.preg<=3?.25:1)*(me?1.3:1);
L2.push([-1,wt(m,1)]);ids().forEach(i=>L2.push([i,wt(S.npcs[i])]));let tot=L2.reduce((s,x)=>s+x[1],0),r=Math.random()*tot;
for(const[i,w]of L2){if(r<w)return i<0?meNight(false):npcNight(i);r-=w}return null}
function meNight(chk){const m=S.me;
if(!chk){let best=null,bp=0;ids().forEach(i=>{const n=S.npcs[i];if(n.preg&&n.preg<=3)return;const p=Math.max(0,.01+(n.host-30)/1100+n.sc/2200+n.favor/2200-m.ally/2500);if(P(p)&&p>bp){best=i;bp=p}});if(best!==null){const ev=snatchEv(best);if(S.set.sn==1)return runAuto(ev,S.me.silver>=10?1:0);if(S.set.sn==2)return runAuto(ev,3);return ev}}
if(S.set.me)return runAuto(meNightEv(),S.set.me==2&&!S.me.preg?1:0);
return meNightEv()}
function runAuto(ev,idx){S.aut=1;let r='';try{r=ev.o[idx][1]()}finally{S.aut=0}if(r){L('夜・'+r);S.res=(S.res?S.res+'<br>':'')+r}return null}
function nx(){if(S.aut||S.set.me){const m=S.me,ev=meNightEv(),was=S.aut;S.aut=1;const r=ev.o[S.set.me==2&&!m.preg?1:0][1]();S.aut=was;if(r){L('夜・'+r);S.res=(S.res?S.res+'<br>':'')+r}return}S.q.unshift(meNightEv())}
function snatchEv(i){const n=S.npcs[i];return{night:1,t:`今夜皇上本要翻你的牌子，輦轎行到半路，${n.n}宮裡的人卻說她「突發急症」，把皇上請了過去。`,o:[
['立刻趕去，當面請皇上回心轉意（看聖寵與口才）',()=>{const m=S.me,p=.28+m.favor/260+cb(m)/25+perfB(m)+(m.at.sk[13]-40)/400-(S.qi===i?.1:0);if(ckp(p)){n.favor-=4;n.host+=12;m.favor+=3;nx();return`你趕到${n.n}宮外婉言相請，皇上被你的心意打動，轉駕回來。`}m.favor-=4;m.ally-=1;n.favor+=3;n.host+=8;return`你趕到時皇上已入${n.n}宮中，被攔在門外，反成了宮人的笑柄。`}],
['遣心腹遞上親筆信與宵夜，委婉相邀（耗銀10）',()=>{const m=S.me;if(!pay(10))return'銀兩不足，連打賞傳話太監的錢都沒有。';const p=.25+m.ally/300+(m.at.sk[2]+m.at.sk[3]+m.at.sk[13])/700+(m.at.iq-50)/400;if(ckp(p)){n.favor-=3;n.host+=8;nx();return`皇上看了你的信，笑著起身：「這個人，倒是記掛朕。」轉去了你宮中。`}m.favor-=1;return'傳話的太監空手而回，皇上只說「改日再去」。'}],
['不去爭，暗中查她是否真病（蒐集把柄）',()=>{const m=S.me,p=.35+m.scheme/200+(tf('insight')?.15:0)+m.ally/500;if(ckp(p)){S.evid[i]=(S.evid[i]||0)+1;n.host+=4;return`你查到${n.n}壓根沒請太醫，這份「裝病」的把柄你記下了。`}return`你的人沒查出什麼，反而被${n.n}的人察覺。`}],
['忍下這口氣',()=>{S.me.ally+=1;S.me.at.sp=cl(S.me.at.sp-2);return'你獨坐燈下，聽著遠處的更鼓，把怨氣吞了下去。'}]]}}
function pregRate(){const m=S.me;return cl(.22+m.favor/400+tf('fert')+dfx(m).fert+(m.fb||0)+(m.hp-60)/500+(m.at.sp-50)/600,.04,.85)}
function bear(f){const m=S.me;if(!m.preg&&m.hp>30&&P(pregRate()*(f||1))){m.preg=10;S.q.unshift(announceEv());L('太醫診出喜脈！')}}
function meNightEv(){const m=S.me,at=m.at,t=S.tas,pg=m.preg>0,o=[];
o.push([pg?'陪皇上用膳閒談，體貼相伴（有孕在身，不侍寢）':'精心妝扮，溫柔承歡',()=>{if(pg){m.favor+=4;S.mood=cl(S.mood+5);return'你挺著身子陪皇上用膳，皇上憐惜不已，賞賜了不少補品。'}
const p=.62+(at.lk-50)/220+cb(m)/25+(at.sp-50)/300+(m.hp-60)/400;if(ckp(p)){m.favor+=7+Math.max(0,cb(m));m.hp-=2;S.mood=cl(S.mood+4);bear();return'紅燭帳暖，皇上流連忘返，翌日賞賜不斷。'}m.favor+=2;m.hp-=3;S.mood=cl(S.mood-2);return(at.sp<45?'你精神不濟':'你身子不適')+'，神情懨懨，皇上興致缺缺，早早便歇下了。'}]);
o.push(['陪皇上說話——吟詩論畫、對弈撫琴',()=>{const p=.5+((at.sk[0]+at.sk[1]+at.sk[2]+at.sk[3]+at.sk[13])/5-45)/160+(at.iq-50)/250+(at.qi-50)/400+(at.sk[t.sk]-45)/400;if(ckp(p)){m.favor+=6;S.mood=cl(S.mood+9);m.ally+=1;bear(.3);return'你與皇上談詩論畫，一盤棋下到三更，皇上笑道：「難得有人陪朕說得這般投機。」'}m.favor+=1;S.mood=cl(S.mood-2);return'你說的話皇上聽得意興闌珊，終於打了個哈欠。'}]);
if(!pg)o.push(['使出渾身解數，大膽邀寵（高風險，高回報）',()=>{const p=.32+perfB(m)*1.2+cb(m)/28+(S.mood-50)/300+(at.lk-50)/300;if(ckp(p)){m.favor+=14+Math.max(0,cb(m));m.hp-=3;S.mood=cl(S.mood+8);bear();bear();return'你別出心裁的一夜讓皇上驚喜不已，次日宮中都在議論你的恩寵。'}m.favor-=14;m.ally-=4;S.mood=cl(S.mood-10);at.sp=cl(at.sp-5);L('你觸怒龍顏，被太監抬出了寢宮，成了六宮的笑話。');return'你一時用力過猛，皇上勃然大怒：「成何體統！」你被太監抬出了寢宮，成了六宮的笑話。'}]);
o.push(['趁機為母家（或子女）進言',()=>{const p=.35+m.favor/250+(S.mood-40)/300+(at.iq-50)/400;if(ckp(p)){const f=m.fam[R(0,m.fam.length-1)];f.pw+=8;f.lo+=2;m.kids.forEach(k=>k.chong+=2);return`你在皇上心情大好時提了一句，皇上點頭應允，${f.rel}的前程添了助力。`}m.favor-=3;S.mood=cl(S.mood-4);return'皇上皺眉：「後宮不得干政。」你只得訕訕住口。'}]);
o.push(['稱病推辭，把機會讓給別人（賣個人情）',()=>{const a=ids().filter(i=>S.npcs[i].al>15||S.npcs[i].host<30);const n=S.npcs[a.length?a[R(0,a.length-1)]:ids()[0]];if(!n)return'你稱病不見。';m.favor-=3;n.al+=10;n.host-=6;n.favor+=3;return`你稱病讓出今夜，${n.n}感激不已，欠了你一個人情。`}]);
return{night:1,t:`今夜皇上翻了你的牌子。${S.mood<30?'皇上似乎心情不佳。':S.mood>70?'皇上心情甚佳。':''}聖上${tasteTxt()}。你要如何迎駕？`,o}}
function npcNight(i){const n=S.npcs[i];if(S.set.no==2){n.favor+=R(1,2);return null}const ev=npcNightEv(i);if(S.set.no==1){const m=S.me;return runAuto(ev,m.hp<50?0:perfB(m)>.04?1:m.at.sk[9]>60?2:1)}return ev}
function npcNightEv(i){const n=S.npcs[i],q=S.qi===i;
return{night:1,t:`今夜皇上翻了${n.n}（${RKN(n)}${q?'・中宮':''}）的牌子，往她宮中去了。你要如何？`,o:[
['假稱身子不適，遣人請皇上前來探望（截胡）',()=>{const m=S.me,sick=m.hp<50,p=.2+m.favor/220+cb(m)/30-n.favor/320+(sick?.15:0)-(q?.12:0);n.favor+=R(1,2);if(ckp(p)){n.favor-=5;n.host+=15;m.favor+=4;nx();return`皇上聽說你病了，改道來探望，${n.n}撲了個空。`}if(!sick){m.favor-=7;n.host+=8;if(q)m.emp-=10;return'皇上派太醫一查，你並無大礙，龍顏不悅，說你「裝病爭寵」。'}return'皇上聽說你病了，只遣太醫送了些藥來。'}],
['備下宵夜，在半路「偶遇」皇上（獻藝）',()=>{const m=S.me,p=.28+perfB(m)*1.5+cb(m)/20-(q?.08:0);n.favor+=R(1,2);if(ckp(p)){n.favor-=4;n.host+=12;m.favor+=5;nx();return'你在梅林撫琴一曲，皇上駐足聽得入神，終於轉身與你同行。'}m.favor-=2;return'你在寒風裡等了半夜，皇上的輦轎徑直從你面前過去。'}],
['遣人送一盅親手熬的湯去給皇上（廚藝）',()=>{const m=S.me,p=.3+(m.at.sk[9]-40)/180+m.favor/500;n.favor+=R(1,2);if(ckp(p)){m.favor+=3;S.mood=cl(S.mood+3);n.favor-=2;return'皇上嚐了湯，說了句「有心了」，賞了你一對玉鐲。'}return'湯送到時皇上已歇下，宮人只收了食盒。'}],
['暗中設計，讓她今夜侍寢不成（耗銀20，有風險）',()=>{const m=S.me;if(!pay(20))return'銀兩不足，打點不了人。';const p=.3+m.scheme/200+tf('plot')+m.ally/400-n.sc/300;if(ckp(p)){n.favor-=8;n.host+=20;m.favor+=2;if(P(.5)){nx();return`${n.n}的鞋履被人動了手腳，當眾失儀，皇上不悅，轉駕來了你宮中。`}return`${n.n}今夜出了岔子，皇上拂袖而去，倒也沒來你這兒。`}m.favor-=6;n.host+=30;m.ally-=2;return`你的手腳被${n.n}宮人察覺，她哭哭啼啼告到了皇上面前。`}],
['不爭，趁夜讀書調養',()=>{const m=S.me,a=m.at;n.favor+=R(1,2);m.hp+=3;a.sp=cl(a.sp+3);const s=R(0,13);a.sk[s]=cl(a.sk[s]+1);return`你放下不甘，靜心讀書養神，${SKN[s]}略有進益。`}]]}}

/* ===== 太后臨朝（皇帝駕崩後繼續） ===== */
const REGT=['唯一太后','唯一皇太后','東西太后','宮變奪位','嫡母皇太后'];
const ag=()=>yr(S.reg.k);
function regStart(t,x){const m=S.me,k=S.nk,own=S.nko==='me',a=yr(k),E=Q(),wm=typeof S.nko=='number'?S.npcs[S.nko]:null;let rvn,rv;
if(a<6){rvn='攝政王';rv=R(45,70)}else if(E&&S.qi!=='me'&&t.includes('東西')){rvn='東太后'+E.n;rv=cl(E.pow*.5+25+R(0,10))}else if(!own&&wm&&!wm.st){rvn='太妃'+wm.n;rv=cl(wm.pow*.4+20+R(0,10))}else{rvn='首輔權臣';rv=R(30,55)}
const pw=cl(22+m.ally*.2+m.scheme*.18+m.clan*.25+(own?12:0)+(a<6?10:a<16?4:-10)+(S.qi==='me'?8:0));
S.reg={k,own,t0:S.t,title:t.includes('東西')?'西太后':'皇太后',pw,rv,rvn,stay:0,fin:0,wed:0};S.q=[];S.ev=null;S.ch=null;S.w=4;S.res=null;m.preg=0;S.npcs.forEach(n=>n.preg=0);regInit();
L(`${k.n}（${a}歲）登基，你成為${S.reg.title}，開始臨朝聽政。`);
const h=`<p>${x}</p>${tfLine()}<p><b>你的故事沒有結束——</b>新帝${k.n}今年${a}歲，${a<6?'尚在稚齡，由攝政王與你共理朝政':a<16?'年少，由你垂簾聽政':'已近成年，隨時可能要求親政'}。你的對手是${rvn}，權柄 ${pw|0}，對手勢力 ${rv|0}。</p><p class=m>此後每月仍有四次行動：批閱奏章、拉攏重臣、教導皇帝、打壓對手……直到皇帝親政，你選擇還政或戀權，才會迎來結局。</p>`;
S.scn={h,o:[{l:'臨朝聽政',f(){S.scn=null;render()}}]};render()}
const RACT=[
['批閱奏章','垂簾聽政，朝局與權柄＋',()=>{const R_=S.reg,m=S.me,a=m.at;if(ckp(.5+(a.iq-50)/200+m.scheme/400+(R_.pw-40)/400)){S.nat.stab+=3;S.nat.eco+=2;R_.pw+=3;L('你燈下批閱奏章，條理分明，朝臣暗自佩服。')}else{S.nat.stab-=2;R_.pw-=1;L('你批閱時一時疏漏，惹得朝臣議論。')}a.sp=cl(a.sp-2)}],
['召見重臣','耗銀15，拉攏朝臣，權柄＋',()=>{const R_=S.reg,m=S.me;if(!pay(15))return L('銀兩不足，賞賜不出像樣的見面禮。');if(ckp(.45+m.ally/250+(m.at.qi-50)/300+(m.at.sk[4]-40)/300)){R_.pw+=5;m.ally+=3;L('你召見重臣，恩威並施，幾位老臣表態效忠。')}else{R_.pw+=1;L('你召見重臣，對方只說了些場面話。')}}],
['教導皇帝','皇帝才德孝心＋',()=>{const R_=S.reg,k=R_.k,m=S.me,a=yr(k);if(ckp(.55+(m.at.iq-50)/250+(m.at.sk[2]-40)/250+(k.bond-50)/300-(a>=12?.08:0))){k.cai=cl(k.cai+R(3,6));k.de=cl(k.de+R(2,5));k.bond=cl(k.bond+3);L(`你親自教導${k.n}，皇帝進益不小。`)}else{k.bond=cl(k.bond-2);L(`${k.n}心不在焉，你的教導收效甚微。`)}}],
['打壓對手','削弱對手勢力，有風險',()=>{const R_=S.reg,m=S.me;if(ckp(.3+R_.pw/200+m.scheme/300+m.ally/500-R_.rv/250)){const d=R(8,15);R_.rv=cl(R_.rv-d);R_.pw+=2;L(`你抓住${R_.rvn}的把柄，一舉削去其勢力。`)}else{R_.pw-=4;R_.rv=cl(R_.rv+3);L(`你對${R_.rvn}的打壓被反擊，權柄受損。`)}}],
['賑濟施恩','耗銀20，民心國庫＋',()=>{const m=S.me;if(!pay(20))return L('銀兩不足。');if(ckp(.6+(m.at.sk[8]-40)/250)){S.nat.pop+=5;S.nat.eco+=2;S.reg.pw+=1;L('你開倉施粥、減免賦稅，百姓稱頌太后慈悲。')}else{S.nat.pop+=2;L('賑濟經手人層層盤剝，百姓只得了些零頭。')}}],
['整軍經武','耗銀20，軍力＋',()=>{if(!pay(20))return L('銀兩不足。');const fm=S.me.fam.map(f=>f.pw).concat(0);if(ckp(.5+Math.max(...fm)/400+S.reg.pw/400)){S.nat.mil+=6;S.reg.rv-=1;L('你整頓軍務，將士用命，軍心漸穩。')}else{S.nat.mil+=2;L('軍餉被層層克扣，整軍收效有限。')}}],
['提攜母家','母家勢力＋，但朝臣側目',()=>{const m=S.me,f=m.fam[R(0,m.fam.length-1)];f.pw+=7;f.lo+=2;S.reg.pw+=2;S.nat.stab-=2;L(`你提攜${f.rel}，母家聲勢更盛，卻遭言官議論「外戚干政」。`)}],
['安撫皇帝','皇帝孝心＋，防母子失和',()=>{const R_=S.reg,k=R_.k,m=S.me;if(ckp(.55+(m.at.qi-50)/250+(k.bond-45)/300)){k.bond=cl(k.bond+R(4,8));L(`你陪${k.n}用膳談心，母子關係融洽了不少。`)}else{k.bond=cl(k.bond+1);L(`${k.n}對你的關懷淡淡的，顯得有些疏離。`)}}],
['調養身子','健康、精神＋',()=>{const a=S.me.at;S.me.hp+=12;a.sp=cl(a.sp+6);L('你靜心調養，氣色漸好。')}],
ACT.find(a=>a[0]=='研習技藝'),ACT.find(a=>a[0]=='梳妝保養'),ACT.find(a=>a[0]=='延醫問藥'),
['還政退隱','皇帝年滿十六，可選擇還政，結束垂簾',()=>{if(ag()<16)return L('皇帝尚且年幼，此時還政，朝局將傾覆。');regEnd('還政');return 1}]];
const RGE=[
()=>ag()>=14&&S.reg.pw>35&&{t:'朝中老臣聯名上疏：「皇上春秋鼎盛，請太后還政。」',o:[
['強勢駁回，嚴懲帶頭之人',()=>{const R_=S.reg;if(ckp(.3+R_.pw/180+S.me.scheme/400)){R_.pw+=4;R_.k.bond-=3;S.nat.stab-=2;return'你雷霆手段壓下風波，朝臣噤聲，但皇帝看你的眼神多了一層疏離。'}R_.pw-=6;S.nat.stab-=4;return'你的強硬激起更大反彈，朝堂上議論紛紛，權柄受損。'}],
['虛與委蛇，答應「再議」',()=>{S.me.ally+=1;if(ckp(.5+S.me.ally/300))return'你敷衍過去，風波暫息。';S.reg.pw-=3;return'你的推託被人看穿，朝臣更加不滿。'}],
['順勢宣布還政',()=>{regEnd('還政');return''}]]},
()=>({t:'邊關告急，敵軍壓境，朝臣爭論主戰還是主和。',o:[
['調兵遣將，堅決迎戰',()=>{const R_=S.reg,p=.35+S.nat.mil/180+R_.pw/400+S.me.scheme/500;if(ckp(p)){S.nat.mil+=4;S.nat.pop+=3;R_.pw+=3;return'前線大捷，捷報傳來，朝野振奮，你的威望大增。'}S.nat.mil-=6;S.nat.eco-=5;S.nat.pop-=3;R_.pw-=3;return'戰事失利，損兵折將，朝臣把責任推到你頭上。'}],
['議和納貢，換取喘息',()=>{S.nat.eco-=5;S.nat.stab+=2;S.reg.pw-=2;return'你割地納幣求和，邊關暫安，但清流罵聲一片。'}],
['親自督辦軍需（看數理）',()=>{if(!pay(15))return'銀兩不足。';if(ckp(.4+(S.me.at.sk[8]-40)/180)){S.nat.mil+=5;S.nat.eco+=1;return'你把軍需調度得井井有條，前線士氣大振。'}S.nat.eco-=3;return'軍需賬目出了紕漏，白白折耗了錢糧。'}]]}),
()=>({t:'數省大旱，流民湧入京畿，餓殍載道。',o:[
['開倉賑災，嚴查貪墨（耗銀30）',()=>{if(!pay(30))return'國庫與你的私房都不足，只能放任災情。';if(ckp(.5+(S.me.at.sk[8]-40)/200+S.reg.pw/400)){S.nat.pop+=8;S.nat.stab+=2;S.reg.pw+=3;return'你嚴懲了幾個貪墨的官吏，災民得以活命，百姓感念太后恩德。'}S.nat.pop+=2;S.nat.eco-=3;return'賑災款被層層截留，災民怨聲載道。'}],
['減免賦稅，與民休息',()=>{S.nat.eco-=4;S.nat.pop+=5;return'你下詔減免賦稅，國庫吃緊，但民心歸附。'}],
['按兵不動，等地方官處置',()=>{S.nat.pop-=6;S.nat.stab-=4;return'災情被拖大，流民聚眾，朝局動盪。'}]]}),
()=>S.reg.rv>45&&{t:`${S.reg.rvn}結黨營私，朝中半數官員已倒向他。`,o:[
['尋他的錯處，嚴懲典型',()=>{const R_=S.reg;if(ckp(.3+R_.pw/200+S.me.scheme/300-R_.rv/300)){R_.rv-=R(10,18);R_.pw+=3;return`你抓了他最得力的黨羽殺雞儆猴，${R_.rvn}的聲勢頓時一挫。`}R_.pw-=5;R_.rv+=4;return'你的把柄被對方反咬一口，權柄受損。'}],
['贈以高位厚祿，拉攏收買（耗銀25）',()=>{if(!pay(25))return'銀兩不足。';const R_=S.reg;if(ckp(.45+S.me.ally/300)){R_.rv-=6;R_.pw+=2;return`你許他高官厚祿，${R_.rvn}態度軟化了。`}return'對方收了禮卻毫不領情。'}],
['隱忍不發，靜待時機',()=>{S.reg.rv+=3;S.me.ally+=2;return'你表面不動聲色，暗中結交朝臣。'}]]},
()=>ag()<16&&({t:`${S.reg.k.n}厭倦讀書，整日躲在御花園裡玩耍。`,o:[
['嚴厲管教，戒尺伺候',()=>{const k=S.reg.k;k.cai=cl(k.cai+4);k.bond=cl(k.bond-5);return`${k.n}被你責罰，讀書勤奮了些，卻對你有了怨氣。`}],
['溫言開導，講道理（看氣質智商）',()=>{const k=S.reg.k,m=S.me;if(ckp(.45+(m.at.iq-50)/250+(m.at.qi-50)/300+(k.bond-45)/300)){k.cai=cl(k.cai+5);k.de=cl(k.de+3);k.bond=cl(k.bond+4);return`你耐心引導，${k.n}終於懂得了為君之道。`}k.bond=cl(k.bond-1);return`${k.n}似懂非懂，轉頭又去玩了。`}],
['請名儒入宮講學（耗銀20）',()=>{if(!pay(20))return'銀兩不足，請不起名儒。';const k=S.reg.k;k.cai=cl(k.cai+R(4,8));k.de=cl(k.de+R(2,5));return'大儒的講學深入淺出，皇帝漸漸入了門。'}]]}),
()=>({t:'你的兄弟族人上書，請求加官晉爵，言辭懇切。',o:[
['加封母家，安插親信',()=>{const m=S.me,f=m.fam[R(0,m.fam.length-1)];f.pw+=10;f.lo+=3;S.reg.pw+=3;S.nat.stab-=3;S.reg.rv+=3;return`${f.rel}封了侯，朝臣側目，對手趁機說你「外戚專權」。`}],
['嚴辭拒絕，以示公正',()=>{S.me.fam.forEach(f=>f.lo-=3);S.reg.pw+=1;S.nat.stab+=2;return'你拒絕了母家，朝臣讚你大公無私，家人卻心生怨懟。'}],
['只賞銀錢，不授官職',()=>{if(!pay(20))return'銀兩不足。';S.me.fam.forEach(f=>f.lo+=2);return'家人收了賞賜，明白了你的難處。'}]]}),
()=>({t:'科舉放榜後，有人檢舉考官舞弊，落榜舉子在宮門外喧嘩。',o:[
['親自複查，嚴辦舞弊（看智商）',()=>{if(ckp(.45+(S.me.at.iq-50)/200+S.reg.pw/400)){S.nat.stab+=3;S.nat.pop+=3;S.reg.pw+=3;return'你查出了真相，革了考官，天下士子稱頌。'}S.nat.stab-=3;return'你被捲入黨爭，查辦陷入泥潭。'}],
['壓下消息，維持穩定',()=>{S.nat.stab+=1;S.nat.pop-=4;return'風波被壓了下去，但民間的怨言越積越深。'}]]}),
()=>ag()>=13&&!S.reg.wed&&P(.6)&&wedEv(),
()=>false&&{t:`皇帝已到大婚之齡，皇后人選牽動朝局。`,o:[
['選母家之女為后',()=>{const R_=S.reg;R_.wed=1;R_.pw+=5;R_.k.bond-=4;S.me.fam.forEach(f=>f.pw+=3);return'你親自為皇帝選了母家的姑娘，兩家親上加親，但皇帝有些不快。'}],
['選高門貴女，結交重臣',()=>{const R_=S.reg;R_.wed=1;S.me.ally+=5;R_.rv-=4;S.nat.stab+=2;return'你為皇帝聘了名門之女，朝臣額手稱慶。'}],
['讓皇帝自己做主',()=>{const R_=S.reg;R_.wed=1;R_.k.bond+=8;R_.pw-=2;return'皇帝選了心儀的姑娘，對你滿心感激。'}]]},
()=>({t:'民間忽然傳出「牝雞司晨、太后專權」的童謠，欽天監也報星象異動。',o:[
['查辦造謠者，殺一儆百',()=>{if(ckp(.4+S.reg.pw/250+S.me.scheme/400)){S.reg.pw+=3;S.nat.stab+=2;return'你查出源頭，嚴懲了幾個散布謠言的人，輿論漸平。'}S.reg.pw-=3;S.nat.pop-=3;return'你越查越亂，反而坐實了謠言。'}],
['下詔罪己，齋戒祈福（耗銀10）',()=>{if(!pay(10))return'銀兩不足。';S.nat.pop+=4;S.reg.pw-=2;return'你下詔罪己，百姓動容，只是朝臣覺得你示弱了。'}],
['置之不理',()=>{S.reg.rv+=3;S.nat.stab-=2;return'流言越傳越廣，對手拿來做文章。'}]]}),
()=>ag()>=11&&S.reg.k.bond<62&&{t:`${S.reg.k.n}逐漸長大，開始不滿你替他做主，嚷著要親自批奏章。`,o:[
['嚴詞阻止，皇帝還小',()=>{const R_=S.reg;R_.pw+=3;R_.k.bond-=7;return'你強硬地攔下了皇帝，他摔了奏章，一個月沒與你說話。'}],
['放一部分權，讓他練練手',()=>{const R_=S.reg;R_.pw-=6;R_.k.bond+=9;R_.k.pow=cl(R_.k.pow+5);return'皇帝辦了幾件事，雖有疏漏，但很是高興，與你親近了不少。'}],
['擺宴談心，說明厲害（看氣質）',()=>{const R_=S.reg,m=S.me;if(ckp(.45+(m.at.qi-50)/200+(R_.k.bond-40)/250)){R_.k.bond+=6;return'你推心置腹地分析朝局，皇帝似懂非懂地點了頭，心結解開不少。'}R_.k.bond-=3;return'皇帝皺眉不語，顯然沒有被說服。'}]]},
()=>S.dow&&{t:'太皇太后召你過去，嫌你「過問朝政太多」，要你交出一部分權柄。',o:[
['恭順聽訓，主動讓權',()=>{S.reg.pw-=5;S.me.dw=cl(S.me.dw+8);return'你恭順受訓，太皇太后面色稍霽。'}],
['據理力爭，寸步不讓（看氣質與口才）',()=>{if(ckp(.35+S.reg.pw/250+(S.me.at.sk[13]-40)/300)){S.reg.pw+=2;S.me.dw=cl(S.me.dw-5);return'你以祖制與社稷說服了太皇太后，她擺手讓你退下。'}S.reg.pw-=6;S.me.dw=cl(S.me.dw-12);return'你頂撞太皇太后，被罰在慈寧宮外跪了半日。'}]]}];
function rivalCoup(){const R_=S.reg;return{t:`${R_.rvn}勢力已盛，今夜京城謠傳他要發動政變，挾持皇帝！`,o:[
['先發制人，調兵控制九門',()=>{const m=S.me,mil=Math.max(0,...m.fam.map(f=>f.pw));if(ckp(.25+R_.pw/220+mil/400+m.scheme/500-R_.rv/300)){R_.rv=cl(R_.rv-35);R_.pw+=8;L(`你先發制人，${R_.rvn}被擒，權柄大增。`);return`你搶先一步控制九門，${R_.rvn}束手就擒。`}over('宮廷政變失敗',`你倉促調兵，卻被${R_.rvn}反制。${R_.rvn}控制了皇帝，你被幽禁冷宮，母家被清算。`);return''}],
['護著皇帝躲進後宮，召集忠臣勤王',()=>{if(ckp(.3+m_ally()/250+R_.k.bond/400)){R_.rv=cl(R_.rv-20);R_.pw+=2;return'忠臣聞訊趕來，政變被撲滅，你與皇帝共患難，關係更近。'}R_.pw-=15;R_.k.bond-=5;return'勤王之師來得太遲，你被迫讓出大半權柄才保住皇帝。'}],
['向對方讓步，換取妥協',()=>{R_.pw-=15;R_.rv=cl(R_.rv-10);return'你交出部分權柄，政變消弭於無形，但你的威望大損。'}]]}}
const m_ally=()=>S.me.ally;
function regEnd(kind){const R_=S.reg,k=R_.k,m=S.me,yrs=Math.floor((S.t-R_.t0)/12),sc2=natv()*.5+(k.cai+k.de)*.12+k.bond*.2,rep=natv()>=62?'國泰民安':natv()>=42?'朝局平穩':'國勢衰微';let t,x;
const mid=`你臨朝${yrs}年，${k.n}${yr(k)}歲，${rep}（國力${natv()|0}）。`;
if(kind=='還政'){if(sc2>=62&&k.bond>=55){t='賢德太后';x=`${mid}你將朝政交還給${k.n}，皇帝跪地叩謝母恩。史官評你「垂簾而不專，還政而有禮」，後世稱你為一代賢后。`}else if(sc2>=45){t='還政歸隱';x=`${mid}你還政於帝，搬入慈寧宮頤養天年。${k.bond>=50?`${k.n}時常來請安，母子和睦。`:`母子之間有些客氣，卻也相安無事。`}`}else{t='還政之後';x=`${mid}你還政之時朝局已是百孔千瘡，${k.n}接手了一個爛攤子。你在深宮中看著國事日非，只能長嘆。`}}
else if(kind=='母子反目'){t='母子反目';x=`${mid}你戀棧權柄，皇帝終於發動宮變奪回大權。你被軟禁於偏殿，史書上寫著「太后專權，帝奪之」。`}
else if(kind=='老死'){if(R_.stay&&k.bond<45){t='權傾天下';x=`${mid}你直到終老都握著權柄，${k.n}一生活在你的陰影下。你薨逝時，朝野上下無人敢言你的過失。`}else{t=sc2>=55?'壽終正寢':'垂暮之年';x=`${mid}你在慈寧宮平靜離世，後世對你的評價褒貶不一。`}}
over(t,x)}
function rmend(){const m=S.me,R_=S.reg,k=R_.k;S.t++;S.w=4;const a=yr(k),yrs=Math.floor((S.t-R_.t0)/12);
shopTick();m.silver+=Math.max(0,6+(R_.pw/12|0)+Math.round((natv()-50)/15));
{const f=dfx(m),at=m.at;m.hp=Math.min(100,m.hp+1-f.hp*.7-(yrs>20?.3:0));at.sp=cl(at.sp+(60-at.sp)*.08-f.sp);if(P(.004+(at.sp<30?.006:0))&&at.ds.length<4){const d=ONSET[R(0,ONSET.length-1)];if(!at.ds.includes(d)){at.ds.push(d);L(`你染上了「${DS[d][0]}」。`)}}}
Object.keys(S.nat).forEach(q=>S.nat[q]=cl(S.nat[q]+(52-S.nat[q])*.04+R(-2,2)+(R_.pw>55?(m.at.iq-50)/90:0)));
R_.rv=cl(R_.rv+R(-2,3)+(R_.pw<35?1:0));R_.pw=cl(R_.pw+(a>=16&&R_.stay?-1:0)+(R_.rv>70?-.5:.2));
k.cai=cl(k.cai+(a<16?.3:.05));k.de=cl(k.de+(a<16?.25:.05));k.pow=cl(k.pow+(a>=12?.25:0));k.bond=cl(k.bond+(R_.pw>60&&a>=10?-.4:.15));
S.npcs.forEach(n=>{n.hp=Math.min(100,n.hp+1)});m.kids.forEach(c=>c.chong=cl(c.chong+R(-1,1)));
fix();if(S.over)return;
const se=storyTick();rx2tick();if(natv()<15&&P(.2))return over('山河破碎',`你臨朝${yrs}年，天下大亂，民變四起。叛軍攻入京城，${k.n}與你被迫出逃，王朝在你手中走向終結。`);
if(yrs>=35)return regEnd('老死');
if(R_.pw<=5)return over('權柄盡失',`你在朝堂的權柄被${R_.rvn}一點點蠶食，最終被請出聽政之位，在深宮度過餘生。`);
const ev=[];
if(a>=16&&!R_.fin){R_.fin=1;ev.push({t:`${k.n}已滿十六歲，大臣們紛紛請旨：皇帝親政，太后還政。`,o:[['還政於帝，頤養天年',()=>{regEnd('還政');return''}],['再扶一程，暫不還政（權柄、風險並存）',()=>{R_.stay=1;R_.k.bond-=8;return'你決定再為皇帝把幾年關，只是皇帝看你的眼神冷了。'}]]})}
if(R_.stay&&a>=18&&P(.04+(55-k.bond)/500+(k.pow-40)/800)){ev.push({t:`${k.n}不再忍耐，聯合朝臣要求你交出所有權柄。`,o:[['認輸還政，保全母子名分',()=>{regEnd('還政');return''}],['強勢反壓（看權柄與勢力）',()=>{if(ckp(.35+R_.pw/220-(k.pow-30)/250+(k.bond-45)/400)){R_.pw+=4;k.bond-=10;return'你再次壓住了局面，但母子之間已隔著一道冰牆。'}regEnd('母子反目');return''}]]})}
if(R_.rv>80&&P(.1))ev.push(rivalCoup());
if(P(.28))ev.push(RENV[R(0,RENV.length-1)]());
if(P(.65)){const f=RGE.map(g=>g()).filter(Boolean);if(f.length)ev.push(f[R(0,f.length-1)])}
if(P(.3)){const f=RGE.map(g=>g()).filter(Boolean);if(f.length)ev.push(f[R(0,f.length-1)])}
mxMonth().forEach(e=>ev.push(e));ev.sort(()=>Math.random()-.5);S.q=S.q.concat(ev.slice(0,3)).concat(se.slice(0,2));next()}
function regPanel0(){const R_=S.reg,k=R_.k,a=yr(k),n=S.nat,yrs=Math.floor((S.t-R_.t0)/12);
return`<div class=cd><h3>臨朝聽政　第${yrs+1}年</h3><div class=m>${R_.title}・${R_.own?'皇帝是你的親生骨肉':'皇帝是別人之子，你是嫡母'}${R_.stay?'・戀權':''}</div>${abar('權柄',R_.pw)}${abar(R_.rvn,R_.rv)}</div><div class=cd><h3>當今皇帝　${k.n}</h3><div class=k>${a}歲（${a<6?'沖齡':a<16?'年少':'成年'}）・${KT[k.t][0]}</div>${abar('才學',k.cai)}${abar('德行',k.de)}${abar('孝心',k.bond)}${abar('勢力',k.pow)}${k.at?`<div class=m style="margin-top:6px">顏${k.at.lk|0}・氣質${k.at.qi|0}・智${k.at.iq|0}｜${dsPills(k.at)}</div>`:''}</div><div class=cd><h3>天下大勢　國力 ${natv()|0}</h3>${abar('國庫',n.eco)}${abar('軍力',n.mil)}${abar('民心',n.pop)}${abar('朝局',n.stab)}</div>`}

/* ===== 隨機後宮、選秀、產業 ===== */
const SUR=['蕭','柳','白','蘇','董','趙','鄭','林','葉','秦','韓','許','周','陸','顧','莊','裴','崔','杜','魏','沈','江','寧','謝','顏','溫','楚','雲','齊','孟','賀','衛','方','洛'],GIV=['婉','嫻','靜','姝','瑤','薇','芷','蘭','琴','霜','雪','芙','黛','瑛','玥','憐','盈','菀','妍','嫣','清','如','寧','若','汐','棠','悅','凝'];
const TIERJ=[['鎮北侯','內閣大學士','兵部尚書','太傅','宰輔'],['戶部尚書','工部侍郎','刑部侍郎','巡撫','總兵','禮部侍郎'],['知府','鹽運使','道臺','參將','翰林侍講','織造'],['縣令','主簿','秀才','員外郎','鹽商','教諭']];
let gsn=0,gdn=0;const HU=new Set();
function nm2(){let n,c=0;do{n=SUR[R(0,SUR.length-1)]+GIV[R(0,GIV.length-1)]+(P(.6)?GIV[R(0,GIV.length-1)]:'')}while(HU.has(n)&&c++<50);HU.add(n);return n}
function famFor(rank){const T=rank>=7?0:rank>=5?1:rank>=3?2:3,J=TIERJ[T],J2=TIERJ[Math.min(3,T+1)],pb=[75,55,32,10][T],f=[['父親',J[R(0,J.length-1)],cl(pb+R(-8,12)),R(40,75),R(40,90)]];if(P(.7))f.push(['兄長',J2[R(0,J2.length-1)],cl(pb-15+R(-5,10)),R(35,70),R(35,85)]);if(T<2&&P(.4))f.push(['侄子',J2[R(0,J2.length-1)],cl(pb-30+R(0,10)),R(35,70),R(40,85)]);return f}
function genHarem(ka){gsn=0;gdn=0;HU.clear();const rk=[8].concat([7,6,6,5,5,4,3,3,2,1].sort(()=>Math.random()-.5).slice(0,7)),out=[];
rk.forEach((r,i)=>{const name=i==0?SUR[R(0,SUR.length-1)]+'皇后':nm2(),fam=famFor(r),kids=[],nk=r<3?(P(.2)?1:0):(P(.7)?1:0)+(P(.3)?1:0)+(i==0&&P(.4)?1:0);
for(let j=0;j<nk;j++){const sex=P(.55)?'男':'女';kids.push(kid(sex=='男'?SN[gsn++%SN.length]:DN[gdn++%DN.length],sex,ka(R(15,90)/100),i,i==0&&j==0&&sex=='男'?{cai:55,de:65,chong:45,pow:45}:{}))}
out.push(mkN(name,r,i==0?R(25,45):R(30,65),fam,kids))});return out}
function genNN(){const o=[];for(let i=0;i<28;i++)o.push(nm2()+'|'+[0,0,0,1,1,2][R(0,5)]);return o}
/* --- 產業 --- */
const SHT=[['胭脂鋪',40,3],['綢緞莊',80,5],['茶樓',70,4.5],['酒肆',70,4.5],['書局',60,4],['藥鋪',90,5.5],['當鋪',140,8],['錢莊',260,16]];
const shopInc=s=>SHT[s.t][2]*s.lv*(.4+s.pop/120+s.mg/200);
const incTot=()=>(S.me.shops||[]).reduce((a,s)=>a+shopInc(s),0);
function initShops(n,c,gi,tn){const o=[],mk=(t,lv)=>o.push({t,lv,pop:R(25,50),mg:R(35,60),dw:1});
if(n.includes('商賈')){for(let i=0;i<3;i++)mk([0,1,2,7][R(0,3)],R(2,3))}else if(n.includes('鹽商')){mk(1,2);mk(6,2)}else if(c==2)mk(1,2);else if(n.includes('書香'))mk(4,1);else if(c==0&&gi<=2)mk(1,1);if(tn=='善於斂財')mk(R(0,6),1);return o}
function shopTick(){const m=S.me,inc=incTot();if(inc>0)m.silver+=Math.round(inc);m.scand=Math.max(0,(m.scand||0)-.12);m.shops.forEach(s=>{s.pop=cl(s.pop+R(-2,2));if(P(.015)){if(P(.5)){const l=Math.round(shopInc(s)*2);m.silver=Math.max(0,m.silver-l);L(`${SHT[s.t][0]}的掌櫃捲款潛逃，損失${l}兩。`)}else{s.pop=cl(s.pop+8);L(`${SHT[s.t][0]}生意興隆，客似雲來。`)}}})}
function shopExpoEv(){return{t:'有御史上奏：「後宮妃嬪暗中經商，與民爭利」，矛頭隱隱指向你。',o:[
['認罰請罪，請皇上寬恕（罰銀、聖寵損）',()=>{const m=S.me,f=Math.min(m.silver,60);m.silver-=f;m.favor-=5;m.shops.forEach(s=>s.dw=1);return`你認罰${f}兩，皇上申斥了幾句，鋪子也就此「過了明路」。`}],
['推說是母家的產業',()=>{const m=S.me,mp=Math.max(...m.fam.map(x=>x.pw)),lo=Math.max(...m.fam.map(x=>x.lo));if(ckp(.3+mp/250+lo/400)){m.shops.forEach(s=>s.dw=1);return'母家站出來認下了鋪子，風波平息。'}m.favor-=10;m.fam.forEach(x=>x.lo-=4);return'母家不肯背鍋，你被當場拆穿，聖寵大損。'}],
['買通御史，壓下彈章（耗銀80）',()=>{const m=S.me;if(!pay(80))return'銀兩不足，御史不肯收手。';if(ckp(.45+m.ally/250)){return'彈章被壓了下去，沒人再提這事。'}m.favor-=8;return'御史收了錢卻仍是照奏，你賠了夫人又折兵。'}],
['向皇上撒嬌求情（看聖寵）',()=>{const m=S.me;if(ckp(.2+m.favor/150+cb(m)/30)){m.favor+=2;return'皇上笑罵你胡鬧，卻也不再追究。'}m.favor-=8;return'皇上冷著臉：「後宮不得經商，你忘了麼？」'}]]}}
function scandalEv(){return{t:'有御史彈劾你賣官鬻爵、收受賄賂，證據指向你宮中的人。',o:[
['據理力辯，說是被人栽贓（看心機）',()=>{const m=S.me;if(ckp(.3+m.scheme/200+m.favor/400)){m.scand=Math.max(0,m.scand-3);return'你辯得滴水不漏，皇上不再追究。'}m.favor-=14;m.silver=Math.max(0,m.silver-100);m.scand+=1;return'你的辯詞漏洞百出，皇上震怒，重罰了你。'}],
['請母家出面斡旋',()=>{const m=S.me,mp=Math.max(...m.fam.map(x=>x.pw));if(ckp(.2+mp/180)){m.scand=Math.max(0,m.scand-2);m.fam.forEach(x=>x.lo-=1);return'母家疏通了關節，事情被壓下，只是欠了不少人情。'}m.favor-=12;return'母家自身難保，反被牽連。'}],
['推出中間人頂罪',()=>{const m=S.me;m.scand=Math.max(0,m.scand-3);m.ally-=4;m.favor-=3;if(ckp(.55+m.scheme/300))return'一個中間人替你頂了罪，風波平息，但宮人看你的眼神多了畏懼。';m.favor-=10;return'頂罪的人臨死前咬出了你，皇上大怒。'}],
['認罪求饒（保命要緊）',()=>{const m=S.me;m.favor-=20;m.silver=Math.max(0,m.silver-150);if(m.rank>0)m.rank--;m.scand=0;return`你認罪求饒，被降為${RK[m.rank]}，罰沒銀兩，總算保住了性命。`}]]}}
function bizAct(){const m=S.me;choose('要經營什麼？',[
{l:'開設新鋪（私下經營，有風險）',f(){choose('開哪種鋪子？',SHT.map((s,i)=>({l:`${s[0]}（本錢${s[1]}兩，月入約${s[2]}兩起）`,f(){if(!pay(s[1]))return L('本錢不足。');if(ckp(.6+(m.at.sk[8]-40)/200+m.ally/400)){m.shops.push({t:i,lv:1,pop:R(15,35),mg:cl(R(25,45)+(m.at.sk[8]-40)/4),dw:0});L(`你托心腹在宮外開了一間${s[0]}。`)}else{m.silver+=Math.floor(s[1]/2);L('選址不佳，鋪子沒開成，折了一半本錢。')}}})))}},
{l:'整頓經營（提升經營度）',f(){if(!m.shops.length)return L('你還沒有鋪子。');choose('整頓哪間？',m.shops.map(s=>({l:`${SHT[s.t][0]}・Lv${s.lv}・經營${s.mg|0}`,f(){const g=Math.round(R(5,10)+(m.at.sk[8]-40)/10+(m.at.iq-50)/20);s.mg=cl(s.mg+g);L(`你親自核賬整頓，${SHT[s.t][0]}經營度+${g}。`)}})))}},
{l:'宣傳造勢（耗銀15，提升熱度）',f(){if(!m.shops.length)return L('你還沒有鋪子。');if(!pay(15))return L('銀兩不足。');choose('宣傳哪間？',m.shops.map(s=>({l:`${SHT[s.t][0]}・熱度${s.pop|0}`,f(){const g=R(6,12)+(m.ally/20|0);s.pop=cl(s.pop+g);L(`你讓人在坊間吹噓，${SHT[s.t][0]}熱度+${g}。`)}})))}},
{l:'擴建升級（耗銀，最高5級）',f(){if(!m.shops.length)return L('你還沒有鋪子。');choose('擴建哪間？',m.shops.map(s=>({l:`${SHT[s.t][0]}・Lv${s.lv}${s.lv>=5?'（已滿）':`→Lv${s.lv+1}（耗銀${60*s.lv}）`}`,f(){if(s.lv>=5)return L('已是最高級。');if(!pay(60*s.lv))return L('銀兩不足。');s.lv++;L(`${SHT[s.t][0]}擴建成功，升至Lv${s.lv}。`)}})))}},
{l:'查賬防弊（耗銀5）',f(){if(!m.shops.length)return L('你還沒有鋪子。');if(!pay(5))return L('銀兩不足。');if(ckp(.35+(m.at.sk[8]-40)/150)){m.shops.forEach(s=>s.mg=cl(s.mg+3));L('你查出賬房貪墨，整肅之後各鋪經營度略升。')}else L('賬目看得頭暈，沒查出什麼。')}},
{l:'賣官鬻爵（需聖寵≥50，風險極高）',f(){if(m.favor<50)return L('你聖寵不足，沒人敢向你行賄。');choose('賣什麼？',[
{l:'賣小官（約80~150兩）',f(){if(!ckp(.85))return L('買家臨時反悔，交易告吹。');const g=R(80,150);m.silver+=g;m.scand+=1.5;S.nat.stab-=1;L(`你收了${g}兩，替人謀了個小官。`)}},
{l:'賣肥缺（約200~400兩，風險大）',f(){if(!ckp(.75))return L('肥缺被他人搶先，交易告吹。');const g=R(200,400);m.silver+=g;m.scand+=4;S.nat.stab-=3;S.nat.pop-=1;L(`你收了${g}兩，為人謀得一個肥缺，朝中議論紛紛。`)}},
{l:'讓母家舉薦買家（較隱密）',f(){const mp=Math.max(...m.fam.map(x=>x.pw));if(!ckp(.55+mp/300))return L('母家不肯沾手。');const g=R(100,220);m.silver+=g;m.scand+=2;m.fam.forEach(x=>x.pw+=1);L(`母家居中牽線，你得了${g}兩。`)}}])}}
]);return 1}
PE.push(()=>{const c=ids().filter(i=>S.npcs[i].favor>=70&&S.npcs[i].rank>=3);if(!c.length)return false;const i=c[R(0,c.length-1)],n=S.npcs[i];return{t:`${n.n}仗著聖寵，暗中賣官鬻爵，朝野議論紛紛。`,o:[
['蒐集證據，暗中檢舉她',()=>{const m=S.me;if(ckp(.3+m.scheme/200+m.ally/400)){S.evid[i]=(S.evid[i]||0)+3;n.favor-=10;n.host+=10;return`你拿到了${n.n}賣官的把柄，罪證+3。`}n.host+=20;m.ally-=2;return`你的檢舉被人壓了下來，${n.n}知道了是你。`}],
['與她合夥，分一杯羹',()=>{const m=S.me,g=R(60,120);m.silver+=g;m.scand+=2;n.al+=15;return`你與${n.n}暗中合作，分得${g}兩，也沾上了一身腥。`}],
['不聞不問',()=>'你選擇明哲保身。']]}});

/* ===== 選秀 ===== */
const xs=(m,k)=>m.at.sk[SKN.indexOf(k)],mpw=m=>Math.max(...m.fam.map(x=>x.pw));
const XQ=[
[[{q:'皇上垂問：「你平日讀些什麼書？」',o:[['答：讀史書，以史為鑒',m=>xs(m,'書')+(m.at.iq-50)/2,1],['答：吟詩作賦，以養性情',m=>xs(m,'詩詞'),1],['答：只讀《女誡》，不敢多讀',m=>xs(m,'禮')-8,1]]}],
 [{q:'皇上笑道：「朕想聽你彈一曲。」',o:[['撫琴一曲《鳳求凰》',m=>xs(m,'琴')+(m.at.sp-50)/4,2],['獻舞一段',m=>xs(m,'舞藝')+(m.at.lk-50)/3,2],['婉言推辭，說琴藝粗淺',m=>m.at.qi-12,1]]}],
 [{q:'皇上問：「你父兄在朝中如何？」',o:[['如實稟告，父兄皆忠君愛國',m=>62-(mpw(m)-50)/3+(xs(m,'禮')-40)/3,1],['說父兄只是本分小官，不敢居功',m=>m.at.qi,1],['誇耀父兄功績',m=>mpw(m)-25,2]]}]],
[[{q:'皇后問：「妹妹以為，宮中最要緊的是什麼？」',o:[['恭順守禮，敬重中宮',m=>xs(m,'禮'),1],['替皇上分憂，不爭寵',m=>m.at.iq,1],['孝敬太后與皇后，持家有道',m=>(xs(m,'廚藝')+xs(m,'女紅'))/2+8,1]]}],
 [{q:'皇后端詳你片刻，道：「你這般容貌，不怕招人嫉妒麼？」',o:[['答：容貌是父母所賜，不敢自矜',m=>m.at.qi+(xs(m,'禮')-40)/3,1],['答：全賴皇后娘娘庇護',m=>m.at.iq-5+(m.ally||0)/2,1],['答：有才無貌，才是最難',m=>xs(m,'詩詞'),2]]}],
 [{q:'皇后考你女紅：「替本宮繡個荷包來看看。」',o:[['當場穿針引線，繡一朵牡丹',m=>xs(m,'女紅')+(m.at.sp-50)/5,2],['坦言繡藝不精，願意學',m=>m.at.qi,1],['改獻一幅自己畫的花鳥',m=>xs(m,'畫'),1]]}]],
[[{q:'太后問：「哀家問你，女子以何為德？」',o:[['賢良淑德，相夫教子',m=>xs(m,'禮')+10,1],['持家有道，勤儉謙和',m=>(xs(m,'廚藝')+xs(m,'女紅')+xs(m,'數'))/3+8,1],['心繫社稷，輔佐君王',m=>m.at.iq,2]]}],
 [{q:'太后端起茶盞：「替哀家奉杯茶，說說你的家事。」',o:[['恭敬奉茶，如實稟告',m=>xs(m,'禮')+m.at.qi/4,1],['奉茶並獻上親手做的點心',m=>xs(m,'廚藝')+12,2],['謙稱家世寒微，不敢高攀',m=>m.at.qi-(mpw(m)>50?10:0),1]]}],
 [{q:'太后上下打量你：「身子骨結實麼？皇家最重子嗣。」',o:[['答：自幼身體康健，少有病痛',m=>85-m.at.ds.length*25-Math.abs(m.at.wt/Math.pow(m.at.ht/100,2)-20.5)*4,1],['答：家中女眷皆多子多福',m=>60+m.at.sf/4,1],['答：一切聽憑太后與皇上安排',m=>xs(m,'禮'),1]]}]]];
function xmod(st){const m=S.me,a=m.at,e=S.ep,q=Q();
if(st==0)return cb(m)*2+(e==1?(a.lk-50)/4:0)+(e==0?(a.iq-50)/5:0)+(e==2?-(mpw(m)-40)/6:0);
if(st==1)return(m.fac===q.fac?5:-1)-Math.max(0,(a.lk-72)/4)+(xs(m,'禮')-40)/8;
return(xs(m,'禮')-40)/6+((xs(m,'廚藝')+xs(m,'女紅'))-80)/12-a.ds.length*6+(S.dow&&S.npcs[S.dow.pet]&&S.npcs[S.dow.pet].fac===m.fac?4:0)}
function xiuBegin(){const m=S.me;if(GS[G][4]!==0)return render();const N=R(36,72),F=Math.max(5,Math.round(N*R(13,19)/100));S.xiu={N,F,e:0,q:0,d:0};
S.scn={h:`<p><b>選　秀</b></p><p>本屆選秀，天下各地共 <b>${N}</b> 位秀女入京待選，最終預計只留 <b>${F}</b> 人的牌子。你是其中一位。</p><p class=m>殿選由皇上（${EPS[S.ep][0]}）、皇后${Q().n}${S.dow?'、太后（'+S.dow.age+'歲）':''}共同主持。他們喜好各不相同，你的家世、容貌、技藝與應答，都會決定你的名次與起點位份。</p>`,o:[{l:'進入初選',f(){xiuPre()}}]};render()}
function xiuPre(){const m=S.me,a=m.at,bm=a.wt/Math.pow(a.ht/100,2),p=cl(.78+(a.sf-50)/250+(a.hr-50)/400-(a.ds.length?.12:0)-(Math.abs(bm-20.5)>4?.1:0),.3,.95);
S.scn={h:`<p>初選在神武門外，嬤嬤們逐一驗看秀女的儀態、膚色、髮質與體態。輪到你了……</p>`,o:[{l:`如實應對（通過率約${p*100|0}%）`,f(){xiuPreRes(P(p))}},{l:`稍作掩飾，塗脂抹粉、束腰（耗銀10，通過率約${Math.min(95,p*100+12)|0}%）`,f(){xiuPreRes(pay(10)?P(p+.12):P(p))}}]};render()}
function xiuPreRes(ok){const m=S.me;if(ok)return xiuQ(0,'<p>嬤嬤點了點頭：「過。」你順利通過初選。</p>');
S.scn={h:`<p>嬤嬤皺眉道：「${m.at.ds.length?'氣色不佳':'儀態欠妥'}，撂牌子。」你被攔在了宮門外。</p>`,o:[
{l:'託家中關係說情（看母家權勢）',f(){if(P(cl(mpw(m)/110,.15,.75)))xiuQ(0,'<p>母家託人遞了話，嬤嬤改口：「再看看。」你勉強過關。</p>');else over('撂牌子','母家的關係沒能幫上忙，你被撂了牌子，黯然離開皇城，後來嫁給了一位鄉紳之子，平平淡淡過完一生。')}},
{l:'重金賄賂嬤嬤（耗銀60）',f(){if(pay(60)&&P(.65))xiuQ(0,'<p>銀子遞過去，嬤嬤笑了：「這姑娘看著還行。」你勉強過關。</p>');else over('撂牌子','賄賂沒能奏效（或銀兩不足），你被撂了牌子，平淡地度過一生。')}},
{l:'認命，離開皇城',f(){over('撂牌子','你被撂了牌子，離開皇城，後來被許配給一位書生，平淡終老。')}}]};render()}
function xiuQ(st,fb){const m=S.me,hasD=!!S.dow;if(st>=(hasD?3:2))return xiuRes();const qs=XQ[st],qq=qs[R(0,qs.length-1)][0],who=['皇上','皇后','太后'][st];
S.scn={h:(fb||'')+`<p><b>${who}問話</b></p><p>${qq.q}</p>`,o:qq.o.map(o=>{const v=o[1](m),p=cl((v-25)/75,.1,.92),rs=o[2];return{l:`${o[0]}（成功率約${p*100|0}%${rs>1?'・冒險':''}）`,f(){const ok=P(p),g=ok?(rs>1?R(13,20):R(7,12)):-(rs>1?R(8,14):R(2,6)),md=xmod(st),tot=Math.round(g+md);S.xiu['eqd'[st]]=tot;const msg=ok?(rs>1?`${who}眼前一亮，頻頻點頭。`:`${who}滿意地點了點頭。`):`${who}神色淡淡，似乎不太滿意。`;xiuQ(st+1,`<p class=m>${msg}（${who}好感 ${tot>=0?'+':''}${tot}）</p>`)}}})};render()}
function xiuRes(){const m=S.me,X=S.xiu,a=m.at,base=20+mpw(m)/8+GS[G][2].r*2+a.lk*.15+a.qi*.1+(a.sk.reduce((s,v)=>s+v,0)/14)*.1,my=base+X.e+X.q+X.d,cs=[];
for(let i=0;i<X.N-1;i++)cs.push(cl(46+(R(-14,14)+R(-14,14))/1.4,5,95));cs.sort((x,y)=>y-x);const pos=1+cs.filter(c=>c>my).length,adm=pos<=X.F;
const rk=adm?cl(GS[G][2].r+(pos==1?1:0),0,3):0;let list=[];const used=new Set([m.n]),joined=[];
for(let i=1;i<=Math.min(X.F+4,12);i++){if(i==pos){list.push({p:i,n:m.n+'（你）',f:GS[G][0],r:adm?RK[rk]:'留牌子待用'});continue}const nm=nm2(),r=i<=X.F?(i==1?2:i<=3?1:0):-1,fam=famFor(R(0,3));list.push({p:i,n:nm,f:fam[0][1]+'之女',r:r>=0?RK[r]:(P(.5)?'撂牌子':'賜婚宗室')});if(r>=0&&joined.length<7&&S.npcs.length<22)joined.push({nm,r,fam})}
joined.forEach(j=>{const n=mkN(j.nm,j.r,R(38,60),j.fam);S.npcs.push(n)});
m.rank=rk;m.favor=cl(m.favor+X.e/2);m.emp=cl(m.emp+X.q/2);m.dw=cl(m.dw+X.d/2);S.xiu.pos=pos;S.xiu.rank=rk;S.xiu.list=list;S.xiu.my=my|0;
S.log=[`本屆選秀共${X.N}人參選，你位列第${pos}名，${adm?`入宮為${RK[rk]}`:`被「留牌子待用」，入宮為${RK[rk]}`}。`].concat(S.log);
S.scn={h:`<p><b>選秀結果</b></p><p>本屆共 ${X.N} 人參選，你的綜合評分 ${my|0}，位列 <b>第 ${pos} 名</b>。${adm?`榜上有名，入宮為<b>${RK[rk]}</b>。`:`未進前${X.F}名，皇上念你家世與才藝，「留牌子待用」，從<b>答應</b>做起。`}</p><p class=m>皇上好感 ${X.e>=0?'+':''}${X.e}　皇后好感 ${X.q>=0?'+':''}${X.q}${S.dow?`　太后好感 ${X.d>=0?'+':''}${X.d}`:''}</p>`+list.slice(0,10).map(r=>`<div class=k>第${r.p}名　${r.n}　${r.f}　→　${r.r}</div>`).join('')+`<p class=m>完整名單可在「紀事」查看。</p>`,o:[{l:'入宮',f(){S.scn=null;render()}}]};render()}

/* ===== 故事線：妃嬪、皇帝、太后、前朝 ===== */
const jot=(k,w,t)=>{if(!S.chr)S.chr=[];S.chr.unshift({t:S.t,k,w,x:t});S.chr.length=Math.min(S.chr.length,150)};
const newArc=k=>({k:k===undefined?R(0,ARCN.length-1):k,s:0,t:S?S.t:0,w:R(3,26),f:{}});
const oth=i=>{const a=ids().filter(j=>j!==i);return a.length?a[R(0,a.length-1)]:null};
const sEv=(t,o,who,kind)=>({story:1,t,o:o.map(([l,f])=>[l,()=>{const r=f();if(r)jot(kind||'宮',who,r);return r}])});
const fpv=(f,v)=>{S.fp[f.fac]=cl(S.fp[f.fac]+v);S.npcs.forEach(n=>{if(n.fac===f.fac)n.fam.forEach(x=>x.pw=cl(x.pw+v/2))})};
const ARCN=[
{k:'舊情難忘',st:[
[4,16,c=>{c.n.favor-=3;return`${c.n.n}入宮前似有一位舊識，近來常有陌生身影在宮牆外徘徊，她神思恍惚。`}],
[6,14,c=>`${c.n.n}近來行跡可疑。`,c=>sEv(`你在假山後撞見${c.n.n}與一名年輕侍衛低聲相談，兩人神色慌張，那侍衛竟是她入宮前的青梅竹馬。你要如何？`,[
['裝作沒看見，賣她一個人情',()=>{c.A.f.keep=1;c.n.al+=15;S.me.ally+=1;return`你悄悄走開，${c.n.n}事後得知，對你感激涕零。`}],
['設局當場拆穿，告知皇后（看心機）',()=>{if(ckp(.35+S.me.scheme/200)){c.A.f.expose=1;S.evid[c.i]=(S.evid[c.i]||0)+5;c.n.host+=20;return`你設局讓人撞破，${c.n.n}私會侍衛的罪證落在了你手上。`}c.n.host+=20;return`你的設局被她識破，${c.n.n}從此對你恨之入骨。`}],
['私下勸她斷了念想（看口才與氣質）',()=>{if(ckp(.4+(S.me.at.qi-50)/200+(S.me.at.iq-50)/300)){c.A.f.quit=1;c.n.al+=10;return`${c.n.n}聽進了你的話，含淚與侍衛一刀兩斷。`}return`${c.n.n}冷笑道：「你不懂。」顯然沒聽進去。`}]],c.n.n)],
[8,18,c=>{const f=c.A.f,n=c.n;if(f.expose){n.favor=Math.max(0,n.favor-25);n.host+=10;return`私會之事終於傳開，${n.n}被人當場撞破，宮中譁然。`}if(f.quit){n.favor+=8;return`${n.n}日漸安分，竟因此重新得了皇上的眼。`}n.host+=5;return`${n.n}與侍衛暗中往來未斷，風聲愈傳愈烈。`}],
[6,16,c=>{const f=c.A.f,n=c.n;if(f.expose){if(P(.6)&&c.i!==S.qi){kill(c.i,'因與侍衛私通被賜死');return`${n.n}私通一案查實，被賜白綾，那名侍衛亦被處死。`}n.favor=0;n.rank=Math.max(0,n.rank-2);return`${n.n}被貶為${RKN(n)}，打入冷宮，終身不得面聖。`}if(f.quit){n.favor+=6;return`${n.n}斷了舊情，一心侍奉聖駕，倒比從前得寵。`}if(f.keep){n.al+=10;S.me.ally+=2;n.hp-=10;return`那名侍衛請調出京，${n.n}臨別託你照拂她的家人，視你為知己。`}n.hp-=10;return`${n.n}與侍衛的往事不了了之，只是她從此鬱鬱寡歡。`}]]},
{k:'家門蒙冤',st:[
[4,16,c=>{c.n.fam[0].pw=cl(c.n.fam[0].pw-25);c.n.favor-=4;return`${c.n.n}的父親因「結黨營私」被彈劾下獄，她長跪殿外，求見皇上。`}],
[6,14,c=>`${c.n.n}託人向你求助。`,c=>sEv(`${c.n.n}託人帶話給你：「只要你肯替家父遞一句話，此恩必報。」`,[
['替她遞話並打點（耗銀50）',()=>{if(!pay(50))return'銀兩不足，只能作罷。';if(ckp(.4+S.me.ally/250+S.me.favor/400)){c.A.f.help=1;c.n.al+=25;return`你託人遞了話，皇上命刑部複查此案。`}c.n.al+=8;return'你花了銀子，話卻沒遞到御前。'}],
['袖手旁觀，此事與你無關',()=>{c.A.f.cold=1;c.n.al-=8;return`你婉拒了${c.n.n}，她默默垂淚而去。`}],
['趁機落井下石，向皇后揭發她家「確有不軌」',()=>{if(ckp(.4+S.me.scheme/250)){c.A.f.hit=1;c.n.fam.forEach(x=>x.pw=cl(x.pw-10));c.n.host+=25;S.evid[c.i]=(S.evid[c.i]||0)+3;return`你的「揭發」讓${c.n.n}的處境雪上加霜，罪證也落進了你手。`}c.n.host+=25;return'你的告發沒人理會，反叫她記恨。'}]],c.n.n)],
[6,14,c=>{const f=c.A.f,n=c.n;if(f.help&&P(.6)){n.fam.forEach(x=>x.pw=cl(x.pw+15));n.favor+=8;f.clear=1;return`${n.n}之父冤案昭雪，官復原職，她含淚向你道謝。`}if(f.hit||P(.5)){n.fam.forEach(x=>x.pw=cl(x.pw-15));n.favor-=8;return`${n.n}之父被判流放三千里，母家一蹶不振。`}f.clear=1;n.fam.forEach(x=>x.pw=cl(x.pw+8));return`${n.n}之父雖未獲罪，卻被降了官職。`}],
[8,20,c=>{const f=c.A.f,n=c.n;if(f.clear){n.rank=Math.min(7,n.rank+1);n.favor+=8;if(f.help)n.al+=20;return`皇上為補償${n.n}，晉她為${RKN(n)}。${f.help?'她始終記得你的恩情。':''}`}n.favor=Math.max(3,n.favor-10);return`${n.n}心灰意冷，閉門不出，宮中漸漸沒人提起她。`}]]},
{k:'凰位之爭',st:[
[5,18,c=>{c.n.sc=cl(c.n.sc+8);c.n.host+=4;return`${c.n.n}近來頻頻出入慈寧宮與御書房，對中宮之位虎視眈眈。`}],
[6,14,c=>`${c.n.n}暗中串聯。`,c=>sEv(`${c.n.n}悄悄找到你，說皇后德行有虧，想邀你聯手「換個皇后」。`,[
['答應結盟，共謀大事',()=>{c.A.f.ally=1;c.n.al+=20;S.me.ally+=5;return`你與${c.n.n}結成了同盟。`}],
['斷然拒絕',()=>{c.A.f.no=1;c.n.host+=10;return`你拒絕了${c.n.n}，她臉色陰沉地離去。`}],
['假意答應，暗中蒐證（看心機）',()=>{if(ckp(.35+S.me.scheme/220)){c.A.f.spy=1;S.evid[c.i]=(S.evid[c.i]||0)+4;return`你佯裝入夥，悄悄記下了她的謀劃，罪證+4。`}c.n.host+=15;return`你的假意被她看穿，她對你起了殺心。`}]],c.n.n)],
[6,16,c=>{const q=Q(),n=c.n;if(q&&c.i!==S.qi){if(P(.5)){q.hp-=R(15,30);return`${q.n}突然抱恙，宮中傳言與${n.n}有關。`}n.favor-=8;return`${n.n}的小動作被皇后察覺，被罰抄經三月。`}return`${n.n}的野心引來六宮側目。`}],
[8,20,c=>{const f=c.A.f,n=c.n;if(f.ally&&P(.4)&&Q()&&c.i!==S.qi){n.rank=Math.min(7,n.rank+1);n.favor+=15;S.me.ally+=3;return`${n.n}終於升至${RKN(n)}，你這位「盟友」也沾了光。`}if(f.spy){n.al+=20;return`你手中攥著${n.n}的把柄，她對你言聽計從。`}n.favor-=10;return`${n.n}的野心終究落了空，她收斂了許多。`}]]},
{k:'沉痾舊疾',st:[
[4,14,c=>{c.n.hp-=25;return`${c.n.n}舊疾復發，閉門謝客，太醫日日出入。`}],
[5,12,c=>`${c.n.n}病勢沉重。`,c=>sEv(`${c.n.n}的貼身宮女跪在你門前：「娘娘說，只有你懂些醫理，求你救她一命。」`,[
['親自為她調理（醫理，耗銀30）',()=>{if(!pay(30))return'銀兩不足。';if(ckp(.3+(S.me.at.sk[12]-30)/120)){c.A.f.cure=1;c.n.hp+=40;c.n.al+=25;return`你用心調理，${c.n.n}的病情竟好轉了。`}return'你盡力了，但她的病不見起色。'}],
['請太醫院會診（耗銀20）',()=>{if(!pay(20))return'銀兩不足。';c.n.hp+=15;if(P(.5)){c.A.f.cure=1;c.n.al+=12;return'太醫會診後對症下藥，她有了起色。'}return'太醫們各執一詞，她的病沒有好轉。'}],
['置之不理',()=>{c.A.f.cold=1;return'你沒有搭理。'}],
['在藥裡動手腳（心機，風險）',()=>{if(ckp(.35+S.me.scheme/250)){c.n.hp-=25;c.A.f.harm=1;return'她病得更重了，沒人懷疑到你頭上。'}c.n.host+=30;return'你的手腳被太醫察覺，她記住了你。'}]],c.n.n)],
[6,16,c=>{const f=c.A.f,n=c.n;if(f.cure){n.hp+=15;n.favor+=8;return`${n.n}身體漸漸康復，容色更勝從前。`}n.hp-=5;return f.harm?`${n.n}病勢沉重，皇上命人加緊救治。`:`${n.n}的病時好時壞，纏綿不去。`}],
[6,18,c=>{const f=c.A.f,n=c.n;if(n.hp<30&&!f.cure&&c.i!==S.qi){kill(c.i,'久病不治，香消玉殞');return`${n.n}終究沒熬過這個冬天，宮中為她舉哀。`}n.favor+=10;if(f.cure){S.me.ally+=3}return`${n.n}病癒後性情溫和，成為後宮中少有的善人。`}]]},
{k:'癡心一片',st:[
[4,16,c=>{c.n.favor+=5;return`${c.n.n}夜夜在御花園吹簫，只為等皇上路過。`}],
[5,12,c=>`行宮出事了。`,c=>sEv(`行宮遇刺，刀光直撲皇上——${c.n.n}撲了上去！你也在場。`,[
['也衝上去護駕（看健康與武藝）',()=>{if(ckp(.3+S.me.hp/250+(S.me.at.sk[6]-20)/200+(tf('guard')?.15:0))){S.me.favor+=12;S.me.hp-=8;c.A.f.share=1;return'你與她一同護住皇上，皇上感念你們的忠心。'}S.me.hp-=15;return'你被刺客掃倒在地，傷得不輕。'}],
['高喊護駕，召來侍衛',()=>{S.me.favor+=3;return'你高聲呼喊，侍衛及時趕到，也算有功。'}],
['趁亂退到一旁自保',()=>{S.me.favor-=3;return'皇上事後問起，你只說嚇壞了。'}]],c.n.n)],
[4,12,c=>{const n=c.n;n.favor+=25;n.hp-=20;n.rank=Math.min(7,n.rank+1);return`皇上感念${n.n}捨身護駕，晉她為${RKN(n)}，連日探視。`}],
[8,24,c=>{const n=c.n;n.favor+=10;if(c.A.f.share){n.al+=15;return`皇上待${n.n}與別人不同，她也記著你同甘共苦的情分。`}n.host+=10;return`皇上待${n.n}與別人不同，她成了你最大的對手。`}]]},
{k:'隱忍復仇',st:[
[6,20,c=>`${c.n.n}入宮前家破人亡，宮人偶見她深夜獨自祭拜。`],
[5,14,c=>`你發現了${c.n.n}的秘密。`,c=>{const j=oth(c.i);c.A.f.tg=j;const tg=j!==null?S.npcs[j]:null;if(!tg)return null;return sEv(`你偶然翻到${c.n.n}的手札，上面密密麻麻寫著${tg.n}的名字，旁邊畫著血紅的叉。`,[
[`暗中告知${tg.n}，賣她一個人情`,()=>{tg.al+=25;c.n.host+=25;c.A.f.warn=1;return`你提醒了${tg.n}，她對你感激不盡，而${c.n.n}隱隱察覺到了什麼。`}],
['助她一臂之力（耗銀30）',()=>{if(!pay(30))return'銀兩不足，幫不上忙。';c.A.f.help=1;c.n.al+=30;S.evid[j]=(S.evid[j]||0)+3;return`你替${c.n.n}提供了線索與銀錢，她與你成了生死之交。`}],
['燒了手札，當作沒看見',()=>{c.A.f.burn=1;c.n.al+=10;return'你燒了手札，此事再無第二個人知道。'}],
['留下手札，作為把柄',()=>{c.A.f.keep=1;S.me.scheme+=2;return`你留下了手札，${c.n.n}的命運從此握在你手裡。`}]],c.n.n)}],
[6,16,c=>{const tg=S.npcs[c.A.f.tg];if(tg&&!tg.st){if(c.A.f.warn){tg.hp-=5;return`${c.n.n}的謀劃被${tg.n}提前防備，無功而返。`}tg.hp-=R(15,30);tg.favor-=8;return`${tg.n}突然遭了暗算，臥病在床，宮中暗流湧動。`}return`${c.n.n}的仇人竟已先一步亡故。`}],
[8,20,c=>{const f=c.A.f,tg=S.npcs[f.tg],n=c.n;if(tg&&!tg.st&&f.help&&P(.5)&&f.tg!==S.qi){kill(f.tg,'暴斃身亡');return`${tg.n}在一夜之間暴斃，${n.n}的血仇終於得報，她望著你鄭重一拜。`}if(f.warn){n.favor-=15;n.host+=15;return`${n.n}的復仇敗露，被罰禁足，從此一蹶不振。`}n.hp-=10;return`${n.n}放下了仇恨，開始認真過日子。`}]]},
{k:'青燈古佛',st:[
[5,18,c=>{c.n.favor-=5;return`${c.n.n}忽然吃起了長齋，每日抄經念佛，不再爭寵。`}],
[5,12,c=>`${c.n.n}邀你同行。`,c=>sEv(`${c.n.n}邀你同往護國寺祈福三日。`,[
['欣然同往',()=>{S.me.hp+=8;S.me.at.sp=cl(S.me.at.sp+8);S.me.ally+=1;c.n.al+=10;c.A.f.go=1;return`你與${c.n.n}在寺中靜坐三日，心神為之一清，兩人也成了知交。`}],
['婉言推辭',()=>`你以俗務纏身推辭了。`]],c.n.n)],
[8,20,c=>{c.n.favor-=3;return`${c.n.n}向皇上請旨，願為太后與社稷祈福。`}],
[10,28,c=>{const n=c.n;if(P(.55)&&c.i!==S.qi){n.st='出家';return`${n.n}看破紅塵，奉旨出宮帶髮修行，後宮從此少了一位妃嬪。`}n.favor+=5;return`${n.n}雖仍禮佛，卻因心境平和，反得皇上喜愛。`}]]},
{k:'才女詩名',st:[
[4,14,c=>{c.n.favor+=4;return`${c.n.n}的詩集在宮人間悄悄流傳，連皇上都聽說了。`}],
[5,12,c=>`${c.n.n}請你作序。`,c=>sEv(`${c.n.n}請你為她的詩集作序。`,[
['欣然作序（看詩詞與書法）',()=>{if(ckp(.35+(S.me.at.sk[13]+S.me.at.sk[2])/220)){c.A.f.pref=1;S.me.favor+=3;c.n.al+=15;return'你的序文文采斐然，成為詩集的點睛之筆。'}c.n.al+=3;return'你的序文平平，聊以應付。'}],
['婉言謝絕',()=>'你委婉謝絕了。'],
['暗中告發詩中「影射時政」（看心機）',()=>{if(ckp(.3+S.me.scheme/220)){c.A.f.accuse=1;S.evid[c.i]=(S.evid[c.i]||0)+4;c.n.host+=25;return`你把幾句詩斷章取義地遞了上去，罪證+4。`}c.n.host+=30;return'你的告發沒人理會，反叫她記恨。'}]],c.n.n)],
[6,16,c=>{const f=c.A.f,n=c.n;if(f.accuse&&P(.6)){n.favor=Math.max(0,n.favor-30);n.rank=Math.max(0,n.rank-1);return`${n.n}的詩被指「影射朝政」，皇上震怒，貶為${RKN(n)}。`}n.favor+=6;S.nat.pop+=1;return`${n.n}的詩集傳到宮外，竟被士子爭相傳抄。`}],
[6,18,c=>{const f=c.A.f,n=c.n;if(f.pref){n.al+=15;S.me.ally+=3;return`${n.n}與你成了詩友，宮中雅集由你二人主持。`}n.rank=Math.min(7,n.rank+(n.favor>45?1:0));return`${n.n}以詩名入了皇上的眼，風頭一時無兩。`}]]},
{k:'暗藏細作',st:[
[6,18,c=>{c.n.sc=cl(c.n.sc+6);return`${c.n.n}宮中來了幾個形跡可疑的宮人，夜裡常有人傳遞物件。`}],
[5,12,c=>`${c.n.n}宮中有鬼。`,c=>sEv(`你發現${c.n.n}宮人偷偷與宮外之人傳遞密信，似與敵國有關。`,[
['密報皇上（看聖寵）',()=>{if(ckp(.35+S.me.favor/250)){c.A.f.rep=1;S.me.favor+=10;S.nat.stab+=2;c.n.host+=30;return'你密報皇上，皇上嘉許你的忠心。'}S.me.favor-=5;return'皇上疑你誣告，申斥了你。'}],
['暗中蒐集證據，待機而動（看心機）',()=>{S.evid[c.i]=(S.evid[c.i]||0)+5;c.A.f.watch=1;return'你悄悄記下了她們傳遞的路線，罪證+5。'}],
['裝作不知',()=>{c.A.f.ign=1;return'你假裝什麼都沒看見。'}],
['以此要挾她，索取錢財',()=>{const g=60+R(0,60);S.me.silver+=g;S.me.scand=(S.me.scand||0)+1;c.A.f.black=1;return`${c.n.n}只得奉上${g}兩封你的口。`}]],c.n.n)],
[6,14,c=>{if(c.A.f.rep){c.n.favor=0;S.nat.stab+=3;return`${c.n.n}宮中被查，供出了同黨。`}S.nat.mil-=5;return`邊關軍情疑似被洩露，守軍吃了一場敗仗。`}],
[8,20,c=>{const f=c.A.f,n=c.n;if((f.rep||(f.watch&&P(.5)))&&c.i!==S.qi){kill(c.i,'私通敵國，被賜死');S.nat.stab+=3;return`${n.n}私通敵國一案查實，被賜死，同黨盡數落網。`}if(f.ign){S.nat.mil-=8;S.nat.stab-=3;return`敵軍利用洩露的軍情突襲邊關，損失慘重。`}n.favor-=20;return`${n.n}的細作網被連根拔起，她本人僥倖脫身，從此不敢妄動。`}]]},
{k:'聚斂財貨',st:[
[4,16,c=>`${c.n.n}宮中用度奢靡，賬房常有大筆銀兩進出。`],
[5,12,c=>`${c.n.n}邀你入夥。`,c=>sEv(`${c.n.n}邀你入夥，在宮外做一門「穩賺不賠」的生意。`,[
['入夥（投銀40）',()=>{if(!pay(40))return'銀兩不足。';c.A.f.join=1;S.me.scand=(S.me.scand||0)+1;c.n.al+=15;return`你投了銀子入夥，與${c.n.n}成了生意夥伴。`}],
['婉言謝絕',()=>'你謝絕了。'],
['暗中檢舉她與民爭利（看心機）',()=>{if(ckp(.35+S.me.scheme/220)){c.A.f.rep=1;S.evid[c.i]=(S.evid[c.i]||0)+3;c.n.host+=20;return`你抓到了${c.n.n}斂財的把柄，罪證+3。`}c.n.host+=15;return'你的檢舉石沉大海。'}]],c.n.n)],
[6,14,c=>{if(c.A.f.join){const g=R(50,110);S.me.silver+=g;return`${c.n.n}的生意紅火，你分得紅利${g}兩。`}c.n.favor+=0;return`${c.n.n}的鋪子越開越多，宮中人人側目。`}],
[8,20,c=>{const f=c.A.f,n=c.n;if(f.rep||P(.5)){n.favor-=20;n.rank=Math.max(0,n.rank-1);if(f.join){S.me.favor-=5;return`${n.n}斂財事發，被貶為${RKN(n)}，你因入夥也丟了臉面。`}return`${n.n}斂財事發，被貶為${RKN(n)}。`}n.favor+=3;return`${n.n}越發富有，在宮中說話也有了底氣。`}]]}];
/* --- 皇帝 --- */
const EARC=[
{k:'中興之治',st:[
[10,30,c=>{S.nat.eco+=4;S.nat.stab+=3;return'皇上推行新政，整頓吏治，朝野為之一新。'}],
[10,30,c=>'新政觸動了權貴利益，不少朝臣暗中串聯。',c=>sEv('新政觸動了權貴的利益，不少朝臣暗中串聯，你的母家也被捲了進來。',[
['支持新政，主動讓出母家部分利益',()=>{S.me.fam.forEach(x=>x.pw=cl(x.pw-5));S.me.favor+=8;S.nat.eco+=2;return'你支持新政，皇上贊你識大體。'}],
['託人說情，請求暫緩',()=>{if(ckp(.35+S.me.favor/250+S.me.ally/300))return'你的說情奏效，母家得以暫緩。';S.me.favor-=5;return'皇上不悅：「後宮不得干政。」'}],
['暗助守舊派，阻撓新政（看心機）',()=>{if(ckp(.3+S.me.scheme/300)){S.nat.stab-=3;S.me.fam.forEach(x=>x.pw=cl(x.pw+3));return'新政受阻，你的母家保住了利益。'}S.me.favor-=10;return'你的小動作被皇上察覺，龍顏大怒。'}]],'皇上','帝')],
[18,36,c=>{if(S.nat.mil>=50){S.nat.mil+=6;S.nat.pop+=3;return'皇上整軍北伐，大獲全勝，邊患暫平。'}S.nat.mil-=4;S.nat.eco-=3;return'皇上北伐受挫，損兵折將，朝臣議論紛紛。'}],
[24,48,c=>{S.nat.eco+=6;S.nat.pop+=6;return'國家歷經幾年經營，國庫充盈，百姓安居，史稱「中興」。'}],
[24,48,c=>{S.ehp=Math.max(5,S.ehp-20);return'皇上積勞成疾，龍體漸衰，太醫們憂心忡忡。'}]]},
{k:'沉淪享樂',st:[
[8,24,c=>{for(let i=0;i<2;i++)newbie();S.nat.eco-=3;return'皇上沉迷歌舞，下旨大選秀女，後宮新添了幾張面孔。'}],
[8,24,c=>'皇上有意讓你舉薦美人。',c=>sEv('皇上笑著對你說：「你可有什麼容貌出眾的姐妹族人，舉薦給朕？」',[
['舉薦自家族妹（耗銀20）',()=>{if(S.npcs.length>=24||!S.nn.length)return'宮中名額已滿，舉薦不成。';if(!pay(20))return'銀兩不足，打點不了。';const n=kinIn('族妹');if(!n){S.me.silver+=20;return'名額已滿，銀兩退回。'}S.me.ally+=3;S.me.fam.forEach(x=>x.pw=cl(x.pw+3));return`${n.kin.slice(2)}${n.n}入宮，封為${RK[n.rank]}，成了你的臂助，但也分走了你的恩寵。可在「後宮」名冊中找到她。`}],
['勸皇上以國事為重（看口才）',()=>{if(ckp(.3+(S.me.at.iq-50)/200+(S.me.at.qi-50)/300)){S.me.favor+=6;S.mood=cl(S.mood-3);return'皇上被你勸住，說你賢德。'}S.me.favor-=6;return'皇上掃興地揮了揮手。'}],
['順水推舟，陪皇上尋歡',()=>{S.me.favor+=6;S.nat.eco-=2;return'你陪皇上笑鬧了一夜，聖眷更濃。'}]],'皇上','帝')],
[12,30,c=>{S.nat.stab-=8;S.fp[R(0,4)]+=8;return'外戚與宦官趁機弄權，朝綱日漸廢弛。'}],
[18,36,c=>{S.nat.eco-=10;return'皇上揮霍無度，國庫日漸空虛。'}],
[18,40,c=>{S.nat.pop-=12;S.nat.mil-=5;return'各地災荒不斷，民變四起。'}]]},
{k:'大獄之世',st:[
[8,24,c=>{S.nat.stab-=3;return'皇上疑心功臣，暗中設下密探，朝臣人人自危。'}],
[8,24,c=>'皇上起了疑心。',c=>sEv('皇上冷不防地問你：「你的父兄，可曾與朝臣結黨？」',[
['坦誠相告，自陳母家毫無私心（看氣質）',()=>{if(ckp(.4+(S.me.at.qi-50)/200+S.me.favor/400)){S.me.favor+=5;return'皇上看了你許久，點了點頭。'}S.me.favor-=5;return'皇上的目光更冷了。'}],
['極力辯白，母家忠心耿耿',()=>{if(ckp(.35+Math.max(...S.me.fam.map(x=>x.lo))/300)){return'皇上將信將疑地放過了你。'}S.me.fam.forEach(x=>x.pw=cl(x.pw-5));return'你的辯白欲蓋彌彰。'}],
['反咬一口，指某權臣結黨（看心機）',()=>{if(ckp(.3+S.me.scheme/250)){S.nat.stab-=2;S.me.favor+=6;return'皇上對你另眼相看，那名權臣卻倒了大霉。'}S.me.favor-=10;return'你的反咬被識破，皇上震怒。'}]],'皇上','帝')],
[12,30,c=>{const j=oth(-1);if(j!==null){const n=S.npcs[j];n.fam.forEach(x=>x.pw=cl(x.pw-30));n.favor-=10;S.nat.stab-=4;return`皇上抄了一位權臣的家，${n.n}的母家也受了牽連。`}S.nat.stab-=4;return'皇上抄了一位權臣的家，朝野震動。'}],
[12,30,c=>{S.nat.stab-=8;return'連番大案，眾臣寒心，朝堂上人人噤若寒蟬。'}],
[18,40,c=>{S.mood=cl(S.mood-15);return'皇上病篤，越發多疑，誰也不信。'}]]},
{k:'仁厚之君',st:[
[10,30,c=>{S.nat.pop+=5;S.nat.eco-=2;return'皇上下詔減免賦稅，百姓稱頌。'}],
[10,30,c=>'皇上猶豫不決。',c=>sEv('皇上欲赦免一位貪腐的老臣，猶豫著問你的意見。',[
['勸皇上寬恕，以示仁德',()=>{S.nat.eco-=2;S.me.favor+=3;return'皇上嘆道：「還是你懂朕的心。」'}],
['勸皇上依法嚴辦',()=>{S.nat.stab+=2;if(ckp(.5)){S.me.favor+=3;return'皇上猶豫良久，終於依法懲辦。'}S.me.favor-=3;return'皇上不悅地看了你一眼。'}],
['不置可否，只說不懂政事',()=>'皇上笑了笑，不再問你。']],'皇上','帝')],
[12,30,c=>{S.nat.eco-=5;S.nat.stab-=2;return'皇上縱容貪官，吏治漸壞。'}],
[18,40,c=>{S.nat.pop+=6;return'天下太平，百姓安居，皇上的仁政為人稱道。'}],
[18,40,c=>{S.ehp=Math.max(5,S.ehp-10);return'皇上心軟，事事操勞，漸漸積勞成疾。'}]]},
{k:'封禪盛典',st:[
[8,24,c=>{S.nat.eco-=8;return'皇上大修宮殿，勞民傷財。'}],
[8,24,c=>'皇上要南巡。',c=>sEv('皇上要南巡，問後宮誰願隨行。',[
['自請隨行（看聖寵）',()=>{if(ckp(.3+S.me.favor/200)){S.me.favor+=10;return'你隨駕南巡，一路風光無限。'}S.me.favor-=3;return'皇上說你身子弱，不必同去。'}],
['推薦一位妃嬪隨行（賣人情）',()=>{const j=oth(-1);if(j===null)return'無人可推薦。';S.npcs[j].al+=15;S.me.favor-=2;return`你推薦了${S.npcs[j].n}，她對你感激不已。`}],
['勸皇上省下開銷',()=>{if(ckp(.35+(S.me.at.iq-50)/200)){S.nat.eco+=3;S.me.favor+=3;return'皇上被你說動，縮減了排場。'}S.me.favor-=6;return'皇上不悅：「朕的事，還輪不到你多嘴。」'}]],'皇上','帝')],
[12,30,c=>{S.nat.pop-=4;S.nat.eco-=5;return'皇上率百官登泰山封禪，場面極盡奢華。'}],
[18,36,c=>{S.nat.mil-=5;S.nat.stab-=3;return'邊患趁虛而入，朝廷措手不及。'}],
[18,40,c=>{S.mood=cl(S.mood+5);return'皇上自詡盛世明君，聽不進任何逆耳忠言。'}]]},
{k:'兩黨相爭',st:[
[8,24,c=>{S.nat.stab-=4;return'朝中兩黨相爭，互相攻訐。'}],
[8,24,c=>'皇上拿不定主意。',c=>sEv('兩黨在朝堂上吵得不可開交，皇上拿不定主意，夜裡問起你。',[
['吹枕邊風，支持你母家所屬一派',()=>{S.fp[S.me.fac>=0?S.me.fac:0]+=8;S.me.favor-=2;return'皇上被你說動，傾向了你母家一派。'}],
['勸皇上兼聽則明（看口才）',()=>{if(ckp(.4+(S.me.at.iq-50)/200)){S.me.favor+=5;S.nat.stab+=2;return'皇上點頭稱是。'}return'皇上心煩意亂，揮手讓你退下。'}],
['只說不懂政事',()=>'皇上嘆了口氣，沒再多問。']],'皇上','帝')],
[12,30,c=>{S.fp[R(0,4)]+=8;S.nat.stab-=4;return'外戚趁機坐大，朝堂上一人獨大。'}],
[18,36,c=>{S.nat.stab-=6;return'皇上左右搖擺，政令朝令夕改，官員無所適從。'}],
[18,40,c=>{S.nat.eco-=4;return'黨爭愈演愈烈，朝廷實務幾近停擺。'}]]},
{k:'暴戾之君',st:[
[6,20,c=>{S.mood=cl(S.mood-6);return'皇上動輒杖責宮人，宮中人人戰戰兢兢。'}],
[6,20,c=>'皇上暴怒。',c=>sEv('皇上為一件小事暴怒，要杖斃一名宮人，滿殿的人都跪著不敢出聲。',[
['跪下求情（看聖寵）',()=>{if(ckp(.3+S.me.favor/220+S.me.at.qi/400)){S.me.favor+=5;S.me.ally+=3;return'皇上看著你，怒氣漸消，饒了那名宮人。'}S.me.favor-=10;return'皇上的怒火轉向了你，你被罰跪了一夜。'}],
['沉默不語',()=>{S.me.ally-=1;return'你選擇保全自己，那名宮人被拖了下去。'}],
['落井下石，附和皇上',()=>{S.me.favor+=3;S.me.ally-=4;return'你附和了皇上，宮人們看你的眼神都變了。'}]],'皇上','帝')],
[12,30,c=>{S.nat.stab-=10;return'皇上在朝堂上大開殺戒，數名大臣被當庭杖斃。'}],
[18,36,c=>{S.nat.stab-=4;S.nat.mil-=3;return'幾位將領暗中串聯，似有密謀。'}],
[18,40,c=>{S.mood=cl(S.mood-10);return'皇上越發喜怒無常，連太醫也不敢近前。'}]]}];
/* --- 太后 --- */
const DARC=[
{k:'婆媳之爭',st:[
[6,20,c=>{const q=Q();if(q)q.favor-=3;return'太后在慈寧宮敲打中宮，說皇后「失於管教後宮」。'}],
[6,16,c=>'太后召你。',c=>sEv('太后把你召到慈寧宮，旁敲側擊地問起皇后平日的為人。',[
['順著太后的話，數說皇后的不是',()=>{S.me.dw+=10;S.me.emp-=8;return'太后頻頻點頭，皇后那邊卻得了風聲。'}],
['替皇后美言幾句',()=>{S.me.emp+=8;S.me.dw-=6;return'太后臉色微沉，皇后對你多了幾分好感。'}],
['打太極，只說後宮和睦（看氣質）',()=>{if(ckp(.45+(S.me.at.qi-50)/200)){S.me.dw+=2;return'你滴水不漏，兩邊都沒得罪。'}S.me.dw-=3;return'太后嫌你說話含糊。'}]],'太后','后')],
[10,26,c=>{S.mood=cl(S.mood-3);return'太后病了一場，臥床半月，宮中人心惶惶。'}],
[12,30,c=>{const j=oth(-1);if(S.dow&&j!==null){S.dow.pet=j;return`太后對皇后的看法起了變化，近來對${S.npcs[j].n}另眼相看。`}return'太后對後宮的事漸漸淡了。'}]]},
{k:'青燈禮佛',st:[
[6,20,c=>'太后開始每日誦經禮佛，慈寧宮外香火不斷。'],
[6,16,c=>'太后命人抄經。',c=>sEv('太后命人抄《金剛經》，點名要後宮諸人各抄一卷。',[
['精心抄寫（看書法）',()=>{if(ckp(.35+S.me.at.sk[2]/150)){S.me.dw+=10;return'你的字端莊秀麗，太后讚不絕口。'}S.me.dw+=2;return'你的字平平，太后沒說什麼。'}],
['請人代筆（耗銀15）',()=>{if(!pay(15))return'銀兩不足。';if(ckp(.65)){S.me.dw+=4;return'代筆之人字跡工整，太后滿意。'}S.me.dw-=3;return'太后看出了不是你的字跡。'}],
['託詞推辭',()=>{S.me.dw-=8;return'太后對你的敷衍很不高興。'}]],'太后','后')],
[10,26,c=>{S.nat.eco-=3;S.nat.pop+=1;return'太后想修一座佛塔，朝臣議論耗費。'}],
[12,30,c=>'太后年事已高，漸漸不管後宮之事。']]},
{k:'母族榮寵',st:[
[6,20,c=>{S.fp[R(0,4)]+=6;return'太后母家的子弟進京，在朝中四處走動。'}],
[6,16,c=>'太后侄兒託人遞話。',c=>sEv('太后的侄兒託人遞話，想在你母家的幫襯下謀個官職。',[
['舉薦他（母家出面）',()=>{S.me.dw+=8;S.me.fam.forEach(x=>x.pw=cl(x.pw+2));S.nat.stab-=1;return'太后很是滿意，你母家也多了一層倚仗。'}],
['婉言拒絕',()=>{S.me.dw-=5;return'太后侄兒碰了釘子，太后聽說後不太高興。'}],
['出銀兩資助（耗銀30）',()=>{if(!pay(30))return'銀兩不足。';S.me.dw+=5;return'太后侄兒收了銀子，對你感激。'}]],'太后','后')],
[10,26,c=>{S.nat.stab-=3;return'太后母家子弟驕橫，與人當街衝突。'}],
[12,30,c=>{S.mood=cl(S.mood-5);return'皇上處置了太后母家的子弟，太后震怒，母子冷戰。'}]]}];
/* --- 前朝 --- */
const FACN=FAC;
function genCourt(){const G2=['明','遠','徵','承','昭','鴻','澤','衡','庭','川','珩','策'];return[['首輔',0],['兵部尚書',1],['御史大夫',2],['外戚侯爺',3],['安親王',4],['新科狀元',5]].map(([role,k])=>({role,k,n:SUR[R(0,SUR.length-1)]+G2[R(0,G2.length-1)],fac:R(0,4),A:{k,s:0,t:0,w:R(6,30),f:{}}}))}
const CARC=[
{k:'權相',st:[
[6,20,c=>{fpv(c.f,8);return`首輔${c.f.n}門生故舊遍佈朝野，${FACN[c.f.fac]}一派聲勢大漲。`}],
[6,16,c=>`首輔派人遞話。`,c=>sEv(`首輔${c.f.n}派人遞話，願與你母家結為同盟，共進退。`,[
['答應結盟',()=>{c.A.f.ally=1;S.me.ally+=6;S.me.fam.forEach(x=>x.pw=cl(x.pw+6));return`你的母家與首輔${c.f.n}結成了同盟。`}],
['保持中立',()=>{S.me.ally+=1;return'你婉言保持中立。'}],
['暗中告發（看心機）',()=>{if(ckp(.3+S.me.scheme/250)){c.A.f.rep=1;S.me.favor+=6;fpv(c.f,-6);return'你的告發讓皇上對首輔起了疑心。'}S.me.ally-=3;return'你的告發被首輔察覺，他記下了這筆賬。'}]],'首輔'+c.f.n,'朝')],
[8,20,c=>{if(P(.5)){fpv(c.f,-12);S.nat.stab+=3;c.A.f.fall=1;return`御史彈劾首輔${c.f.n}結黨營私，皇上將其罷相。`}S.nat.stab-=3;return`首輔${c.f.n}反壓一頭，彈劾他的御史被貶，朝堂人人自危。`}],
[10,30,c=>{if(c.A.f.ally&&c.A.f.fall){S.me.fam.forEach(x=>x.pw=cl(x.pw-8));S.me.favor-=4;return`首輔${c.f.n}倒台，你母家因曾與他結盟受到牽連。`}S.nat.stab+=1;return`首輔${c.f.n}年邁致仕，朝局重新洗牌。`}]]},
{k:'功高震主',st:[
[6,20,c=>{S.nat.mil+=8;S.nat.pop+=3;return`${c.f.role}${c.f.n}在邊關大破敵軍，捷報頻傳。`}],
[6,16,c=>`${c.f.n}送來厚禮。`,c=>sEv(`${c.f.role}${c.f.n}派人送來一份厚禮與一封私信，言辭恭敬。`,[
['收下厚禮',()=>{c.A.f.take=1;S.me.silver+=120;S.me.ally+=4;S.me.scand=(S.me.scand||0)+1;return'你收下了厚禮，與這位邊將有了私交。'}],
['原封退回',()=>{S.me.ally+=1;return'你退回了厚禮，不沾這渾水。'}],
['轉呈皇上',()=>{S.me.favor+=5;S.me.ally-=2;c.A.f.rep=1;return'你把厚禮與私信轉呈皇上，皇上讚你識大體。'}]],'邊將'+c.f.n,'朝')],
[8,20,c=>{S.mood=cl(S.mood-3);c.A.f.susp=1;fpv(c.f,-3);return`皇上對${c.f.n}手握重兵頗為忌憚，暗中調動邊防。`}],
[10,30,c=>{if(P(.3)){S.nat.mil-=10;S.nat.stab-=8;S.npcs.forEach(n=>{if(n.fac===c.f.fac)n.favor-=8});let t=`${c.f.n}擁兵自重，終於起兵謀反，雖被平定，朝野震動。`;if(c.A.f.take){S.me.favor-=8;t+='你曾收他的厚禮，被人翻出舊賬。'}return t}if(P(.5)){S.nat.mil-=3;return`${c.f.n}主動交還兵權，解甲歸田。`}fpv(c.f,6);return`${c.f.n}封侯拜將，成為國之柱石。`}]]},
{k:'鐵面諫臣',st:[
[5,18,c=>{S.nat.pop+=2;return`御史大夫${c.f.n}連上七疏，直言朝政積弊，朝野稱「鐵面」。`}],
[6,16,c=>`${c.f.n}盯上了你的母家。`,c=>sEv(`${c.f.n}查到你母家的族人有侵佔民田之嫌，已準備上奏。`,[
['認錯並退還民田',()=>{S.me.fam.forEach(x=>x.pw=cl(x.pw-4));S.nat.pop+=2;S.me.ally+=2;return'你主動退田認錯，這位鐵面御史網開一面。'}],
['據理反駁（看口才）',()=>{if(ckp(.35+(S.me.at.iq-50)/200+S.me.ally/400)){return'你的反駁有理有據，御史被說服。'}S.me.favor-=5;return'御史拿出了更多證據，你很被動。'}],
['買通御史（耗銀80）',()=>{if(!pay(80))return'銀兩不足。';if(ckp(.4)){return'御史收了錢，奏疏被壓了下來。'}S.me.favor-=8;return'鐵面御史把你的賄賂也一併奏了上去。'}]],'御史'+c.f.n,'朝')],
[8,20,c=>{const j=oth(-1);if(j!==null){const n=S.npcs[j];n.fam.forEach(x=>x.pw=cl(x.pw-15));n.favor-=5;return`御史${c.f.n}彈倒一名權貴，${n.n}之父也受了牽連。`}return`御史${c.f.n}彈倒了一名權貴。`}],
[10,30,c=>{if(P(.5)){S.nat.stab-=1;return`${c.f.n}因言獲罪，被貶出京。`}S.nat.stab+=2;return`${c.f.n}升任左都御史，官聲更盛。`}]]},
{k:'外戚驕橫',st:[
[6,20,c=>{S.nat.pop-=3;return`外戚${c.f.n}侯爺驕縱，其子當街縱馬傷人，民怨沸騰。`}],
[6,16,c=>`侯府託人說情。`,c=>sEv(`${c.f.n}侯爺的夫人遞牌子入宮，想請你在皇上面前為侯府說情。`,[
['為侯府說情（看聖寵）',()=>{if(ckp(.3+S.me.favor/250)){S.me.ally+=4;fpv(c.f,3);return'皇上看在你的面子上，網開一面。'}S.me.favor-=4;return'皇上沉下臉：「後宮不得干政。」'}],
['婉拒',()=>'你婉拒了侯夫人。'],
['利用此事敲打侯府（看心機）',()=>{if(ckp(.3+S.me.scheme/250)){fpv(c.f,-5);S.me.favor+=3;return'你借機向皇上遞了話，侯府的氣焰被壓了壓。'}return'你的暗示沒有起作用。'}]],'侯爺'+c.f.n,'朝')],
[8,20,c=>{if(P(.5)){fpv(c.f,-8);S.nat.stab+=2;const q=Q();if(q)q.favor-=5;return'皇上嚴懲了侯府，殺一儆百。'}fpv(c.f,4);S.nat.pop-=2;return'皇上輕輕放過了侯府，百姓寒了心。'}],
[10,30,c=>{fpv(c.f,R(-4,6));return`${c.f.n}侯爺老病，爵位由其子承襲，外戚勢力重組。`}]]},
{k:'皇叔異動',st:[
[6,20,c=>`皇叔安親王${c.f.n}賦閒府中，門前卻車馬不斷。`],
[6,16,c=>`安親王拉攏你。`,c=>sEv(`安親王${c.f.n}悄悄派人拉攏你：「你若助我，日後少不了你的好處。」`,[
['結交王爺',()=>{c.A.f.join=1;S.me.ally+=8;return'你與安親王暗通款曲，似乎多了一條退路。'}],
['揭發他的野心（看心機）',()=>{if(ckp(.3+S.me.scheme/250+S.me.favor/500)){c.A.f.rep=1;S.me.favor+=10;return'你向皇上告密，皇上對你另眼相看。'}S.me.favor-=3;return'皇上不信，反說你挑撥宗室。'}],
['婉言謝絕',()=>'你婉言謝絕，不沾這渾水。']],'親王'+c.f.n,'朝')],
[8,20,c=>{S.nat.stab-=3;return`安親王${c.f.n}結交邊將，府中私養門客。`}],
[10,30,c=>{if(c.A.f.rep){S.nat.stab+=3;return`安親王${c.f.n}謀逆敗露，被圈禁終身。`}if(P(.5)){S.nat.stab-=8;S.nat.mil-=4;let t=`安親王${c.f.n}起事失敗，被賜自盡，朝野震動。`;if(c.A.f.join){S.me.favor-=12;S.me.ally-=4;t+='你曾與他往來，被人翻出，受了牽連。'}return t}S.nat.stab+=2;return`安親王${c.f.n}主動上表請辭，閉門讀書。`}]]},
{k:'寒門新貴',st:[
[6,20,c=>{S.nat.stab+=2;return`新科狀元${c.f.n}出身寒門，卻被皇上破格重用。`}],
[6,16,c=>`狀元郎來提親。`,c=>sEv(`新科狀元${c.f.n}託人向你家提親，想娶你的親族之女。`,[
['答應婚事',()=>{c.A.f.marry=1;S.me.fam.forEach(x=>x.lo=cl(x.lo+3));S.me.ally+=4;return`你的親族與${c.f.n}結為姻親。`}],
['婉言拒絕',()=>'你婉拒了這門親事。'],
['招攬為己用（耗銀30）',()=>{if(!pay(30))return'銀兩不足。';if(ckp(.5)){S.me.ally+=6;return`${c.f.n}收下了你的心意。`}return'他客氣地婉謝了。'}]],'狀元'+c.f.n,'朝')],
[8,20,c=>{S.nat.eco+=3;return`${c.f.n}在新政中立下大功，成了朝中新貴。`}],
[10,30,c=>{if(P(.6)){S.nat.stab+=4;if(c.A.f.marry){S.me.fam.forEach(x=>x.pw=cl(x.pw+8))}return`${c.f.n}位極人臣，成為朝廷股肱。`}S.nat.stab-=2;return`${c.f.n}被捲入黨爭，貶謫嶺南。`}]]}];
function tickArc(A,c,TB,kind,who,evs){if(!A||A.done)return;if(S.t-A.t<A.w)return;const arc=TB[A.k],st=arc&&arc.st[A.s];if(!st){A.done=1;return}
if(st[3]&&evs.length>=1)return;c.A=A;let tx=st[2](c);if(tx)jot(kind,who,tx);if(st[3]){const e=st[3](c);if(e)evs.push(e)}
A.s++;A.t=S.t;const nx=arc.st[A.s];if(nx)A.w=R(nx[0],nx[1]);else A.done=1}
function storyTick(){const evs=[];if(S.over||!S.cr)return evs;
if(S.reg){rx();ids().sort(()=>Math.random()-.5).forEach(i=>{const n=S.npcs[i];if(!n.arc2)n.arc2=newArc2();if(n.st){n.arc2.done=1;return}if(n.arc2.done&&S.t-n.arc2.t>16&&P(.1)){n.arc2=newArc2();return}try{tickArc(n.arc2,{n,i},TARC,'宮',RKN(n)+n.n,evs)}catch(e){n.arc2.done=1}});
if(!S.rarc)S.rarc={k:R(0,RARC.length-1),s:0,t:S.t,w:R(4,12),f:{}};if(S.rarc.done&&S.t-S.rarc.t>14&&P(.1))S.rarc={k:R(0,RARC.length-1),s:0,t:S.t,w:R(6,16),f:{}};try{tickArc(S.rarc,{},RARC,'帝','新帝'+S.reg.k.n,evs)}catch(e){S.rarc.done=1}}
else{ids().sort(()=>Math.random()-.5).forEach(i=>{const n=S.npcs[i];if(!n.arc)return;if(n.st){n.arc.done=1;return}if(n.arc.done&&S.t-n.arc.t>18&&P(.1)){n.arc=newArc();return}try{tickArc(n.arc,{n,i},ARCN,'宮',n.n,evs)}catch(e){n.arc.done=1}});
if(S.earc){if(S.earc.done&&S.t-S.earc.t>14&&P(.08))S.earc={k:R(0,EARC.length-1),s:0,t:S.t,w:R(8,20),f:{}};tickArc(S.earc,{},EARC,'帝','皇上',evs)}
if(S.dow&&S.darc){if(S.darc.done&&S.t-S.darc.t>16&&P(.08))S.darc={k:R(0,DARC.length-1),s:0,t:S.t,w:R(8,22),f:{}};tickArc(S.darc,{},DARC,'后','太后',evs)}}
S.cr.forEach(f=>{if(f.A.done&&S.t-f.A.t>10&&P(.1))f.A={k:R(0,CARC.length-1),s:0,t:S.t,w:R(6,24),f:{}};tickArc(f.A,{f},CARC[f.A.k],'朝',f.role+f.n,evs)});return evs}
function chrPanel0(){const F=['全部','皇帝','太后','前朝','後宮'],K=[null,'帝','后','朝','宮'],ts=t=>`第${Math.floor(t/12)+1}年${t%12+1}月`;let h=`<div class=chips style="margin:0 0 8px">`+F.map((f,i)=>`<button class="${CHF==i?'':'s'} mini" onclick="CHF=${i};render()">${f}</button>`).join('')+'</div>';
if(CHF==0||CHF==1){const e=S.earc;h+=`<div class=cd><h3>皇帝傳${S.reg?'（已駕崩）':''}</h3><div class=m>${EPS[S.ep][0]}・${e&&EARC[e.k]?EARC[e.k].k+'（第'+Math.min(e.s,5)+'/5幕'+(e.done?'・完結':'')+'）':''}</div></div>`}
if((CHF==0||CHF==2)&&S.dow&&S.darc)h+=`<div class=cd><h3>太后傳</h3><div class=m>${DARC[S.darc.k].k}（第${Math.min(S.darc.s,4)}/4幕${S.darc.done?'・完結':''}）</div></div>`;
if(CHF==0||CHF==3)h+=`<div class=cd><h3>前朝人物</h3>`+S.cr.map(f=>`<div class=k><b>${f.role}${f.n}</b>・${FACN[f.fac]}<br><span class=m>${CARC[f.A.k].k}（第${Math.min(f.A.s,4)}/4幕${f.A.done?'・完結':''}）</span></div>`).join('')+'</div>';
const L2=(S.chr||[]).filter(x=>!K[CHF]||x.k===K[CHF]).slice(0,60);h+=`<div class="cd l"><h3>大事記</h3>`+(L2.length?L2.map(x=>`<p><b>${ts(x.t)}</b>　${x.x}</p>`).join(''):'<span class=m>故事尚未展開，請繼續度過歲月。</span>')+'</div>';return h}
/* ===== v18：太妃制度・子女聯姻和親 ===== */
const NAT6=['暹羅','高麗','蒙古','吐蕃','安南','準噶爾'];
const NTR={暹羅:['海商富庶、象兵威名'],高麗:['禮儀之邦、文教昌盛'],蒙古:['騎射無雙、草原霸主'],吐蕃:['高原佛國、民風淳厚'],安南:['南疆近鄰、叛服不定'],準噶爾:['部落強悍、野心勃勃']};
const pk=a=>a[R(0,a.length-1)];
const MG=['明','遠','徵','承','昭','鴻','澤','衡','庭','川','珩','策'];
const pnm=sex=>pk(SUR)+(sex=='男'?pk(MG):pk(GIV));
const ntr=()=>{if(!S.ntr){S.ntr={};NAT6.forEach(k=>S.ntr[k]=R(35,65));if(S.me&&S.me.fo&&S.ntr[S.me.fo]!==undefined)S.ntr[S.me.fo]=cl(S.dip||50)}return S.ntr};
function RKN(n){if(n.st)return n.st;if(!S||!S.reg||!n.tf)return RKD(n);const wi=S.reg.wmi,w=typeof wi=='number'?S.npcs[wi]:null;if(w===n)return n===Q()?'生母皇太后':'生母太妃';if(n===Q())return S.reg.title==='西太后'?'東太后':'嫡母皇太后';return n.rank>=5?'太妃':n.rank>=3?'太嬪':'太貴人'}
function rx(){const R_=S.reg;if(!R_.x)R_.x={pj:[],emp:null,lv:null,sx:0,gs:0,cc:0,tal:0,dp:0,sec:0,hl:0};if(S.cr)S.cr.forEach(f=>{if(f.lo===undefined)f.lo=R(30,60)});ntr();return R_.x}
const tfs=()=>ids().filter(i=>S.npcs[i].tf);
const newArc2=()=>({k:R(0,TARC.length-1),s:0,t:S.t,w:R(3,14),f:{}});
function regInit(){const R_=S.reg;S.npcs.forEach(n=>{n.preg=0;n.tf=1;n.arc2=newArc2()});R_.wmi=typeof S.nko=='number'?S.nko:null;rx();
S.rarc={k:R(0,RARC.length-1),s:0,t:S.t,w:R(4,12),f:{}};R_.tfn=ids().length}
function tfLine(){const n=ids().length;if(!n)return'';const q=Q();return`<p class=m>先帝的後宮隨之更易：${q?`${q.n}尊為${RKN(q)}，`:''}其餘${n-(q?1:0)}位妃嬪依制晉尊為<b>太妃・太嬪</b>，遷居慈寧、壽康諸宮頤養，不再侍奉聖駕，也各有各的心思與故事。</p>`}
const kidsOf=()=>{const a=S.me.kids.map(k=>[k,'me']);S.npcs.forEach((n,i)=>n.kids.forEach(k=>a.push([k,i])));return a};
const spOK=k=>!k.sp&&yr(k)>=(k.sex=='男'?16:15)&&!(S.reg&&k===S.reg.k)&&(!k.nw||S.t>=k.nw);
const pd=(own,v)=>own==='me'?pay(v):1;
const fam4=(own,v,al)=>{const o=own==='me'?S.me:S.npcs[own];o.fam.forEach(x=>x.pw=cl(x.pw+v));if(own==='me')S.me.ally+=al;else S.npcs[own].al+=al};
const qtx=q=>q>=75?'琴瑟和鳴':q>=55?'相敬如賓':q>=38?'貌合神離':'怨偶一對';
function mkSp(k,ty,o){const a=k.at||{lk:50,qi:50},q=cl(45+(a.lk-50)/4+(a.qi-50)/4+(k.bond-50)/8+R(-18,18)+(o.b||0));const s=Object.assign({n:pnm(k.sex=='男'?'女':'男'),ty,q,hap:q,t:S.t,gk:0},o);delete s.b;k.sp=s;return s}
function hqDo(k,own,n1){const rel=ntr(),dw=pd(own,50),s=mkSp(k,'和親',{nt:n1,b:(dw?4:-10)+({蒙古:-8,準噶爾:-10,吐蕃:-6,安南:-3}[n1]||0)});k.out=n1;rel[n1]=cl(rel[n1]+22);S.nat.mil+=2;S.nat.stab+=2;fam4(own,2,2);return`${k.n}遠嫁${n1}，與${s.n}成婚，${qtx(s.q)}。${dw?'':'（嫁妝寒薄，她在異鄉底氣不足。）'}`}
function sonWed(k,own,ty,o,msg){const s=mkSp(k,ty,o.sp||{});o.fx&&o.fx();return`${k.n}迎娶${s.n}（${msg}），${qtx(s.q)}。`}
function mxOffers(k,own){const fm=k.sex=='女',rel=ntr(),nts=NAT6.slice().sort(()=>Math.random()-.5),n1=nts[0],n2=nts[1],a=[];
if(fm){a.push(
{l:`和親${n1}`,d:`${NTR[n1][0]}，嫁妝50`,f:()=>hqDo(k,own,n1)},
{l:`和親${n2}`,d:`${NTR[n2][0]}，嫁妝50`,f:()=>hqDo(k,own,n2)},
{l:'下嫁世家大族',d:'母家人脈＋，嫁妝30',f:()=>{const dw=pd(own,30),s=mkSp(k,'世家',{b:dw?6:-4});fam4(own,5,4);S.fp[R(0,4)]+=3;return`${k.n}下嫁${s.n}（世家之子），${qtx(s.q)}。`}},
{l:'下嫁寒門才子',d:'民心＋，嫁妝15',f:()=>{const dw=pd(own,15),s=mkSp(k,'寒門',{b:4});S.nat.pop+=2;S.nat.stab+=1;return`${k.n}下嫁寒門才子${s.n}，朝野稱頌公主不慕富貴，${qtx(s.q)}。`}},
{l:'下嫁邊關武將',d:'軍力＋',f:()=>{const s=mkSp(k,'武將',{b:0});S.nat.mil+=3;fam4(own,1,3);return`${k.n}下嫁武將${s.n}，鎮守邊關的將士士氣大振，${qtx(s.q)}。`}},
{l:'配宗室世子',d:'朝局＋，但宗室難測',f:()=>{const s=mkSp(k,'宗室',{b:2});S.nat.stab+=2;fam4(own,2,2);return`${k.n}許配宗室世子${s.n}，親上加親，${qtx(s.q)}。`}},
{l:'招贅駙馬入宮',d:'公主留在身邊，孝心＋',f:()=>{const s=mkSp(k,'招贅',{b:8});k.bond=cl(k.bond+8);return`${k.n}招贅${s.n}為駙馬，仍住宮中，承歡膝下，${qtx(s.q)}。`}},
{l:`招外邦質子${n2}王子為婿`,d:'邦誼＋，但需防間諜',f:()=>{const s=mkSp(k,'質子',{nt:n2,b:-2});rel[n2]=cl(rel[n2]+14);return`${n2}王子${s.n}入朝尚公主${k.n}，兩國邦誼日深，${qtx(s.q)}。`}},
{l:'入道觀為女冠',d:'遠離紛爭',f:()=>{k.sp={n:'玄真觀',ty:'出家',q:50,hap:45,t:S.t,gk:0};k.bond=cl(k.bond-3);return`${k.n}看破紅塵，奉旨入道觀為女冠，賜號「清虛」。`}})}
else{a.push(
{l:'聘高門嫡女為妃',d:'聲勢＋，母家人脈＋',f:()=>{k.pow=cl(k.pow+10);fam4(own,4,4);return sonWed(k,own,'高門',{sp:{b:6}},'高門嫡女')}},
{l:'聘武將之女',d:'軍中人脈＋',f:()=>{k.pow=cl(k.pow+8);S.nat.mil+=2;return sonWed(k,own,'武將',{sp:{b:2}},'將門虎女')}},
{l:`聘${n1}公主`,d:`邦誼＋，${NTR[n1][0]}`,f:()=>{k.pow=cl(k.pow+3);rel[n1]=cl(rel[n1]+18);if(own==='me')S.me.silver+=60;return sonWed(k,own,'外邦',{sp:{nt:n1,b:-3}},`${n1}公主`)}},
{l:'聘寒門才女',d:'才德＋，清名',f:()=>{k.cai=cl(k.cai+4);k.de=cl(k.de+6);S.nat.pop+=1;return sonWed(k,own,'才女',{sp:{b:4}},'寒門才女')}},
{l:'親上加親（母族表親）',d:'母族根基＋',f:()=>{fam4(own,6,2);const s=mkSp(k,'表親',{b:6});if(P(.3))s.bad=1;return`${k.n}迎娶母族表妹${s.n}，親上加親，${qtx(s.q)}。`}},
{l:'一妻一妾，兩房並立',d:'聲勢＋，但後院難安',f:()=>{k.pow=cl(k.pow+6);const s=mkSp(k,'兩房',{b:-6});s.n2=pnm('女');return`${k.n}迎娶${s.n}為正妃，又納${s.n2}為側室，${qtx(s.q)}。`}},
{l:'娶商賈巨富之女',d:'銀錢＋，清流側目',f:()=>{if(own==='me')S.me.silver+=90;k.pow=cl(k.pow+2);S.nat.stab-=1;return sonWed(k,own,'商賈',{sp:{b:0}},'江南巨賈之女')}},
{l:'聘宗室郡主',d:'朝局＋',f:()=>{S.nat.stab+=2;fam4(own,2,2);return sonWed(k,own,'宗室',{sp:{b:3}},'宗室郡主')}})}
a.forEach(x=>{const f=x.f;x.f=()=>{const r=f();if(k.sp)k.sp.ty0=k.sp.ty;return r}});return a.sort(()=>Math.random()-.5).slice(0,4)}
function mxProp(k,own){const off=mxOffers(k,own),who=own==='me'?`你的${k.sex=='男'?'皇子':'公主'}${k.n}`:`${on(own)}所出的${k.n}`;
return{t:`${who}（${yr(k)}歲・${KT[k.t][0]}）已到議親之齡，${pk(['媒人踏破了門檻','宗室與朝臣紛紛遞上庚帖','各方遞來了合婚的八字','欽天監合了幾個吉日'])}。${S.reg?'由你這位太后來定奪。':'你要為'+(k.sex=='男'?'他':'她')+'擇一門親事。'}`,
o:off.map(x=>[`${x.l}（${x.d}）`,()=>{const r=x.f();if(own!=='me')S.npcs[own].al+=6;jot('宮',k.n,r);return r}]).concat([['再等等，容後再議',()=>{k.nw=S.t+R(12,24);return`你把${k.n}的親事壓了下來，暫不議親。`}]])}}
function autoWed(k,own){const x=pk(mxOffers(k,own).filter(y=>!/質子|入道觀/.test(y.l)));if(!x)return;const r=x.f();jot('宮',k.n,r)}
function spLine(k){const s=k.sp;if(!s)return yr(k)>=(k.sex=='男'?16:15)?'<span class=m>尚未婚配</span>':'';if(s.ty==='出家')return`<span class=m>入道觀為女冠</span>`;return`<span class=m>${s.ty==='和親'?'和親'+s.nt:s.ty==='質子'?'招'+s.nt+'質子':s.ty}・配${s.n}${s.n2?'（側室'+s.n2+'）':''}・感情${s.hap|0}・子嗣${s.gk}${s.end?'・'+s.end:''}${k.out?'・遠在'+k.out:''}</span>`}
function kinPanel(){const R_=S.reg;let h=`<div class=cd><h3>皇室成員</h3><div class=m>皇帝的兄弟姊妹與先帝諸子女。可用「賜婚宗室」「扶持宗室」影響他們。</div></div>`;
const rows=kidsOf().filter(([k])=>k!==R_.k);if(!rows.length)return h+`<div class=cd><span class=m>宗室中暫無其他皇子公主。</span></div>`;
return h+rows.sort((a,b)=>yr(b[0])-yr(a[0])).map(([k,o])=>`<div class=cd><div class=kid>${tag(k)}・${o==='me'?'你所出':on(o)+'所出'}<div class=kb>${[['勢',k.pow],['孝',k.bond],['忠',k.ly===undefined?50:k.ly]].map(([l,v])=>abar(l,v)).join('')}</div>${spLine(k)}</div></div>`).join('')}
/* --- 聯姻後續事件 --- */
const relT=n=>{const v=ntr()[n];return v>=70?'親善':v>=45?'平和':v>=28?'緊張':'瀕臨開戰'};
const wid=k=>k.sp&&!k.sp.end;
const MXE=[
(k,o)=>wid(k)&&k.out&&k.sp.nt&&{t:`遠嫁${k.sp.nt}的${k.n}託人捎來家書，言及異鄉風土，字裡行間盡是思念。`,o:[
['回信慰問並厚賞（耗銀20）',()=>{if(!pd(o,20))return'銀兩不足，只回了一封短信。';k.sp.hap=cl(k.sp.hap+8);k.bond=cl(k.bond+4);ntr()[k.sp.nt]+=2;return`${k.n}收到賞賜與家書，在異鄉有了底氣。`}],
['囑她留意當地軍情，作為耳目（看心機）',()=>{if(ckp(.35+S.me.scheme/250+(k.at?k.at.iq:50)/300)){S.nat.mil+=3;ntr()[k.sp.nt]+=1;return`${k.n}傳回了寶貴的情報，邊防因此多了防備。`}k.sp.hap=cl(k.sp.hap-8);ntr()[k.sp.nt]-=6;return`消息走漏，${k.sp.nt}人對${k.n}起了疑心，邦誼受損。`}],
['簡單回信，不多過問',()=>{k.sp.hap=cl(k.sp.hap-2);return'你寥寥數語回了信。'}]]},
(k,o)=>wid(k)&&k.out&&['蒙古','準噶爾','吐蕃'].includes(k.sp.nt)&&P(.5)&&{t:`${k.sp.nt}傳來急報：${k.n}的丈夫${k.sp.n}暴病身亡，依當地舊俗，她須改嫁繼位的新首領。`,o:[
['遣使接回公主（邦誼受損）',()=>{k.out=0;k.sp.end='寡居歸國';k.sp.hap=cl(k.sp.hap+15);ntr()[k.sp.nt]-=14;return`你不顧舊俗，派人接回了${k.n}，${k.sp.nt}君臣面上無光，邦交轉冷。`}],
['依舊俗，讓她再嫁（邦誼＋）',()=>{ntr()[k.sp.nt]+=12;k.sp.hap=cl(k.sp.hap-25);k.sp.n=pnm('男');k.bond=cl(k.bond-10);return`${k.n}含淚改嫁新首領，邦誼穩固，但她在給你的信裡再無一句溫言。`}],
['暗助她扶立自己的兒子（看心機）',()=>{if(ckp(.3+S.me.scheme/250+S.me.ally/400)){ntr()[k.sp.nt]+=22;k.sp.hap=cl(k.sp.hap+12);k.sp.reg=1;return`在你的暗中謀劃下，${k.n}扶立幼子，成為${k.sp.nt}的實際攝政，邦交空前親密。`}ntr()[k.sp.nt]-=12;k.sp.hap=cl(k.sp.hap-15);return`謀劃敗露，${k.n}在異鄉的處境更加艱難，邦誼受損。`}]]},
(k,o)=>wid(k)&&k.out&&k.sp.nt&&ntr()[k.sp.nt]<30&&{t:`${k.sp.nt}邊釁頻起，${k.n}來信泣訴：「兩國若是交兵，女兒夾在中間，生不如死。」`,o:[
['出兵問罪，為女兒討個公道',()=>{if(ckp(.3+S.nat.mil/200+S.me.scheme/500)){ntr()[k.sp.nt]+=20;S.nat.mil+=4;k.sp.hap=cl(k.sp.hap+10);return`大軍壓境，${k.sp.nt}被迫求和，${k.n}的地位反而更穩。`}S.nat.mil-=6;S.nat.eco-=3;k.sp.hap=cl(k.sp.hap-18);return`戰事不利，${k.n}在異鄉受盡白眼。`}],
['賠款議和，請對方善待公主（耗銀40）',()=>{if(!pd(o,40))return'銀兩不足。';ntr()[k.sp.nt]+=14;return`你破費議和，${k.n}的處境暫時好轉。`}],
['顧全大局，勸女兒忍耐',()=>{k.sp.hap=cl(k.sp.hap-14);k.bond=cl(k.bond-8);S.nat.stab+=1;return`${k.n}接到你的信，從此不再來信。`}]]},
(k,o)=>wid(k)&&k.sp.ty!=='出家'&&k.sp.hap>=40&&k.sp.gk<5&&P(.5)&&{t:`${k.n}與${k.sp.n}的孩子降生了，喜報傳入宮中。`,o:[
['厚賞賀禮（耗銀20）',()=>{if(!pd(o,20))return'銀兩不足，只送了些尋常賀禮。';k.sp.gk++;k.sp.hap=cl(k.sp.hap+5);if(k.sp.nt)ntr()[k.sp.nt]+=4;return`你賞了長命鎖與錦緞，${k.n}的婆家對她更加敬重。`}],
['派人照拂月子',()=>{k.sp.gk++;k.bond=cl(k.bond+3);return'你派去的老嬤嬤把月子照顧得妥妥帖帖。'}],
['道聲恭喜便罷',()=>{k.sp.gk++;return'你只回了一聲恭喜。'}]]},
(k,o)=>wid(k)&&['世家','武將','宗室','高門'].includes(k.sp.ty)&&P(.5)&&{t:`${k.sex=='女'?'駙馬':'王妃的娘家'}${k.sp.n}仗著與皇室的姻親，在地方上橫行霸道，百姓怨聲載道。`,o:[
['嚴辦不貸，公主也要受責',()=>{k.sp.hap=cl(k.sp.hap-14);S.nat.pop+=4;S.nat.stab+=2;fam4(o,-3,-2);return`你不徇私情，嚴辦了這門姻親，天下稱頌，${k.n}卻與你生分了。`}],
['暗中規勸，令其收斂（看口才）',()=>{if(ckp(.4+((S.me.at.sk[13]||40)-40)/200+(S.me.at.qi-50)/300)){S.nat.pop+=1;return`你一番規勸後，${k.sp.n}果然收斂了不少。`}S.nat.pop-=3;return`${k.sp.n}陽奉陰違，惡名越傳越遠。`}],
['睜一隻眼閉一隻眼',()=>{S.nat.pop-=4;S.nat.stab-=2;fam4(o,3,3);k.sp.hap=cl(k.sp.hap+4);return'此事被壓了下去，民間卻罵聲不絕。'}]]},
(k,o)=>wid(k)&&k.sp.q<48&&k.sp.ty!=='出家'&&{t:`${k.n}與${k.sp.n}感情不睦，三天兩頭吵鬧，連宮裡也聽說了。`,o:[
['召來訓誡，勸二人和好（看氣質）',()=>{if(ckp(.4+(S.me.at.qi-50)/200)){k.sp.q=cl(k.sp.q+14);k.sp.hap=cl(k.sp.hap+14);return'你好言相勸，二人冰釋前嫌。'}k.sp.hap=cl(k.sp.hap-4);return'二人表面答應，回去後依舊吵鬧。'}],
['賜幾個妾室／通房，轉移注意',()=>{k.sp.hap=cl(k.sp.hap+(k.sex=='男'?6:-10));return k.sex=='男'?'兒子府裡熱鬧了，兒媳卻鬱鬱不樂。':'公主氣得數日不言。'}],
['准其和離（有損皇家體面）',()=>{k.sp.end='和離';k.sp.hap=cl(k.sp.hap+6);k.chong=cl(k.chong-10);S.nat.stab-=1;if(k.out){ntr()[k.sp.nt]-=14;k.out=0}return`${k.n}與${k.sp.n}和離，京中議論紛紛。`}]]},
(k,o)=>wid(k)&&k.sex=='女'&&!k.out&&P(.4)&&yr(k)>=28&&{t:`公主${k.n}的駙馬${k.sp.n}英年早逝，她一身縞素入宮，哭倒在你腳邊。`,o:[
['勸她再嫁，另覓良緣',()=>{k.sp.end='寡居再嫁';k.sp.hap=cl(k.sp.hap+10);k.sp.n=pnm('男');k.sp.end=0;k.sp.q=cl(k.sp.q+R(-10,10));return`${k.n}再嫁他人，有人議論，但她過得自在。`}],
['立貞節牌坊，勉勵守節',()=>{k.sp.end='守節';k.sp.hap=cl(k.sp.hap-18);S.nat.pop+=1;return`宮裡為${k.n}立了貞節牌坊，她的笑容卻越來越少。`}],
['接回宮中奉養，承歡膝下',()=>{k.sp.end='寡居宮中';k.sp.hap=cl(k.sp.hap+12);k.bond=cl(k.bond+10);return`${k.n}搬回宮中，你多了個貼心的陪伴。`}]]},
(k,o)=>wid(k)&&k.sp.nt&&!k.out&&P(.5)&&{t:`${k.sp.n}（${k.sp.nt}籍）久居京城，水土不服又思念故土，想回鄉省親，朝臣擔心這是一去不復返。`,o:[
['准其省親，厚贈禮物（耗銀30）',()=>{if(!pd(o,30))return'銀兩不足。';ntr()[k.sp.nt]+=10;k.sp.hap=cl(k.sp.hap+8);return`${k.sp.n}感激涕零，回國後在${k.sp.nt}大說大朝的好話。`}],
['婉拒，說路途遙遠不便',()=>{k.sp.hap=cl(k.sp.hap-12);return`${k.sp.n}悶悶不樂，日漸消瘦。`}],
['暗中派人隨行監視（看心機）',()=>{if(ckp(.35+S.me.scheme/250)){S.nat.mil+=2;ntr()[k.sp.nt]+=3;return`隨行的人帶回了不少情報，對方卻渾然不覺。`}ntr()[k.sp.nt]-=8;return'隨行的人被發現，對方大為不悅。'}]]},
(k,o)=>wid(k)&&k.sp.ty==='質子'&&P(.5)&&{t:`有人密報，${k.sp.nt}駙馬${k.sp.n}與使團暗中往來，似在刺探朝廷虛實。`,o:[
['當面質問，要求他立誓',()=>{if(ckp(.5+S.me.scheme/400)){k.sp.hap=cl(k.sp.hap-6);ntr()[k.sp.nt]+=3;return`${k.sp.n}當面立下重誓，風波平息。`}ntr()[k.sp.nt]-=10;return`${k.sp.n}被激怒，雙方關係惡化。`}],
['將計就計，反傳假情報（看心機）',()=>{if(ckp(.3+S.me.scheme/220)){S.nat.mil+=4;return'假情報讓對方吃了暗虧，邊防更加穩固。'}ntr()[k.sp.nt]-=12;return'假情報被識破，對方大怒。'}],
['裝作不知',()=>{S.nat.mil-=3;return'此事不了了之，朝臣暗自憂心。'}]]},
(k,o)=>wid(k)&&k.sex=='男'&&k.sp.bad&&P(.5)&&{t:`${k.n}的嫡子自幼體弱多病，太醫說是「親上加親」留下的先天不足。`,o:[
['遍訪名醫（耗銀40）',()=>{if(!pd(o,40))return'銀兩不足。';if(ckp(.5)){k.sp.bad=0;return'名醫用心調治，孩子有了起色。'}return'名醫們也只能搖頭，只能細心將養。'}],
['廣施善行，為孫兒祈福',()=>{S.nat.pop+=1;return'你施粥捐錢，為孫兒積福。'}],
['聽天由命',()=>{k.sp.hap=cl(k.sp.hap-8);return'你嘆了口氣，沒有再提。'}]]},
(k,o)=>wid(k)&&k.sp.ty==='兩房'&&P(.5)&&{t:`${k.n}的正妃${k.sp.n}與側室${k.sp.n2}在府裡爭寵，鬧得雞飛狗跳。`,o:[
['偏袒正妃，敲打側室',()=>{k.sp.hap=cl(k.sp.hap+5);return'側室收斂了，正妃對你感激。'}],
['一碗水端平，各打五十大板',()=>{k.sp.hap=cl(k.sp.hap-2);return'兩人都老實了幾天。'}],
['令其分府別居',()=>{k.sp.hap=cl(k.sp.hap+4);k.pow=cl(k.pow-3);return'分府之後倒是清靜了，只是府中勢力小了些。'}]]},
(k,o)=>wid(k)&&k.sp.ty==='外邦'&&P(.5)&&{t:`${k.n}的${k.sp.nt}籍王妃${k.sp.n}在府中行${k.sp.nt}禮俗，不守規矩，被言官彈劾「有失體統」。`,o:[
['維護王妃，說這是邦交之誼',()=>{ntr()[k.sp.nt]+=6;S.nat.stab-=1;return`${k.sp.n}感激不盡，言官卻不依不饒。`}],
['訓誡王妃入鄉隨俗',()=>{k.sp.hap=cl(k.sp.hap-8);ntr()[k.sp.nt]-=4;return'王妃收斂了許多，卻與丈夫生分了。'}]]}];
function mxYear(){const rel=ntr();kidsOf().forEach(([k,o])=>{const s=k.sp;if(!s||s.end||s.ty==='出家')return;s.hap=cl(s.hap+(s.q-50)/20+R(-4,4));if(s.nt)rel[s.nt]=cl(rel[s.nt]+(s.hap-50)/12);if(s.hap>38&&s.gk<6&&P(.35)){s.gk++;if(o==='me'&&!S.reg)L(`${k.n}喜得貴子，你又添了一個孫輩。`)}});
NAT6.forEach(n=>{rel[n]=cl(rel[n]+(50-rel[n])*.05+R(-4,4));if(rel[n]<25){S.nat.mil-=1;S.nat.stab-=.5}else if(rel[n]>75)S.nat.eco+=1})}
function borderEv(){const rel=ntr(),n=NAT6.slice().sort((a,b)=>rel[a]-rel[b])[0];if(rel[n]>=36)return null;
const dau=kidsOf().filter(([k,o])=>spOK(k)&&k.sex=='女'&&(o==='me'||S.reg));
const o=[[`出兵震懾${n}`,()=>{if(ckp(.3+S.nat.mil/180+(S.reg?S.reg.pw/500:S.me.scheme/500))){rel[n]=cl(rel[n]+16);S.nat.mil+=3;return`大軍陳兵邊境，${n}被迫收斂，邦交回暖。`}S.nat.mil-=5;S.nat.eco-=3;rel[n]=cl(rel[n]-5);return`出兵不利，${n}反而更囂張了。`}],
[`遣使送禮議和（耗銀30）`,()=>{if(!pd(S.reg?'me':'me',30))return'銀兩不足。';rel[n]=cl(rel[n]+14);return`使臣攜重禮出使，${n}態度軟化。`}]];
if(dau.length)o.push([`以公主和親安撫（${dau[0][0].n}）`,()=>{const r=hqDo(dau[0][0],dau[0][1],n);jot('宮',dau[0][0].n,r);return r}]);
o.push(['置之不理',()=>{rel[n]=cl(rel[n]-6);S.nat.stab-=2;return`${n}得寸進尺，邊境更不安寧。`}]);
return{t:`${n}與大朝的關係已降至「${relT(n)}」，邊境屢有摩擦，朝臣爭論是戰是和。`,o}}
function tributeEv(){const rel=ntr(),n=NAT6.slice().sort((a,b)=>rel[b]-rel[a])[0];if(rel[n]<64)return null;
return{t:`${n}（${NTR[n][0]}）遣使入貢，獻上珍禽異寶，並請求加深邦誼。`,o:[
['厚賞使臣，設宴款待（耗銀25）',()=>{if(!pd('me',25))return'銀兩不足，只能草草款待。';rel[n]=cl(rel[n]+6);S.nat.eco+=2;return`${n}使臣盡興而歸，兩國通商更加繁榮。`}],
['開放互市，抽取關稅',()=>{S.nat.eco+=4;rel[n]=cl(rel[n]+2);return'互市開通，國庫多了一筆進項。'}],
['婉謝貢品，以示大國風範',()=>{S.nat.stab+=1;S.nat.pop+=1;return'使臣讚嘆天朝氣度。'}]]}}
function mxMonth(){const ev=[];if(S.over)return ev;
const cand=kidsOf().filter(([k,o])=>spOK(k)&&(o==='me'||S.reg));if(cand.length&&S.t-(S.mxT===undefined?-99:S.mxT)>=10&&P(.07)){const [k,o]=pk(cand);S.mxT=S.t;k.nw=S.t+12;ev.push(mxProp(k,o))}
if(S.t%12==3&&!S.reg)S.npcs.forEach((n,i)=>{if(!n.st)n.kids.forEach(k=>{if(spOK(k)&&P(.35))autoWed(k,i)})});
if(P(.28)){const ms=kidsOf().filter(([k,o])=>k.sp&&(o==='me'||S.reg));if(ms.length){const [k,o]=pk(ms),f=MXE.map(g=>g(k,o)).filter(Boolean);if(f.length)ev.push(pk(f))}}
if(P(.07)){const b=borderEv();if(b)ev.push(b)}if(P(.05)){const b=tributeEv();if(b)ev.push(b)}
if(S.t%12==0)mxYear();return ev.slice(0,2)}
/* --- 臨朝擴充：行動 --- */
const avgLo=()=>S.cr.reduce((s,f)=>s+(f.lo===undefined?45:f.lo),0)/S.cr.length;
const lyv=k=>k.ly===undefined?50:k.ly,lyd=(k,v)=>{k.ly=cl(lyv(k)+v)};
function crownSwap(nk,why){const R_=S.reg,x=rx(),o=kidsOf().find(a=>a[0]===nk);R_.k=nk;R_.own=S.me.kids.includes(nk);R_.wmi=o&&typeof o[1]=='number'?o[1]:null;x.dp++;L(why);jot('帝',nk.n,why);nk.bond=cl(nk.bond+(R_.own?4:-8))}
function mkLv(job){const x=rx();x.lv={n:pnm('男'),job,lo:55};x.sx=0;x.rm=0;L(`你與${x.lv.job}${x.lv.n}暗生情愫。`);jot('后',S.me.n,`深宮寂寥，${S.reg.title}與${x.lv.job}${x.lv.n}暗生情愫。`)}
const PJ={河堤:[40,6],運河:[80,12],邊關:[50,8],園林:[60,5],皇陵:[30,4]};
function pjDone(p){const q=ckp(.55+(S.me.at.sk[8]-40)/300+S.reg.pw/500),x=rx();let t;
if(p.n=='河堤'){x.riv=1;S.nat.stab+=q?3:1;S.nat.pop+=q?3:1;t='河堤竣工，沿岸百姓免於水患。'}
else if(p.n=='運河'){S.nat.eco+=q?9:4;S.nat.pop+=3;S.reg.pw+=2;t='運河開通，漕運暢旺，商賈雲集。'}
else if(p.n=='邊關'){S.nat.mil+=q?8:4;t='邊關堡壘加固，守軍士氣大振。'}
else if(p.n=='園林'){S.me.at.sp=cl(S.me.at.sp+10);S.nat.pop-=3;S.nat.eco-=3;S.reg.pw+=1;t='皇家園林落成，亭台樓閣極盡華美，可惜朝野議論「勞民傷財」。'}
else{S.reg.k.bond=cl(S.reg.k.bond+5);S.nat.stab+=2;t='先帝皇陵修繕完畢，皇帝親去祭拜，感念你的孝心。'}
if(!q&&p.n!='園林')t+='（工程中有官吏貪墨，成效打了折扣。）';L(t);jot('朝','工程',t)}
const COSTAT=()=>[];
const RA2={
'任免官員':['提拔心腹、罷黜異己，朝臣忠誠變動',()=>{rx();choose('處置哪位朝臣？',S.cr.map(f=>({l:`${f.role}${f.n}（${FACN[f.fac]}・忠${f.lo|0}）`,f(){choose(`對${f.role}${f.n}如何處置？`,[
{l:'擢升心腹，委以重任（耗銀20）',f(){if(!pay(20))return L('銀兩不足。');if(ckp(.5+S.me.ally/300)){f.lo=cl(f.lo+14);fpv(f,5);S.reg.pw+=3;L(`你擢升${f.n}，他感恩戴德，成為你的心腹。`)}else{f.lo=cl(f.lo+4);L(`${f.n}受了擢升，卻對你將信將疑。`)}}},
{l:'敲打申飭，令其收斂',f(){if(ckp(.5+S.reg.pw/300)){f.lo=cl(f.lo-3);fpv(f,-4);S.nat.stab+=1;S.reg.pw+=2;L(`你敲打了${f.n}，他收斂了許多。`)}else{f.lo=cl(f.lo-12);S.reg.rv=cl(S.reg.rv+3);L(`${f.n}陽奉陰違，暗中結怨於你。`)}}},
{l:'羅織罪名，罷黜下獄（險）',f(){if(ckp(.3+S.reg.pw/250+S.me.scheme/300-f.lo/500)){fpv(f,-12);S.reg.pw+=4;S.nat.stab-=3;f.lo=cl(f.lo-30);f.A.done=1;L(`你把${f.n}下了大獄，其黨羽噤若寒蟬，朝臣卻人人自危。`);S.cr.forEach(g=>{if(g!==f)g.lo=cl(g.lo-4)})}else{S.reg.pw-=6;S.nat.stab-=3;f.lo=cl(f.lo-8);L(`你的構陷被${f.n}反駁，清議譁然，權柄受損。`)}}},
{l:'蒐集把柄，握在手裡（看心機）',f(){if(ckp(.35+S.me.scheme/220)){f.lo=cl(f.lo+10);S.reg.pw+=2;L(`你悄悄握住了${f.n}的把柄，他從此對你唯命是從。`)}else L(`你沒能抓到${f.n}的實質把柄。`)}}])}})));return 1}],
'開科取士':['耗銀30，加開恩科，網羅人才',()=>{const x=rx();if(!pay(30))return L('銀兩不足，辦不了恩科。');if(ckp(.6+(S.me.at.iq-50)/250)){x.tal++;S.nat.stab+=2;S.nat.pop+=2;S.reg.pw+=2;const f=pk(S.cr);f.lo=cl(f.lo+6);L('你下旨加開恩科，取士公允，天下寒門歡欣，新科進士多感太后知遇之恩。')}else{S.nat.stab-=1;L('恩科中出了考場舞弊的案子，鬧得沸沸揚揚。')}}],
'興修工程':['耗銀，河堤・運河・邊關・園林・皇陵',()=>{const x=rx();choose('興修哪項工程？（竣工後才見成效）',Object.keys(PJ).map(n=>({l:`${n}（耗銀${PJ[n][0]}・約${PJ[n][1]}個月${x.pj.some(p=>p.n==n)?'・已在建':''}）`,f(){if(x.pj.some(p=>p.n==n))return L(`${n}工程已在進行。`);if(!pay(PJ[n][0]))return L('銀兩不足。');x.pj.push({n,left:PJ[n][1]});L(`你下旨興修${n}，工部即日動工。`)}})));return 1}],
'遣使邦交':['與六國周旋，影響邦誼',()=>{const rel=ntr();choose('向哪國遣使？',NAT6.map(n=>({l:`${n}（${relT(n)}・邦誼${rel[n]|0}）`,f(){choose(`對${n}採取何種策略？`,[
{l:'通商互市（耗銀15）',f(){if(!pay(15))return L('銀兩不足。');rel[n]=cl(rel[n]+4);S.nat.eco+=3;L(`與${n}開通互市，商旅往來不絕。`)}},
{l:'冊封賞賜，結盟修好（耗銀30）',f(){if(!pay(30))return L('銀兩不足。');rel[n]=cl(rel[n]+(ckp(.6+S.me.ally/400)?14:6));S.reg.pw+=1;L(`你遣使冊封${n}君長，賜下綢緞金帛，邦誼日深。`)}},
{l:'遣使質問，施壓示威（看軍力）',f(){if(ckp(.35+S.nat.mil/180)){rel[n]=cl(rel[n]+6);S.nat.mil+=1;L(`${n}畏懼天朝兵威，態度恭順了許多。`)}else{rel[n]=cl(rel[n]-12);L(`${n}被你的強硬激怒，邊境氣氛緊張。`)}}},
{l:'暗中離間其內部（看心機）',f(){if(ckp(.3+S.me.scheme/250)){rel[n]=cl(rel[n]-8);S.nat.mil+=2;L(`${n}內部生亂，無暇侵擾邊境。`)}else{rel[n]=cl(rel[n]-14);L(`離間之計敗露，${n}大怒。`)}}}])}})));return 1}],
'籌辦大婚':['為皇帝擇后，外戚與邦交牽動朝局',()=>{const R_=S.reg;if(R_.wed){L('皇帝已經大婚。');return 1}if(ag()<12){L('皇帝年紀尚小，還不到議親的時候。');return 1}const e=wedEv();choose(e.t,e.o.map(([l,f])=>({l,f(){const r=f();L(r);jot('帝','新帝'+R_.k.n,r)}})));return 1}],
'賜婚宗室':['為皇子公主擇親：和親・聯姻・下嫁',()=>{const c=kidsOf().filter(([k])=>spOK(k));if(!c.length){L('宗室中暫無適齡待婚的皇子公主。');return 1}choose('為哪位皇室子女賜婚？',c.map(([k,o])=>({l:`${tag(k)}・${o==='me'?'你所出':on(o)+'所出'}`,f(){const e=mxProp(k,o);choose(e.t,e.o.map(([l,fn])=>({l,f(){L(fn())}})))}})));return 1}],
'扶持宗室':['封爵賜地，培植宗室，也要提防',()=>{const c=kidsOf().filter(([k])=>k!==S.reg.k&&k.sex=='男'&&yr(k)>=6);if(!c.length){L('宗室中沒有可以扶持的皇子。');return 1}choose('扶持哪位皇子？',c.map(([k,o])=>({l:`${tag(k)}（勢${k.pow|0}・忠${lyv(k)|0}）`,f(){choose(`如何安排${k.n}？`,[
{l:'授爵封王，以示恩寵',f(){k.pow=cl(k.pow+10);lyd(k,9);S.reg.rv=cl(S.reg.rv+1);L(`${k.n}受封王爵，感恩戴德，朝中也多了一股宗室勢力。`)}},
{l:'賜予封地（耗銀30）',f(){if(!pay(30))return L('銀兩不足。');k.pow=cl(k.pow+6);lyd(k,12);L(`你賜了${k.n}一片富庶的封地，他對你心悅誠服。`)}},
{l:'留京教養，授以學問',f(){k.cai=cl(k.cai+5);k.de=cl(k.de+4);lyd(k,7);L(`${k.n}在你的教導下學業精進。`)}},
{l:'敲打壓制，不使坐大',f(){k.pow=cl(k.pow-8);lyd(k,-7);S.reg.pw+=2;L(`你削了${k.n}的部分差事，他敢怒不敢言。`)}}])}})));return 1}],
'安置太妃':['厚待・遷居・出宮・晉封，或下重手',()=>{const t=tfs();if(!t.length){L('先帝的妃嬪已不在人世。');return 1}choose('處置哪位太妃？',t.map(i=>{const n=S.npcs[i];return{l:`${RKN(n)}${n.n}（盟${n.al|0}・怨${n.host|0}・子${n.kids.length}）`,f(){choose(`如何安置${n.n}？`,[
{l:'厚賞供養，示以恩德（耗銀20）',f(){if(!pay(20))return L('銀兩不足。');n.al+=12;n.host=cl(n.host-10);S.me.ally+=1;L(`${n.n}得了厚賞，對你的態度緩和許多。`)}},
{l:'遷居偏宮，削減供奉',f(){n.host+=10;n.al-=5;S.reg.pw+=1;L(`${n.n}被遷往偏僻的宮院，心中不免怨懟。`)}},
{l:'晉封尊號（耗銀10）',f(){if(!pay(10))return L('銀兩不足。');n.rank=Math.min(7,n.rank+1);n.al+=15;L(`你晉${n.n}為${RKN(n)}，她感激不盡。`)}},
{l:'令其出宮修行',f(){if(S.npcs[S.reg.wmi]===n){S.reg.k.bond=cl(S.reg.k.bond-12);S.reg.pw-=3;n.st='出家';return L(`你竟逼皇帝生母${n.n}出家，皇帝與你離心離德。`)}n.st='出家';S.reg.pw+=1;L(`${n.n}奉旨出宮帶髮修行，後宮清靜了不少。`)}},
{l:'賜其殉先帝（險）',f(){if(S.npcs[S.reg.wmi]===n)return L('她是皇帝的生母，萬萬動不得。');if(ckp(.35+S.reg.pw/300+n.host/400-n.al/500)){n.st='薨逝';S.reg.pw+=3;S.nat.pop-=2;n.kids.forEach(k=>lyd(k,-12));L(`${n.n}被賜白綾，後宮噤若寒蟬，朝野卻有人說你「刻薄寡恩」。`)}else{S.reg.pw-=8;S.reg.rv=cl(S.reg.rv+4);S.nat.pop-=2;L(`賜死太妃的風聲走漏，朝臣紛紛上疏勸諫，權柄受損。`)}}}])}}}));return 1}],
'召太妃敘話':['聯絡感情，探聽消息',()=>{const t=tfs();if(!t.length){L('先帝的妃嬪已不在人世。');return 1}choose('召見哪位太妃？',t.map(i=>{const n=S.npcs[i];return{l:`${RKN(n)}${n.n}（盟${n.al|0}・怨${n.host|0}）`,f(){if(ckp(.4+(S.me.at.qi-50)/200+n.al/250-n.host/300)){n.al+=8;n.host=cl(n.host-6);const r=R(0,3);if(r==0){S.reg.rv=cl(S.reg.rv-4);L(`${n.n}向你透露了${S.reg.rvn}的一樁隱私。`)}else if(r==1){S.me.ally+=2;L(`${n.n}與你促膝長談，說起先帝舊事，頗多感慨。`)}else if(r==2){const g=R(20,50);S.me.silver+=g;L(`${n.n}拿出體己孝敬太后，共${g}兩。`)}else{const k=n.kids[0];if(k){lyd(k,8);L(`${n.n}為兒子${k.n}求得你的照拂，感恩戴德。`)}else L(`${n.n}說起膝下荒涼，你好言安慰。`)}}else{n.host+=5;L(`${n.n}與你話不投機，不歡而散。`)}}}}));return 1}],
'暗結情緣':['與近臣暗通款曲——有風險',()=>{const x=rx();if(x.lv){choose(`與${x.lv.job}${x.lv.n}的關係（私情${x.sx|0}）：`,[
{l:'繼續幽會（精神健康＋，風聲風險＋）',f(){x.sx=Math.min(100,x.sx+R(6,12));x.lv.lo=cl(x.lv.lo+8);S.me.at.sp=cl(S.me.at.sp+10);S.me.hp=Math.min(100,S.me.hp+6);L(`你與${x.lv.n}又度過一個旖旎的夜晚。`)}},
{l:'授以高官厚祿，收為心腹（耗銀30）',f(){if(!pay(30))return L('銀兩不足。');x.lv.lo=cl(x.lv.lo+12);S.reg.pw+=3;S.cr.forEach(g=>g.lo=cl(g.lo-1));x.sx=Math.min(100,x.sx+4);L(`${x.lv.n}得授要職，朝中暗議他是「入幕之賓」。`)}},
{l:'斷絕來往，打發出京',f(){const n=x.lv.n;x.lv=null;x.sx=0;S.me.at.sp=cl(S.me.at.sp-6);L(`你狠心斷了與${n}的情分，將他外放出京。`)}}]);return 1}
choose('深宮寂寥，你暗中看上了：',[{l:'年輕的御前侍衛',f(){mkLv('御前侍衛')}},{l:'清俊的太醫院院判',f(){mkLv('太醫院院判')}},{l:'才華橫溢的翰林學士',f(){mkLv('翰林學士')}},{l:'算了，清心寡欲',f(){S.me.at.sp=cl(S.me.at.sp+3);L('你收了心思，專心理政。')}}]);return 1}],
'微服出宮':['訪民間疾苦，結交奇士，也有險情',()=>{const m=S.me,x=rx(),r=R(0,5);
if(r==0){S.nat.pop+=4;S.reg.pw+=1;L('你扮作富家夫人在市井查訪，了解了不少民間疾苦。')}
else if(r==1){if(ckp(.5+m.hp/400)){m.ally+=3;x.tal++;L('你在茶樓偶遇一位懷才不遇的寒士，帶回宮中重用。')}else L('你逛了一圈，無功而返。')}
else if(r==2){if(ckp(.35+m.hp/250+(m.at.sk[6]-20)/200+(tf('guard')?.15:0)))L('途中遇上歹徒劫道，你沉著應對，反叫他們吃了苦頭。');else{m.hp-=20;S.reg.pw-=3;L('微服時遭遇歹人，幸得暗衛護駕，受了驚嚇。')}}
else if(r==3){S.reg.rv=cl(S.reg.rv-4);L(`你在酒肆聽到不少關於${S.reg.rvn}的傳聞，回宮後一一核實。`)}
else if(r==4){const g=R(20,60);m.silver+=g;L(`你逛了集市，順手淘到一件古玩，轉手賺了${g}兩。`)}
else{if(x.lv){x.sx=Math.min(100,x.sx+5);L(`你借微服之名與${x.lv.n}私會，被路人瞥見，只怕要起風聲。`)}else{S.me.at.sp=cl(S.me.at.sp+6);L('你在廟會上聽了戲，難得鬆快一日。')}}}],
'祭天祈福':['耗銀10，民心・朝局・精神＋',()=>{if(!pay(10))return L('銀兩不足。');S.nat.pop+=2;S.nat.stab+=1;S.me.at.sp=cl(S.me.at.sp+8);if(P(.15)){S.reg.pw+=2;L('祭天大典莊嚴隆重，天降瑞雪，朝野以為祥兆。')}else L('你率百官祭天，為社稷祈福。')}],
'廢立皇帝':['權柄極盛時改立新君（極險）',()=>{const R_=S.reg;if(R_.pw<55){L('你的權柄尚淺，朝臣必不附和，此事萬萬提不得。');return 1}const cs=kidsOf().filter(([k])=>k!==R_.k&&k.sex=='男'&&yr(k)<=45);if(!cs.length){L('宗室中已無可立之人。');return 1}
choose('要廢黜當今皇帝，改立誰為新君？',cs.map(([k,o])=>({l:`${tag(k)}（${o==='me'?'你所出':on(o)+'所出'}・忠${lyv(k)|0}・勢${k.pow|0}）`,f(){const p=.1+R_.pw/220+avgLo()/500+(lyv(k)-50)/400+(k.pow-30)/500-(R_.k.bond-40)/600-R_.rv/400+(R_.stay?.05:0);
if(ckp(p)){const old=R_.k;R_.pw+=6;S.nat.stab-=6;rx().emp=null;R_.wed=0;crownSwap(k,`你召集重臣，廢黜${old.n}，擁立${k.n}為帝。朝野震動，無人敢言。`);}
else{R_.pw-=18;R_.k.bond=cl(R_.k.bond-20);R_.rv=cl(R_.rv+12);S.nat.stab-=8;L(`廢立之議功敗垂成，${R_.k.n}聞訊後對你恨之入骨，朝臣紛紛倒向對手。`);if(P(.45))S.q.push(rivalCoup())}}})));return 1}],
'登基稱帝':['武曌之路：改朝換代，青史留名或身敗名裂',()=>{const R_=S.reg,lo=avgLo();if(R_.pw<85||natv()<50||lo<50){L(`時機未到：稱帝須權柄≥85（現${R_.pw|0}）、國力≥50（現${natv()|0}）、朝臣平均忠誠≥50（現${lo|0}）。`);return 1}
choose('你要走出這最後一步嗎？這是青史留名或身敗名裂的豪賭。',[{l:'順應天命，改國號稱帝',f(){const p=.08+(R_.pw-85)/90+(lo-50)/200+natv()/400-R_.rv/300-(R_.k.pow-30)/400;if(ckp(p))over('女皇登基',`你在群臣的山呼聲中登上了御座，改國號、立宗廟，成為本朝開天闢地的第一位女皇。${R_.k.n}被降封為親王，史官爭論了百年：你是篡位的牝雞，還是承天景命的聖主？而你已不在乎了。（國力${natv()|0}）`);else over('稱帝失敗',`你的野心在最後一刻被朝臣識破，禁軍倒戈，你被${R_.k.n}下令幽禁。史書這樣寫：「太后妄圖不軌，伏法。」一代風雲，就此落幕。`)}},{l:'再等一等',f(){L('你按下了心中的野心。')}}]);return 1}]};
const RAC_ORDER=[['朝政',['批閱奏章','召見重臣','任免官員','開科取士','打壓對手','整軍經武','賑濟施恩','興修工程','遣使邦交']],['皇室',['教導皇帝','安撫皇帝','籌辦大婚','賜婚宗室','扶持宗室','安置太妃','召太妃敘話']],['私己',['提攜母家','暗結情緣','微服出宮','祭天祈福','調養身子','研習技藝','梳妝保養','延醫問藥']],['大計',['廢立皇帝','登基稱帝','還政退隱']]];
{const old=RACT.slice(),all=old.concat(Object.keys(RA2).map(k=>[k,RA2[k][0],RA2[k][1]]));RACT.length=0;RAC_ORDER.forEach(([c,ns])=>ns.forEach(n=>{const a=all.find(x=>x[0]==n);if(a)RACT.push(a);else throw new Error('missing act '+n)}))}
function regActs(){let h='<div class=cd><h3>選擇行動</h3>';RAC_ORDER.forEach(([c,ns])=>{h+=`<div class=m style="margin:8px 0 4px;letter-spacing:.2em">${c}</div><div class=g>`+ns.map(n=>{const i=RACT.findIndex(a=>a[0]==n),a=RACT[i];return`<button onclick="A(${i})">${a[0]}<small>${a[1]}</small></button>`}).join('')+'</div>'});return h+'</div>'}
/* --- 臨朝擴充：大婚・皇后・事件 --- */
function wedEv(){const R_=S.reg,x=rx(),nt=pk(NAT6),mk=(ty,pw,gl,fv,extra)=>{R_.wed=1;x.emp=Object.assign({n:pnm('女'),ty,pw,gl,fv,gs:0},extra||{});return x.emp};
return{t:`皇帝已到大婚之齡，皇后人選牽動朝局，太后需為他擇定。`,o:[
['選母家之女為后（外戚＋，皇帝不快）',()=>{R_.pw+=5;R_.k.bond=cl(R_.k.bond-4);S.me.fam.forEach(f=>f.pw=cl(f.pw+3));const e=mk('母家',40+R(0,15),78,45);return`你選了母家的${e.n}為皇后，兩家親上加親，但皇帝有些不快。`}],
['選高門貴女，結交重臣（朝局＋）',()=>{S.me.ally+=5;R_.rv=cl(R_.rv-4);S.nat.stab+=2;const e=mk('高門',55+R(0,15),55,55);return`你為皇帝聘了名門之女${e.n}，朝臣額手稱慶。`}],
['選武將之女，穩住軍心（軍力＋）',()=>{S.nat.mil+=4;R_.rv=cl(R_.rv-3);const e=mk('將門',48+R(0,12),50,58);return`皇后是將門之女${e.n}，邊關將士都鬆了口氣。`}],
[`聘${nt}公主為后（邦誼＋）`,()=>{ntr()[nt]=cl(ntr()[nt]+20);S.nat.eco+=2;const e=mk('外邦',35+R(0,10),45,55,{nt});return`${nt}公主${e.n}入主中宮，兩國邦誼大增，只是朝中有人議論「胡女為后」。`}],
['讓皇帝自己做主（孝心＋）',()=>{R_.k.bond=cl(R_.k.bond+8);R_.pw-=2;const e=mk('寒門',22+R(0,10),55,85);return`皇帝選了心儀的${e.n}為后，對你滿心感激，只是皇后出身寒微，根基不穩。`}]]}}
const EMPE=[
()=>{const e=rx().emp;return e&&{t:`皇后${e.n}（${e.ty}出身）入宮請安，言語間似乎對你不甚恭敬。`,o:[
['當眾敲打，立婆婆的規矩',()=>{e.gl=cl(e.gl-10);e.pw=cl(e.pw-3);S.reg.pw+=2;return`皇后被你立了規矩，面上恭順，心裡卻存了芥蒂。`}],
['溫言教導，賜下賞賜（耗銀15）',()=>{if(!pay(15))return'銀兩不足。';e.gl=cl(e.gl+10);return`皇后感念你的寬厚，與你親近了許多。`}],
['讓她協理六宮，分權於她',()=>{e.pw=cl(e.pw+8);e.gl=cl(e.gl+8);S.reg.pw-=2;return`你讓皇后協理後宮，她對你感恩，但也漸漸有了自己的班底。`}]]}},
()=>{const e=rx().emp,x=rx();return e&&!e.gone&&e.gs<3&&P(.5)&&{t:`太醫稟報：皇后${e.n}有喜了！`,o:[
['大加賞賜，細心安胎（耗銀30）',()=>{if(!pay(30))return'銀兩不足，只能尋常照看。';e.gl=cl(e.gl+8);e.gs++;x.gs++;S.reg.k.bond=cl(S.reg.k.bond+3);return`皇后順利誕下皇嗣，皇帝大喜，你也添了皇孫。`}],
['按例行事，不多干預',()=>{e.gs++;x.gs++;return`皇后誕下皇嗣，母子平安。`}],
['暗中使人動手腳（險）',()=>{if(ckp(.3+S.me.scheme/250)){e.gl=cl(e.gl-5);return`皇后胎象不穩，竟小產了。無人懷疑到你頭上。`}S.reg.k.bond=cl(S.reg.k.bond-20);S.reg.pw-=8;return`你的手腳被發現，皇帝震怒，母子情分幾乎斷絕。`}]]}},
()=>{const e=rx().emp,x=rx();return e&&yr(S.reg.k)>=16&&P(.6)&&{t:`皇帝專寵新入宮的${pnm('女')}貴人，冷落了皇后${e.n}，後宮暗流湧動。`,o:[
['勸皇帝雨露均沾',()=>{S.reg.k.bond=cl(S.reg.k.bond-3);e.fv=cl(e.fv+8);x.cc++;return`皇帝不耐，但還是去了皇后宮裡。`}],
['打壓新寵，替皇后撐腰',()=>{if(ckp(.4+S.reg.pw/300)){e.gl=cl(e.gl+8);S.reg.k.bond=cl(S.reg.k.bond-6);return`新寵被你貶出宮，皇后感激，皇帝卻悶悶不樂。`}S.reg.pw-=3;S.reg.k.bond=cl(S.reg.k.bond-8);return`你的打壓被皇帝擋了回去，母子失和。`}],
['任其發展，不加干涉',()=>{x.cc++;e.fv=cl(e.fv-8);S.reg.k.bond=cl(S.reg.k.bond+3);return`你沒有插手，皇帝倒覺得你開明。`}]]}},
()=>{const e=rx().emp;return e&&e.pw>62&&{t:`皇后之父${e.ty}一系聲勢日盛，上疏要求加官晉爵，朝臣議論「外戚坐大」。`,o:[
['分封厚賞，結為奧援（耗銀20）',()=>{if(!pay(20))return'銀兩不足。';e.pw=cl(e.pw+6);e.gl=cl(e.gl+6);S.reg.pw+=2;S.nat.stab-=2;return'你厚賞外戚，兩家結為同盟，只是朝局受了影響。'}],
['抑制外戚，不予封賞',()=>{e.pw=cl(e.pw-10);e.gl=cl(e.gl-8);S.nat.stab+=2;S.reg.pw+=1;return'你壓下了皇后一系，朝臣讚你持重，皇后卻有了怨氣。'}]]}},
()=>{const e=rx().emp;return e&&e.gl<30&&e.pw>45&&{t:`皇后${e.n}與你勢同水火，她暗中串聯朝臣，欲逼你交權。`,o:[
['先發制人，剪除其羽翼',()=>{if(ckp(.35+S.reg.pw/250+S.me.scheme/350-e.pw/300)){e.pw=cl(e.pw-20);S.reg.pw+=4;return`你剪除了皇后的幾名心腹，局面重新受你掌控。`}S.reg.pw-=6;S.reg.k.bond=cl(S.reg.k.bond-8);return`你的行動被皇后反制，皇帝站在了皇后一邊。`}],
['低頭示好，修補關係',()=>{e.gl=cl(e.gl+15);S.reg.pw-=3;return`你放低姿態，婆媳關係稍有緩和。`}]]}}];
/* --- 皇帝重病、改立 --- */
function emperorSick(){const R_=S.reg,k=R_.k;return{t:`${k.n}突發高熱，太醫束手，宮中人心惶惶。`,o:[
['遍訪名醫，不惜一切（耗銀50）',()=>{if(!pay(50))return emperorFate(.45,'銀兩不足，只能依賴太醫院。');return emperorFate(.78,'重金延請名醫，日夜守候。')}],
['親侍湯藥，日夜祈禱（看體質）',()=>emperorFate(.55+S.me.hp/500,'你親自守在榻前，不眠不休。')],
['按太醫院的方子，聽天由命',()=>emperorFate(.5,'你按部就班照太醫院的方子用藥。')]]}}
function emperorFate(p,pre){const R_=S.reg,k=R_.k;if(ckp(p)){k.bond=cl(k.bond+6);return pre+`${k.n}終於退了燒，度過一劫，對你的孝心感念不已。`}
const c=kidsOf().filter(([z])=>z!==k&&z.sex=='男');if(!c.length){over('國祚斷絕',`${k.n}不治而亡，宗室中再無男丁可繼大統。你望著空蕩蕩的龍椅，王朝的氣數就此斷絕。`);return''}
const nk=c.sort((a,b)=>sc(b[0])-sc(a[0]))[0][0];R_.pw-=4;S.nat.stab-=4;rx().emp=null;R_.wed=0;crownSwap(nk,`${k.n}不幸崩逝，宗室與重臣議定，由${nk.n}繼承大統。`);return pre+`${k.n}終究沒熬過去。朝野哀慟，新君${nk.n}繼位。`}
const tfPick=f=>{const t=tfs().filter(i=>f(S.npcs[i]));return t.length?S.npcs[pk(t)]:null};
const RGE2=[
()=>{const n=tfPick(n=>n.al>25);return n&&{t:`${RKN(n)}${n.n}遞牌子求見，說有要事相告。`,o:[
['召見，聽她細說',()=>{if(ckp(.5+n.al/300)){const r=R(0,2);if(r==0){S.reg.rv=cl(S.reg.rv-5);n.al+=6;return`${n.n}向你揭發了一名朝臣與${S.reg.rvn}的暗中往來，你因此掌握了主動。`}if(r==1){S.nat.pop+=2;n.al+=5;return`${n.n}建議開辦善堂撫育孤寡，你採納了，民間反應不錯。`}S.me.silver+=40;n.al+=4;return`${n.n}獻上先帝賞賜的體己，說是替太后分憂。`}n.host+=4;return`${n.n}說的盡是些瑣碎家事，白白浪費了半日。`}],
['推說身體不適，不見',()=>{n.al-=4;return`${n.n}悻悻而去。`}]]}},
()=>{const n=tfPick(n=>n.host>45);return n&&{t:`${RKN(n)}${n.n}與你的宮人爭執起來，鬧到慈寧宮門前，滿宮看著。`,o:[
['當眾訓斥，以儆效尤',()=>{if(ckp(.4+S.reg.pw/250)){n.host+=4;S.reg.pw+=2;return`${n.n}被訓得面紅耳赤，不敢再鬧。`}S.reg.pw-=3;n.host+=8;return`${n.n}哭天搶地，宮人都指責你刻薄。`}],
['私下調解，各賞銀錢（耗銀15）',()=>{if(!pay(15))return'銀兩不足。';n.host=cl(n.host-8);n.al+=4;return`一場風波化於無形，${n.n}態度軟化了。`}]]}},
()=>{const n=tfPick(n=>n.hp<45);return n&&{t:`${RKN(n)}${n.n}病重不起，太醫稟報恐怕時日無多。`,o:[
['親往探視，延醫診治（耗銀25）',()=>{if(!pay(25))return'銀兩不足。';if(ckp(.5)){n.hp+=30;n.al+=15;return`${n.n}在你照料下漸漸好轉，感念你的恩情。`}n.st='薨逝';n.al+=5;S.nat.pop+=1;return`${n.n}終究不治，臨終前拉著你的手說了許多話。你為她風光大葬。`}],
['按例治喪，依制行事',()=>{if(P(.5)){n.st='薨逝';return`${n.n}薨逝，依制治喪。`}n.hp+=10;return`${n.n}挺過了這一關。`}]]}},
()=>{const p=kidsOf().filter(([k])=>k!==S.reg.k&&k.sex=='男'&&k.pow>55&&lyv(k)<48&&yr(k)>=15);if(!p.length)return null;const [k,o]=pk(p);return{t:`${k.n}（${tag(k)}）近來頻頻結交朝臣，府中門客雲集，宗室議論他有「不臣之心」。`,o:[
['召入宮中面談，敲打警告',()=>{if(ckp(.5+(S.me.at.qi-50)/200)){lyd(k,10);k.pow=cl(k.pow-5);return`${k.n}被你一番訓話，嚇出一身冷汗，收斂了行跡。`}lyd(k,-6);return`${k.n}表面恭順，暗中怨恨。`}],
['派人暗中監視（耗銀20）',()=>{if(!pay(20))return'銀兩不足。';if(ckp(.5+S.me.scheme/300)){k.pow=cl(k.pow-6);S.reg.pw+=2;return`你抓到了${k.n}結黨的把柄，輕輕一壓就讓他退了回去。`}return'監視的人被發現，反而激化了矛盾。'}],
['封賞安撫，收買人心（耗銀30）',()=>{if(!pay(30))return'銀兩不足。';lyd(k,14);k.pow=cl(k.pow+3);return`${k.n}受寵若驚，對你多了幾分感恩。`}],
['置之不理',()=>{k.pow=cl(k.pow+5);S.reg.rv=cl(S.reg.rv+2);return`${k.n}的勢力悄悄坐大。`}]]}},
()=>yr(S.reg.k)<14&&P(.3)&&emperorSick(),
()=>({t:'京畿一帶爆發瘟疫，死者枕藉，人心惶惶。',o:[
['設藥局施醫贈藥（耗銀35）',()=>{if(!pay(35))return emptyOp('疫情無人救治，死者日增。');if(ckp(.5+(S.me.at.sk[12]-30)/200)){S.nat.pop+=5;S.reg.pw+=3;return'你設局施藥，疫情很快被壓了下去，百姓稱頌。'}S.nat.pop+=1;return'藥局人滿為患，疫情只是稍有緩解。'}],
['封鎖疫區，嚴禁出入',()=>{S.nat.stab+=1;S.nat.pop-=3;return'疫區被封，疫情沒有蔓延，但百姓怨聲載道。'}],
['率皇室遷出京城避疫',()=>{S.reg.pw-=4;S.nat.pop-=4;S.nat.stab-=2;return'你帶著皇帝遷往行宮，京城的人罵朝廷棄民而去。'}]]}),
()=>{const x=rx();return!x.riv&&{t:'黃河決堤，沿岸數十縣被淹，災民流離失所。',o:[
['撥款搶修，賑濟災民（耗銀40）',()=>{if(!pay(40))return emptyOp('國庫空虛，只能眼看災情擴大。');S.nat.pop+=4;S.nat.eco-=2;S.reg.pw+=2;return'你調撥錢糧搶修堤壩，災民得到安置。'}],
['下詔問責河道官員，嚴懲貪墨',()=>{if(ckp(.45+S.reg.pw/300)){S.nat.stab+=2;S.nat.pop+=2;return'你處置了幾個失職的官員，民憤稍平。'}S.nat.pop-=2;return'官員們互相推諉，災情被拖大。'}],
['按常例處理',()=>{S.nat.pop-=5;return'災情被拖，民變蠢蠢欲動。'}]]}},
()=>({t:'欽天監奏報：「天現異象，主太后專權，當有災殃。」朝野議論紛紛。',o:[
['下罪己詔，示以謙遜（耗銀10）',()=>{if(!pay(10))return'銀兩不足。';S.nat.pop+=3;S.reg.pw-=2;return'你下罪己詔，民心歸附，但朝臣覺得你示弱了。'}],
['治欽天監官員妖言惑眾之罪',()=>{if(ckp(.45+S.reg.pw/300)){S.reg.pw+=2;S.nat.stab+=1;return'欽天監噤聲，流言漸息。'}S.nat.pop-=3;S.reg.pw-=3;return'你處罰欽天監反成了話柄，傳言越發離譜。'}],
['以祭天祈福回應（耗銀10）',()=>{if(!pay(10))return'銀兩不足。';S.nat.pop+=2;return'祭典過後，風波漸平。'}]]}),
()=>S.nat.stab<50&&{t:'流寇四起，攻佔州縣，劫掠糧倉，已逼近京畿。',o:[
['調兵剿匪，一舉蕩平（看軍力）',()=>{if(ckp(.35+S.nat.mil/160+S.reg.pw/500)){S.nat.mil+=3;S.nat.stab+=4;S.reg.pw+=3;return'官軍大破流寇，朝野振奮。'}S.nat.mil-=4;S.nat.eco-=3;return'剿匪不利，流寇聲勢更盛。'}],
['招安流寇，授以官職',()=>{S.nat.stab+=2;S.nat.eco-=2;S.nat.pop-=1;return'你招安了流寇首領，地方暫時安靖，但引來「縱匪為官」的非議。'}],
['坐視不理，由地方自行處置',()=>{S.nat.stab-=5;S.nat.pop-=4;return'流寇蔓延，朝局更加動盪。'}]]},
()=>({t:'你的母家子弟在外橫行霸道，被言官彈劾，證據確鑿。',o:[
['大義滅親，嚴辦母家子弟',()=>{S.me.fam.forEach(f=>f.lo=cl(f.lo-4));S.nat.pop+=4;S.nat.stab+=2;S.reg.pw+=2;return'你不徇私情，朝野讚你公正，家人卻怨你無情。'}],
['暗中包庇，壓下彈劾',()=>{if(ckp(.45+S.reg.pw/300)){S.me.fam.forEach(f=>f.lo=cl(f.lo+3));return'你壓下了此事，家人對你更為倚重。'}S.reg.pw-=5;S.nat.pop-=3;return'包庇之事被揭，朝野嘩然。'}],
['折衷處理，罰俸貶官',()=>{S.nat.stab+=1;return'你各打五十大板，此事算是了結。'}]]}),
()=>{const q=Q();return S.reg.title==='西太后'&&q&&!q.st&&q.tf&&{t:`${RKN(q)}${q.n}請你到她宮中，提議「垂簾的事，不如也讓我多分擔一些」。`,o:[
['答應與她分權，共同聽政',()=>{q.al+=15;S.reg.pw-=4;S.reg.rv=cl(S.reg.rv-3);return`你與${q.n}約定共同聽政，局面倒是穩定了，只是權柄一分為二。`}],
['婉言拒絕，堅持獨斷',()=>{q.host+=12;S.reg.pw+=2;return`${q.n}笑容僵在臉上，從此對你心存芥蒂。`}],
['陽奉陰違，暗中架空她（看心機）',()=>{if(ckp(.4+S.me.scheme/250)){q.al+=2;S.reg.pw+=3;return`你表面答應，實則一步步架空了${q.n}。`}q.host+=15;S.reg.pw-=3;return`你的小動作被${q.n}識破，她在朝臣面前當眾與你難堪。`}]]}},
()=>{const x=rx();return!x.sec&&P(.25)&&{t:'整理先帝遺物時，你在龍榻暗格裡發現一封未曾宣讀的密詔。',o:[
['當眾宣讀，昭告天下',()=>{rx().sec=1;if(P(.5)){S.reg.pw+=8;S.nat.stab+=2;return'密詔竟有「太后輔政，群臣當敬」之語，你的地位名正言順。'}S.reg.pw-=6;S.reg.rv=cl(S.reg.rv+8);return'密詔內容竟對你不利，對手趁機大做文章。'}],
['先私下閱看，再作決定',()=>{rx().sec=1;if(P(.5)){S.reg.pw+=3;return'你悄悄看完密詔，將有利的部分公之於眾。'}S.me.scheme+=2;return'你看完密詔，默默將它燒了。'}],
['原封不動，焚毀滅跡',()=>{rx().sec=1;S.me.scheme+=1;return'你燒了密詔，此事成為只有你知道的秘密。'}]]}},
()=>{const x=rx();return x.lv&&x.sx>=35&&P(x.sx/150)&&{t:`宮中漸有流言，說太后與${x.lv.job}${x.lv.n}過從甚密。一名御史竟上疏彈劾「穢亂宮闈」。`,o:[
['嚴懲御史，殺雞儆猴（看權柄）',()=>{x.rm=(x.rm||0)+1;if(ckp(.3+S.reg.pw/220)){S.reg.pw+=2;S.nat.pop-=3;x.sx=Math.max(0,x.sx-15);return'你把御史下獄，流言被壓下，但清流對你更加不滿。'}over('穢亂宮闈',`御史以死相諫，民間流言四起，${S.reg.rvn}趁機發難。你被指穢亂宮闈，廢去尊號，幽禁終身。與${x.lv.n}的那段情緣，成了史官筆下最大的污點。`);return''}],
['忍痛斬斷情緣，自證清白',()=>{const n=x.lv.n;x.lv=null;x.sx=0;S.reg.pw-=3;S.me.at.sp=cl(S.me.at.sp-8);return`你與${n}一刀兩斷，流言漸息，只是夜深人靜時，格外寂寥。`}],
['反誣御史結黨，轉移視線（看心機）',()=>{x.rm=(x.rm||0)+1;if(ckp(.35+S.me.scheme/250)){S.reg.rv=cl(S.reg.rv-3);x.sx=Math.max(0,x.sx-10);return'你反告御史結黨營私，風波被你轉嫁到了對手頭上。'}S.reg.pw-=6;return'你的反誣被識破，局面更加被動。'}]]}},
()=>{const lo=S.cr.slice().sort((a,b)=>a.lo-b.lo)[0];return lo&&lo.lo<35&&{t:`${lo.role}${lo.n}近來對你陽奉陰違，朝中已有幾人暗中與他走動。`,o:[
['召來訓誡，恩威並施',()=>{if(ckp(.45+S.reg.pw/250)){lo.lo=cl(lo.lo+15);return`${lo.n}被你說服，態度恭順了許多。`}lo.lo=cl(lo.lo-5);return`${lo.n}嘴上答應，心裡仍不服。`}],
['尋他錯處，削其權柄',()=>{lo.lo=cl(lo.lo-5);fpv(lo,-8);S.reg.pw+=2;return`你抓住${lo.n}的錯處，削了他的權柄。`}],
['贈以厚禮，拉攏收買（耗銀30）',()=>{if(!pay(30))return'銀兩不足。';lo.lo=cl(lo.lo+18);return`${lo.n}收下厚禮，態度緩和了。`}]]}},
()=>({t:'群臣為你的壽辰準備了盛大的獻禮，朝野一片祥和。',o:[
['隆重慶賀，大宴群臣（耗銀30）',()=>{if(!pay(30))return'銀兩不足，只能小辦。';S.cr.forEach(f=>f.lo=cl(f.lo+3));S.reg.pw+=2;return'壽宴上群臣獻禮，山呼萬歲，你的威儀更勝往日。'}],
['簡辦壽辰，節省開支',()=>{S.nat.pop+=2;S.reg.pw+=1;return'你下詔壽辰一切從簡，百姓稱頌。'}],
['將賀禮折成賑災款項',()=>{const g=R(40,90);S.nat.pop+=3;S.nat.eco+=2;S.me.silver+=Math.floor(g/3);return'你把賀禮折銀賑災，天下稱你仁德。'}]]}),
()=>({t:'一位飽學大儒上疏，直言「婦人不得干政」，引經據典，在士林中傳誦一時。',o:[
['召見大儒，與他辯論經義（看智商）',()=>{if(ckp(.35+(S.me.at.iq-50)/200+((S.me.at.sk[13]||40)-40)/300)){S.reg.pw+=4;S.nat.pop+=2;return'你與大儒辯得酣暢淋漓，他心悅誠服，反為你說起好話。'}S.reg.pw-=4;return'你被大儒駁得啞口無言，士林嘩然。'}],
['革去功名，逐出京城',()=>{S.reg.pw+=1;S.nat.pop-=3;S.nat.stab-=1;return'大儒被逐，天下士子心中不滿。'}],
['予以褒獎，虛心納諫',()=>{S.reg.pw-=2;S.nat.pop+=3;S.cr.forEach(f=>f.lo=cl(f.lo+1));return'你下詔褒獎大儒的忠直，朝野讚你有容人之量。'}]]}),
()=>({t:'海商與西域商人聯合進貢了一批奇珍異寶，並請求給予貿易特權。',o:[
['准許貿易特權，抽取重稅',()=>{S.nat.eco+=5;S.me.silver+=40;S.nat.pop-=1;return'商路大開，國庫與你的私房都豐盈起來。'}],
['收下珍寶，不給特權',()=>{S.me.silver+=60;return'你收下了珍寶，商人悻悻而去。'}],
['婉拒貢品，嚴守海禁',()=>{S.nat.stab+=1;S.nat.eco-=1;return'你堅持舊制，商路沒有開啟。'}]]})];
const emptyOp=s=>s;
function regPanel2(){const R_=S.reg,x=rx(),rel=ntr();let h=`<div class=cd><h3>朝臣忠誠　平均 ${avgLo()|0}</h3>`+S.cr.map(f=>abar(`${f.role}${f.n}`,f.lo)).join('')+`<div class=m>忠誠影響權柄與政變風險。可用「任免官員」「召見重臣」「開科取士」提升。</div></div>`;
h+=`<div class=cd><h3>六國邦誼</h3>`+NAT6.map(n=>abar(`${n}（${relT(n)}）`,rel[n])).join('')+`<div class=m>邦誼過低會引發邊釁，和親、遣使、通商都能影響。</div></div>`;
if(x.emp){const e=x.emp;h+=`<div class=cd><h3>皇后　${e.n}</h3><div class=m>${e.ty}出身${e.nt?'・'+e.nt+'公主':''}・皇嗣${e.gs}</div>${abar('外戚勢力',e.pw)}${abar('婆媳情分',e.gl)}${abar('聖眷',e.fv)}</div>`}
else if(!R_.wed)h+=`<div class=cd><h3>中宮空懸</h3><div class=m>皇帝年滿十二歲後，可用「籌辦大婚」為他擇后。</div></div>`;
if(x.pj.length)h+=`<div class=cd><h3>在建工程</h3>`+x.pj.map(p=>`<div class=k>${p.n}・尚需${p.left}個月</div>`).join('')+'</div>';
if(x.lv)h+=`<div class=cd><h3>密事</h3><div class=m>${x.lv.job}${x.lv.n}・情分${x.lv.lo|0}・風聲${x.sx|0}（風聲過高將引來彈劾）</div></div>`;
const t=tfs();h+=`<div class=cd><h3>太妃　${t.length}位在世</h3><div class=m>${x.tal?'・恩科門生'+x.tal+'人':''}${x.dp?'・廢立過'+x.dp+'次':''}</div></div>`;return h}
function regPanel(){return regPanel0()+regPanel2()}
function rx2tick(){const R_=S.reg,x=rx(),yrs=Math.floor((S.t-R_.t0)/12);R_.pw=cl(R_.pw+(avgLo()-50)/180);if(S.cr.filter(f=>f.lo<25).length>=2)R_.rv=cl(R_.rv+.6);
x.pj=x.pj.filter(p=>{if(--p.left>0)return true;pjDone(p);return false});
if(x.emp){x.emp.pw=cl(x.emp.pw+R(-1,2));x.emp.gl=cl(x.emp.gl+R(-2,2));if(x.emp.pw>65)R_.rv=cl(R_.rv+.15)}
if(x.lv)x.sx=Math.max(0,x.sx-.5);
ids().forEach(i=>{const n=S.npcs[i];if(!n.tf)n.tf=1;if(!n.arc2)n.arc2=newArc2();if(yrs>8)n.hp-=1.6;if(n.hp<=0){n.st='薨逝';if(S.qi===i)S.qi=null;L(`${RKN(n)}${n.n}薨逝。`);jot('宮',n.n,`${n.n}薨逝，後宮又少一人。`)}});
kidsOf().forEach(([k])=>{if(k.sex=='男'&&yr(k)>=14&&k!==R_.k&&k.pow>60&&lyv(k)<40&&P(.01))R_.rv=cl(R_.rv+3)})}
function mxRegEvs(){return mxMonth()}
RGE.push(...RGE2);
/* ===== v18 新故事線 ===== */
RGE.push(...EMPE);
const mn=c=>c.n.n;
ARCN.push(
{k:'宮女爭寵',st:[
[4,14,c=>`${mn(c)}的貼身宮女容貌出眾，屢次出現在御前，皇上對她多看了幾眼。`],
[5,12,c=>`${mn(c)}的宮女心思活絡。`,c=>sEv(`${mn(c)}的貼身宮女悄悄找到你，說想借你的東風，換個前程。`,[
['助她一臂之力（耗銀30）',()=>{if(!pay(30))return'銀兩不足。';c.A.f.help=1;S.me.ally+=3;return`你替這名宮女打點，她感激涕零，日後必有回報。`}],
['告知${mn(c)}，賣她一個人情',()=>{c.A.f.tell=1;c.n.al+=18;return`${mn(c)}得知宮女的野心，對你感激不已。`}],
['袖手旁觀',()=>'你沒有搭理這件事。']].map(([l,f])=>[l.replace('${mn(c)}',mn(c)),f]),mn(c))],
[6,16,c=>{const f=c.A.f,n=c.n;if(f.tell){n.favor+=6;return`${n.n}處置了那名宮女，後宮中人人都說她心狠。`}if(f.help){return`那名宮女被封為答應，她永遠記得你的提攜。`}n.favor-=8;return`那名宮女被皇上看中，${n.n}的恩寵被分走不少。`}],
[8,20,c=>{const f=c.A.f;if(f.help){S.me.ally+=3;S.me.favor+=3;return`得寵的新人在皇上耳邊替你說了不少好話。`}return`那名宮女最終不了了之，後宮恢復了平靜。`}]]},
{k:'假孕爭寵',st:[
[4,14,c=>{c.n.favor+=8;return`${mn(c)}忽然對外稱有了喜，皇上龍心大悅，賞賜不斷。`}],
[4,10,c=>`你起了疑心。`,c=>sEv(`你偶然發現${mn(c)}的脈案有些蹊蹺，似乎並無孕象，可她宮裡卻在大肆張揚。`,[
['暗中蒐集證據，揭穿她（看心機）',()=>{if(ckp(.35+S.me.scheme/220)){c.A.f.expose=1;S.evid[c.i]=(S.evid[c.i]||0)+5;c.n.host+=25;return`你拿到了她收買太醫的證據，罪證+5。`}c.n.host+=15;return'你的調查被她察覺。'}],
['私下提醒她，賣個人情',()=>{c.A.f.cover=1;c.n.al+=22;return`${mn(c)}嚇得面無人色，對你千恩萬謝。`}],
['靜觀其變',()=>'你按下不表。']],mn(c))],
[4,10,c=>{const f=c.A.f,n=c.n;if(f.expose){n.favor=Math.max(0,n.favor-30);n.rank=Math.max(0,n.rank-1);return`${n.n}的假孕被揭穿，皇上震怒，貶為${RKN(n)}。`}if(f.cover){return`${n.n}買通太醫，對外宣稱「不慎小產」，皇上憐惜她，恩寵不減。`}n.favor+=3;return`${n.n}「小產」了，皇上心疼不已，宮中卻有人竊竊私語。`}],
[8,18,c=>{const n=c.n;if(c.A.f.cover){S.me.ally+=2;return`${n.n}把你當作救命恩人，成了你最堅定的盟友。`}n.hp-=8;return`${n.n}經此一事，性子沉靜了許多。`}]]},
{k:'姊妹反目',st:[
[5,16,c=>`${mn(c)}入宮前，母家有位族姐妹也一同選入，兩人明爭暗鬥，連請安都不同行。`],
[5,12,c=>`兩姊妹都來拉攏你。`,c=>sEv(`${mn(c)}與她的族姐妹各自派人送禮，都想拉攏你。`,[
['站在'+mn(c)+'一邊',()=>{c.A.f.side=1;c.n.al+=18;return`${mn(c)}得了你的支持，底氣足了不少。`}],
['站在她族姐妹一邊',()=>{c.A.f.other=1;c.n.host+=18;return`${mn(c)}看你的眼神冷了下來。`}],
['居中調停（看氣質）',()=>{if(ckp(.4+(S.me.at.qi-50)/200)){c.A.f.peace=1;c.n.al+=10;S.me.ally+=2;return`你勸得兩人暫時握手言和，傳為佳話。`}return'你兩邊勸不動，兩人各有怨氣。'}]],mn(c))],
[6,16,c=>{const f=c.A.f,n=c.n;if(f.peace){n.favor+=4;return`${n.n}與族姐妹言歸於好，聯手在後宮站穩了腳跟。`}if(f.side){n.favor+=6;return`${n.n}壓過了族姐妹，後者鬱鬱寡歡。`}n.favor-=6;return`${n.n}在爭鬥中落了下風。`}],
[8,20,c=>`${mn(c)}姐妹之事成了後宮的談資，人人都說「一個家門出不了兩個寵妃」。`]]},
{k:'異域風情',st:[
[5,16,c=>{c.n.favor+=5;return`${mn(c)}苦練一支異域舞蹈，在宮宴上驚艷四座。`}],
[5,12,c=>`${mn(c)}邀你學舞。`,c=>sEv(`${mn(c)}笑著邀你一同排練新舞，準備在下回宮宴上同台獻藝。`,[
['欣然應允，同台獻藝',()=>{if(ckp(.35+(S.me.at.lk-50)/200+(S.me.at.qi-50)/300)){c.A.f.dance=1;S.me.favor+=6;c.n.al+=15;return`你二人的雙人舞博得滿堂彩，皇上龍顏大悅。`}S.me.favor-=2;return'你跳得生疏，鬧了點笑話。'}],
['婉拒，不想搶風頭',()=>'你婉言謝絕了。'],
['暗中在舞衣上動手腳（險）',()=>{if(ckp(.3+S.me.scheme/250)){c.A.f.sabot=1;c.n.favor-=8;return`${mn(c)}在宮宴上出了醜，沒人懷疑到你。`}c.n.host+=25;return'你的手腳被識破，她從此記恨。'}]],mn(c))],
[6,16,c=>{const f=c.A.f,n=c.n;if(f.dance){n.al+=10;return`雙人舞成了宮中保留節目，你與${n.n}也有了默契。`}if(f.sabot)return`${n.n}尷尬多日，漸漸被皇上淡忘。`;n.favor+=4;return`${n.n}的異域舞蹈成為宮中新寵，連大臣都爭相談論。`}],
[8,20,c=>{S.nat.pop+=1;return`${mn(c)}的舞蹈傳到宮外，民間竟也流行起來。`}]]},
{k:'將門虎女',st:[
[5,16,c=>`${mn(c)}出身將門，自幼習武，宮中皆知她擅長騎射。`],
[5,12,c=>`${mn(c)}向你下戰書。`,c=>sEv(`${mn(c)}在御花園辟出一塊靶場，笑著向你下戰書：「娘娘可敢比一場？」`,[
['應戰（看武藝與健康）',()=>{if(ckp(.3+(S.me.at.sk[6]-20)/150+S.me.hp/300)){c.A.f.win=1;S.me.favor+=5;c.n.al+=8;return`你竟射贏了她，傳到皇上耳裡，皇上稱奇。`}c.A.f.lose=1;S.me.hp-=3;return`你敗下陣來，${mn(c)}笑著收了彩頭。`}],
['婉拒，說自己不擅此道',()=>'你謝絕了比試。'],
['讚她英姿颯爽，向皇上舉薦她',()=>{c.n.favor+=8;c.n.al+=18;return`${mn(c)}得了皇上賞識，對你感激不已。`}]],mn(c))],
[6,14,c=>{const n=c.n;n.favor+=6;n.hp+=5;return`皇上圍獵，${n.n}策馬隨行，獵得一頭猛虎，風頭無兩。`}],
[8,20,c=>{const n=c.n;if(c.A.f.win||c.A.f.lose){n.al+=8;return`${n.n}與你成了切磋騎射的朋友。`}S.nat.mil+=1;return`${n.n}的兄長在邊關立了戰功，她也水漲船高。`}]]},
{k:'醫女暗藥',st:[
[5,16,c=>`${mn(c)}近來潛心研習醫書，宮裡的人都說她能治百病。`],
[5,12,c=>`${mn(c)}手握秘方。`,c=>sEv(`${mn(c)}得了一道祖傳秘方，據說能養顏駐容，也傳言能調理子嗣。`,[
['重金求購秘方（耗銀40）',()=>{if(!pay(40))return'銀兩不足。';if(ckp(.6)){c.A.f.buy=1;S.me.hp+=10;S.me.fb=(S.me.fb||0)+.02;c.n.al+=10;return`你得了秘方，調理後氣色明顯好轉。`}return'她的秘方並不靈驗。'}],
['密報太醫院，查驗是否有毒（看心機）',()=>{if(ckp(.35+S.me.scheme/250)){c.A.f.rep=1;S.evid[c.i]=(S.evid[c.i]||0)+3;return`太醫院查出秘方中有禁用之物，罪證+3。`}c.n.host+=15;return'查驗無事，她更恨你多事。'}],
['不聞不問',()=>'你沒有理會。']],mn(c))],
[6,16,c=>{const n=c.n;if(c.A.f.rep){n.favor-=15;return`${n.n}被指私製秘藥，皇上厲聲申斥。`}n.favor+=4;return`${n.n}用秘方治好了一位太妃的舊疾，得了不少讚譽。`}],
[8,20,c=>`${mn(c)}的醫術在後宮傳開，宮人有病也都求她，聲望日隆。`]]},
{k:'棋局暗戰',st:[
[5,16,c=>`${mn(c)}與皇上對弈，一局棋下了一個通宵，聖眷更濃。`],
[5,12,c=>`${mn(c)}約你下棋。`,c=>sEv(`${mn(c)}笑著送來棋盤，邀你手談一局，言語間似乎別有深意。`,[
['接受邀約，認真下棋（看棋藝）',()=>{if(ckp(.3+(S.me.at.sk[0]-30)/150+(S.me.at.iq-50)/300)){c.A.f.win=1;c.n.al+=12;S.me.favor+=3;return`你勝了半子，${mn(c)}讚你心思縝密。`}c.A.f.lose=1;return`你輸了半目，${mn(c)}看了你一眼，意味深長。`}],
['借下棋打探她的心思（看心機）',()=>{if(ckp(.35+S.me.scheme/220)){c.A.f.spy=1;S.evid[c.i]=(S.evid[c.i]||0)+2;return`你從棋路中看出她另有圖謀，罪證+2。`}return'她的棋路滴水不漏，你什麼也沒看出。'}],
['託病推辭',()=>'你推辭了。']],mn(c))],
[6,16,c=>{const n=c.n;n.sc=cl(n.sc+6);return`${n.n}以棋局為喻，在皇上耳邊輕描淡寫地說了幾句朝政，皇上竟頻頻點頭。`}],
[8,20,c=>{const f=c.A.f,n=c.n;if(f.win||f.lose){n.al+=8;return`${n.n}與你成了棋友，常相約手談。`}return`${n.n}的棋局人盡皆知，成為宮中雅事。`}]]},
{k:'寒門孝女',st:[
[5,16,c=>`${mn(c)}出身寒門，把皇上的賞賜悄悄寄回老家，宮裡人暗地笑她小家子氣。`],
[5,12,c=>`${mn(c)}家中遭難。`,c=>sEv(`${mn(c)}的老父病重，家中斷了生計，她跪在你門前求借銀兩。`,[
['慷慨解囊（耗銀40）',()=>{if(!pay(40))return'銀兩不足。';c.A.f.help=1;c.n.al+=30;S.me.ally+=2;return`${mn(c)}涕淚交加，發誓此恩不忘。`}],
['借她少許，了結此事（耗銀15）',()=>{if(!pay(15))return'銀兩不足。';c.n.al+=10;return'你借了她一點銀兩，她連聲道謝。'}],
['婉拒，說自己也不寬裕',()=>{c.n.al-=6;return`${mn(c)}失望而去。`}]],mn(c))],
[6,16,c=>{const n=c.n;n.favor+=4;return`${n.n}的孝名傳到皇上耳中，皇上賞了她家一筆銀兩，嘉獎孝心。`}],
[8,20,c=>{const n=c.n;if(c.A.f.help){S.me.ally+=3;n.al+=10;return`${n.n}視你為恩人，凡事都為你著想。`}return`${n.n}依舊勤儉度日，與後宮的浮華格格不入。`}]]});
EARC.push(
{k:'求仙問道',st:[
[8,24,c=>{S.nat.eco-=3;return'皇上迷上了道家丹術，招來一批方士入宮煉丹。'}],
[8,24,c=>'皇上要你試藥。',c=>sEv('皇上得了一爐「長生金丹」，興致勃勃地要你先試一試。',[
['欣然服下，以表忠心（看健康）',()=>{if(ckp(.45+S.me.hp/300)){S.me.favor+=8;return'你服下金丹，並無不適，皇上大悅。'}S.me.hp-=25;S.me.favor+=3;return'你服下金丹後上吐下瀉，躺了好幾日。'}],
['委婉勸皇上慎用丹藥（看口才）',()=>{if(ckp(.3+(S.me.at.iq-50)/200+(S.me.at.qi-50)/300)){S.me.favor+=4;return'皇上聽進了幾分，暫時擱置了丹藥。'}S.me.favor-=6;return'皇上不悅：「你不信朕的仙緣？」'}],
['假意服下，暗中倒掉',()=>{if(ckp(.5+S.me.scheme/300)){return'你瞞過了皇上，什麼事也沒有。'}S.me.favor-=8;return'你的小動作被方士識破。'}]],'皇上','帝')],
[12,30,c=>{S.ehp=Math.max(5,S.ehp-12);return'皇上長期服食丹藥，面色泛青，脾氣日漸暴躁。'}],
[18,40,c=>{S.nat.stab-=5;return'方士們藉皇上的信任干預朝政，朝臣怨聲載道。'}],
[18,40,c=>{S.ehp=Math.max(5,S.ehp-15);return'皇上龍體每況愈下，太醫們私下搖頭。'}]]},
{k:'寵信宦官',st:[
[8,24,c=>{S.nat.stab-=2;return'皇上寵信一名大太監，漸漸令他代批奏章。'}],
[8,24,c=>'大太監上門。',c=>sEv('那名大太監親自登門，笑容可掬地向你示好。',[
['以禮相待，結為奧援（耗銀30）',()=>{if(!pay(30))return'銀兩不足。';S.me.ally+=5;S.me.favor+=3;return'你與大太監結下善緣，皇上身邊多了個替你說話的人。'}],
['不假辭色，保持距離',()=>{S.me.favor-=3;return'大太監碰了釘子，看你的眼神意味深長。'}],
['暗中收集其不法證據（看心機）',()=>{if(ckp(.3+S.me.scheme/250)){S.me.scheme+=2;return'你悄悄記下了大太監的一筆筆賬。'}S.me.favor-=6;return'你的暗中調查被察覺。'}]],'皇上','帝')],
[12,30,c=>{S.nat.stab-=6;S.fp[R(0,4)]+=6;return'大太監權傾朝野，朝臣竟要送禮才能面聖。'}],
[18,36,c=>{if(P(.5)){S.nat.stab+=4;return'大太監倒行逆施，終於被御史聯名參倒，抄家問斬。'}S.nat.stab-=4;return'大太監愈發囂張，朝臣人人自危。'}]]},
{k:'立儲之憂',st:[
[8,24,c=>{S.mood=cl(S.mood-3);return'皇上對儲君人選久久未決，朝臣紛紛上疏，催促早定國本。'}],
[8,24,c=>'皇上問你。',c=>sEv('皇上夜裡突然問你：「依你看，眾皇子中誰可承大統？」',[
['舉薦自己的孩子（若有）',()=>{if(S.me.kids.length){const k=S.me.kids[0];k.chong=cl(k.chong+8);S.me.favor-=2;return`你舉薦了${k.n}，皇上不置可否。`}return'你並無子嗣，只是笑而不答。'}],
['說「此事當由皇上與朝臣共議」',()=>{S.me.favor+=3;return'皇上讚你識大體。'}],
['推薦才德最優者（看智商）',()=>{if(ckp(.4+(S.me.at.iq-50)/200)){S.me.favor+=6;return'皇上對你的見識刮目相看。'}return'皇上笑著搖頭：「你還是不懂。」'}]],'皇上','帝')],
[12,30,c=>{S.nat.stab-=4;return'各皇子的母家暗中結黨，朝局暗流洶湧。'}],
[18,40,c=>{S.nat.stab-=3;return'皇上仍未立儲，皇子們的爭鬥愈演愈烈。'}]]});
DARC.push(
{k:'太后干政',st:[
[6,20,c=>{S.nat.stab-=2;return'太后屢屢過問朝政，對皇上的決策指指點點。'}],
[6,16,c=>'太后召你。',c=>sEv('太后把你召去，說要你勸皇上「早日廣開後宮、多子多福」。',[
['替太后傳話，說服皇上',()=>{S.me.dw+=8;S.me.favor-=3;return'你傳了話，皇上心煩，太后滿意。'}],
['婉言說皇上自有主張',()=>{S.me.dw-=5;S.me.favor+=2;return'太后面色不豫。'}],
['藉機獻上自己的人',()=>{S.me.dw+=4;S.me.ally+=3;return'太后對你的安排很是滿意。'}]],'太后','后')],
[10,26,c=>{S.mood=cl(S.mood-4);return'皇上與太后因朝政起了爭執，母子冷戰數日。'}],
[12,30,c=>'太后終於明白皇上已非昔日稚子，漸漸收斂。']]},
{k:'太后病篤',st:[
[6,20,c=>{if(S.dow)S.dow.age+=1;return'太后年事已高，近來常覺精神不濟，太醫日日請脈。'}],
[6,16,c=>'太后召你侍疾。',c=>sEv('太后臥病在床，召你日夜侍疾。',[
['衣不解帶，悉心侍奉（看健康）',()=>{if(ckp(.5+S.me.hp/250)){S.me.dw+=12;S.me.hp-=8;return'你悉心侍疾，太后握著你的手連連點頭。'}S.me.hp-=20;S.me.dw+=4;return'你累得病倒，太后也感動。'}],
['安排宮女輪值，只偶爾探視',()=>{S.me.dw+=2;return'太后沒說什麼。'}],
['託詞離宮，躲開此事',()=>{S.me.dw-=10;S.me.favor-=3;return'太后冷眼看了你很久，皇上也聽說了。'}]],'太后','后')],
[10,26,c=>{S.mood=cl(S.mood-5);return'太后病情時好時壞，宮中氣氛低迷。'}],
[12,30,c=>'太后在一個清晨安詳睡去，宮中舉哀三日。']]},
{k:'太后念舊',st:[
[6,20,c=>'太后常翻出舊物，對著先帝遺物出神。'],
[6,16,c=>'太后讓你說說閒話。',c=>sEv('太后拉著你的手，說起了年輕時入宮的舊事，眼眶微紅。',[
['靜靜傾聽，陪她落淚',()=>{S.me.dw+=8;return'太后說你是個知心的孩子。'}],
['岔開話題，說些開心的事',()=>{S.me.dw+=3;return'太后笑了，拍拍你的手。'}],
['藉機探聽先帝舊事（看心機）',()=>{if(ckp(.4+S.me.scheme/250)){S.me.scheme+=2;S.me.dw+=2;return'你從太后的話裡探到了不少宮廷舊事。'}return'太后警覺地住了口。'}]],'太后','后')],
[10,26,c=>{S.nat.pop+=1;return'太后下旨為先帝舊臣的遺屬發放撫恤，朝野感念。'}],
[12,30,c=>'太后漸漸看淡了往事，閒時修花養鳥。']]});
CARC.push(
{k:'朋黨之爭',st:[
[6,20,c=>{S.nat.stab-=3;return`${c.f.role}${c.f.n}與政敵互相攻訐，朝臣各自站隊，朝堂鬧得烏煙瘴氣。`}],
[6,16,c=>'有人來拉你站隊。',c=>sEv(`${c.f.role}${c.f.n}派人拉攏你，說只要你母家站在他這邊，日後共享富貴。`,[
['答應站隊',()=>{c.A.f.side=1;S.me.ally+=5;S.me.fam.forEach(x=>x.pw=cl(x.pw+4));return'你的母家與他結盟，勢力又添一重。'}],
['敬而遠之，不沾黨爭',()=>{S.me.ally+=1;return'你保持中立，雙方都沒得罪。'}],
['暗中向皇上進言，勸其整肅朋黨（看心機）',()=>{if(ckp(.3+S.me.scheme/250+S.me.favor/500)){S.me.favor+=6;S.nat.stab+=2;return'你的進言讓皇上有所觸動。'}S.me.favor-=4;return'皇上警告你「後宮不得干政」。'}]],'朋黨','朝')],
[8,20,c=>{if(c.A.f.side&&P(.5)){S.me.fam.forEach(x=>x.pw=cl(x.pw+6));return`${c.f.n}一派占了上風，你的母家水漲船高。`}if(c.A.f.side){S.me.fam.forEach(x=>x.pw=cl(x.pw-6));return`${c.f.n}一派落敗，你的母家受到牽連。`}return`朋黨之爭以雙方各退一步收場。`}],
[10,30,c=>{S.nat.stab+=1;return`皇上下詔告誡百官，朋黨之爭暫告平息。`}]]},
{k:'貪腐大案',st:[
[6,20,c=>{S.nat.eco-=3;return`一樁驚天貪腐案浮出水面，牽涉${c.f.role}${c.f.n}的下屬。`}],
[6,16,c=>'有人託你說情。',c=>sEv(`涉案官員的家眷託人遞話，願奉上萬兩白銀，請你在皇上面前美言。`,[
['收下銀兩，替他說話（險）',()=>{S.me.silver+=200;S.me.scand=(S.me.scand||0)+2;c.A.f.take=1;return'你收下了銀兩，只怕將來會是把柄。'}],
['拒絕並舉報',()=>{S.me.favor+=6;S.nat.stab+=2;c.A.f.rep=1;return'你拒絕賄賂並轉告皇上，皇上讚你清正。'}],
['置之不理',()=>'你不理會。']],'貪腐案','朝')],
[8,20,c=>{if(c.A.f.take&&P(.5)){S.me.favor-=10;S.me.scand=(S.me.scand||0)+2;return'案子查到你頭上，皇上對你起了疑心。'}S.nat.eco+=3;S.nat.stab+=2;return'貪腐案嚴辦完結，朝廷追回了大筆贓款。'}],
[10,30,c=>{S.nat.eco+=2;return`${c.f.role}${c.f.n}因御下不嚴被罰俸，朝風為之一肅。`}]]},
{k:'邊將請餉',st:[
[6,20,c=>{S.nat.mil-=3;return`${c.f.role}${c.f.n}上疏，邊關軍餉已拖欠三月，將士怨聲載道。`}],
[6,16,c=>'邊將求助。',c=>sEv(`${c.f.n}託人給你捎話，希望你的母家能墊付部分軍餉，日後必有厚報。`,[
['母家墊付軍餉（耗銀60）',()=>{if(!pay(60))return'銀兩不足。';c.A.f.help=1;S.nat.mil+=4;S.me.ally+=4;return'軍餉解了燃眉之急，邊將對你感激涕零。'}],
['婉拒，建議他向戶部申請',()=>{S.nat.mil-=1;return'你婉拒了。'}],
['轉告皇上，請皇上撥款',()=>{S.me.favor+=3;S.nat.mil+=2;return'皇上撥了一筆軍餉。'}]],'邊將','朝')],
[8,20,c=>{if(c.A.f.help){S.me.fam.forEach(x=>x.pw=cl(x.pw+5));return`${c.f.n}立下戰功，對你的母家投桃報李。`}S.nat.mil-=2;return`邊關士氣低落，偶有小股敵軍襲擾。`}],
[10,30,c=>{S.nat.mil+=2;return`${c.f.n}整飭邊備，邊關形勢趨於穩定。`}]]});
const TARC=[
{k:'不服垂簾',st:[
[4,14,c=>`${mn(c)}在宮中私下議論「牝雞司晨，國之不祥」，被宮人傳了出來。`],
[4,10,c=>`${mn(c)}的態度。`,c=>sEv(`${mn(c)}當著宗室女眷的面，語帶譏諷地說起「後宮不得干政」。`,[
['厚賞拉攏，堵她的嘴（耗銀25）',()=>{if(!pay(25))return'銀兩不足。';c.A.f.ally=1;c.n.al+=20;return`${mn(c)}收了賞賜，態度軟化。`}],
['當眾申斥，殺雞儆猴',()=>{if(ckp(.4+S.reg.pw/250)){c.n.host+=6;S.reg.pw+=3;return`${mn(c)}被你申斥得無地自容，不敢再言。`}c.n.host+=14;S.reg.pw-=3;return`${mn(c)}頂撞你，鬧得很不好看。`}],
['一笑置之，示以大度',()=>{S.reg.pw-=1;S.nat.pop+=1;return'你笑而不語，旁人讚你氣度。'}]],mn(c),'宮')],
[6,14,c=>{if(c.A.f.ally){S.reg.pw+=3;return`${mn(c)}在宗室中為你說了不少好話。`}S.reg.rv=cl(S.reg.rv+3);return`${mn(c)}的怨言在宗室中傳開，對手${S.reg.rvn}樂見其成。`}],
[8,20,c=>`${mn(c)}漸漸收了聲，她已明白在垂簾的朝局裡，她說了不算。`]]},
{k:'守陵之請',st:[
[4,14,c=>`${mn(c)}上表，說願為先帝守陵，青燈相伴。`],
[4,10,c=>`${mn(c)}請旨。`,c=>sEv(`${mn(c)}跪在慈寧宮外，淚眼婆娑：「臣妾只求為先帝守陵，了此殘生。」`,[
['准其所請，送她去皇陵',()=>{c.A.f.go=1;c.n.al+=12;c.n.st='守陵';S.nat.pop+=1;return`${mn(c)}離宮前往皇陵，臨行前再拜謝恩。`}],
['不准，勸她留在宮中頤養',()=>{c.A.f.stay=1;c.n.host+=5;return`${mn(c)}悻悻而歸。`}],
['溫言勸慰，說皇帝需要她',()=>{if(ckp(.4+(S.me.at.qi-50)/200)){c.A.f.stay=1;c.n.al+=10;return`${mn(c)}被你說服，打消了念頭。`}c.n.host+=4;return`${mn(c)}不為所動。`}]],mn(c),'宮')],
[6,16,c=>{if(c.A.f.go)return`皇陵傳來消息：${mn(c)}日日誦經，深得皇陵守軍敬重。`;return`${mn(c)}漸漸安於宮中的日子。`}],
[8,20,c=>`${mn(c)}的守陵之請，成為宮人間傳誦的忠貞佳話。`]]},
{k:'母以子貴',st:[
[4,14,c=>c.n.kids.length?`${mn(c)}的兒子${c.n.kids[0].n}日漸成人，她盤算著替兒子謀個前程。`:`${mn(c)}膝下荒涼，常在花園裡發呆。`],
[4,10,c=>`${mn(c)}為子請命。`,c=>c.n.kids.length?sEv(`${mn(c)}為兒子${c.n.kids[0].n}遞牌子，請你賜個爵位。`,[
['依例封王，以示恩澤',()=>{const k=c.n.kids[0];k.pow=cl(k.pow+10);lyd(k,10);c.n.al+=15;return`${k.n}受封王爵，${mn(c)}感激涕零。`}],
['婉拒，說皇子尚需歷練',()=>{lyd(c.n.kids[0],-4);c.n.host+=6;return'你婉拒了，她面有不甘。'}],
['封為閒散宗室，不授實權',()=>{c.n.al+=4;lyd(c.n.kids[0],3);return'你給了個虛名，她勉強接受。'}]],mn(c),'宮'):null],
[6,14,c=>{const k=c.n.kids[0];if(k){k.pow=cl(k.pow+4);return`${k.n}在宗室中漸有聲望，${mn(c)}的底氣足了。`}return`${mn(c)}收養了一名宗室孤兒，日子有了盼頭。`}],
[8,20,c=>`${mn(c)}母子相依，成為宗室中一段溫暖的故事。`]]},
{k:'太妃私情',st:[
[4,14,c=>`宮中有流言，說${mn(c)}與一名年輕侍衛來往甚密。`],
[4,10,c=>`${mn(c)}的事被你撞見。`,c=>sEv(`你在後花園撞見${mn(c)}與侍衛私會，兩人慌忙分開，面色如土。`,[
['裝作沒看見，賣她人情',()=>{c.A.f.keep=1;c.n.al+=25;S.me.ally+=1;return`${mn(c)}事後得知，對你感激涕零。`}],
['當場拿下，交內務府查辦',()=>{c.A.f.expose=1;c.n.host+=30;S.reg.pw+=2;return`你抓了現行，${mn(c)}被打入冷宮，侍衛問斬。`}],
['私下警告她，以此為把柄（看心機）',()=>{if(ckp(.4+S.me.scheme/220)){c.A.f.hold=1;c.n.al+=15;S.me.scheme+=1;return`你警告了她，並握住了這個把柄。`}c.n.host+=10;return'她矢口否認，你拿她沒辦法。'}]],mn(c),'宮')],
[6,14,c=>{if(c.A.f.expose){c.n.st='薨逝';c.n.favor=0;return`${mn(c)}被賜白綾，太妃私情一案震動後宮。`}if(c.A.f.hold){return`${mn(c)}從此對你言聽計從，不敢造次。`}return`${mn(c)}與侍衛的私情依舊，只是更小心了。`}],
[8,20,c=>`那名侍衛請調出京，${mn(c)}日漸憔悴。`]]},
{k:'遺詔疑雲',st:[
[4,14,c=>`${mn(c)}偶爾提及，說先帝臨終前單獨召見過她，似乎交代了什麼。`],
[4,10,c=>`${mn(c)}自稱藏有先帝遺物。`,c=>sEv(`${mn(c)}悄悄對你說，她手裡有先帝臨終的一道口諭，「關係重大，須謹慎處置」。`,[
['誠懇相詢，請她說出',()=>{if(ckp(.4+c.n.al/250)){c.A.f.know=1;c.n.al+=10;S.reg.pw+=3;return`${mn(c)}說出口諭內容，竟是囑咐群臣好好輔佐太后與幼主，你的地位更穩了。`}return`${mn(c)}支吾其詞，不肯再說。`}],
['派人搜她的宮室',()=>{if(ckp(.4+S.me.scheme/250)){c.A.f.know=1;S.reg.pw+=2;c.n.host+=20;return`你從她宮裡搜出口諭抄本，她對你恨之入骨。`}c.n.host+=25;return`你什麼也沒搜出來，她憤怒難平。`}],
['不予理會，以為是無稽之談',()=>{return'你沒有放在心上。'}]],mn(c),'宮')],
[6,16,c=>c.A.f.know?`口諭的內容傳開，朝臣對你的態度恭敬了許多。`:`${mn(c)}所說的口諭成為宮中的一個謎團。`],
[8,20,c=>`${mn(c)}口中的口諭漸漸沒人再提起。`]]},
{k:'禮佛立寺',st:[
[4,14,c=>`${mn(c)}日日誦經禮佛，說要為先帝積福。`],
[4,10,c=>`${mn(c)}要建寺。`,c=>sEv(`${mn(c)}請求你准她出資在京郊修建一座佛寺，為先帝超度。`,[
['准其所請，並出資助修（耗銀30）',()=>{if(!pay(30))return'銀兩不足。';c.A.f.help=1;c.n.al+=20;S.nat.pop+=1;return'佛寺動工，百姓稱頌太后慈悲。'}],
['准其所請，但需自籌',()=>{c.n.al+=8;return'她自己拿出體己修寺。'}],
['不准，說國庫吃緊',()=>{c.n.host+=6;S.nat.eco+=1;return`${mn(c)}悻悻而歸。`}]],mn(c),'宮')],
[6,16,c=>c.A.f.help?`佛寺落成，${mn(c)}請你剪彩，百姓夾道歡呼。`:`${mn(c)}把精力放在佛堂上，不再過問宮中事。`],
[8,20,c=>`${mn(c)}逐漸成為宮中禮佛的領袖，不少太嬪跟隨她修行。`]]},
{k:'病榻託孤',st:[
[4,14,c=>{c.n.hp-=20;return`${mn(c)}突然病倒，咳嗽不止，整日臥床。`}],
[4,10,c=>`${mn(c)}召你。`,c=>sEv(`${mn(c)}病入膏肓，派人請你過去，說有後事相托。`,[
['親往探視，聆聽遺言（耗銀20）',()=>{if(!pay(20))return'銀兩不足。';c.A.f.go=1;c.n.al+=25;return`${mn(c)}拉著你的手，把身後事一一交代，並將體己托付於你。`}],
['派太醫探視，自己不去',()=>{c.n.al-=4;return'你只派了太醫。'}],
['藉故推託',()=>{c.n.al-=10;c.n.host+=8;return`${mn(c)}失望地閉上了眼睛。`}]],mn(c),'宮')],
[6,14,c=>{if(c.n.hp<50&&P(.6)){c.n.st='薨逝';if(c.A.f.go)S.me.silver+=60;return`${mn(c)}薨逝。${c.A.f.go?'她留給你一筆體己銀兩。':''}`}c.n.hp+=20;return`${mn(c)}病情竟好轉了。`}],
[8,20,c=>`宮人們談起${mn(c)}，無不感嘆。`]]},
{k:'擁立親王',st:[
[4,14,c=>`${mn(c)}暗中與宗室親王走動頻繁，似有所圖。`],
[4,10,c=>`${mn(c)}有異動。`,c=>sEv(`你的耳目回報：${mn(c)}與幾位親王密議，言語間有「另立新君」之意。`,[
['先發制人，揭發其謀（看權柄）',()=>{if(ckp(.35+S.reg.pw/250)){c.A.f.rep=1;c.n.host+=30;S.reg.pw+=4;S.reg.rv=cl(S.reg.rv-3);return`你搶先揭發，${mn(c)}的計畫胎死腹中。`}S.reg.pw-=4;c.n.host+=20;return`你的指控缺乏證據，反被她倒打一耙。`}],
['派人暗中監視（耗銀20）',()=>{if(!pay(20))return'銀兩不足。';c.A.f.watch=1;S.me.scheme+=1;return`你悄悄安插了眼線，掌握她的一舉一動。`}],
['登門招安，許以厚祿',()=>{if(ckp(.4+c.n.al/250)){c.A.f.ally=1;c.n.al+=18;return`${mn(c)}被你說動，答應按兵不動。`}c.n.host+=10;return`${mn(c)}拒絕了你的好意。`}]],mn(c),'宮')],
[6,14,c=>{if(c.A.f.rep){c.n.st='出家';return`${mn(c)}被迫出家，其黨羽盡數落網。`}if(c.A.f.ally)return`${mn(c)}與親王們斷了往來。`;S.reg.rv=cl(S.reg.rv+5);return`${mn(c)}的動作引來了${S.reg.rvn}的拉攏，局勢更加複雜。`}],
[8,20,c=>`${mn(c)}的風波終於平息，宗室裡人人噤聲。`]]},
{k:'思鄉歸省',st:[
[4,14,c=>`${mn(c)}近來日日望著宮牆發呆，說起了老家的桂花。`],
[4,10,c=>`${mn(c)}請旨歸省。`,c=>sEv(`${mn(c)}遞牌子請旨，想回母家探望年邁的雙親。`,[
['准其歸省，賜下儀仗（耗銀15）',()=>{if(!pay(15))return'銀兩不足。';c.A.f.go=1;c.n.al+=15;c.n.fam.forEach(x=>x.pw=cl(x.pw+3));return`${mn(c)}風光歸省，母家上下感念。`}],
['不准，宮規森嚴',()=>{c.n.host+=6;return`${mn(c)}失望地回了宮。`}],
['准其家人入宮探望',()=>{c.n.al+=8;return'你准她家人入宮相見，她喜極而泣。'}]],mn(c),'宮')],
[6,14,c=>c.A.f.go?`${mn(c)}歸省歸來，精神煥發，在宮中說了你不少好話。`:`${mn(c)}慢慢收起了思鄉之情。`],
[8,20,c=>`${mn(c)}把老家的桂花種在了自己宮院中，每到秋天，滿院飄香。`]]},
{k:'以舊事相挾',st:[
[4,14,c=>`${mn(c)}忽然提起你初入宮時的往事，意味深長。`],
[4,10,c=>`${mn(c)}攤牌。`,c=>sEv(`${mn(c)}暗示她知道你當年為爭寵而做的一樁隱秘之事，希望你「通融通融」。`,[
['給她好處，堵她的嘴（耗銀60）',()=>{if(!pay(60))return'銀兩不足。';c.A.f.paid=1;c.n.al+=12;return`${mn(c)}收了好處，保證守口如瓶。`}],
['冷笑著當面揭穿她的虛張聲勢（看氣質）',()=>{if(ckp(.4+(S.me.at.qi-50)/200+S.reg.pw/400)){c.n.host+=8;S.reg.pw+=2;return`你一語戳破，她訕訕退下，不敢再提。`}S.reg.pw-=3;return`你的氣勢壓不住她，她冷笑而去。`}],
['暗中除掉隱患（險）',()=>{if(ckp(.3+S.me.scheme/250+S.reg.pw/400)){c.n.st='薨逝';S.reg.pw+=1;return`${mn(c)}突然「暴病」身亡，此事再無人知曉。`}S.reg.pw-=8;c.n.host+=20;return`你的滅口計畫露出馬腳，${mn(c)}躲了過去，從此對你虎視眈眈。`}]],mn(c),'宮')],
[6,14,c=>c.A.f.paid?`${mn(c)}果然守口如瓶，只是時不時來要些供奉。`:`風波過去，你與${mn(c)}之間隔著一層看不見的冰。`],
[8,20,c=>`${mn(c)}終於不再提起舊事。`]]}];
const RARC=[
{k:'少年壯志',st:[
[4,12,c=>{S.reg.k.pow=cl(S.reg.k.pow+4);return`${S.reg.k.n}讀奏章時露出神采，開始對朝政有了自己的想法。`}],
[4,12,c=>`${S.reg.k.n}請求批覆奏章。`,c=>sEv(`${S.reg.k.n}捧著一份奏摺，眼睛發亮地對你說：「兒臣想自己批這一份。」`,[
['允許，並從旁指點',()=>{S.reg.k.bond=cl(S.reg.k.bond+6);S.reg.k.cai=cl(S.reg.k.cai+4);S.reg.pw-=1;return`${S.reg.k.n}批得頗有章法，你欣慰地點頭。`}],
['駁回，說他年紀還小',()=>{S.reg.k.bond=cl(S.reg.k.bond-5);S.reg.pw+=1;return`${S.reg.k.n}悶悶不樂地退下。`}],
['共同批閱，順勢教他（看智商）',()=>{if(ckp(.45+(S.me.at.iq-50)/200)){S.reg.k.cai=cl(S.reg.k.cai+6);S.reg.k.bond=cl(S.reg.k.bond+4);return`你二人一同批閱，母子相得益彰。`}return'你們意見相左，不歡而散。'}]],'新帝','帝')],
[6,16,c=>{S.nat.stab+=1;return`${S.reg.k.n}在朝會上提出了一項主張，雖稚嫩，卻頗得老臣讚許。`}],
[8,20,c=>S.reg.k.bond>=55?`${S.reg.k.n}對你說：「兒臣若有不足，請母后隨時教訓。」`:`${S.reg.k.n}對朝中大臣說：「朕自有主張。」顯然已不再依賴你。`]]},
{k:'體弱多病',st:[
[4,12,c=>`${S.reg.k.n}體質虛弱，一入冬就咳個不停。`],
[4,12,c=>`${S.reg.k.n}又病了。`,c=>sEv(`${S.reg.k.n}夜裡發起高熱，太醫們手忙腳亂。`,[
['親自守在榻前（看健康）',()=>{if(ckp(.5+S.me.hp/300)){S.reg.k.bond=cl(S.reg.k.bond+8);return`${S.reg.k.n}在你照料下退了燒，緊緊握著你的手。`}S.me.hp-=15;S.reg.k.bond=cl(S.reg.k.bond+4);return`你累得病倒，皇帝很是過意不去。`}],
['重金請名醫會診（耗銀40）',()=>{if(!pay(40))return'銀兩不足。';S.reg.k.bond=cl(S.reg.k.bond+3);return'名醫開了方子，皇帝漸漸好轉。'}],
['交給太醫院，專心處理朝政',()=>{S.reg.pw+=1;S.reg.k.bond=cl(S.reg.k.bond-4);return'皇帝病癒後，顯得有些失落。'}]],'新帝','帝')],
[6,16,c=>{S.reg.k.cai=cl(S.reg.k.cai-2);return`${S.reg.k.n}因病荒廢了不少功課。`}],
[8,20,c=>`${S.reg.k.n}體質漸漸調養過來，朝野鬆了口氣。`]]},
{k:'尚武少年',st:[
[4,12,c=>`${S.reg.k.n}迷上了騎射，整日纏著侍衛教他武藝。`],
[4,12,c=>`${S.reg.k.n}想親征。`,c=>sEv(`${S.reg.k.n}興致勃勃地宣布，想去秋獵，甚至想「親征邊關」。`,[
['准其秋獵，但嚴加護衛（耗銀25）',()=>{if(!pay(25))return'銀兩不足。';S.reg.k.pow=cl(S.reg.k.pow+4);S.reg.k.bond=cl(S.reg.k.bond+5);S.nat.mil+=1;return`${S.reg.k.n}秋獵大有收穫，士氣大振。`}],
['嚴詞禁止，說天子不可涉險',()=>{S.reg.k.bond=cl(S.reg.k.bond-6);S.reg.pw+=2;return`${S.reg.k.n}怒氣沖沖地離去。`}],
['送他去軍中歷練（看軍力）',()=>{if(ckp(.4+S.nat.mil/250)){S.reg.k.pow=cl(S.reg.k.pow+7);S.nat.mil+=3;return`${S.reg.k.n}在軍中磨練了一番，更添英氣。`}S.reg.k.bond=cl(S.reg.k.bond-3);return`軍中諸將敷衍了事，皇帝很是失望。`}]],'新帝','帝')],
[6,16,c=>{S.nat.mil+=2;return`${S.reg.k.n}親手射中一頭猛虎，軍中歡呼。`}],
[8,20,c=>`${S.reg.k.n}成了尚武的少年天子，將門子弟爭相結交。`]]},
{k:'宮人情深',st:[
[6,14,c=>`${S.reg.k.n}身邊一名宮女溫婉聰慧，皇帝對她格外親近。`],
[6,14,c=>`${S.reg.k.n}為她求情。`,c=>sEv(`${S.reg.k.n}跪在你面前：「兒臣想封她為嬪，求母后成全。」`,[
['成全，封她為嬪',()=>{S.reg.k.bond=cl(S.reg.k.bond+7);rx().cc++;return`皇帝喜出望外，磕頭謝恩。`}],
['不准，說她出身低微',()=>{S.reg.k.bond=cl(S.reg.k.bond-8);return`${S.reg.k.n}賭氣不吃飯，三日不見你。`}],
['把她調離皇帝身邊（險）',()=>{S.reg.k.bond=cl(S.reg.k.bond-14);S.reg.pw+=2;return`皇帝得知後大發雷霆，與你生分了。`}]],'新帝','帝')],
[8,18,c=>{rx().cc++;return`皇帝與那名宮人情意日深，宮中暗暗傳為佳話。`}],
[10,22,c=>`皇帝為她作詩，詩被傳到宮外，成為士林雅談。`]]},
{k:'師傅之爭',st:[
[4,12,c=>`${S.reg.k.n}的兩位帝師意見不合，互不相讓。`],
[4,12,c=>`帝師之爭。`,c=>sEv(`兩位帝師各執一詞，都來向你申辯，請求你裁決。`,[
['保守派帝師，重「孝悌」',()=>{S.reg.k.de=cl(S.reg.k.de+6);S.reg.k.cai=cl(S.reg.k.cai+2);S.cr.forEach(f=>f.lo=cl(f.lo+1));return`皇帝性情愈發溫厚。`}],
['改革派帝師，重「經世」',()=>{S.reg.k.cai=cl(S.reg.k.cai+6);S.reg.k.pow=cl(S.reg.k.pow+3);return`皇帝學到了不少治國之術。`}],
['兩位都留，兼收並蓄（看智商）',()=>{if(ckp(.4+(S.me.at.iq-50)/200)){S.reg.k.cai=cl(S.reg.k.cai+5);S.reg.k.de=cl(S.reg.k.de+4);return`你把兩人安排得井井有條，皇帝受益匪淺。`}S.nat.stab-=1;return'兩位帝師鬧得更凶，朝臣也跟著分了派。'}]],'新帝','帝')],
[6,16,c=>`${S.reg.k.n}的學問在帝師教導下進步明顯。`],
[8,20,c=>`帝師們在朝堂上的聲望水漲船高。`]]},
{k:'密信疑雲',st:[
[4,12,c=>`${S.reg.k.n}身邊的小太監悄悄傳了幾句話，皇帝看你的眼神變得複雜。`],
[4,12,c=>`有人挑撥你們母子。`,c=>sEv(`你發現皇帝書案上有一封匿名密信，內容是「太后欲廢帝另立」。`,[
['主動與皇帝坦誠相對',()=>{if(ckp(.45+(S.me.at.qi-50)/200+(S.reg.k.bond-45)/250)){S.reg.k.bond=cl(S.reg.k.bond+10);return`你一番剖白，皇帝紅著眼眶說：「兒臣信母后。」`}S.reg.k.bond=cl(S.reg.k.bond-3);return`皇帝勉強點頭，眼中仍有疑慮。`}],
['追查挑撥之人（看心機）',()=>{if(ckp(.35+S.me.scheme/220)){S.reg.rv=cl(S.reg.rv-8);S.reg.pw+=3;return`你查出密信出自${S.reg.rvn}的人，順藤摸瓜剪除了他的羽翼。`}S.reg.pw-=3;return`你查不出幕後之人，疑雲未消。`}],
['加強對皇帝身邊人的監視',()=>{S.reg.k.bond=cl(S.reg.k.bond-6);S.reg.pw+=2;return`你換掉了皇帝身邊的人，皇帝覺得自己像被軟禁了。`}]],'新帝','帝')],
[6,16,c=>S.reg.k.bond>=50?`風波過後，母子之間反而多了份默契。`:`皇帝對你始終存著一份戒心。`],
[8,20,c=>`當年那封密信，終究成了宮中一樁無頭公案。`]]}];
function newRarcEvery(){}
const RENV=[
()=>e('今年大旱，赤地千里，朝廷下令縮減用度祈雨。',()=>{S.me.silver=Math.max(0,S.me.silver-12);S.nat.pop-=2;S.nat.eco-=2;return'你的用度被縮減，百姓盼著甘霖。'}),
()=>e('江南水患，朝廷開倉賑災，太妃們也各捐出體己。',()=>{S.nat.pop+=1;S.nat.eco-=2;return'賑災款項見了底，江南災民漸漸安置。'}),
()=>e('邊關告急，朝廷徵調兵馬，武將之家聲勢大漲。',()=>{S.nat.mil+=2;S.nat.eco-=1;S.fp[2]=cl(S.fp[2]+5);return'將門聲勢又漲了一籌。'}),
()=>e('歲末年終，你大賞宗室與太妃，以示恩澤。',()=>{S.me.silver=Math.max(0,S.me.silver-15);tfs().forEach(i=>S.npcs[i].al+=3);return'宗室與太妃紛紛謝恩，宮中一片祥和。'}),
()=>e('今年風調雨順，五穀豐登，百姓歡慶。',()=>{S.nat.eco+=3;S.nat.pop+=3;return'國庫充盈，民間安居樂業。'}),
()=>e('日有食之，朝野議論紛紛，欽天監請你下詔罪己。',()=>{S.nat.pop+=1;S.reg.pw-=1;return'你下詔罪己，風波過去。'}),
()=>e('朝堂黨爭激烈，幾家權貴此起彼落。',()=>{const o=pk(S.cr),d=R(-6,6);o.lo=cl(o.lo+d);fpv(o,d);return`${o.role}${o.n}在這場黨爭中${d>=0?'得勢':'失勢'}。`}),
()=>e('萬壽節將至，宗室與百官紛紛獻禮。',()=>{const g=R(20,50);S.me.silver+=g;return`你收到賀禮折銀${g}兩。`})];
/* ===== v19：人生目標・難度・成就・評分・宮宴競藝・朝堂廷辯 ===== */
let GOAL=0,DIFF=1,ACHSET=null;
const DFN=[['輕鬆','成功率＋，起手銀兩多'],['普通','標準體驗'],['艱難','成功率－，敵意更高']];
const dfv=()=>S&&S.diff!==undefined?[.08,0,-.08][S.diff]:0;
const GOALS=[
['不設目標','自由遊玩，隨心所欲',()=>0,()=>false],
['母儀天下','登上皇后之位',()=>S.qi==='me'?100:S.me.rank/8*80,()=>S.qi==='me'],
['垂簾聽政','兒子登基，成為太后',()=>S.reg?100:Math.min(80,S.me.kids.filter(k=>k.sex=='男').length*20+(S.heir&&S.me.kids.includes(S.heir)?20:0)),()=>!!S.reg],
['富甲天下','私房銀兩達3000兩',()=>S.me.silver/30,()=>S.me.silver>=3000],
['寵冠六宮','聖寵達95，且位至皇貴妃以上',()=>(S.me.favor+S.me.rank*10)/1.75,()=>S.me.favor>=95&&S.me.rank>=7],
['子孫滿堂','育有五名子女，其中三人完婚',()=>S.me.kids.length/5*60+Math.min(3,S.me.kids.filter(k=>k.sp).length)/3*40,()=>S.me.kids.length>=5&&S.me.kids.filter(k=>k.sp).length>=3],
['權傾朝野','臨朝後權柄達90，朝臣平均忠誠≥60',()=>S.reg?(S.reg.pw+(S.cr?avgLo():0))/1.5:0,()=>!!S.reg&&S.reg.pw>=90&&avgLo()>=60],
['邦交四海','四國邦誼達75以上',()=>{const r=ntr();return NAT6.reduce((s,n)=>s+Math.min(75,r[n]),0)/300*100},()=>NAT6.filter(n=>ntr()[n]>=75).length>=4],
['平安終老','平安度過二十五年',()=>S.t/300*100,()=>S.t>=300],
['女皇之路','走到「女皇登基」的終局',()=>S.reg?S.reg.pw:Math.min(40,S.me.rank*5),()=>false]];
function goalNow(){const g=GOALS[S.goal||0];return{g,p:Math.max(0,Math.min(100,g[2]()))}}
function goalTick(){if(!S||!S.me||S.over||S.gdone||!S.goal)return;let ok=false;try{ok=GOALS[S.goal][3]()}catch(e){}if(ok){S.gdone=1;S.me.silver+=100;S.me.favor=Math.min(100,S.me.favor+8);if(S.reg)S.reg.pw=Math.min(100,S.reg.pw+5);const t=`🎯 人生目標「${GOALS[S.goal][0]}」達成！獎勵銀兩100兩。`;L(t);S.res=(S.res?S.res+'<br>':'')+t}}
const AL=[
['a1','初入深宮','晉位至貴人',()=>S.me.rank>=2],['a2','嬪位之上','晉位至貴嬪以上',()=>S.me.rank>=4],['a3','一人之下','晉位至皇貴妃',()=>S.me.rank>=7],
['a4','母儀天下','登上后位',()=>S.qi==='me'],['a5','皇家血脈','誕下第一個孩子',()=>S.me.kids.length>=1],['a6','兒女成群','育有五名子女',()=>S.me.kids.length>=5],
['a7','手段了得','成功廢黜一位皇后',()=>S.npcs.some(n=>n.st==='廢后')],['a8','富可敵國','私房銀兩達2000',()=>S.me.silver>=2000],['a9','商賈之才','同時經營三間鋪子',()=>S.me.shops.length>=3],
['a10','聖寵不衰','聖寵達95',()=>S.me.favor>=95],['a11','母憑子貴','兒子登基為帝',()=>!!S.reg&&S.reg.own],['a12','垂簾聽政','開始臨朝聽政',()=>!!S.reg],
['a13','和親公主','女兒和親外邦',()=>S.me.kids.some(k=>k.sp&&k.sp.ty==='和親')],['a14','兒女親家','三個孩子完婚',()=>S.me.kids.filter(k=>k.sp).length>=3],
['a15','邦交四海','四國邦誼達70',()=>NAT6.filter(n=>ntr()[n]>=70).length>=4],['a16','暗度陳倉','與近臣結下私情',()=>!!(S.reg&&S.reg.x&&S.reg.x.lv)],
['a17','廢立帝王','成功廢立皇帝',()=>!!(S.reg&&S.reg.x&&S.reg.x.dp)],['a18','歲月漫長','度過三十年',()=>S.t>=360],
['a19','才藝雙絕','任一技藝達90',()=>Math.max(...S.me.at.sk)>=90],['a20','絕處逢生','健康低於15仍活著',()=>S.me.hp<15&&S.me.hp>0],
['a21','宮宴魁首','宮宴競藝奪魁',()=>!!S.fw],['a22','舌戰群臣','朝堂廷辯獲勝',()=>!!S.dw],['a23','賢后','以賢德太后結局',()=>false],['a24','女皇','女皇登基',()=>false]];
function ACH(){if(!ACHSET){try{ACHSET=new Set(JSON.parse(stg.get('shengong_ach')||'[]'))}catch(e){ACHSET=new Set()}}return ACHSET}
function saveAch(){try{stg.set('shengong_ach',JSON.stringify([...ACH()]))}catch(e){}}
function unlock(id){const a=AL.find(x=>x[0]===id);if(!a||ACH().has(id))return;ACH().add(id);saveAch();const t=`🏆 成就達成：${a[1]}`;if(S){L(t);S.res=(S.res?S.res+'<br>':'')+t;(S.ag=S.ag||[]).push(a[1])}}
function achTick(){if(!S||!S.me||S.over)return;AL.forEach(a=>{if(ACH().has(a[0]))return;let ok=false;try{ok=a[3]()}catch(e){}if(ok)unlock(a[0])})}
function endMark(t){if(!S||!S.me)return;if(t==='賢德太后')unlock('a23');if(t==='女皇登基'){unlock('a24');if(S.goal==9){S.gdone=1}}if(t==='打入冷宮'&&S.goal==8)S.gdone=0}
function scoreOf(){const m=S.me;return Math.round(Math.floor(S.t/12)*4+m.rank*8+m.kids.length*6+(S.reg?70:0)+natv()/2+ACH().size*4+(S.gdone?60:0)+Math.min(40,Math.floor(m.silver/100)))}
const SCT=s=>s>=420?'千古一后':s>=320?'名垂青史':s>=230?'風光一世':s>=150?'平穩度日':s>=80?'浮沉半生':'曇花一現';
function endCard(){const s=scoreOf();return`<p class=m>評分 <b>${s}</b>（${SCT(s)}）・人生目標「${GOALS[S.goal||0][0]}」${(S.goal||0)?(S.gdone?'已達成':'未達成'):''}${S.ag&&S.ag.length?'<br>本局成就：'+S.ag.join('、'):''}</p>`}
function goalPick(){return`<div class=cd><h3>人生目標</h3><div class=m style="margin-bottom:8px">給這一世定個志向，達成有獎勵，終局也會計入評分。</div><div class=g>${GOALS.map((g,i)=>`<button class="${GOAL==i?'':'s'}" onclick="GOAL=${i};intro()">${g[0]}<small>${g[1]}</small></button>`).join('')}</div></div><div class=cd><h3>難度</h3><div class=g>${DFN.map((d,i)=>`<button class="${DIFF==i?'':'s'}" onclick="DIFF=${i};intro()">${d[0]}<small>${d[1]}</small></button>`).join('')}</div><div class=m style="margin-top:6px">已解鎖成就 ${ACH().size}/${AL.length}</div></div>`}
function goalChip(){if(!S.goal)return'';const {g,p}=goalNow();return`<div class=cd><div class=m>人生目標：<b>${g[0]}</b>（${g[1]}）${S.gdone?'　✅ 已達成':''}</div>${S.gdone?'':abar('進度',p)}</div>`}
function achPanel(){return`<div class=cd><h3>成就　${ACH().size}/${AL.length}</h3>`+AL.map(a=>`<div class=k style="opacity:${ACH().has(a[0])?1:.45}">${ACH().has(a[0])?'🏆':'🔒'} <b>${a[1]}</b>　<span class=m>${a[2]}</span></div>`).join('')+'<div class=m>成就會永久記錄在這個瀏覽器中，跨局保留。</div></div>'}
/* 宮宴競藝 */
function feastEv(){const m=S.me,arts=[['棋',0],['琴',1],['書',2],['畫',3],['詩詞',13],['舞藝',11]];
return{t:'宮中設宴，皇上興致正濃，命嬪妃各展所長，勝者有重賞。你要獻哪一門技藝？',o:arts.map(([nm,ix])=>[`獻${nm}（你${m.at.sk[ix]|0}）`,()=>{
const rv=ids().sort(()=>Math.random()-.5).slice(0,3).map(i=>({n:S.npcs[i].n,s:S.npcs[i].at.sk[ix]+R(0,40)+(S.npcs[i].at.qi-50)/4}));
const me=m.at.sk[ix]+R(0,40)+(m.at.qi-50)/4+tf('perf')*8+dfv()*40,rk=1+rv.filter(r=>r.s>me).length;
const w=rv.concat([{n:'你',s:me}]).sort((a,b)=>b.s-a.s)[0].n;
if(rk==1){m.favor+=10;m.silver+=60;S.mood=cl(S.mood+5);S.fw=1;m.at.sk[ix]=cl(m.at.sk[ix]+1);return`你的${nm}技驚四座，奪得頭籌！皇上龍心大悅，重重有賞。`}
if(rk==2){m.favor+=4;m.silver+=25;return`你的${nm}位列第二，${w}拔得頭籌，你也得了彩頭。`}
if(rk==3){m.favor+=1;return`你的${nm}中規中矩，${w}勝出。`}
m.favor-=3;m.ally-=1;return`你的${nm}發揮失常，被${w}比了下去，有些丟臉。`}]).concat([['稱病不出席',()=>{m.hp+=2;return'你稱病告假，躲過了這場比試。'}]])}}
/* 朝堂廷辯 */
const STN=['引經據典','利害權衡','動之以情'];
function debateEv(r,w,l,top){const R_=S.reg,iq=S.me.at.iq,tr=P(.5+iq/300),act=R(0,2),hint=tr?act:R(0,2),hs=['對手手捧典籍，似已備足禮法依據','對手袖中似有賬冊，預備算清得失','對手面帶悲容，顯然要打感情牌'][hint];
return{t:`【廷辯・${top}】第${r}回合（${w}勝${l}負）：${R_.rvn}出班奏對。${hs}。你如何應對？`,o:STN.map((nm,i)=>[nm,()=>{const beat=(a,b)=>(a+1)%3===b;let res;if(i===act)res=ckp(.5+(iq-50)/250+((S.me.at.sk[13]||40)-40)/300+dfv())?1:0;else res=beat(i,act)?1:0;
const nw=w+res,nl=l+(1-res),txt=res?`你以「${nm}」駁倒對手，滿朝稱快。`:`對手的${STN[act]}壓過了你的「${nm}」。`;
if(nw<2&&nl<2){S.q.unshift(debateEv(r+1,nw,nl,top));return txt}
if(nw>=2){R_.pw+=6;R_.rv=cl(R_.rv-8);S.dw=1;S.cr.forEach(f=>f.lo=cl(f.lo+2));return txt+`廷辯告捷！「${top}」依你之議定下，威望大增。`}
R_.pw-=5;R_.rv=cl(R_.rv+4);return txt+`廷辯落敗，「${top}」依對手之議定下，你顏面受損。`}])}}
RGE.push(()=>P(.8)&&debateEv(1,0,0,pk(['鹽鐵專賣之爭','減免賦稅之議','北伐還是議和','選官制度改革','宗室歲祿削減'])));
function playMonth(){const ev=[];if(!S.reg&&S.t%12==2&&ids().length>=3)ev.push(feastEv());return ev}
function start(){start0();S.goal=GOAL;S.diff=DIFF;S.gdone=0;S.ag=[];if(DIFF==0)S.me.silver+=40;if(DIFF==2){S.me.silver=Math.max(0,S.me.silver-15);S.npcs.forEach(n=>n.host=cl(n.host+8))}render()}
function chrPanel(){let h='';if(S.reg&&S.rarc&&(CHF==0||CHF==1)){const e=S.rarc;h+=`<div class=cd><h3>新帝傳　${S.reg.k.n}</h3><div class=m>${RARC[e.k].k}（第${Math.min(e.s,4)}/4幕${e.done?'・完結':''}）</div></div>`}return h+chrPanel0()}
