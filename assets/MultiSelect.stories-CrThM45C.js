import{d as u,j as d,A as s,t as f,f as _,J as S,r as y}from"./vue.esm-bundler-bSWh6tln.js";import{f as v}from"./chunk-NAVWDHVN-nYOG0we8.js";import{K}from"./KitFieldGroup-CtYmuqBU.js";import{m as k}from"./helpers-CDDBEDKi.js";import{K as g}from"./KitSelect-CyppK1da.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./KitTextField-DL9zzDIB.js";import"./Popper-D7RkQmME.js";import"./EditorCloseIcon-DqsKPtqI.js";import"./IconWrapper-DdkEMErG.js";import"./KitSpinner-BNue20UW.js";const b={class:"wrapper"},c=u({__name:"MultiSelect.story",setup(t){const p=k(v.location.city)({},10),o=y([]);return(F,r)=>(_(),d("div",b,[s(K,{class:"multiselect",label:"MultiSelect"},{default:f(()=>[s(g,{modelValue:o.value,"onUpdate:modelValue":r[0]||(r[0]=m=>o.value=m),multi:"",options:S(p),placeholder:"Select city...","data-cy":"multiselect-simple"},null,8,["modelValue","options"])]),_:1})]))}}),a=x(c,[["__scopeId","data-v-e628ecdd"]]);c.__docgenInfo={exportName:"default",displayName:"MultiSelect.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Select/MultiSelect.story.vue"]};const M=`<template>
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
`,O={title:"Select",component:a,parameters:{docs:{source:{code:M}}}},C=t=>({components:{Comp:a},setup(){return{args:t}},template:'<Comp v-bind="args" />'}),e=C.bind({});var n,i,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const T=["MultiSelect"];export{e as MultiSelect,T as __namedExportsOrder,O as default};
