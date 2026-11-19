import{d as u,l as d,E as s,v as f,k as _,B as S,r as y}from"./vue.esm-bundler-wNF6-2fW.js";import{f as v}from"./chunk-NAVWDHVN-nYOG0we8.js";import{K as k}from"./KitFieldGroup-CpvzPD4B.js";import{m as K}from"./helpers-CDDBEDKi.js";import{K as g}from"./KitSelect-CEwbDo_J.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./dom-kh-IIGlH.js";import"./fieldGroup-CvGAAVzd.js";import"./KitTextField-xvdMhYYp.js";import"./Popper-Cj7Zy2p4.js";import"./EditorCloseIcon-aMuF3bKr.js";import"./IconWrapper-CCL1wCId.js";import"./KitSpinner-D_AgCq8k.js";const b={class:"wrapper"},c=u({__name:"MultiSelect.story",setup(t){const p=K(v.location.city)({},10),o=y([]);return(F,r)=>(_(),d("div",b,[s(k,{class:"multiselect",label:"MultiSelect"},{default:f(()=>[s(g,{modelValue:o.value,"onUpdate:modelValue":r[0]||(r[0]=m=>o.value=m),multi:"",options:S(p),placeholder:"Select city...","data-cy":"multiselect-simple"},null,8,["modelValue","options"])]),_:1})]))}}),a=x(c,[["__scopeId","data-v-e628ecdd"]]);c.__docgenInfo={exportName:"default",displayName:"MultiSelect.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Select/MultiSelect.story.vue"]};const M=`<template>
  <div class="wrapper">
    <KitFieldGroup class="multiselect" label="MultiSelect">
      <KitSelect v-model="basic" multi :options="cities" placeholder="Select city..." data-cy="multiselect-simple" />
    </KitFieldGroup>
  </div>
</template>

<script setup lang="ts">
import { faker } from '@faker-js/faker'
import { ref } from 'vue'
import KitFieldGroup from '@components/Form/KitFieldGroup.vue'
import { many } from '../api-mocks/helpers'
import KitSelect from '@/components/Select/KitSelect.vue'

const cities = many(faker.location.city)({}, 10)

const basic = ref([])
<\/script>
<style scoped>
.wrapper {
  padding: 20px;
}

.multiselect {
  max-width: 500px;
}
</style>
`,z={title:"Select",component:a,parameters:{docs:{source:{code:M}}}},C=t=>({components:{Comp:a},setup(){return{args:t}},template:'<Comp v-bind="args" />'}),e=C.bind({});var i,n,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const A=["MultiSelect"];export{e as MultiSelect,A as __namedExportsOrder,z as default};
