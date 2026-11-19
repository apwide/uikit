import{d as p,k as r,l as n,J as g,K as h,u as c,v as _,m as a}from"./vue.esm-bundler-wNF6-2fW.js";import{_ as f}from"./ContentLoader-qRRmAXOX.js";const u=p({__name:"ListWithImageLoader",props:{items:{default:3}},setup(e){return(l,o)=>(r(),n("div",null,[(r(!0),n(g,null,h(e.items,L=>(r(),c(f,{key:L,"view-box":"0 0 140 54",height:"54px",width:"140px"},{default:_(()=>[...o[0]||(o[0]=[a("rect",{x:"0",y:"7",rx:3,ry:3,width:24,height:24},null,-1),a("rect",{x:32,y:"2",rx:3,ry:3,width:80,height:12},null,-1),a("rect",{x:32,y:19,rx:3,ry:3,width:100,height:16},null,-1)])]),_:1}))),128))]))}});u.__docgenInfo={exportName:"default",displayName:"ListWithImageLoader",description:"",tags:{},props:[{name:"items",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"3"}}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/ContentLoader/ListWithImageLoader.vue"]};const s=p({__name:"ListWithImageLoader.story",setup(e){return(l,o)=>(r(),c(u))}});s.__docgenInfo={exportName:"default",displayName:"ListWithImageLoader.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/ContentLoader/ListWithImageLoader.story.vue"]};const x=`<template>
  <ListWithImageLoader />
</template>

<script setup lang="ts">
import ListWithImageLoader from '@/components/ContentLoader/ListWithImageLoader.vue'
<\/script>
`,k={title:"ContentLoader",component:s,parameters:{docs:{source:{code:x}}}},I=e=>({components:{Comp:s},setup(){return{args:e}},template:'<Comp v-bind="args" />'}),t=I.bind({});var i,m,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const C=["ListWithImageLoader"];export{t as ListWithImageLoader,C as __namedExportsOrder,k as default};
