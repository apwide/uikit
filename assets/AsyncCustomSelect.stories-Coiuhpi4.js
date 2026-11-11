import{d as w,j as K,A as m,t as l,k as e,E as i,r as c,f as F}from"./vue.esm-bundler-Bq7iw15p.js";import{K as x}from"./KitSelect-BdrpqOSM.js";import{K as k}from"./KitFieldGroup-DJlr_tEu.js";import{d as A}from"./utils-BvVMKmag.js";import{a as G}from"./people-CQhRGP95.js";import{_ as U}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./KitTextField-CorFKCZO.js";import"./Popper-CqRkecYS.js";import"./EditorCloseIcon-DEX8M97N.js";import"./IconWrapper-BpnstkGd.js";import"./KitSpinner-C_FlB-Bt.js";import"./chunk-NAVWDHVN-nYOG0we8.js";import"./helpers-CDDBEDKi.js";const L={class:"wrapper"},P={class:"label"},T=["src"],V={class:"label"},q=["src"],g=w({__name:"AsyncCustomSelect.story",setup(u){const y=G({},50),_=A(t=>new Promise(s=>{setTimeout(()=>{const n=y.filter(C=>C.name.toLowerCase().includes(t.toLowerCase().trim()));s(n)},1e3)}),100),a=c(),p=c(),r=c(!1);function b(t){return t?{id:t.key,label:t.name,value:t}:{}}async function S(t){r.value=!0;const s=await _(t);r.value=!1,p.value=s}return(t,s)=>(F(),K("div",L,[m(k,{class:"async-select",label:"Async KitSelect"},{default:l(()=>[m(x,{modelValue:a.value,"onUpdate:modelValue":s[0]||(s[0]=n=>a.value=n),options:p.value,"is-fetching":r.value,normalizer:b,async:!0,placeholder:"Type to search...",onSearchChange:S},{option:l(({option:n})=>[e("div",P,[e("img",{height:"24",src:n.avatar,alt:""},null,8,T),e("span",null,i(n.name),1)])]),selected:l(({selected:n})=>[e("div",V,[e("img",{class:"avatar",height:"24",src:n.avatar,alt:""},null,8,q),e("span",null,i(n.name),1)])]),_:1},8,["modelValue","options","is-fetching"])]),_:1}),e("table",null,[s[1]||(s[1]=e("thead",null,[e("tr",null,[e("th",null,"value")])],-1)),e("tbody",null,[e("tr",null,[e("td",null,i(a.value),1)])])])]))}}),h=U(g,[["__scopeId","data-v-95f970ac"]]);g.__docgenInfo={exportName:"default",displayName:"AsyncCustomSelect.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Select/AsyncCustomSelect.story.vue"]};const z=`<template>
  <div class="wrapper">
    <KitFieldGroup class="async-select" label="Async KitSelect">
      <KitSelect
        v-model="value"
        :options="options"
        :is-fetching="isFetching"
        :normalizer="normalizer"
        :async="true"
        placeholder="Type to search..."
        @search-change="onGetSuggestions">
        <template #option="{ option }">
          <div class="label">
            <img height="24" :src="option.avatar" alt="" />
            <span>{{ option.name }}</span>
          </div>
        </template>
        <template #selected="{ selected }">
          <div class="label">
            <img class="avatar" height="24" :src="selected.avatar" alt="" />
            <span>{{ selected.name }}</span>
          </div>
        </template>
      </KitSelect>
    </KitFieldGroup>
    <table>
      <thead>
        <tr>
          <th>value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import KitSelect from '@components/Select/KitSelect.vue'
import KitFieldGroup from '@components/Form/KitFieldGroup.vue'
import { debounce } from '@components/utils'
import { createPersonsList } from '../api-mocks/people'

const list = createPersonsList({}, 50)
const getUsers = (query) =>
  new Promise((resolve) => {
    setTimeout(() => {
      const results = list.filter((user) => user.name.toLowerCase().includes(query.toLowerCase().trim()))
      resolve(results)
    }, 1000)
  })
const debouncedUsers = debounce(getUsers, 100)

const value = ref()
const options = ref()
const isFetching = ref(false)

function normalizer(value) {
  if (!value) {
    return {}
  }
  return {
    id: value.key,
    label: value.name,
    value
  }
}
async function onGetSuggestions(query) {
  isFetching.value = true
  const results = await debouncedUsers(query)
  isFetching.value = false
  options.value = results
}
<\/script>
<style scoped>
.wrapper {
  padding: 20px;
}

.async-select {
  max-width: 250px;
}

.label {
  display: flex;
  align-items: center;
}

.avatar {
  border-radius: 50%;
  margin-right: 5px;
}
</style>
`,Z={title:"Select",component:h,parameters:{docs:{source:{code:z}}}},N=u=>({components:{Comp:h},setup(){return{args:u}},template:'<Comp v-bind="args" />'}),o=N.bind({});var d,v,f;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(f=(v=o.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const $=["AsyncCustomSelect"];export{o as AsyncCustomSelect,$ as __namedExportsOrder,Z as default};
