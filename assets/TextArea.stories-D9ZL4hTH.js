import{d as i,u,v as l,k as c,E as d,r as f}from"./vue.esm-bundler-wNF6-2fW.js";import{K as x}from"./KitFieldGroup-CpvzPD4B.js";import{K as v}from"./KitTextArea-7THohJrA.js";import"./dom-kh-IIGlH.js";import"./fieldGroup-CvGAAVzd.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./KitTextField-xvdMhYYp.js";const r=i({__name:"TextArea.story",setup(t){const o=f("candy");return(T,a)=>(c(),u(x,{label:"Label",required:""},{default:l(()=>[d(v,{rows:"5",modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=p=>o.value=p)},null,8,["modelValue"])]),_:1}))}});r.__docgenInfo={exportName:"default",displayName:"TextArea.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Form/TextArea.story.vue"]};const _=`<template>
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
`,G={title:"Form",component:r,parameters:{docs:{source:{code:_}}}},K=t=>({components:{Comp:r},setup(){return{args:t}},template:'<Comp v-bind="args" />'}),e=K.bind({});var n,s,m;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(m=(s=e.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const w=["TextArea"];export{e as TextArea,w as __namedExportsOrder,G as default};
