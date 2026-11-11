import{d as a,j as m,A as e,f as c}from"./vue.esm-bundler-Bq7iw15p.js";import{S as n}from"./KitSpinner-C_FlB-Bt.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const s=a({__name:"Spinner.story",setup(t){return(l,S)=>(c(),m("div",null,[e(n,{size:"icon"}),e(n,{size:"small"}),e(n,{size:"medium"}),e(n,{size:"large"})]))}});s.__docgenInfo={exportName:"default",displayName:"Spinner.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Spinner/Spinner.story.vue"]};const d=`<template>
  <div>
    <Spinner size="icon" />
    <Spinner size="small" />
    <Spinner size="medium" />
    <Spinner size="large" />
  </div>
</template>

<script setup lang="ts">
import Spinner from '@components/Spinner/KitSpinner.vue'
<\/script>
`,z={title:"Spinner",component:s,parameters:{docs:{source:{code:d}}}},u=t=>({components:{Comp:s},setup(){return{args:t}},template:'<Comp v-bind="args" />'}),r=u.bind({});var o,i,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const v=["Spinner"];export{r as Spinner,v as __namedExportsOrder,z as default};
