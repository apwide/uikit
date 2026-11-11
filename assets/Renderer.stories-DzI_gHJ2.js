import{d as h,r as i,j as v,k as t,A as n,f as g}from"./vue.esm-bundler-Bq7iw15p.js";import{f as s}from"./chunk-NAVWDHVN-nYOG0we8.js";import{K as r}from"./KitMultiSelectRenderer-DcgQEicF.js";import{_ as w}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./utils-BvVMKmag.js";import"./Popper-CqRkecYS.js";import"./KitButton-s-nB5WLS.js";import"./KitSpinner-C_FlB-Bt.js";const _={class:"limited-width"},R={class:"limited-width"},c=h({__name:"Renderer.story",setup(o){s.seed(1);const d=i(Array.from({length:10},()=>s.lorem.word())),f=i(Array.from({length:10},()=>s.lorem.sentence()));return(x,e)=>(g(),v("div",null,[e[0]||(e[0]=t("h5",null,"Full width",-1)),t("p",null,[n(r,{"selected-values":d.value},null,8,["selected-values"])]),e[1]||(e[1]=t("h5",null,"Empty",-1)),t("p",null,[n(r,{"selected-values":[]})]),e[2]||(e[2]=t("h5",null,"400px width",-1)),t("p",_,[n(r,{"selected-values":d.value},null,8,["selected-values"])]),e[3]||(e[3]=t("h5",null,"400px width, long labels",-1)),t("p",R,[n(r,{"selected-values":f.value},null,8,["selected-values"])])]))}}),m=w(c,[["__scopeId","data-v-5499509c"]]);c.__docgenInfo={exportName:"default",displayName:"Renderer.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/InlineEdit/MultiSelect/Renderer.story.vue"]};const k=`<template>
  <div>
    <h5>Full width</h5>
    <p>
      <KitMultiSelectRenderer :selected-values="selectedValues" />
    </p>
    <h5>Empty</h5>
    <p>
      <KitMultiSelectRenderer :selected-values="[]" />
    </p>
    <h5>400px width</h5>
    <p class="limited-width">
      <KitMultiSelectRenderer :selected-values="selectedValues" />
    </p>
    <h5>400px width, long labels</h5>
    <p class="limited-width">
      <KitMultiSelectRenderer :selected-values="selectedValuesLong" />
    </p>
  </div>
</template>

<script setup lang="ts">
import { faker } from '@faker-js/faker'
import { ref } from 'vue'
import KitMultiSelectRenderer from '@/components/field-renderers/KitMultiSelectRenderer.vue'

faker.seed(1)
const selectedValues = ref(Array.from({ length: 10 }, () => faker.lorem.word()))
const selectedValuesLong = ref(Array.from({ length: 10 }, () => faker.lorem.sentence()))
<\/script>

<style scoped>
.limited-width {
  width: 400px;
}
</style>
`,I={title:"InlineEdit/MultiSelect",component:m,parameters:{docs:{source:{code:k}}}},y=o=>({components:{Comp:m},setup(){return{args:o}},template:'<Comp v-bind="args" />'}),l=y.bind({});var a,p,u;l.parameters={...l.parameters,docs:{...(a=l.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(u=(p=l.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const N=["Renderer"];export{l as Renderer,N as __namedExportsOrder,I as default};
