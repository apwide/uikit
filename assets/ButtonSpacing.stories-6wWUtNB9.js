import{d as m,j as d,A as o,t as e,f as l,L as s}from"./vue.esm-bundler-Bq7iw15p.js";import{K as a}from"./KitButton-s-nB5WLS.js";import"./KitSpinner-C_FlB-Bt.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const B={class:"buttons"},r=m({__name:"ButtonSpacing.story",setup(p){return(_,t)=>(l(),d("div",B,[o(a,null,{default:e(()=>[...t[0]||(t[0]=[s("Default",-1)])]),_:1}),o(a,{spacing:"compact"},{default:e(()=>[...t[1]||(t[1]=[s("Compact",-1)])]),_:1}),o(a,{spacing:"none"},{default:e(()=>[...t[2]||(t[2]=[s("None",-1)])]),_:1})]))}});r.__docgenInfo={exportName:"default",displayName:"ButtonSpacing.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Button/ButtonSpacing.story.vue"]};const g=`<template>
  <div class="buttons">
    <KitButton>Default</KitButton>
    <KitButton spacing="compact">Compact</KitButton>
    <KitButton spacing="none">None</KitButton>
  </div>
</template>

<script setup lang="ts">
import KitButton from '@components/Button/KitButton.vue'
<\/script>

<style scoped></style>
`,x={title:"Button",component:r,parameters:{docs:{source:{code:g}}}},f=p=>({components:{Comp:r},setup(){return{args:p}},template:'<Comp v-bind="args" />'}),n=f.bind({});var i,u,c;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(c=(u=n.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const y=["ButtonSpacing"];export{n as ButtonSpacing,y as __namedExportsOrder,x as default};
