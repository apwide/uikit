import{d,f as r,j as a,F as _,G as f,s as p,t as x,k as o}from"./vue.esm-bundler-Bq7iw15p.js";import{_ as B}from"./ContentLoader-DGb7uzNq.js";const c=d({__name:"BulletListLoader",props:{items:{default:3}},setup(e){return(m,s)=>(r(),a("div",null,[(r(!0),a(_,null,f(e.items,L=>(r(),p(B,{key:L,"view-box":"0 0 300 24",height:"24px",width:"300px"},{default:x(()=>[...s[0]||(s[0]=[o("rect",{x:"0",y:"4",rx:3,ry:3,width:16,height:16},null,-1),o("rect",{x:"24",y:"4",rx:3,ry:3,width:40,height:16},null,-1),o("rect",{x:"72",y:"4",rx:3,ry:3,width:160,height:16},null,-1)])]),_:1}))),128))]))}});c.__docgenInfo={exportName:"default",displayName:"BulletListLoader",description:"",tags:{},props:[{name:"items",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"3"}}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/ContentLoader/BulletListLoader.vue"]};const n=d({__name:"BulletListLoader.story",setup(e){return(m,s)=>(r(),p(c))}});n.__docgenInfo={exportName:"default",displayName:"BulletListLoader.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/ContentLoader/BulletListLoader.story.vue"]};const g=`<template>
  <BulletListLoader />
</template>

<script setup lang="ts">
import BulletListLoader from '@/components/ContentLoader/BulletListLoader.vue'
<\/script>

<style scoped></style>
`,C={title:"ContentLoader",component:n,parameters:{docs:{source:{code:g}}}},h=e=>({components:{Comp:n},setup(){return{args:e}},template:'<Comp v-bind="args" />'}),t=h.bind({});var l,i,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(u=(i=t.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const v=["BulletListLoader"];export{t as BulletListLoader,v as __namedExportsOrder,C as default};
