import{u as f}from"./states.adafc03a.js";import{d as v,i as n,q as s,C as m,y as o,x as c,t,s as r,F as b,v as a,D as u,n as h,z as x,G as k}from"./entry.94f92938.js";const y=t("thead",null,[t("tr",null,[t("th",{class:"text-left"}," Name "),t("th",{class:"text-left"}," Salary "),t("th",{class:"text-left"}," Status "),t("th",{class:"text-left"}," Application Date "),t("th",{class:"text-left"}," Actions ")])],-1),V=v({__name:"index",setup(C){const d=f().jobs;return(l,B)=>{const i=n("v-btn"),_=n("v-table"),p=n("v-container");return s(),m(p,null,{default:o(()=>[c(_,null,{default:o(()=>[y,t("tbody",null,[(s(!0),r(k,null,b(u(d),e=>(s(),r("tr",{key:e.name},[t("td",null,a(e.name),1),t("td",null,a(e.salary),1),t("td",null,a(e.status),1),t("td",null,a(e.dateApplication),1),t("td",null,[c(i,{color:"success",onClick:N=>("navigateTo"in l?l.navigateTo:u(h))("/jobs/"+e.id)},{default:o(()=>[x(" View ")]),_:2},1032,["onClick"])])]))),128))])]),_:1})]),_:1})}}});export{V as default};