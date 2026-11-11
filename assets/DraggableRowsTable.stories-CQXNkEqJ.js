import{d as u,j as b,A as f,r as g,f as T}from"./vue.esm-bundler-Bq7iw15p.js";import{f as s}from"./chunk-NAVWDHVN-nYOG0we8.js";import{K as w}from"./KitTable-DwUGGsOF.js";import"./KitSpinner-C_FlB-Bt.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./KitIcon-Bq5qlawV.js";import"./index.es-BO1D75ye.js";import"./KitButton-s-nB5WLS.js";import"./KitDraggable-CBHrbWIN.js";import"./dom-kh-IIGlH.js";import"./ChevronDownIcon-B6u_Npdu.js";import"./IconWrapper-BpnstkGd.js";const o=u({__name:"DraggableRowsTable.story",setup(r){const p=Array.from({length:10}).map((e,t)=>({id:t,name:s.person.firstName(),job:s.person.jobTitle()})),d=[{id:"id",name:"ID",width:70},{id:"name",name:"Name"},{id:"job",name:"Job"}],a=g(p);function c(e){console.log(e),a.value=e}return(e,t)=>(T(),b("div",null,[f(w,{columns:d,data:a.value,"drag-rows":"",onRowsReordered:c},null,8,["data"])]))}});o.__docgenInfo={exportName:"default",displayName:"DraggableRowsTable.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Table/DraggableRowsTable.story.vue"]};const _=`<template>
  <div>
    <KitTable :columns="columns" :data="data" drag-rows @rows-reordered="reorder" />
  </div>
</template>

<script setup lang="ts">
import { faker } from '@faker-js/faker'
import { ref } from 'vue'
import KitTable from '@/components/Table/KitTable.vue'

const initialValues = Array.from({ length: 10 }).map((_, index) => ({
  id: index,
  name: faker.person.firstName(),
  job: faker.person.jobTitle()
}))

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

const data = ref(initialValues)

function reorder(rows) {
  // eslint-disable-next-line no-console
  console.log(rows)
  data.value = rows
}
<\/script>
`,I={title:"Table",component:o,parameters:{docs:{source:{code:_}}}},v=r=>({components:{Comp:o},setup(){return{args:r}},template:'<Comp v-bind="args" />'}),n=v.bind({});var i,m,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(l=(m=n.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const B=["DraggableRowsTable"];export{n as DraggableRowsTable,B as __namedExportsOrder,I as default};
