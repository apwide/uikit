import{d as b,r as s,l as T,E as v,k as _}from"./vue.esm-bundler-wNF6-2fW.js";import{f as t}from"./chunk-NAVWDHVN-nYOG0we8.js";import{K as k}from"./KitTable-CcIW8TuA.js";import"./KitSpinner-D_AgCq8k.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./KitIcon-cw-FHNvL.js";import"./index.es-BO1D75ye.js";import"./KitButton-CNA1GrKR.js";import"./KitDraggable-OqbFLZQ-.js";import"./dom-kh-IIGlH.js";import"./ChevronDownIcon-dMK6cwah.js";import"./IconWrapper-CCL1wCId.js";const r=b({__name:"InfiniteScrollTable.story",setup(i){const p=[{id:"id",name:"ID",width:70},{id:"name",name:"Name"},{id:"job",name:"Job"}],e=s(Array.from({length:10}).map((o,n)=>({id:n,name:t.person.firstName(),job:t.person.jobTitle()}))),l=s(!0);function f(o){setTimeout(()=>{const n=e.value[e.value.length-1].id;n>30?l.value=!1:e.value=[...e.value,...Array.from({length:10}).map((h,u)=>({id:n+1+u,name:t.person.firstName(),job:t.person.jobTitle()}))],o()},1e3)}return(o,n)=>(_(),T("div",null,[v(k,{columns:p,data:e.value,"infinite-scroll":l.value,onTableBottomReached:f},null,8,["data","infinite-scroll"])]))}});r.__docgenInfo={exportName:"default",displayName:"InfiniteScrollTable.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Table/InfiniteScrollTable.story.vue"]};const g=`<template>
  <div>
    <KitTable :columns="columns" :data="data" :infinite-scroll="infiniteScroll" @table-bottom-reached="loadMoreData" />
  </div>
</template>

<script setup lang="ts">
import { faker } from '@faker-js/faker'
import { ref } from 'vue'
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
const data = ref(
  Array.from({ length: 10 }).map((_, index) => ({
    id: index,
    name: faker.person.firstName(),
    job: faker.person.jobTitle()
  }))
)
const infiniteScroll = ref(true)

function loadMoreData(callback) {
  setTimeout(() => {
    const lastId = data.value[data.value.length - 1].id
    if (lastId > 30) {
      infiniteScroll.value = false
    } else {
      data.value = [
        ...data.value,
        ...Array.from({ length: 10 }).map((_, index) => ({
          id: lastId + 1 + index,
          name: faker.person.firstName(),
          job: faker.person.jobTitle()
        }))
      ]
    }
    callback()
  }, 1000)
}
<\/script>
`,M={title:"Table",component:r,parameters:{docs:{source:{code:g}}}},I=i=>({components:{Comp:r},setup(){return{args:i}},template:'<Comp v-bind="args" />'}),a=I.bind({});var m,c,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const J=["InfiniteScrollTable"];export{a as InfiniteScrollTable,J as __namedExportsOrder,M as default};
