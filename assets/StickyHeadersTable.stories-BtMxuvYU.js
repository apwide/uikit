import{d as l,j as u,A as b,J as f,f as _}from"./vue.esm-bundler-bSWh6tln.js";import{f as a}from"./chunk-NAVWDHVN-nYOG0we8.js";import{K as k}from"./KitTable-kJJj6_bH.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./KitSpinner-BNue20UW.js";import"./KitIcon-IXZtQfsY.js";import"./KitButton-DXemt05q.js";import"./KitDraggable-rwHm5TPS.js";import"./dom-kh-IIGlH.js";import"./ChevronDownIcon-BpZDYj0q.js";import"./IconWrapper-DdkEMErG.js";const T={class:"wrapper"},i=l({__name:"StickyHeadersTable.story",setup(n){const p=[{id:"id",name:"ID",width:70},{id:"name",name:"Name"},{id:"job",name:"Job"}],c=Array.from({length:100}).map((d,t)=>({id:t,name:a.person.firstName(),job:a.person.jobTitle()}));return(d,t)=>(_(),u("div",T,[b(k,{columns:p,data:f(c),"sticky-header":!0},null,8,["data"])]))}}),m=y(i,[["__scopeId","data-v-c19d478a"]]);i.__docgenInfo={exportName:"default",displayName:"StickyHeadersTable.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Table/StickyHeadersTable.story.vue"]};const g=`<template>
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
`,J={title:"Table",component:m,parameters:{docs:{source:{code:g}}}},h=n=>({components:{Comp:m},setup(){return{args:n}},template:'<Comp v-bind="args" />'}),e=h.bind({});var r,o,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const B=["StickyHeadersTable"];export{e as StickyHeadersTable,B as __namedExportsOrder,J as default};
