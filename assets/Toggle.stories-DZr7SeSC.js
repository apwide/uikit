import{d as b,j as T,k as i,A as o,L as n,r as m,f}from"./vue.esm-bundler-Bq7iw15p.js";import{K as r}from"./KitToggle-CUBH32H8.js";import"./EditorDoneIcon-BwMeAnvt.js";import"./IconWrapper-BpnstkGd.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./EditorCloseIcon-DEX8M97N.js";import"./dom-kh-IIGlH.js";const p=b({__name:"Toggle.story",setup(u){const t=m(!1),s=m(!1),a=m(!0);return(z,e)=>(f(),T("div",null,[e[8]||(e[8]=i("h3",null,"Default",-1)),o(r,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=l=>t.value=l),"data-cy":"toggle"},null,8,["modelValue"]),e[9]||(e[9]=n("   ",-1)),o(r,{modelValue:s.value,"onUpdate:modelValue":e[1]||(e[1]=l=>s.value=l),size:"large"},null,8,["modelValue"]),e[10]||(e[10]=n("   ",-1)),o(r,{modelValue:a.value,"onUpdate:modelValue":e[2]||(e[2]=l=>a.value=l),disabled:""},null,8,["modelValue"]),e[11]||(e[11]=n("   ",-1)),o(r,{modelValue:a.value,"onUpdate:modelValue":e[3]||(e[3]=l=>a.value=l),disabled:"",size:"large"},null,8,["modelValue"]),e[12]||(e[12]=i("h3",null,"Primary",-1)),o(r,{modelValue:t.value,"onUpdate:modelValue":e[4]||(e[4]=l=>t.value=l),appearance:"primary"},null,8,["modelValue"]),e[13]||(e[13]=n("   ",-1)),o(r,{modelValue:s.value,"onUpdate:modelValue":e[5]||(e[5]=l=>s.value=l),appearance:"primary",size:"large"},null,8,["modelValue"]),e[14]||(e[14]=n("   ",-1)),o(r,{modelValue:a.value,"onUpdate:modelValue":e[6]||(e[6]=l=>a.value=l),appearance:"primary",disabled:""},null,8,["modelValue"]),e[15]||(e[15]=n("   ",-1)),o(r,{modelValue:a.value,"onUpdate:modelValue":e[7]||(e[7]=l=>a.value=l),appearance:"primary",disabled:"",size:"large"},null,8,["modelValue"])]))}});p.__docgenInfo={exportName:"default",displayName:"Toggle.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Toggle/Toggle.story.vue"]};const y=`<template>
  <div>
    <h3>Default</h3>
    <KitToggle v-model="regular" data-cy="toggle" />
    &nbsp;
    <KitToggle v-model="large" size="large" />
    &nbsp;
    <KitToggle v-model="disabled" disabled />
    &nbsp;
    <KitToggle v-model="disabled" disabled size="large" />

    <h3>Primary</h3>
    <KitToggle v-model="regular" appearance="primary" />
    &nbsp;
    <KitToggle v-model="large" appearance="primary" size="large" />
    &nbsp;
    <KitToggle v-model="disabled" appearance="primary" disabled />
    &nbsp;
    <KitToggle v-model="disabled" appearance="primary" disabled size="large" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import KitToggle from '@/components/Toggle/KitToggle.vue'

const regular = ref(false)
const large = ref(false)
const disabled = ref(true)
<\/script>

<style scoped></style>
`,E={title:"Toggle",component:p,parameters:{docs:{source:{code:y}}}},K=u=>({components:{Comp:p},setup(){return{args:u}},template:'<Comp v-bind="args" />'}),d=K.bind({});var g,v,V;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(V=(v=d.parameters)==null?void 0:v.docs)==null?void 0:V.source}}};const P=["Toggle"];export{d as Toggle,P as __namedExportsOrder,E as default};
