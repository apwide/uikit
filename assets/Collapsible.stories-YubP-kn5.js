import{d as $,X as H,w as A,l as n,t as S,q as E,s as z,r as u,c as w,k as l,m as c,E as f,v as d,N as M,I as b,u as B,n as R,J as g,K as y,B as C}from"./vue.esm-bundler-wNF6-2fW.js";import{f as j}from"./chunk-NAVWDHVN-nYOG0we8.js";import{K as D}from"./KitButton-CNA1GrKR.js";import{_ as N}from"./KitIcon-cw-FHNvL.js";import{_ as J}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./KitSpinner-D_AgCq8k.js";import"./index.es-BO1D75ye.js";const L={class:"kit-collapsible"},W={style:{"margin-left":"-4px"}},X={style:{width:"20px"}},O=$({__name:"KitCollapsible",props:{label:{},collapsed:{type:Boolean,default:!0},storeState:{type:Boolean}},setup(i){const r=i,v=w(()=>`KitCollapsible ${r.label}`.replaceAll(/[\W]/g,"_")),t=u(""),s=u(""),o=u(),p=u(null),a=w(()=>p.value!==null?p.value:r.collapsed),h=u();function x(e){return o.value?e?"0px":`${o.value.scrollHeight}px`:e?"0px":"fit-content"}async function K(){clearTimeout(h.value),p.value=!a.value,s.value=p.value?"initial":"hidden",await R(),F(),h.value=setTimeout(()=>{a.value||(s.value="initial",t.value="fit-content")},450),setTimeout(()=>{t.value=x(a.value)},50)}function q(){if(!r.storeState)return null;try{const e=sessionStorage.getItem(v.value);return e?e==="collapsed":null}catch(e){return console.warn("uikit::KitCollapsible",e),null}}function F(){if(r.storeState)try{sessionStorage.setItem(v.value,a.value?"collapsed":"expanded")}catch(e){console.warn("uikit::KitCollapsible",e)}}return H(()=>{p.value=q()}),A(a,()=>{a.value||(t.value=x(a.value))}),(e,Q)=>(l(),n("div",L,[S(e.$slots,"trigger",{isCollapsed:a.value,toggle:K},()=>[c("div",W,[f(D,{appearance:"subtle",class:"kit-collapsible-trigger",spacing:"none",style:{"font-size":"1rem"},onClick:K},{"icon-before":d(()=>[c("span",X,[a.value?(l(),B(N,{key:0,type:"angle-right"})):(l(),B(N,{key:1,type:"angle-down"}))])]),default:d(()=>[M(" "+b(i.label),1)]),_:1})])],!0),a.value?z("",!0):(l(),n("div",{key:0,ref_key:"contentRef",ref:o,style:E({maxHeight:t.value,overflow:s.value}),class:"kit-collapsible-content"},[S(e.$slots,"default",{},void 0,!0)],4))]))}}),k=J(O,[["__scopeId","data-v-95a3c445"]]);O.__docgenInfo={exportName:"default",displayName:"KitCollapsible",description:"",tags:{},props:[{name:"label",required:!0,type:{name:"string"}},{name:"collapsed",required:!0,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"storeState",required:!1,type:{name:"boolean"}}],slots:[{name:"trigger",scoped:!0,bindings:[{name:"isCollapsed",title:"binding"},{name:"toggle",title:"binding"}]},{name:"default"}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/Collapsible/KitCollapsible.vue"]};const _=$({__name:"Collapsible.story",setup(i){const r=Array.from({length:4}).map(()=>j.lorem.paragraph(10));return(v,t)=>(l(),n("div",null,[t[0]||(t[0]=c("h3",null,"Closed by default",-1)),f(k,{label:"Closed by default",collapsed:!0},{default:d(()=>[(l(!0),n(g,null,y(C(r),(s,o)=>(l(),n("p",{key:o},b(s),1))),128))]),_:1}),t[1]||(t[1]=c("h3",null,"Open by default",-1)),f(k,{label:"Open by default",collapsed:!1},{default:d(()=>[(l(!0),n(g,null,y(C(r),(s,o)=>(l(),n("p",{key:o},b(s),1))),128))]),_:1}),t[2]||(t[2]=c("h3",null,"Keeping the state in session",-1)),f(k,{label:"Stores state",collapsed:!1,"store-state":""},{default:d(()=>[(l(!0),n(g,null,y(C(r),(s,o)=>(l(),n("p",{key:o},b(s),1))),128))]),_:1})]))}});_.__docgenInfo={exportName:"default",displayName:"Collapsible.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Collapsible/Collapsible.story.vue"]};const G=`<template>
  <div>
    <h3>Closed by default</h3>
    <KitCollapsible label="Closed by default" :collapsed="true">
      <p v-for="(p, i) in texts" :key="i">
        {{ p }}
      </p>
    </KitCollapsible>
    <h3>Open by default</h3>
    <KitCollapsible label="Open by default" :collapsed="false">
      <p v-for="(p, i) in texts" :key="i">
        {{ p }}
      </p>
    </KitCollapsible>
    <h3>Keeping the state in session</h3>
    <KitCollapsible label="Stores state" :collapsed="false" store-state>
      <p v-for="(p, i) in texts" :key="i">
        {{ p }}
      </p>
    </KitCollapsible>
  </div>
</template>

<script setup lang="ts">
import { faker } from '@faker-js/faker'
import KitCollapsible from '@components/Collapsible/KitCollapsible.vue'

const texts = Array.from({ length: 4 }).map(() => faker.lorem.paragraph(10))
<\/script>
`,se={title:"Collapsible",component:_,parameters:{docs:{source:{code:G}}}},P=i=>({components:{Comp:_},setup(){return{args:i}},template:'<Comp v-bind="args" />'}),m=P.bind({});var T,I,V;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(V=(I=m.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};const oe=["Collapsible"];export{m as Collapsible,oe as __namedExportsOrder,se as default};
