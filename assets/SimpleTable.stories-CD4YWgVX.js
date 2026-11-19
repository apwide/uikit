import{d,l as c,E as u,B as b,k as f}from"./vue.esm-bundler-wNF6-2fW.js";import{f as a}from"./chunk-NAVWDHVN-nYOG0we8.js";import{K as T}from"./KitTable-CcIW8TuA.js";import"./KitSpinner-D_AgCq8k.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./KitIcon-cw-FHNvL.js";import"./index.es-BO1D75ye.js";import"./KitButton-CNA1GrKR.js";import"./KitDraggable-OqbFLZQ-.js";import"./dom-kh-IIGlH.js";import"./ChevronDownIcon-dMK6cwah.js";import"./IconWrapper-CCL1wCId.js";const n=d({__name:"SimpleTable.story",setup(o){const i=[{id:"id",name:"ID",width:70},{id:"name",name:"Name"},{id:"job",name:"Job"}],p=Array.from({length:10}).map((l,t)=>({id:t,name:a.person.firstName(),job:a.person.jobTitle()}));return(l,t)=>(f(),c("div",null,[u(T,{columns:i,data:b(p)},null,8,["data"])]))}});n.__docgenInfo={exportName:"default",displayName:"SimpleTable.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Table/SimpleTable.story.vue"]};const _=`<template>
  <div>
    <KitTable :columns="columns" :data="data" />
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

const data = Array.from({ length: 10 }).map((_, index) => ({
  id: index,
  name: faker.person.firstName(),
  job: faker.person.jobTitle()
}))
<\/script>
`,E={title:"Table",component:n,parameters:{docs:{source:{code:_}}}},k=o=>({components:{Comp:n},setup(){return{args:o}},template:'<Comp v-bind="args" />'}),e=k.bind({});var r,m,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const I=["SimpleTable"];export{e as SimpleTable,I as __namedExportsOrder,E as default};
