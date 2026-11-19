import{d as C,u as U,v as c,k as h,t as V,E as i,m as t,B,r as q,l as T}from"./vue.esm-bundler-wNF6-2fW.js";import{d as w}from"./utils-BvVMKmag.js";import{a as F}from"./people-CQhRGP95.js";import{K as I}from"./KitSelect-CEwbDo_J.js";import{K as L}from"./KitInlineEdit-BeMvDPSR.js";import{K as f}from"./KitUserRenderer-DZbmev97.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./chunk-NAVWDHVN-nYOG0we8.js";import"./helpers-CDDBEDKi.js";import"./KitTextField-xvdMhYYp.js";import"./fieldGroup-CvGAAVzd.js";import"./Popper-Cj7Zy2p4.js";import"./dom-kh-IIGlH.js";import"./EditorCloseIcon-aMuF3bKr.js";import"./IconWrapper-CCL1wCId.js";import"./KitSpinner-D_AgCq8k.js";import"./KitIcon-cw-FHNvL.js";import"./index.es-BO1D75ye.js";import"./KitIconButton-BGzFrlw1.js";import"./KitButton-CNA1GrKR.js";import"./KitSectionMessage-iXCg13Ut.js";import"./InfoIcon-Mv_mc-HR.js";import"./ErrorIcon-CcOA9YPC.js";const x={class:"label"},P={class:"label"},K=C({__name:"KitUserEditableRenderer",props:{user:{},editable:{type:Boolean,default:!0},placement:{default:"right"},avatarOnly:{type:Boolean,default:!1},loadOptions:{},tag:{default:"span"},mapper:{type:Function,default:e=>e},initialOptions:{default:()=>[]},clearable:{type:Boolean,default:!0},confirm:{type:Boolean,default:!0}},emits:["save-requested"],setup(e,{emit:v}){const b=e,y=v,r=q([]),o=q(!1),d=w(async function(a){o.value=!0;try{const{data:u}=await loadOptions(a);u.value=b.mapper(u)}finally{o.value=!1}},200);function g(a,u){y("save-requested",a,u)}function l(a){return{id:a&&a.key,label:a&&a.name,value:a}}function n(){r.value=b.initialOptions}return(a,u)=>e.editable&&!e.avatarOnly?(h(),U(L,{key:0,value:e.user,class:"user-inline-edit",confirm:e.confirm,placement:e.placement,onSaveRequested:g},{editor:c(({props:s})=>[i(I,{"model-value":s.value,options:r.value,"open-on-focus":!0,"is-clearable":e.clearable,async:!0,placeholder:"Type to search...",normalizer:l,"is-invalid":s.isInvalid,"is-focused":s.isFocused,"is-loading":s.isLoading,"is-fetching":o.value,confirm:e.confirm,onOpen:n,onSearchChange:B(d),"onUpdate:modelValue":s.input,onBlur:s.blur,onConfirm:s.confirm,onFocus:s.focus,onCancel:s.cancel},{option:c(({option:E})=>[t("div",x,[i(f,{tag:e.tag,user:E,"avatar-only":e.avatarOnly},null,8,["tag","user","avatar-only"])])]),selected:c(({selected:E})=>[t("div",P,[i(f,{tag:e.tag,user:E,"avatar-only":e.avatarOnly},null,8,["tag","user","avatar-only"])])]),_:1},8,["model-value","options","is-clearable","is-invalid","is-focused","is-loading","is-fetching","confirm","onSearchChange","onUpdate:modelValue","onBlur","onConfirm","onFocus","onCancel"])]),default:c(()=>[V(a.$slots,"default",{},()=>[i(f,{tag:e.tag,user:e.user,"avatar-only":e.avatarOnly},null,8,["tag","user","avatar-only"])],!0)]),_:3},8,["value","confirm","placement"])):(h(),U(f,{key:1,tag:e.tag,user:e.user,"avatar-only":e.avatarOnly},null,8,["tag","user","avatar-only"]))}}),m=N(K,[["__scopeId","data-v-0e3dd008"]]);K.__docgenInfo={exportName:"default",displayName:"KitUserEditableRenderer",description:"",tags:{},props:[{name:"user",required:!1,type:{name:"User"}},{name:"editable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"placement",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'right'"}},{name:"avatarOnly",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"loadOptions",required:!0,type:{name:"TSFunctionType"}},{name:"tag",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'span'"}},{name:"mapper",required:!1,type:{name:"TSFunctionType"},defaultValue:{func:!1,value:"l => l"}},{name:"initialOptions",required:!1,type:{name:"Array",elements:[{name:"unknown"}]},defaultValue:{func:!1,value:"() => []"}},{name:"clearable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"confirm",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"save-requested",type:{names:["User"]}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/field-renderers/KitUserEditableRenderer.vue"]};const S=C({__name:"EditableRenderer.story",setup(e){const v=F({},50),y=w(l=>new Promise(n=>{setTimeout(()=>{const a={data:v.filter(u=>u.name.toLowerCase().includes(l.toLowerCase().trim()))};n(a)},1e3)}),100),r=q(void 0),o=l=>y(l);function d(l,n){r.value=l||void 0,n()}function g(l,n){setTimeout(()=>n(new Error("Something went wrong")),100)}return(l,n)=>(h(),T("div",null,[n[0]||(n[0]=t("h5",null,"Editable:",-1)),t("p",null,[i(m,{user:r.value,"load-options":o,onSaveRequested:d},null,8,["user"])]),n[1]||(n[1]=t("h5",null,"Confirm false:",-1)),t("p",null,[i(m,{user:r.value,"load-options":o,confirm:!1,onSaveRequested:d},null,8,["user"])]),n[2]||(n[2]=t("h5",null,"Editable - callback with error:",-1)),t("p",null,[i(m,{user:r.value,"load-options":o,onSaveRequested:g},null,8,["user"])]),n[3]||(n[3]=t("h5",null,"Non-editable:",-1)),t("p",null,[i(m,{user:r.value,"load-options":o,onSaveRequested:d,editable:!1},null,8,["user"])]),n[4]||(n[4]=t("h5",null,"Avatar only:",-1)),t("p",null,[i(m,{user:r.value,"load-options":o,onSaveRequested:d,"avatar-only":!0},null,8,["user"])])]))}});S.__docgenInfo={exportName:"default",displayName:"EditableRenderer.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/InlineEdit/User/EditableRenderer.story.vue"]};const A=`<template>
  <div>
    <h5>Editable:</h5>
    <p>
      <KitUserEditableRenderer :user="user" :load-options="loadOptions" @save-requested="onSave" />
    </p>
    <h5>Confirm false:</h5>
    <p>
      <KitUserEditableRenderer :user="user" :load-options="loadOptions" :confirm="false" @save-requested="onSave" />
    </p>
    <h5>Editable - callback with error:</h5>
    <p>
      <KitUserEditableRenderer :user="user" :load-options="loadOptions" @save-requested="onSaveError" />
    </p>
    <h5>Non-editable:</h5>
    <p>
      <KitUserEditableRenderer :user="user" :load-options="loadOptions" @save-requested="onSave" :editable="false" />
    </p>
    <h5>Avatar only:</h5>
    <p>
      <KitUserEditableRenderer :user="user" :load-options="loadOptions" @save-requested="onSave" :avatar-only="true" />
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { debounce } from '@components/utils'
import { createPersonsList } from '../../api-mocks/people'
import KitUserEditableRenderer from '@/components/field-renderers/KitUserEditableRenderer.vue'

const list = createPersonsList({}, 50)
const getUsers = (query) =>
  new Promise((resolve) => {
    setTimeout(() => {
      const results = {
        data: list.filter((user) => user.name.toLowerCase().includes(query.toLowerCase().trim()))
      }
      resolve(results)
    }, 1000)
  })
const debouncedUsers = debounce(getUsers, 100)

const user = ref(undefined)
const loadOptions = (query) => debouncedUsers(query)

function onSave(value, callback) {
  user.value = value || undefined
  callback()
}

function onSaveError(value, callback) {
  setTimeout(() => callback(new Error('Something went wrong')), 100)
}
<\/script>
`,de={title:"InlineEdit/User",component:S,parameters:{docs:{source:{code:A}}}},$=e=>({components:{Comp:S},setup(){return{args:e}},template:'<Comp v-bind="args" />'}),p=$.bind({});var R,O,k;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(k=(O=p.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};const me=["EditableRenderer"];export{p as EditableRenderer,me as __namedExportsOrder,de as default};
