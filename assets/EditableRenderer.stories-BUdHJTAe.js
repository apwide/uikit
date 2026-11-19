import{d as K,u as v,v as y,c as h,k as m,E as i,F as S,r as w,l as D,m as o}from"./vue.esm-bundler-wNF6-2fW.js";import{f as b}from"./chunk-NAVWDHVN-nYOG0we8.js";import{K as _}from"./KitDatePicker--sWYF1ag.js";import{K as q}from"./KitInlineEdit-BeMvDPSR.js";import{K as E}from"./KitDateRenderer-CSRlXJaK.js";import"./KitTextField-xvdMhYYp.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Popup-BrfFHZ0X.js";import"./Popper-Cj7Zy2p4.js";import"./fieldGroup-CvGAAVzd.js";import"./KitIcon-cw-FHNvL.js";import"./index.es-BO1D75ye.js";import"./dom-kh-IIGlH.js";import"./Calendar-DEb-Oddx.js";import"./format-KgnoClB8.js";import"./KitIconButton-BGzFrlw1.js";import"./KitButton-CNA1GrKR.js";import"./KitSpinner-D_AgCq8k.js";import"./parse-DHUIuyxL.js";import"./KitSectionMessage-iXCg13Ut.js";import"./IconWrapper-CCL1wCId.js";import"./InfoIcon-Mv_mc-HR.js";import"./ErrorIcon-CcOA9YPC.js";const s=K({__name:"KitDateEditableRenderer",props:{date:{},editable:{type:Boolean,default:!0},placement:{default:"right"}},emits:["save-requested"],setup(a,{emit:r}){const l=a,u=r,n=h(()=>l.date&&parseInt(l.date,10));function e(c,f){u("save-requested",c.toString(),f)}return(c,f)=>a.editable?(m(),v(q,{key:0,value:n.value,type:"date",placement:a.placement,onSaveRequested:e},{editor:y(({props:t})=>[i(_,{"model-value":t.value,"is-invalid":t.isInvalid,"is-focused":t.isFocused,"is-loading":t.isLoading,"onUpdate:modelValue":t.input,onBlur:t.blur,onFocus:t.focus,onConfirm:t.confirm,onKeyup:S(t.cancel,["esc"])},null,8,["model-value","is-invalid","is-focused","is-loading","onUpdate:modelValue","onBlur","onFocus","onConfirm","onKeyup"]),i(E,{date:n.value},null,8,["date"])]),_:1},8,["value","placement"])):(m(),v(E,{key:1,date:n.value},null,8,["date"]))}});s.__docgenInfo={exportName:"default",displayName:"KitDateEditableRenderer",description:"",tags:{},props:[{name:"date",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]}},{name:"editable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"placement",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'right'"}}],events:[{name:"save-requested",type:{names:["string"]}}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/field-renderers/KitDateEditableRenderer.vue"]};const p=K({__name:"EditableRenderer.story",setup(a){b.seed(1);const r=w(b.date.recent().getTime());function l(n,e){r.value=n,e()}function u(n,e){e(new Error("Something went wrong"))}return(n,e)=>(m(),D("div",null,[e[0]||(e[0]=o("h5",null,"Editable:",-1)),o("p",null,[i(s,{date:r.value,onSaveRequested:l},null,8,["date"])]),e[1]||(e[1]=o("h5",null,"Editable - callback with error:",-1)),o("p",null,[i(s,{date:r.value,onSaveRequested:u},null,8,["date"])]),e[2]||(e[2]=o("h5",null,"Non-editable:",-1)),o("p",null,[i(s,{date:r.value,editable:!1},null,8,["date"])])]))}});p.__docgenInfo={exportName:"default",displayName:"EditableRenderer.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/InlineEdit/Date/EditableRenderer.story.vue"]};const C=`<template>
  <div>
    <h5>Editable:</h5>
    <p>
      <KitDateEditableRenderer :date="date" @save-requested="onSave" />
    </p>
    <h5>Editable - callback with error:</h5>
    <p>
      <KitDateEditableRenderer :date="date" @save-requested="onSaveError" />
    </p>
    <h5>Non-editable:</h5>
    <p>
      <KitDateEditableRenderer :date="date" :editable="false" />
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { faker } from '@faker-js/faker'
import KitDateEditableRenderer from '@/components/field-renderers/KitDateEditableRenderer.vue'

faker.seed(1)
const date = ref(faker.date.recent().getTime())

function onSave(value, callback) {
  date.value = value
  callback()
}

function onSaveError(value, callback) {
  callback(new Error('Something went wrong'))
}
<\/script>
`,ee={title:"InlineEdit/Date",component:p,parameters:{docs:{source:{code:C}}}},N=a=>({components:{Comp:p},setup(){return{args:a}},template:'<Comp v-bind="args" />'}),d=N.bind({});var g,k,R;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(R=(k=d.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};const te=["EditableRenderer"];export{d as EditableRenderer,te as __namedExportsOrder,ee as default};
