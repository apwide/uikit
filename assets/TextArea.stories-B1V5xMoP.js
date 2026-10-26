import{d as i,s as l,t as u,f as c,A as d,r as f}from"./vue.esm-bundler-Bq7iw15p.js";import{K as x}from"./KitFieldGroup-DJlr_tEu.js";import{K as v}from"./KitTextArea-DFHepCvO.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./KitTextField-CorFKCZO.js";const r=i({__name:"TextArea.story",setup(t){const o=f("candy");return(K,a)=>(c(),l(x,{label:"Label",required:""},{default:u(()=>[d(v,{rows:"5",modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=p=>o.value=p)},null,8,["modelValue"])]),_:1}))}});r.__docgenInfo={exportName:"default",displayName:"TextArea.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Form/TextArea.story.vue"]};const _=`<template>
  <KitFieldGroup label="Label" required>
    <KitTextArea rows="5" v-model="value" />
  </KitFieldGroup>
</template>

<script setup lang="ts">
import KitFieldGroup from '@components/Form/KitFieldGroup.vue'
import KitTextArea from '@components/Form/KitTextArea.vue'
import { ref } from 'vue'

const value = ref('candy')
<\/script>
`,y={title:"Form",component:r,parameters:{docs:{source:{code:_}}}},A=t=>({components:{Comp:r},setup(){return{args:t}},template:'<Comp v-bind="args" />'}),e=A.bind({});var n,s,m;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(m=(s=e.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const k=["TextArea"];export{e as TextArea,k as __namedExportsOrder,y as default};
