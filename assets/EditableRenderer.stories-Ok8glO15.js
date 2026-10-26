import{d as C,s as B,t as v,j as R,p as b,f as y,A as d,W as N,q as z,k as o,J as f,r as V}from"./vue.esm-bundler-Bq7iw15p.js";import{f as h}from"./chunk-NAVWDHVN-nYOG0we8.js";import{K as A}from"./KitSelect-BdrpqOSM.js";import{K as I}from"./KitInlineEdit-CnKKQxpm.js";import{K as E}from"./KitStringLineRenderer-DcjJAECb.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./KitTextField-CorFKCZO.js";import"./Popper-CqRkecYS.js";import"./EditorCloseIcon-DEX8M97N.js";import"./IconWrapper-BpnstkGd.js";import"./KitSpinner-C_FlB-Bt.js";import"./KitIcon-DzjcMukR.js";import"./KitIconButton-iUT2hFoW.js";import"./KitButton-s-nB5WLS.js";import"./KitSectionMessage-nuySiFpO.js";import"./InfoIcon-BqBYV2uy.js";import"./ErrorIcon-9HV6gVst.js";const $={key:1},m=C({__name:"KitSingleSelectEditableRenderer",props:{editable:{type:Boolean,default:!0},placement:{default:"right"},value:{default:""},allowedValues:{default:()=>[]},placeholder:{default:""},noOptionsMessage:{default:"No options"},appendToBody:{type:Boolean,default:!1},confirm:{type:Boolean,default:!0},blurToSave:{type:Boolean},normalizer:{type:Function,default:e=>({id:e,value:e,label:e,disabled:!1})},icon:{type:Boolean,default:!0},isClearable:{type:Boolean},forceIsEditing:{type:Boolean,default:!1},filterPredicate:{},fixedSelectWidth:{}},emits:["save-requested","start-editing","stop-editing","input","search-change","blur"],setup(e,{emit:u}){const c=e,a=u,p=z(()=>typeof c.value=="object"?c.normalizer(c.value).label:c.value);function S(i,s){a("save-requested",i||"",s)}return(i,s)=>e.editable?(y(),B(I,{key:0,value:e.value,confirm:e.confirm,icon:e.icon,placement:e.placement,"force-is-editing":e.forceIsEditing,"blur-to-save":e.blurToSave,"hide-confirm-buttons":!e.confirm,onStartEditing:s[1]||(s[1]=n=>a("start-editing")),onStopEditing:s[2]||(s[2]=n=>a("stop-editing")),onSaveRequested:S},{editor:v(n=>[d(A,{"model-value":n.value,options:e.allowedValues,"open-on-focus":!0,"is-invalid":n.isInvalid,"is-focused":n.isFocused,"is-loading":n.isLoading,placeholder:e.placeholder,noOptionsMessage:e.noOptionsMessage,"append-to-body":e.appendToBody,normalizer:e.normalizer,"is-clearable":e.isClearable,"filter-predicate":e.filterPredicate,style:{flex:"1"},"fixed-select-width":e.fixedSelectWidth,confirm:e.confirm,"onUpdate:modelValue":t=>{n.input(t),a("input",t)},onSearchChange:s[0]||(s[0]=t=>a("search-change",t)),onBlur:t=>{n.blur(t),a("blur",t)},onConfirm:n.confirm,onFocus:n.focus,onCancel:n.cancel},N({option:v(({option:t,isCurrent:w})=>[b(i.$slots,"option",{option:t,isCurrent:w})]),"custom-action":v(()=>[b(i.$slots,"custom-action")]),_:2},[i.$slots.selected?{name:"selected",fn:v(({selected:t})=>[b(i.$slots,"selected",{selected:t})]),key:"0"}:void 0]),1032,["model-value","options","is-invalid","is-focused","is-loading","placeholder","noOptionsMessage","append-to-body","normalizer","is-clearable","filter-predicate","fixed-select-width","confirm","onUpdate:modelValue","onBlur","onConfirm","onFocus","onCancel"])]),default:v(()=>[b(i.$slots,"default",{},()=>[d(E,{value:p.value},null,8,["value"])])]),_:3},8,["value","confirm","icon","placement","force-is-editing","blur-to-save","hide-confirm-buttons"])):(y(),R("div",$,[b(i.$slots,"default",{},()=>[d(E,{value:p.value},null,8,["value"])])]))}});m.__docgenInfo={exportName:"default",displayName:"KitSingleSelectEditableRenderer",description:"",tags:{},props:[{name:"editable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"placement",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'right'"}},{name:"value",required:!1,type:{name:"union",elements:[{name:"string"},{name:"object"}]},defaultValue:{func:!1,value:"''"}},{name:"allowedValues",required:!0,type:{name:"union",elements:[{name:"Array",elements:[{name:"string"}]},{name:"Array",elements:[{name:"object"}]}]},defaultValue:{func:!1,value:"() => []"}},{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"noOptionsMessage",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'No options'"}},{name:"appendToBody",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"confirm",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"blurToSave",required:!1,type:{name:"boolean"}},{name:"normalizer",required:!1,type:{name:"TSFunctionType"},defaultValue:{func:!1,value:`(value) => ({
  id: value,
  value,
  label: value,
  disabled: false
})`}},{name:"icon",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"isClearable",required:!1,type:{name:"boolean"}},{name:"forceIsEditing",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"filterPredicate",required:!1,type:{name:"TSFunctionType"}},{name:"fixedSelectWidth",required:!1,type:{name:"string"}}],events:[{name:"save-requested",type:{names:["union"],elements:[{name:"string"},{name:"T"}]}},{name:"start-editing"},{name:"stop-editing"},{name:"input",type:{names:["union"],elements:[{name:"string"},{name:"T"},{name:"Array",elements:[{name:"string"}]},{name:"Array",elements:[{name:"T"}]}]}},{name:"search-change",type:{names:["string"]}},{name:"blur",type:{names:["FocusEvent"]}}],slots:[{name:"selected",scoped:!0,bindings:[{name:"selected",title:"binding"}]},{name:"option",scoped:!0,bindings:[{name:"option",title:"binding"},{name:"isCurrent",title:"binding"}]},{name:"custom-action"},{name:"default"}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/field-renderers/KitSingleSelectEditableRenderer.vue"]};const j={class:"wrapper"},O={class:"limited-width"},T=C({__name:"EditableRenderer.story",setup(e){h.seed(1);const u=Array.from({length:10},()=>h.lorem.word()),[c]=u,a=V(c),p=u.map((r,l)=>({key:l,value:r})),[S]=p,i=V(S);function s(r){return{id:r.key,label:r.value,value:r}}function n(r,l){a.value=r,l()}function t(r,l){i.value=r,setTimeout(()=>{l()},1e3)}function w(r,l){setTimeout(()=>l(new Error("Something went wrong")),100)}return(r,l)=>(y(),R("div",j,[l[0]||(l[0]=o("h5",null,"Editable:",-1)),o("p",null,[d(m,{value:a.value,"allowed-values":f(u),onSaveRequested:n},null,8,["value","allowed-values"])]),l[1]||(l[1]=o("h5",null,"Editable - callback with error:",-1)),o("p",null,[d(m,{value:a.value,"allowed-values":f(u),onSaveRequested:w},null,8,["value","allowed-values"])]),l[2]||(l[2]=o("h5",null,"Limited width:",-1)),o("p",O,[d(m,{value:a.value,"allowed-values":f(u),onSaveRequested:n},null,8,["value","allowed-values"])]),l[3]||(l[3]=o("h5",null,"No Confirm:",-1)),o("p",null,[d(m,{value:a.value,"allowed-values":f(u),onSaveRequested:n,confirm:!1},null,8,["value","allowed-values"])]),l[4]||(l[4]=o("h5",null,"Non-editable:",-1)),o("p",null,[d(m,{value:a.value,"allowed-values":f(u),editable:!1},null,8,["value","allowed-values"])]),l[5]||(l[5]=o("h5",null,"With complex objects",-1)),o("p",null,[d(m,{normalizer:s,value:i.value,"allowed-values":f(p),editable:!0,onSaveRequested:t},null,8,["value","allowed-values"])])]))}}),K=F(T,[["__scopeId","data-v-572d2344"]]);T.__docgenInfo={exportName:"default",displayName:"EditableRenderer.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/InlineEdit/SingleSelect/EditableRenderer.story.vue"]};const W=`<template>
  <div class="wrapper">
    <h5>Editable:</h5>
    <p>
      <KitSingleSelectEditableRenderer :value="selectedValue" :allowed-values="allowedValues" @save-requested="onSave" />
    </p>
    <h5>Editable - callback with error:</h5>
    <p>
      <KitSingleSelectEditableRenderer
        :value="selectedValue"
        :allowed-values="allowedValues"
        @save-requested="onSaveError" />
    </p>
    <h5>Limited width:</h5>
    <p class="limited-width">
      <KitSingleSelectEditableRenderer :value="selectedValue" :allowed-values="allowedValues" @save-requested="onSave" />
    </p>
    <h5>No Confirm:</h5>
    <p>
      <KitSingleSelectEditableRenderer
        :value="selectedValue"
        :allowed-values="allowedValues"
        @save-requested="onSave"
        :confirm="false" />
    </p>
    <h5>Non-editable:</h5>
    <p>
      <KitSingleSelectEditableRenderer :value="selectedValue" :allowed-values="allowedValues" :editable="false" />
    </p>
    <h5>With complex objects</h5>
    <p>
      <KitSingleSelectEditableRenderer
        :normalizer="normalizer"
        :value="complexSelectedValue"
        :allowed-values="complexAllowedValues"
        :editable="true"
        @save-requested="saveComplexSelection" />
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { faker } from '@faker-js/faker'
import KitSingleSelectEditableRenderer from '@/components/field-renderers/KitSingleSelectEditableRenderer.vue'

