import{d as z,u as K,v as o,l as h,t as m,k as v,E as u,Y as M,c as I,m as i,B as f,r as L,N as y,I as w,J as x,K as F}from"./vue.esm-bundler-wNF6-2fW.js";import{f as N}from"./chunk-NAVWDHVN-nYOG0we8.js";import{K as S}from"./KitLozenge-a_onoOoa.js";import{K as T}from"./KitSelect-CEwbDo_J.js";import{K as O}from"./KitInlineEdit-BeMvDPSR.js";import{K as E}from"./KitMultiSelectRenderer-Cz5NeWgc.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./KitTextField-xvdMhYYp.js";import"./fieldGroup-CvGAAVzd.js";import"./Popper-Cj7Zy2p4.js";import"./dom-kh-IIGlH.js";import"./EditorCloseIcon-aMuF3bKr.js";import"./IconWrapper-CCL1wCId.js";import"./KitSpinner-D_AgCq8k.js";import"./KitIcon-cw-FHNvL.js";import"./index.es-BO1D75ye.js";import"./KitIconButton-BGzFrlw1.js";import"./KitButton-CNA1GrKR.js";import"./KitSectionMessage-iXCg13Ut.js";import"./InfoIcon-Mv_mc-HR.js";import"./ErrorIcon-CcOA9YPC.js";import"./utils-BvVMKmag.js";const $=[{id:"app-ecom",value:"eComerce",label:"eComerce",class:"blue"},{id:"app-pay",value:"Payment",label:"Payment",class:"blue"},{id:"status-down",value:"Down",label:"Down",class:"yellow"},{id:"status-up",value:"Up",label:"Up",class:"yellow"},{id:"cat-dev1",value:"Dev1",label:"Dev1",class:"green"},{id:"cat-dev2",value:"Dev2",label:"Dev2",class:"green"},{id:"cat-dev3",value:"Dev3",label:"Dev3",class:"green"},{id:"cat-int1",value:"Int1",label:"Int1",class:"green"},{id:"cat-int2",value:"Int2",label:"Int2",class:"green"}],A={key:1},p=z({__name:"KitMultiSelectEditableRenderer",props:{value:{default:()=>[]},editable:{type:Boolean,default:!0},placement:{default:"right"},allowedValues:{default:()=>[]},placeholder:{default:""},noOptionsMessage:{default:"No options"},isClearable:{type:Boolean},isFetching:{type:Boolean},async:{type:Boolean},forceIsEditing:{type:Boolean,default:!1},appendToBody:{type:Boolean,default:!1},confirm:{type:Boolean,default:!0},blurToSave:{type:Boolean},normalizer:{type:Function,default:e=>({id:e,value:e,label:e,disabled:!1})},fixedSelectWidth:{},keepOpenOnSelect:{type:Boolean}},emits:["save-requested","start-editing","stop-editing","input","search-change","blur"],setup(e,{emit:d}){const r=e,t=d,c=I(()=>r.value.map(r.normalizer).map(({label:a})=>a));function g(a,l){try{Array.isArray(a)?t("save-requested",a,l):l(new Error("Value should be an array"))}catch(n){l(n)}}return(a,l)=>e.editable?(v(),K(O,{key:0,value:e.value,confirm:e.confirm,placement:e.placement,"force-is-editing":e.forceIsEditing,"blur-to-save":e.blurToSave,"hide-confirm-buttons":!e.confirm,onStartEditing:l[1]||(l[1]=n=>t("start-editing")),onStopEditing:l[2]||(l[2]=n=>t("stop-editing")),onSaveRequested:g},{editor:o(n=>[u(T,{"model-value":n.value,options:e.allowedValues,"open-on-focus":!0,"is-invalid":n.isInvalid,"is-focused":n.isFocused,"is-loading":n.isLoading,"is-fetching":e.isFetching,placeholder:e.placeholder,"no-options-message":e.noOptionsMessage,"append-to-body":e.appendToBody,normalizer:e.normalizer,"is-clearable":e.isClearable,style:{flex:"1"},"fixed-select-width":e.fixedSelectWidth,multi:!0,async:e.async,confirm:e.confirm,"keep-open-on-select":e.keepOpenOnSelect,"onUpdate:modelValue":s=>{n.input(s),t("input",s)},onSearchChange:l[0]||(l[0]=s=>t("search-change",s)),onBlur:s=>{n.blur(s),t("blur",s)},onConfirm:n.confirm,onFocus:n.focus,onCancel:n.cancel},M({option:o(({option:s,isCurrent:B})=>[m(a.$slots,"option",{option:s,isCurrent:B})]),"custom-action":o(()=>[m(a.$slots,"custom-action")]),icon:o(()=>[m(a.$slots,"icon")]),_:2},[a.$slots.tag?{name:"tag",fn:o(({tag:s})=>[m(a.$slots,"tag",{tag:s})]),key:"0"}:void 0]),1032,["model-value","options","is-invalid","is-focused","is-loading","is-fetching","placeholder","no-options-message","append-to-body","normalizer","is-clearable","fixed-select-width","async","confirm","keep-open-on-select","onUpdate:modelValue","onBlur","onConfirm","onFocus","onCancel"])]),default:o(()=>[m(a.$slots,"default",{},()=>[u(E,{"selected-values":c.value},null,8,["selected-values"])])]),_:3},8,["value","confirm","placement","force-is-editing","blur-to-save","hide-confirm-buttons"])):(v(),h("div",A,[m(a.$slots,"default",{},()=>[u(E,{"selected-values":c.value},null,8,["selected-values"])])]))}});p.__docgenInfo={exportName:"default",displayName:"KitMultiSelectEditableRenderer",description:"",tags:{},props:[{name:"value",required:!1,type:{name:"Array"},defaultValue:{func:!1,value:"() => []"}},{name:"editable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"placement",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'right'"}},{name:"allowedValues",required:!1,type:{name:"Array"},defaultValue:{func:!1,value:"() => []"}},{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"noOptionsMessage",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'No options'"}},{name:"isClearable",required:!1,type:{name:"boolean"}},{name:"isFetching",required:!1,type:{name:"boolean"}},{name:"async",required:!1,type:{name:"boolean"}},{name:"forceIsEditing",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"appendToBody",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"confirm",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"blurToSave",required:!1,type:{name:"boolean"}},{name:"normalizer",required:!1,type:{name:"TSFunctionType"},defaultValue:{func:!1,value:`(value) => ({
  id: value,
  value,
  label: value,
  disabled: false
})`}},{name:"fixedSelectWidth",required:!1,type:{name:"string"}},{name:"keepOpenOnSelect",required:!1,type:{name:"boolean"}}],events:[{name:"save-requested",type:{names:["Array"]}},{name:"start-editing"},{name:"stop-editing"},{name:"input",type:{names:["Array"]}},{name:"search-change",type:{names:["string"]}},{name:"blur",type:{names:["FocusEvent"]}}],slots:[{name:"tag",scoped:!0,bindings:[{name:"tag",title:"binding"}]},{name:"option",scoped:!0,bindings:[{name:"option",title:"binding"},{name:"isCurrent",title:"binding"}]},{name:"custom-action"},{name:"icon"},{name:"default"}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/field-renderers/KitMultiSelectEditableRenderer.vue"]};const U={class:"limited-width"},W={style:{display:"flex",gap:"5px"}},R=z({__name:"EditableRenderer.story",setup(e){const d=$;N.seed(1);const r=L(d.slice(0,3));function t(){return a=>({...a,value:a})}function c(a,l){console.log("save",a),r.value=a,l()}function g(a,l){setTimeout(()=>l(new Error("Something went wrong")),100)}return(a,l)=>(v(),h("div",null,[l[0]||(l[0]=i("h5",null,"Editable:",-1)),i("p",null,[u(p,{"selected-values":r.value,"allowed-values":f(d),normalizer:t,onSaveRequested:c},null,8,["selected-values","allowed-values"])]),l[1]||(l[1]=i("h5",null,"Editable - callback with error:",-1)),i("p",null,[u(p,{"selected-values":r.value,"allowed-values":f(d),normalizer:t,onSaveRequested:g},null,8,["selected-values","allowed-values"])]),l[2]||(l[2]=i("h5",null,"Limited width:",-1)),i("p",U,[u(p,{"selected-values":r.value,"allowed-values":f(d),normalizer:t,onSaveRequested:c},null,8,["selected-values","allowed-values"])]),l[3]||(l[3]=i("h5",null,"Non-editable:",-1)),i("p",null,[u(p,{"selected-values":r.value,"allowed-values":f(d),normalizer:t,editable:!1},null,8,["selected-values","allowed-values"])]),l[4]||(l[4]=i("h5",null,"Custom rendering/style:",-1)),i("p",null,[u(p,{"selected-values":r.value,"allowed-values":f(d),normalizer:t,class:"custom-multi-select",onSaveRequested:c},{tag:o(({tag:n})=>[u(S,{appearance:"success"},{default:o(()=>[y(w(n.label),1)]),_:2},1024)]),default:o(()=>[i("div",W,[(v(!0),h(x,null,F(r.value,n=>(v(),K(S,{key:n.id,appearance:"brown"},{default:o(()=>[y(w(n.label),1)]),_:2},1024))),128))])]),option:o(({option:n})=>[u(S,{appearance:"new"},{default:o(()=>[y(w(n.label),1)]),_:2},1024)]),_:1},8,["selected-values","allowed-values"])])]))}}),C=D(R,[["__scopeId","data-v-66eab1c1"]]);R.__docgenInfo={exportName:"default",displayName:"EditableRenderer.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/InlineEdit/MultiSelect/EditableRenderer.story.vue"]};const P=`<template>
  <div>
    <h5>Editable:</h5>
    <p>
      <KitMultiSelectEditableRenderer
        :selected-values="selectedValues"
        :allowed-values="allowedValues"
        :normalizer="normalizer"
        @save-requested="onSave" />
    </p>
    <h5>Editable - callback with error:</h5>
    <p>
      <KitMultiSelectEditableRenderer
        :selected-values="selectedValues"
        :allowed-values="allowedValues"
        :normalizer="normalizer"
        @save-requested="onSaveError" />
    </p>
    <h5>Limited width:</h5>
    <p class="limited-width">
      <KitMultiSelectEditableRenderer
        :selected-values="selectedValues"
        :allowed-values="allowedValues"
        :normalizer="normalizer"
        @save-requested="onSave" />
    </p>
    <h5>Non-editable:</h5>
    <p>
      <KitMultiSelectEditableRenderer
        :selected-values="selectedValues"
        :allowed-values="allowedValues"
        :normalizer="normalizer"
        :editable="false" />
    </p>
    <h5>Custom rendering/style:</h5>
    <p>
      <KitMultiSelectEditableRenderer
          :selected-values="selectedValues"
          :allowed-values="allowedValues"
          :normalizer="normalizer"
          class="custom-multi-select"
          @save-requested="onSave">
        <template #tag="{ tag }">
          <KitLozenge appearance="success">{{ tag.label }}</KitLozenge>
        </template>
        <template #default>
          <div style="display: flex; gap: 5px">
            <KitLozenge v-for="selectedValue in selectedValues" :key="selectedValue.id" appearance="brown">
              {{ selectedValue.label }}
            </KitLozenge>
          </div>
        </template>
        <template #option="{ option }">
          <KitLozenge appearance="new">{{ option.label }}</KitLozenge>
        </template>
      </KitMultiSelectEditableRenderer>
    </p>
  </div>
</template>

<script setup lang="ts">
import { faker } from '@faker-js/faker'
import KitLozenge from '@components/Lozenge/KitLozenge.vue'
import { ref } from 'vue'
import {options} from '../../api-mocks/options'
import KitMultiSelectEditableRenderer from '@/components/field-renderers/KitMultiSelectEditableRenderer.vue'

const allowedValues = options

faker.seed(1)
const selectedValues = ref(allowedValues.slice(0, 3))

function normalizer() {
  return (value) => ({ ...value, value })
}

function onSave(value, callback) {
  console.log('save', value)
  selectedValues.value = value
  callback()
}

function onSaveError(value, callback) {
  setTimeout(() => callback(new Error('Something went wrong')), 100)
}
<\/script>

<style scoped>
.limited-width {
  width: 300px;
}
.custom-multi-select :deep(.tag) {
}
</style>
`,fe={title:"InlineEdit/MultiSelect",component:C,parameters:{docs:{source:{code:P}}}},j=e=>({components:{Comp:C},setup(){return{args:e}},template:'<Comp v-bind="args" />'}),b=j.bind({});var V,k,q;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(q=(k=b.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};const ve=["EditableRenderer"];export{b as EditableRenderer,ve as __namedExportsOrder,fe as default};
