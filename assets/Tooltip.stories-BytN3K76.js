import{d as _,l as s,J as f,K as T,k as r,E as p,v as a,N as g}from"./vue.esm-bundler-wNF6-2fW.js";import{K as v}from"./KitButton-CNA1GrKR.js";import{T as b}from"./Tooltip-3GAGjwzl.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./KitSpinner-D_AgCq8k.js";import"./Popper-Cj7Zy2p4.js";const x={class:"buttons-group"},c=_({__name:"Tooltip.story",setup(o){const d=["top","right","bottom","left"];return(C,e)=>(r(),s("div",x,[(r(),s(f,null,T(d,n=>p(b,{key:n,"append-to-body":"",placement:n,label:"Hello World!"},{default:a(()=>[p(v,null,{default:a(()=>[...e[0]||(e[0]=[g("Hover over me!",-1)])]),_:1})]),_:1},8,["placement"])),64))]))}}),u=y(c,[["__scopeId","data-v-ec7e3d69"]]);c.__docgenInfo={exportName:"default",displayName:"Tooltip.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Tooltip/Tooltip.story.vue"]};const k=`<template>
  <div class="buttons-group">
    <Tooltip
      v-for="placement in placements"
      :key="placement"
      append-to-body
      :placement="placement"
      label="Hello World!">
      <KitButton>Hover over me!</KitButton>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
import KitButton from '@components/Button/KitButton.vue'
import Tooltip from '@/components/Tooltip/Tooltip.vue'

const placements = ['top', 'right', 'bottom', 'left']
<\/script>
<style scoped>
.buttons-group {
  max-width: 800px;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
}
</style>
`,F={title:"Tooltip",component:u,parameters:{docs:{source:{code:k}}}},B=o=>({components:{Comp:u},setup(){return{args:o}},template:'<Comp v-bind="args" />'}),t=B.bind({});var l,i,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const I=["Tooltip"];export{t as Tooltip,I as __namedExportsOrder,F as default};
