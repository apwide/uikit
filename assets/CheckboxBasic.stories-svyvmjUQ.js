import{d as C,j as x,k as t,A as n,t as s,E as p,r as c,f as V,L as u}from"./vue.esm-bundler-bSWh6tln.js";import{K as r}from"./KitCheckbox-PGmgYjGS.js";import"./IconWrapper-DdkEMErG.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const i=C({__name:"CheckboxBasic.story",setup(m){const a=c(!0),l=c([]);return(B,e)=>(V(),x("div",null,[e[10]||(e[10]=t("h3",null,"Boolean value",-1)),n(r,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=o=>a.value=o)},{default:s(()=>[...e[5]||(e[5]=[u(" Basic Checkbox ",-1)])]),_:1},8,["modelValue"]),t("p",null,"value: "+p(a.value),1),e[11]||(e[11]=t("h3",null,"Array value",-1)),n(r,{modelValue:l.value,"onUpdate:modelValue":e[1]||(e[1]=o=>l.value=o),value:"foo"},{default:s(()=>[...e[6]||(e[6]=[u(" foo ",-1)])]),_:1},8,["modelValue"]),n(r,{modelValue:l.value,"onUpdate:modelValue":e[2]||(e[2]=o=>l.value=o),value:"bar"},{default:s(()=>[...e[7]||(e[7]=[u(" bar ",-1)])]),_:1},8,["modelValue"]),n(r,{modelValue:l.value,"onUpdate:modelValue":e[3]||(e[3]=o=>l.value=o),value:"baz"},{default:s(()=>[...e[8]||(e[8]=[u(" baz ",-1)])]),_:1},8,["modelValue"]),t("p",null,"value: "+p(l.value),1),e[12]||(e[12]=t("h3",null,"Disabled",-1)),n(r,{modelValue:a.value,"onUpdate:modelValue":e[4]||(e[4]=o=>a.value=o),disabled:!0},{default:s(()=>[...e[9]||(e[9]=[u(" Basic Checkbox ",-1)])]),_:1},8,["modelValue"])]))}});i.__docgenInfo={exportName:"default",displayName:"CheckboxBasic.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Checkbox/CheckboxBasic.story.vue"]};const f=`<template>
  <div>
    <h3>Boolean value</h3>
    <KitCheckbox v-model="checked"> Basic Checkbox </KitCheckbox>
    <p>value: {{ checked }}</p>
    <h3>Array value</h3>
    <KitCheckbox v-model="checkedValues" value="foo"> foo </KitCheckbox>
    <KitCheckbox v-model="checkedValues" value="bar"> bar </KitCheckbox>
    <KitCheckbox v-model="checkedValues" value="baz"> baz </KitCheckbox>
    <p>value: {{ checkedValues }}</p>
    <h3>Disabled</h3>
    <KitCheckbox v-model="checked" :disabled="true"> Basic Checkbox </KitCheckbox>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import KitCheckbox from '@/components/Checkbox/KitCheckbox.vue'

const checked = ref(true)
const checkedValues = ref([])
<\/script>
`,U={title:"Checkbox",component:i,parameters:{docs:{source:{code:f}}}},h=m=>({components:{Comp:i},setup(){return{args:m}},template:'<Comp v-bind="args" />'}),d=h.bind({});var k,b,v;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(v=(b=d.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const z=["CheckboxBasic"];export{d as CheckboxBasic,z as __namedExportsOrder,U as default};
