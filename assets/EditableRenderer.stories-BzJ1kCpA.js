import{d as E,u as v,v as p,k as c,t as C,E as o,F as g,l as R,m as r,r as K}from"./vue.esm-bundler-wNF6-2fW.js";import{K as w}from"./KitCheckbox-D4A8u_-X.js";import{K as y}from"./KitInlineEdit-BeMvDPSR.js";import{K as f}from"./KitCheckboxRenderer-CRcnjIuO.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./IconWrapper-CCL1wCId.js";import"./Popper-Cj7Zy2p4.js";import"./KitIcon-cw-FHNvL.js";import"./index.es-BO1D75ye.js";import"./KitIconButton-BGzFrlw1.js";import"./KitButton-CNA1GrKR.js";import"./KitSpinner-D_AgCq8k.js";import"./KitSectionMessage-iXCg13Ut.js";import"./InfoIcon-Mv_mc-HR.js";import"./ErrorIcon-CcOA9YPC.js";import"./KitTextField-xvdMhYYp.js";import"./EditorDoneIcon-CCD7QIio.js";const x=E({__name:"KitCheckboxEditableRenderer",props:{value:{type:Boolean,default:!1},editable:{type:Boolean,default:!0},placement:{default:"right"}},emits:["save-requested"],setup(a,{emit:l}){const u=l;function s(t,e){u("save-requested",t,e)}return(t,e)=>a.editable?(c(),v(y,{key:0,value:a.value,offset:[0,0],class:"checkbox-edit",placement:a.placement,onSaveRequested:s},{editor:p(n=>[o(w,{size:"large",class:"checkbox","model-value":n.value,"is-focused":n.isFocused,"is-invalid":n.isInvalid,disabled:n.isLoading,"onUpdate:modelValue":n.input,onFocus:n.focus,onBlur:n.blur,onConfirm:n.confirm,onKeyup:g(n.cancel,["esc"])},null,8,["model-value","is-focused","is-invalid","disabled","onUpdate:modelValue","onFocus","onBlur","onConfirm","onKeyup"])]),default:p(()=>[C(t.$slots,"default",{},()=>[o(f,{value:a.value},null,8,["value"])],!0)]),_:3},8,["value","placement"])):(c(),v(f,{key:1,value:a.value},null,8,["value"]))}}),d=S(x,[["__scopeId","data-v-4effa429"]]);x.__docgenInfo={exportName:"default",displayName:"KitCheckboxEditableRenderer",description:"",tags:{},props:[{name:"value",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"editable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"placement",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'right'"}}],events:[{name:"save-requested",type:{names:["boolean"]}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/field-renderers/KitCheckboxEditableRenderer.vue"]};const m=E({__name:"EditableRenderer.story",setup(a){const l=K(!0);function u(t,e){l.value=t,e()}function s(t,e){e(new Error("Something went wrong"))}return(t,e)=>(c(),R("div",null,[e[0]||(e[0]=r("h5",null,"Editable:",-1)),r("p",null,[o(d,{value:l.value,onSaveRequested:u},null,8,["value"])]),e[1]||(e[1]=r("h5",null,"Editable - callback with error:",-1)),r("p",null,[o(d,{value:l.value,onSaveRequested:s},null,8,["value"])]),e[2]||(e[2]=r("h5",null,"Non-editable:",-1)),r("p",null,[o(d,{value:l.value,editable:!1},null,8,["value"])])]))}});m.__docgenInfo={exportName:"default",displayName:"EditableRenderer.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/InlineEdit/Checkbox/EditableRenderer.story.vue"]};const _=`<template>
  <div>
    <h5>Editable:</h5>
    <p>
      <KitCheckboxEditableRenderer :value="value" @save-requested="onSave" />
    </p>
    <h5>Editable - callback with error:</h5>
    <p>
      <KitCheckboxEditableRenderer :value="value" @save-requested="onSaveError" />
    </p>
    <h5>Non-editable:</h5>
    <p>
      <KitCheckboxEditableRenderer :value="value" :editable="false" />
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import KitCheckboxEditableRenderer from '@/components/field-renderers/KitCheckboxEditableRenderer.vue'

const value = ref(true)

function onSave(newValue, callback) {
  value.value = newValue
  callback()
}

function onSaveError(newValue, callback) {
  callback(new Error('Something went wrong'))
}
<\/script>
`,M={title:"InlineEdit/Checkbox",component:m,parameters:{docs:{source:{code:_}}}},q=a=>({components:{Comp:m},setup(){return{args:a}},template:'<Comp v-bind="args" />'}),i=q.bind({});var b,k,h;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(h=(k=i.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};const P=["EditableRenderer"];export{i as EditableRenderer,P as __namedExportsOrder,M as default};
