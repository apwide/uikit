import{d as u,j as b,A as f,r as g,f as T}from"./vue.esm-bundler-bSWh6tln.js";import{f as s}from"./chunk-NAVWDHVN-nYOG0we8.js";import{K as w}from"./KitTable-kJJj6_bH.js";import"./KitSpinner-BNue20UW.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./KitIcon-IXZtQfsY.js";import"./KitButton-DXemt05q.js";import"./KitDraggable-rwHm5TPS.js";import"./dom-kh-IIGlH.js";import"./ChevronDownIcon-BpZDYj0q.js";import"./IconWrapper-DdkEMErG.js";const o=u({__name:"DraggableRowsTable.story",setup(r){const d=Array.from({length:10}).map((e,t)=>({id:t,name:s.person.firstName(),job:s.person.jobTitle()})),p=[{id:"id",name:"ID",width:70},{id:"name",name:"Name"},{id:"job",name:"Job"}],a=g(d);function c(e){console.log(e),a.value=e}return(e,t)=>(T(),b("div",null,[f(w,{columns:p,data:a.value,"drag-rows":"",onRowsReordered:c},null,8,["data"])]))}});o.__docgenInfo={exportName:"default",displayName:"DraggableRowsTable.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Table/DraggableRowsTable.story.vue"]};const _=`<template>
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
`,A={title:"Table",component:o,parameters:{docs:{source:{code:_}}}},v=r=>({components:{Comp:o},setup(){return{args:r}},template:'<Comp v-bind="args" />'}),n=v.bind({});var i,m,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(l=(m=n.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const I=["DraggableRowsTable"];export{n as DraggableRowsTable,I as __namedExportsOrder,A as default};
