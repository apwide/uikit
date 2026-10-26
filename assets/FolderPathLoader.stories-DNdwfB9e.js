import{d as c,f as i,s as m,t as u,k as r,q as h}from"./vue.esm-bundler-Bq7iw15p.js";import{_}from"./ContentLoader-DGb7uzNq.js";import{_ as f}from"./_plugin-vue_export-helper-DlAUqK2U.js";const x=["width","height"],L=["x","size"],g=["x","width","height"],p=c({__name:"FolderPathLoader",props:{size:{default:"normal"}},setup(t){const s=t,e=h(()=>s.size==="small"?17:20);return(y,C)=>(i(),m(_,{"view-box":"0 0 340 20"},{default:u(()=>[r("rect",{x:0,y:2,rx:8,ry:8,width:e.value*3,height:e.value-4},null,8,x),r("text",{x:e.value*3+5,y:2,fill:"black",class:"loader-text",size:t.size}," / ",8,L),r("rect",{x:e.value*3+15,y:2,rx:8,ry:8,width:e.value*4,height:e.value-4},null,8,g)]),_:1}))}}),F=f(p,[["__scopeId","data-v-affc3009"]]);p.__docgenInfo={exportName:"default",displayName:"FolderPathLoader",description:"",tags:{},props:[{name:"size",required:!1,type:{name:"union",elements:[{name:'"normal"'},{name:'"small"'}]},defaultValue:{func:!1,value:"'normal'"}}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/ContentLoader/FolderPathLoader.vue"]};const a=c({__name:"FolderPathLoader.story",setup(t){return(s,e)=>(i(),m(F))}});a.__docgenInfo={exportName:"default",displayName:"FolderPathLoader.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/ContentLoader/FolderPathLoader.story.vue"]};const v=`<template>
  <FolderPathLoader />
</template>

<script setup lang="ts">
import FolderPathLoader from '@/components/ContentLoader/FolderPathLoader.vue'
<\/script>
`,b={title:"ContentLoader",component:a,parameters:{docs:{source:{code:v}}}},P=t=>({components:{Comp:a},setup(){return{args:t}},template:'<Comp v-bind="args" />'}),o=P.bind({});var n,d,l;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(l=(d=o.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const N=["FolderPathLoader"];export{o as FolderPathLoader,N as __namedExportsOrder,b as default};
