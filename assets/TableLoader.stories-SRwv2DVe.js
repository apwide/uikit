import{d as g,j as l,F as x,G as L,p as k,f as s,s as T,t as b,k as n,x as _,A as m,r as C,J as N}from"./vue.esm-bundler-Bq7iw15p.js";import{f as p}from"./chunk-NAVWDHVN-nYOG0we8.js";import{_ as j}from"./ContentLoader-DGb7uzNq.js";import{K as B}from"./KitTable-BDm3JMkh.js";import"./KitSpinner-C_FlB-Bt.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./KitIcon-DzjcMukR.js";import"./KitButton-s-nB5WLS.js";import"./KitDraggable-CBHrbWIN.js";import"./dom-kh-IIGlH.js";import"./ChevronDownIcon-B6u_Npdu.js";import"./IconWrapper-BpnstkGd.js";const V=["width"],q=["width"],A=["width"],v=g({__name:"TableLoader",props:{rows:{default:10},isLoading:{type:Boolean,default:!1},viewBox:{default:"0 0 1260 40"},width:{default:"100%"},height:{default:"40px"},preserveAspectRatio:{default:"none"}},setup(t){const a=()=>Math.random()*.30000000000000004+.7;return(o,e)=>(s(),l("div",null,[t.isLoading?(s(!0),l(x,{key:0},L(t.rows,i=>(s(),T(j,_({key:i},{ref_for:!0},o.$attrs,{"view-box":t.viewBox,"preserve-aspect-ratio":t.preserveAspectRatio,width:t.width,height:t.height}),{default:b(()=>[e[0]||(e[0]=n("rect",{x:"30",y:"13",rx:"3",ry:"3",width:"23",height:"12"},null,-1)),e[1]||(e[1]=n("rect",{x:"70",y:"13",rx:"3",ry:"3",width:"78",height:"12"},null,-1)),n("rect",{x:"210",y:"13",rx:"3",ry:"3",width:117*a(),height:"12"},null,8,V),e[2]||(e[2]=n("rect",{x:"360",y:"13",rx:"3",ry:"3",width:"83",height:"12"},null,-1)),n("rect",{x:"480",y:"13",rx:"3",ry:"3",width:250*a(),height:"12"},null,8,q),n("rect",{x:"750",y:"13",rx:"3",ry:"3",width:500*a(),height:"12"},null,8,A),e[3]||(e[3]=n("rect",{x:"0",y:"39",rx:"3",ry:"3",width:"1260",height:"0.5"},null,-1))]),_:1},16,["view-box","preserve-aspect-ratio","width","height"]))),128)):k(o.$slots,"default",{},void 0,void 0,1)]))}});v.__docgenInfo={exportName:"default",displayName:"TableLoader",description:"",tags:{},props:[{name:"rows",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"isLoading",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"viewBox",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'0 0 1260 40'"}},{name:"width",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'100%'"}},{name:"height",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'40px'"}},{name:"preserveAspectRatio",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'none'"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/ContentLoader/TableLoader.vue"]};const d=g({__name:"TableLoader.story",setup(t){const a=C(!0),o=[{id:"id",name:"ID",width:70},{id:"name",name:"Name"},{id:"job",name:"Job"}],e=Array.from({length:10}).map((y,u)=>({id:u,name:p.person.firstName(),job:p.person.jobTitle()}));function i(){a.value=!1}function w(){a.value=!0}return(y,u)=>(s(),l("div",null,[n("p",null,[n("button",{onClick:w},"load"),n("button",{onClick:i},"resolve")]),m(v,{"is-loading":a.value},{default:b(()=>[m(B,{columns:o,data:N(e)},null,8,["data"])]),_:1},8,["is-loading"])]))}});d.__docgenInfo={exportName:"default",displayName:"TableLoader.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/ContentLoader/TableLoader.story.vue"]};const F=`<template>
  <div>
    <p>
      <button @click="load">load</button>
      <button @click="resolve">resolve</button>
    </p>

    <TableLoader :is-loading="isLoading">
      <Table :columns="columns" :data="rows" />
    </TableLoader>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { faker } from '@faker-js/faker'
import TableLoader from '@/components/ContentLoader/TableLoader.vue'
import Table from '@/components/Table/KitTable.vue'

const isLoading = ref(true)
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
const rows = Array.from({ length: 10 }).map((_, index) => ({
  id: index,
  name: faker.person.firstName(),
  job: faker.person.jobTitle()
}))

function resolve() {
  isLoading.value = false
}
function load() {
  isLoading.value = true
}
<\/script>
`,H={title:"ContentLoader",component:d,parameters:{docs:{source:{code:F}}}},I=t=>({components:{Comp:d},setup(){return{args:t}},template:'<Comp v-bind="args" />'}),r=I.bind({});var f,c,h;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(h=(c=r.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};const Q=["TableLoader"];export{r as TableLoader,Q as __namedExportsOrder,H as default};
