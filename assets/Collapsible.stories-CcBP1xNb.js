import{d as F,V as A,w as H,j as n,p as S,l as E,m as j,r as u,q as w,f as l,k as c,A as f,t as d,L as z,E as b,s as B,n as L,F as g,G as y,J as C}from"./vue.esm-bundler-Bq7iw15p.js";import{f as M}from"./chunk-NAVWDHVN-nYOG0we8.js";import{K as R}from"./KitButton-s-nB5WLS.js";import{_ as N}from"./KitIcon-DzjcMukR.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./KitSpinner-C_FlB-Bt.js";const G={class:"kit-collapsible"},J={style:{"margin-left":"-4px"}},W={style:{width:"20px"}},I=F({__name:"KitCollapsible",props:{label:{},collapsed:{type:Boolean,default:!0},storeState:{type:Boolean}},setup(i){const r=i,v=w(()=>`KitCollapsible ${r.label}`.replaceAll(/[\W]/g,"_")),t=u(""),s=u(""),o=u(),p=u(null),a=w(()=>p.value!==null?p.value:r.collapsed),h=u();function x(e){return o.value?e?"0px":`${o.value.scrollHeight}px`:e?"0px":"fit-content"}async function K(){clearTimeout(h.value),p.value=!a.value,s.value=p.value?"initial":"hidden",await L(),q(),h.value=setTimeout(()=>{a.value||(s.value="initial",t.value="fit-content")},450),setTimeout(()=>{t.value=x(a.value)},50)}function O(){if(!r.storeState)return null;try{const e=sessionStorage.getItem(v.value);return e?e==="collapsed":null}catch(e){return console.warn("uikit::KitCollapsible",e),null}}function q(){if(r.storeState)try{sessionStorage.setItem(v.value,a.value?"collapsed":"expanded")}catch(e){console.warn("uikit::KitCollapsible",e)}}return A(()=>{p.value=O()}),H(a,()=>{a.value||(t.value=x(a.value))}),(e,U)=>(l(),n("div",G,[S(e.$slots,"trigger",{isCollapsed:a.value,toggle:K},()=>[c("div",J,[f(R,{appearance:"subtle",class:"kit-collapsible-trigger",spacing:"none",style:{"font-size":"1rem"},onClick:K},{"icon-before":d(()=>[c("span",W,[a.value?(l(),B(N,{key:0,type:"angle-right"})):(l(),B(N,{key:1,type:"angle-down"}))])]),default:d(()=>[z(" "+b(i.label),1)]),_:1})])],!0),a.value?j("",!0):(l(),n("div",{key:0,ref_key:"contentRef",ref:o,style:E({maxHeight:t.value,overflow:s.value}),class:"kit-collapsible-content"},[S(e.$slots,"default",{},void 0,!0)],4))]))}}),k=D(I,[["__scopeId","data-v-95a3c445"]]);I.__docgenInfo={exportName:"default",displayName:"KitCollapsible",description:"",tags:{},props:[{name:"label",required:!0,type:{name:"string"}},{name:"collapsed",required:!0,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"storeState",required:!1,type:{name:"boolean"}}],slots:[{name:"trigger",scoped:!0,bindings:[{name:"isCollapsed",title:"binding"},{name:"toggle",title:"binding"}]},{name:"default"}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/Collapsible/KitCollapsible.vue"]};const _=F({__name:"Collapsible.story",setup(i){const r=Array.from({length:4}).map(()=>M.lorem.paragraph(10));return(v,t)=>(l(),n("div",null,[t[0]||(t[0]=c("h3",null,"Closed by default",-1)),f(k,{label:"Closed by default",collapsed:!0},{default:d(()=>[(l(!0),n(g,null,y(C(r),(s,o)=>(l(),n("p",{key:o},b(s),1))),128))]),_:1}),t[1]||(t[1]=c("h3",null,"Open by default",-1)),f(k,{label:"Open by default",collapsed:!1},{default:d(()=>[(l(!0),n(g,null,y(C(r),(s,o)=>(l(),n("p",{key:o},b(s),1))),128))]),_:1}),t[2]||(t[2]=c("h3",null,"Keeping the state in session",-1)),f(k,{label:"Stores state",collapsed:!1,"store-state":""},{default:d(()=>[(l(!0),n(g,null,y(C(r),(s,o)=>(l(),n("p",{key:o},b(s),1))),128))]),_:1})]))}});_.__docgenInfo={exportName:"default",displayName:"Collapsible.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Collapsible/Collapsible.story.vue"]};const P=`<template>
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
`,ae={title:"Collapsible",component:_,parameters:{docs:{source:{code:P}}}},Q=i=>({components:{Comp:_},setup(){return{args:i}},template:'<Comp v-bind="args" />'}),m=Q.bind({});var T,V,$;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...($=(V=m.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};const se=["Collapsible"];export{m as Collapsible,se as __namedExportsOrder,ae as default};
