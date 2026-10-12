import{d as b,u as S,f as w,s as q,t as p,k as c,A as o,z as G,r as v,q as O,j as T,E as U,J as L}from"./vue.esm-bundler-bSWh6tln.js";import{K as y}from"./KitFieldGroup-CtYmuqBU.js";import{a as B}from"./people-CQhRGP95.js";import{d as M}from"./utils-BvVMKmag.js";import{K as k}from"./KitUserRenderer-R0MSsxyy.js";import{K as N}from"./KitSelect-CyppK1da.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./chunk-NAVWDHVN-nYOG0we8.js";import"./helpers-CDDBEDKi.js";import"./KitTextField-DL9zzDIB.js";import"./Popper-D7RkQmME.js";import"./EditorCloseIcon-DqsKPtqI.js";import"./IconWrapper-DdkEMErG.js";import"./KitSpinner-BNue20UW.js";const I={class:"label"},E={class:"label"},$={class:"user-tag"},F=b({__name:"UserPicker",props:G({getUsers:{},multi:{type:Boolean},isFocused:{type:Boolean},mapper:{type:Function,default:e=>e},placeholder:{default:"Type to search..."},searchPromptText:{default:"Type to search..."},initialOptions:{default:()=>[]}},{modelValue:{default:""},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const l=e,m=S(e,"modelValue"),i=v([]),r=v(!1),u=O(()=>M(t,200));function d(){i.value=l.initialOptions}async function t(s){if(!s)return;r.value=!0;const{data:f}=await l.getUsers(s);i.value=l.mapper(f),r.value=!1}function a(s){return{id:s.key,label:s.name,value:s,disabled:s.disabled}}return(s,f)=>(w(),q(N,{modelValue:m.value,"onUpdate:modelValue":f[0]||(f[0]=n=>m.value=n),options:i.value,async:!0,multi:e.multi,"is-focused":e.isFocused,"is-fetching":r.value,placeholder:e.placeholder,normalizer:a,onOpen:d,onSearchChange:u.value},{option:p(({option:n})=>[c("div",I,[o(k,{tag:"span",user:n},null,8,["user"])])]),selected:p(({selected:n})=>[c("div",E,[o(k,{tag:"span",user:n},null,8,["user"])])]),tag:p(({tag:n})=>[c("div",$,[o(k,{appearance:"micro",tag:"span",user:n.value},null,8,["user"])])]),_:1},8,["modelValue","options","multi","is-focused","is-fetching","placeholder","onSearchChange"]))}}),h=x(F,[["__scopeId","data-v-0375c241"]]);F.__docgenInfo={exportName:"default",displayName:"UserPicker",description:"",tags:{},props:[{name:"getUsers",required:!0,type:{name:"GetUsers"}},{name:"multi",required:!1,type:{name:"boolean"}},{name:"isFocused",required:!1,type:{name:"boolean"}},{name:"mapper",required:!1,type:{name:"Mapper"},defaultValue:{func:!1,value:"(list) => list"}},{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Type to search...'"}},{name:"searchPromptText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Type to search...'"}},{name:"initialOptions",required:!1,type:{name:"Array",elements:[{name:"User"}]},defaultValue:{func:!1,value:"() => []"}}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/Select/UserPicker.vue"]};const z={class:"wrapper"},C=b({__name:"UserPicker.story",setup(e){const l=B({},50),[m]=l,i=d=>new Promise(t=>{setTimeout(()=>{const a=l.filter(s=>s.name.toLowerCase().includes(d.toLowerCase().trim()));t({data:a})},300)}),r=v(),u=v([]);return(d,t)=>(w(),T("div",z,[o(y,{class:"picker single",label:"Single User"},{default:p(()=>[o(h,{modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=a=>r.value=a),"data-cy":"single","initial-options":[L(m)],"get-users":i},null,8,["modelValue","initial-options"])]),_:1}),c("p",null,U(r.value),1),o(y,{class:"picker multi",label:"Many Users"},{default:p(()=>[o(h,{modelValue:u.value,"onUpdate:modelValue":t[1]||(t[1]=a=>u.value=a),multi:!0,"get-users":i},null,8,["modelValue"])]),_:1}),c("p",null,U(u.value),1)]))}}),K=x(C,[["__scopeId","data-v-47588088"]]);C.__docgenInfo={exportName:"default",displayName:"UserPicker.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Select/UserPicker.story.vue"]};const A=`<template>
  <div class="wrapper">
    <KitFieldGroup class="picker single" label="Single User">
      <UserPicker v-model="value" data-cy="single" :initial-options="[initialOptions]" :get-users="getUsers" />
    </KitFieldGroup>
    <p>{{ value }}</p>
    <KitFieldGroup class="picker multi" label="Many Users">
      <UserPicker v-model="users" :multi="true" :get-users="getUsers" />
    </KitFieldGroup>
    <p>{{ users }}</p>
  </div>
</template>

<script setup lang="ts">
import KitFieldGroup from '@components/Form/KitFieldGroup.vue'
import { ref } from 'vue'
import { createPersonsList } from '../api-mocks/people'
import UserPicker from '@/components/Select/UserPicker.vue'

const list = createPersonsList({}, 50)
const [initialOptions] = list
const getUsers = (query) =>
  new Promise((resolve) => {
    setTimeout(() => {
      const results = list.filter((user) => user.name.toLowerCase().includes(query.toLowerCase().trim()))
      resolve({ data: results })
    }, 300)
  })

const value = ref()
const users = ref([])
<\/script>

<style scoped>
.wrapper {
  padding: 20px;
}

.picker.single {
  max-width: 250px;
}

.picker.multi {
  max-width: 550px;
}
</style>
`,ne={title:"Select",component:K,parameters:{docs:{source:{code:A}}}},j=e=>({components:{Comp:K},setup(){return{args:e}},template:'<Comp v-bind="args" />'}),g=j.bind({});var _,P,V;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(V=(P=g.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};const oe=["UserPicker"];export{g as UserPicker,oe as __namedExportsOrder,ne as default};
