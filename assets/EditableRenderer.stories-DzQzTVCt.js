import{d as K,s as v,t as y,q as h,f as m,A as i,B as S,r as q,j as w,k as o}from"./vue.esm-bundler-bSWh6tln.js";import{f as b}from"./chunk-NAVWDHVN-nYOG0we8.js";import{K as D}from"./KitDatePicker-CgZK00Rr.js";import{K as _}from"./KitInlineEdit-H4Kwi3m_.js";import{K as E}from"./KitDateRenderer-BXDIldeb.js";import"./KitTextField-DL9zzDIB.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Popup-CYbvf_Tg.js";import"./Popper-D7RkQmME.js";import"./KitIcon-IXZtQfsY.js";import"./Calendar-BRsxTJzS.js";import"./format-CL5xAmzD.js";import"./KitIconButton-Bak3xkMk.js";import"./KitButton-DXemt05q.js";import"./KitSpinner-BNue20UW.js";import"./parse-C7v2ivj5.js";import"./KitSectionMessage-BqSHQlrB.js";import"./IconWrapper-DdkEMErG.js";import"./InfoIcon-CvXOTOjS.js";import"./ErrorIcon-DMkoEFcw.js";const s=K({__name:"KitDateEditableRenderer",props:{date:{},editable:{type:Boolean,default:!0},placement:{default:"right"}},emits:["save-requested"],setup(a,{emit:r}){const l=a,u=r,n=h(()=>l.date&&parseInt(l.date,10));function e(p,f){u("save-requested",p.toString(),f)}return(p,f)=>a.editable?(m(),v(_,{key:0,value:n.value,type:"date",placement:a.placement,onSaveRequested:e},{editor:y(({props:t})=>[i(D,{"model-value":t.value,"is-invalid":t.isInvalid,"is-focused":t.isFocused,"is-loading":t.isLoading,"onUpdate:modelValue":t.input,onBlur:t.blur,onFocus:t.focus,onConfirm:t.confirm,onKeyup:S(t.cancel,["esc"])},null,8,["model-value","is-invalid","is-focused","is-loading","onUpdate:modelValue","onBlur","onFocus","onConfirm","onKeyup"]),i(E,{date:n.value},null,8,["date"])]),_:1},8,["value","placement"])):(m(),v(E,{key:1,date:n.value},null,8,["date"]))}});s.__docgenInfo={exportName:"default",displayName:"KitDateEditableRenderer",description:"",tags:{},props:[{name:"date",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]}},{name:"editable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"placement",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'right'"}}],events:[{name:"save-requested",type:{names:["string"]}}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/field-renderers/KitDateEditableRenderer.vue"]};const c=K({__name:"EditableRenderer.story",setup(a){b.seed(1);const r=q(b.date.recent().getTime());function l(n,e){r.value=n,e()}function u(n,e){e(new Error("Something went wrong"))}return(n,e)=>(m(),w("div",null,[e[0]||(e[0]=o("h5",null,"Editable:",-1)),o("p",null,[i(s,{date:r.value,onSaveRequested:l},null,8,["date"])]),e[1]||(e[1]=o("h5",null,"Editable - callback with error:",-1)),o("p",null,[i(s,{date:r.value,onSaveRequested:u},null,8,["date"])]),e[2]||(e[2]=o("h5",null,"Non-editable:",-1)),o("p",null,[i(s,{date:r.value,editable:!1},null,8,["date"])])]))}});c.__docgenInfo={exportName:"default",displayName:"EditableRenderer.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/InlineEdit/Date/EditableRenderer.story.vue"]};const C=`<template>
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
`,X={title:"InlineEdit/Date",component:c,parameters:{docs:{source:{code:C}}}},B=a=>({components:{Comp:c},setup(){return{args:a}},template:'<Comp v-bind="args" />'}),d=B.bind({});var g,k,R;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(R=(k=d.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};const Y=["EditableRenderer"];export{d as EditableRenderer,Y as __namedExportsOrder,X as default};
