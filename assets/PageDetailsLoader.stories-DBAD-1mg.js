import{d as l,f as s,j as n,F as h,G as x,A as m,t as L,k as t}from"./vue.esm-bundler-Bq7iw15p.js";import{_ as y}from"./ContentLoader-DGb7uzNq.js";const f=["width"],w=["width"],u=l({__name:"PageDetailsLoader",setup(o){const a=()=>Math.random()*.30000000000000004+.7;return(_,e)=>(s(),n("div",null,[(s(),n(h,null,x(3,g=>m(y,{key:g,"view-box":"0 0 840 72",height:"72px",width:"100%"},{default:L(()=>[e[0]||(e[0]=t("rect",{x:"0",y:"0",rx:"3",ry:"3",width:"178",height:"14"},null,-1)),t("rect",{x:"0",y:"22",rx:"3",ry:"3",width:217*a(),height:"20"},null,8,f),e[1]||(e[1]=t("rect",{x:"420",y:"0",rx:"3",ry:"3",width:"228",height:"14"},null,-1)),t("rect",{x:"420",y:"22",rx:"3",ry:"3",width:157*a(),height:"20"},null,8,w)]),_:1})),64))]))}});u.__docgenInfo={exportName:"default",displayName:"PageDetailsLoader",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/src/components/ContentLoader/PageDetailsLoader.vue"]};const D={style:{"max-width":"800px"}},i=l({__name:"PageDetailsLoader.story",setup(o){return(a,_)=>(s(),n("div",D,[m(u)]))}});i.__docgenInfo={exportName:"default",displayName:"PageDetailsLoader.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/ContentLoader/PageDetailsLoader.story.vue"]};const P=`<template>
  <div style="max-width: 800px">
    <PageDetailsLoader />
  </div>
</template>

<script setup lang="ts">
import PageDetailsLoader from '@/components/ContentLoader/PageDetailsLoader.vue'
<\/script>
`,N={title:"ContentLoader",component:i,parameters:{docs:{source:{code:P}}}},C=o=>({components:{Comp:i},setup(){return{args:o}},template:'<Comp v-bind="args" />'}),r=C.bind({});var d,p,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const b=["PageDetailsLoader"];export{r as PageDetailsLoader,b as __namedExportsOrder,N as default};
