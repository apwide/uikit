import{d as _,l as h,E as i,v as n,B as C,k as T,N as g,I as s,m as k}from"./vue.esm-bundler-wNF6-2fW.js";import{f as a}from"./chunk-NAVWDHVN-nYOG0we8.js";import{K as v}from"./KitButton-CNA1GrKR.js";import{K}from"./KitTable-CcIW8TuA.js";import{_ as w}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./KitSpinner-D_AgCq8k.js";import"./KitIcon-cw-FHNvL.js";import"./index.es-BO1D75ye.js";import"./KitDraggable-OqbFLZQ-.js";import"./dom-kh-IIGlH.js";import"./ChevronDownIcon-dMK6cwah.js";import"./IconWrapper-CCL1wCId.js";const x={class:"wrapper"},B=["href"],d=_({__name:"CustomCellsTable.story",setup(o){const u=[{id:"id",name:"ID",width:70},{id:"name",name:"Name"},{id:"job",name:"Job",minWidth:250},{id:"email",name:"Email",minWidth:250},{id:"action",width:130}],f=Array.from({length:100}).map((b,r)=>({id:r,name:a.person.firstName(),email:a.internet.email(),job:a.person.jobTitle()}));return(b,r)=>(T(),h("div",x,[i(K,{columns:u,data:C(f)},{email:n(({value:e})=>[k("a",{href:`mailto:${e}`},s(e),9,B)]),action:n(({row:e})=>[i(v,null,{default:n(()=>[g("Delete "+s(e.id),1)]),_:2},1024)]),_:1},8,["data"])]))}}),c=w(d,[["__scopeId","data-v-abee4e54"]]);d.__docgenInfo={exportName:"default",displayName:"CustomCellsTable.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Table/CustomCellsTable.story.vue"]};const N=`<template>
  <div class="wrapper">
    <KitTable :columns="columns" :data="data">
      <template #email="{ value }">
        <a :href="\`mailto:\${value}\`">{{ value }}</a>
      </template>
      <template #action="{ row }">
        <KitButton>Delete {{ row.id }}</KitButton>
      </template>
    </KitTable>
  </div>
</template>

<script setup lang="ts">
import { faker } from '@faker-js/faker'
import KitButton from '@components/Button/KitButton.vue'
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
    name: 'Job',
    minWidth: 250
  },
  {
    id: 'email',
    name: 'Email',
    minWidth: 250
  },
  {
    id: 'action',
    width: 130
  }
]

const data = Array.from({ length: 100 }).map((_, index) => ({
  id: index,
  name: faker.person.firstName(),
  email: faker.internet.email(),
  job: faker.person.jobTitle()
}))
<\/script>

<style scoped>
.wrapper {
  height: 300px;
}
</style>
`,q={title:"Table",component:c,parameters:{docs:{source:{code:N}}}},y=o=>({components:{Comp:c},setup(){return{args:o}},template:'<Comp v-bind="args" />'}),t=y.bind({});var m,l,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const z=["CustomCellsTable"];export{t as CustomCellsTable,z as __namedExportsOrder,q as default};