faker.seed(1)

const allowedValues = Array.from({ length: 10 }, () => faker.lorem.word())
const [selected] = allowedValues
const selectedValue = ref(selected)

const complexAllowedValues = allowedValues.map((value, key) => ({ key, value }))
const [firstComplexValue] = complexAllowedValues
const complexSelectedValue = ref(firstComplexValue)

function normalizer(valueToNormalize) {
  return {
    id: valueToNormalize.key,
    label: valueToNormalize.value,
    value: valueToNormalize
  }
}

function onSave(value, callback) {
  selectedValue.value = value
  callback()
}

function saveComplexSelection(value, callback) {
  complexSelectedValue.value = value
  setTimeout(() => {
    callback()
  }, 1000)
}

function onSaveError(value, callback) {
  setTimeout(() => callback(new Error('Something went wrong')), 100)
}
<\/script>

<style scoped>
.limited-width {
  width: 300px;
}

.wrapper {
  padding: 20px;
}
</style>
`,oe={title:"InlineEdit/SingleSelect",component:K,parameters:{docs:{source:{code:W}}}},L=e=>({components:{Comp:K},setup(){return{args:e}},template:'<Comp v-bind="args" />'}),g=L.bind({});var k,q,x;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(x=(q=g.parameters)==null?void 0:q.docs)==null?void 0:x.source}}};const ie=["EditableRenderer"];export{g as EditableRenderer,ie as __namedExportsOrder,oe as default};
