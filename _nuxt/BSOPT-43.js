import{_ as h}from"./ClP36wnM.js";import{_ as x,j as v,u as y,r as g,f as w,k as b,c as o,a,F as k,l as D,h as d,o as l,b as V,w as j,t as m,p as L,e as R,x as S}from"./CC5TOCMU.js";import{u as E}from"./CETVsHuW.js";import{u as I,b as P}from"./ByVZUzQZ.js";const f=n=>(L("data-v-5016b6d2"),n=n(),R(),n),q={style:{"padding-top":"70px"},class:"relative min-h-screen"},A=f(()=>a("div",{class:"flex relative left-1/2 -translate-x-1/2 justify-between items-center"},[a("span",{class:"text-3xl relative font-semibold text-primary_text dark:text-primary_dark_text"},"Projects")],-1)),B={class:"relative left-1/2 -translate-x-1/2 flex mt-5 mb-10 flex-wrap gap-5"},N=["src"],C={class:"relative left-5 mt-4 text-xl font-semibold w-max"},F={class:"relative left-5 mt-5 mb-10 w-max flex-1"},U=f(()=>a("div",{class:"card-loading absolute top-0 left-0 flex flex-col bg-transparent w-full"},[a("div",{class:"rounded-md relative left-1/2 -translate-x-1/2 items-loading",style:{animation:"2.5s shine ease-in infinite","animation-delay":"0.25s"}}),a("h3",{class:"rounded-md relative left-5 mt-5 items-loading",style:{animation:"2.5s shine ease-in infinite","animation-delay":"0.25s"}}),a("span",{class:"relative left-5 mt-4 mb-10 rounded-md items-loading",style:{animation:"2.5s shine ease-in infinite","animation-delay":"0.25s"}})],-1)),z={__name:"index",setup(n){v();const _=y().public.baseURL;E({title:"My Project | Amirzan Portfolio"}),I(async()=>{const s=await P();e.fetchedViewData=s.data.viewData},"$olQ4jpDRvq");const e=g({fetchedViewData:null}),c=w([]);b(()=>e.fetchedViewData,()=>{(e==null?void 0:e.fetchedViewData)!==void 0&&typeof e.fetchedViewData=="object"&&Array.isArray(e.fetchedViewData)&&Object.keys(e.fetchedViewData).length>0&&S(()=>{e.fetchedViewData.forEach((s,i)=>{let r=c.value[i];p(r)})})},{immediate:!0});const p=s=>{const i=s.querySelector("img");i.addEventListener("load",()=>{const t=s.querySelector(".card-loading");t&&t.remove()});let r=!1;if(i.addEventListener("error",()=>{r=!0}),r&&(i.complete||i.naturalWidth===0)){const t=s.querySelector(".card-loading");t&&t.remove()}};return(s,i)=>{const r=h;return l(),o("section",q,[A,a("ul",B,[(l(!0),o(k,null,D(d(e).fetchedViewData,(t,u)=>(l(),o("li",{key:u,class:"cardI list-none relative",ref_for:!0,ref_key:"cardRefs",ref:c},[V(r,{to:{name:"ProjectsDetail",params:{link:t.link}},class:"mb-2 hover:bg-primary dark:hover:bg-primary_dark flex flex-col rounded-xl text-primary_text dark:text-primary_dark_text hover:text-white dark:hover:text-white"},{default:j(()=>[a("img",{src:d(_)+"/img/project/"+t.thumbnail,alt:"",class:"relative left-1/2 -translate-x-1/2 rounded-lg mt-3 h-40"},null,8,N),a("h3",C,m(t.nama),1),a("span",F,m(t.category),1)]),_:2},1032,["to"]),U],512))),128))])])}}},T=x(z,[["__scopeId","data-v-5016b6d2"]]);export{T as default};