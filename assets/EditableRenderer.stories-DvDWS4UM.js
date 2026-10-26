import{d as E,s as v,t as p,f as c,p as C,A as o,B as g,j as R,k as r,r as K}from"./vue.esm-bundler-Bq7iw15p.js";import{K as w}from"./KitCheckbox-C6RJ9KRn.js";import{K as y}from"./KitInlineEdit-CnKKQxpm.js";import{K as f}from"./KitCheckboxRenderer-COBKdwEf.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./IconWrapper-BpnstkGd.js";import"./Popper-CqRkecYS.js";import"./KitIcon-DzjcMukR.js";import"./KitIconButton-iUT2hFoW.js";import"./KitButton-s-nB5WLS.js";import"./KitSpinner-C_FlB-Bt.js";import"./KitSectionMessage-nuySiFpO.js";import"./InfoIcon-BqBYV2uy.js";import"./ErrorIcon-9HV6gVst.js";import"./KitTextField-CorFKCZO.js";import"./EditorDoneIcon-BwMeAnvt.js";const x=E({__name:"KitCheckboxEditableRenderer",props:{value:{type:Boolean,default:!1},editable:{type:Boolean,default:!0},placement:{default:"right"}},emits:["save-requested"],setup(a,{emit:l}){const u=l;function s(t,e){u("save-requested",t,e)}return(t,e)=>a.editable?(c(),v(y,{key:0,value:a.value,offset:[0,0],class:"checkbox-edit",placement:a.placement,onSaveRequested:s},{editor:p(n=>[o(w,{size:"large",class:"checkbox","model-value":n.value,"is-focused":n.isFocused,"is-invalid":n.isInvalid,disabled:n.isLoading,"onUpdate:modelValue":n.input,onFocus:n.focus,onBlur:n.blur,onConfirm:n.confirm,onKeyup:g(n.cancel,["esc"])},null,8,["model-value","is-focused","is-invalid","disabled","onUpdate:modelValue","onFocus","onBlur","onConfirm","onKeyup"])]),default:p(()=>[C(t.$slots,"default",{},()=>[o(f,{value:a.value},null,8,["value"])],!0)]),_:3},8,["value","placement"])):(c(),v(f,{key:1,value:a.value},null,8,["value"]))}}),d=S(x,[["__scopeId","data-v-4effa429"]]);x.__docgenInfo={exportName:"default",displayName:"KitCheckboxEditableRenderer",description:"",tags:{},props:[{name:"value",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"editable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"placement",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'right'"}}],events:[{name:"save-requested",type:{names:["boolean"]}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/field-renderers/KitCheckboxEditableRenderer.vue"]};const m=E({__name:"EditableRenderer.story",setup(a){const l=K(!0);function u(t,e){l.value=t,e()}function s(t,e){e(new Error("Something went wrong"))}return(t,e)=>(c(),R("div",null,[e[0]||(e[0]=r("h5",null,"Editable:",-1)),r("p",null,[o(d,{value:l.value,onSaveRequested:u},null,8,["value"])]),e[1]||(e[1]=r("h5",null,"Editable - callback with error:",-1)),r("p",null,[o(d,{value:l.value,onSaveRequested:s},null,8,["value"])]),e[2]||(e[2]=r("h5",null,"Non-editable:",-1)),r("p",null,[o(d,{value:l.value,editable:!1},null,8,["value"])])]))}});m.__docgenInfo={exportName:"default",displayName:"EditableRenderer.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/InlineEdit/Checkbox/EditableRenderer.story.vue"]};const _=`<template>
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
`,J={title:"InlineEdit/Checkbox",component:m,parameters:{docs:{source:{code:_}}}},q=a=>({components:{Comp:m},setup(){return{args:a}},template:'<Comp v-bind="args" />'}),i=q.bind({});var b,k,h;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(h=(k=i.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};const M=["EditableRenderer"];export{i as EditableRenderer,M as __namedExportsOrder,J as default};
