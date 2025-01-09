import{D as h,C as v}from"./DefaultBackground-Dgny-h3i.js";import{_ as u,b as l,c as d,h as t,j as w,n as U,k as x,r as I,a as _,t as a,d as o,w as s,l as C,m as R,F as f,f as b,i as S}from"./index-D2-5ID_3.js";const k={class:"slot-wrapper"},B={__name:"InfoCardWithBg",props:{isBlur:{type:Boolean,default:!1},bgImage:{type:String,default:""}},setup(n){const e=n;return(i,m)=>(l(),d("div",{id:"card",class:U({"blur-effect":e.isBlur,"transparent-effect":!e.isBlur}),style:x({backgroundImage:e.bgImage?`url(${e.bgImage})`:"none"})},[t("div",k,[w(i.$slots,"default",{},void 0,!0)])],6))}},L=u(B,[["__scopeId","data-v-a7a515fb"]]),V={class:"image-container"},q=["src"],D={class:"card-content"},$={class:"card-title"},j={class:"card-footer"},z={class:"card-category"},M={class:"card-year"},K={style:{"font-size":"50px","margin-bottom":"10px"}},N={style:{"font-size":"20px",color:"#777"}},E={style:{"font-size":"30px","text-align":"left",color:"#333"}},F={__name:"ImageCard",props:{imageUrl:{type:String,required:!0},title:{type:String,required:!0},year:{type:String,required:!0},category:{type:String,required:!0},description:{type:String,required:!0}},setup(n){const e=n,i=I(!1),m=()=>{i.value=!0},r=()=>{i.value=!1};return(g,c)=>{const p=_("el-col"),y=_("el-row");return l(),d(f,null,[t("div",{class:"card",onClick:m},[t("div",V,[t("img",{src:e.imageUrl,alt:"card image",class:"card-image"},null,8,q)]),t("div",D,[t("h3",$,a(e.title),1),t("div",j,[t("span",z,a(e.category),1),t("span",M,a(e.year),1)])])]),i.value?(l(),d("div",{key:0,class:"modal-overlay",onClick:r},[t("div",{class:"modal-content",onClick:c[0]||(c[0]=C(()=>{},["stop"]))},[o(L,{bgImage:e.imageUrl,title:e.title,year:e.year,category:e.category},{default:s(()=>[o(y,{style:{height:"100%",width:"100%"}},{default:s(()=>[o(p,{span:8,style:{height:"100%",display:"flex","flex-direction":"column","justify-content":"center"}},{default:s(()=>[t("div",K,a(e.title),1),t("div",N,a(e.year)+" ··· "+a(e.category),1)]),_:1}),o(p,{span:1,style:{height:"100%",display:"flex","flex-direction":"column","justify-content":"center"}},{default:s(()=>c[1]||(c[1]=[t("div",{style:{"border-left":"2px dashed #ccc",height:"80%"}},null,-1)])),_:1}),o(p,{span:15,style:{height:"100%",display:"flex","flex-direction":"column","justify-content":"center"}},{default:s(()=>[t("div",E,a(e.description),1)]),_:1})]),_:1})]),_:1},8,["bgImage","title","year","category"])])])):R("",!0)],64)}}},W=u(F,[["__scopeId","data-v-646d00aa"]]),P={class:"content"},Q={__name:"ComicView",setup(n){const e=[{title:"败犬女主太多了",year:"2024",category:"动作",imageUrl:new URL(""+new URL("败犬女主太多了-DIiSRKqV.png",import.meta.url).href,import.meta.url).href,description:"洒脱的女生很有魅力"},{title:"小魔女学园",year:"2017",category:"冒险",imageUrl:new URL(""+new URL("小魔女学园-CQ4MdEVP.jpg",import.meta.url).href,import.meta.url).href,description:"相信的心就是你的魔法！"},{title:"败犬女主太多了",year:"2024",category:"动作",imageUrl:new URL(""+new URL("败犬女主太多了-DIiSRKqV.png",import.meta.url).href,import.meta.url).href},{title:"败犬女主太多了",year:"2024",category:"动作",imageUrl:new URL(""+new URL("败犬女主太多了-DIiSRKqV.png",import.meta.url).href,import.meta.url).href},{title:"败犬女主太多了",year:"2024",category:"动作",imageUrl:new URL(""+new URL("败犬女主太多了-DIiSRKqV.png",import.meta.url).href,import.meta.url).href}];return(i,m)=>(l(),b(h,null,{default:s(()=>[t("div",P,[o(v,{id:"card"},{default:s(()=>[(l(),d(f,null,S(e,(r,g)=>o(W,{key:g,title:r.title,year:r.year,category:r.category,"image-url":r.imageUrl,description:r.description},null,8,["title","year","category","image-url","description"])),64))]),_:1})])]),_:1}))}},H=u(Q,[["__scopeId","data-v-bc039dee"]]);export{H as default};
