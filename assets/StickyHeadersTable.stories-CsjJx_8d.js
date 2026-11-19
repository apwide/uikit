import{d as l,l as u,E as b,B as f,k as _}from"./vue.esm-bundler-wNF6-2fW.js";import{f as a}from"./chunk-NAVWDHVN-nYOG0we8.js";import{K as k}from"./KitTable-CcIW8TuA.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./KitSpinner-D_AgCq8k.js";import"./KitIcon-cw-FHNvL.js";import"./index.es-BO1D75ye.js";import"./KitButton-CNA1GrKR.js";import"./KitDraggable-OqbFLZQ-.js";import"./dom-kh-IIGlH.js";import"./ChevronDownIcon-dMK6cwah.js";import"./IconWrapper-CCL1wCId.js";const T={class:"wrapper"},i=l({__name:"StickyHeadersTable.story",setup(n){const p=[{id:"id",name:"ID",width:70},{id:"name",name:"Name"},{id:"job",name:"Job"}],c=Array.from({length:100}).map((d,t)=>({id:t,name:a.person.firstName(),job:a.person.jobTitle()}));return(d,t)=>(_(),u("div",T,[b(k,{columns:p,data:f(c),"sticky-header":!0},null,8,["data"])]))}}),m=y(i,[["__scopeId","data-v-c19d478a"]]);i.__docgenInfo={exportName:"default",displayName:"StickyHeadersTable.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Table/StickyHeadersTable.story.vue"]};const g=`<template>
  <div class="wrapper">
    <KitTable :columns="columns" :data="data" :sticky-header="true" />
  </div>
</template>

<script setup lang="ts">
import { faker } from '@faker-js/faker'
import KitTable from '@/components/Table/KitTable.vue'

const columns = [
  {
    id: 'id',
    name: 'ID',
    width: 70
  },
  {
    id: 'name',
    name: 'Name'
  },
  {
    id: 'job',
    name: 'Job'
  }
]

const data = Array.from({ length: 100 }).map((_, index) => ({
  id: index,
  name: faker.person.firstName(),
  job: faker.person.jobTitle()
}))
<\/script>

<style scoped>
.wrapper {
  height: 300px;
}
</style>
`,A={title:"Table",component:m,parameters:{docs:{source:{code:g}}}},h=n=>({components:{Comp:m},setup(){return{args:n}},template:'<Comp v-bind="args" />'}),e=h.bind({});var r,o,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const D=["StickyHeadersTable"];export{e as StickyHeadersTable,D as __namedExportsOrder,A as default};
