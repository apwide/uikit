import{d as _,j as h,A as i,t as n,J as C,f as T,L as g,E as s,k}from"./vue.esm-bundler-Bq7iw15p.js";import{f as a}from"./chunk-NAVWDHVN-nYOG0we8.js";import{K}from"./KitButton-s-nB5WLS.js";import{K as v}from"./KitTable-BDm3JMkh.js";import{_ as w}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./KitSpinner-C_FlB-Bt.js";import"./KitIcon-DzjcMukR.js";import"./KitDraggable-CBHrbWIN.js";import"./dom-kh-IIGlH.js";import"./ChevronDownIcon-B6u_Npdu.js";import"./IconWrapper-BpnstkGd.js";const x={class:"wrapper"},y=["href"],d=_({__name:"CustomCellsTable.story",setup(o){const u=[{id:"id",name:"ID",width:70},{id:"name",name:"Name"},{id:"job",name:"Job",minWidth:250},{id:"email",name:"Email",minWidth:250},{id:"action",width:130}],f=Array.from({length:100}).map((b,r)=>({id:r,name:a.person.firstName(),email:a.internet.email(),job:a.person.jobTitle()}));return(b,r)=>(T(),h("div",x,[i(v,{columns:u,data:C(f)},{email:n(({value:e})=>[k("a",{href:`mailto:${e}`},s(e),9,y)]),action:n(({row:e})=>[i(K,null,{default:n(()=>[g("Delete "+s(e.id),1)]),_:2},1024)]),_:1},8,["data"])]))}}),c=w(d,[["__scopeId","data-v-abee4e54"]]);d.__docgenInfo={exportName:"default",displayName:"CustomCellsTable.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Table/CustomCellsTable.story.vue"]};const B=`<template>
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
`,L={title:"Table",component:c,parameters:{docs:{source:{code:B}}}},N=o=>({components:{Comp:c},setup(){return{args:o}},template:'<Comp v-bind="args" />'}),t=N.bind({});var m,l,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const O=["CustomCellsTable"];export{t as CustomCellsTable,O as __namedExportsOrder,L as default};
