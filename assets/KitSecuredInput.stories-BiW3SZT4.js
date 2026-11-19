import{d as S,y as U,w as h,n as $,k as p,u as v,v as c,z as L,m as O,A as R,C as j,E as u,G as z,D as b,r,c as F,l as A,N as K,I as V}from"./vue.esm-bundler-wNF6-2fW.js";import{K as k}from"./KitFieldGroup-CpvzPD4B.js";import{K as H}from"./KitIconButton-BGzFrlw1.js";import{_}from"./KitIcon-cw-FHNvL.js";import{K as P}from"./KitTextField-xvdMhYYp.js";import{_ as Y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./dom-kh-IIGlH.js";import"./fieldGroup-CvGAAVzd.js";import"./KitButton-CNA1GrKR.js";import"./KitSpinner-D_AgCq8k.js";import"./index.es-BO1D75ye.js";const J=["type","placeholder","step","maxlength","disabled"],g=S({__name:"KitSecuredInput",props:b({maxlength:{},placeholder:{},autoFocus:{type:Boolean,default:!1},width:{default:"100%"},step:{default:"1"},allowedValues:{default:""},disabled:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{}}),emits:b(["blur","focus"],["update:modelValue"]),setup(e,{emit:a}){const i=e,l=a,s=r(),m=r(!1),o=r(!0),f=r(!1),n=U(e,"modelValue"),T=F(()=>o.value?"password":"text"),B=F(()=>o.value?"Reveal":"Hide");function G(t){m.value=!0,l("focus",t)}function N(t){f.value||D(t),f.value=!1}function D(t){m.value=!1,l("blur",t)}function E(){o.value=!o.value,f.value=!0}return h(n,()=>{i.allowedValues&&(n.value=n.value.replace(new RegExp(i.allowedValues,"g"),""))}),h(()=>i.autoFocus,t=>{t&&$(()=>{s.value&&s.value.focus()})},{immediate:!0}),(t,y)=>(p(),v(P,{"is-focused":m.value},{default:c(()=>[L(O("input",R({ref_key:"inputField",ref:s,"onUpdate:modelValue":y[0]||(y[0]=M=>n.value=M),type:T.value,placeholder:e.placeholder,step:e.step},t.$attrs,{maxlength:e.maxlength,disabled:e.disabled,onFocus:G,onBlur:N}),null,16,J),[[j,n.value]]),u(H,{title:B.value,onClick:z(E,["stop","prevent"])},{default:c(()=>[o.value?(p(),v(_,{key:0,type:"eye"})):(p(),v(_,{key:1,type:"eye-slash"}))]),_:1},8,["title"])]),_:1},8,["is-focused"]))}});g.__docgenInfo={exportName:"default",displayName:"KitSecuredInput",description:"",tags:{},props:[{name:"maxlength",required:!1,type:{name:"number"}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"autoFocus",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"width",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'100%'"}},{name:"step",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'1'"}},{name:"allowedValues",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"blur",type:{names:["FocusEvent"]}},{name:"focus",type:{names:["FocusEvent"]}}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/Form/KitSecuredInput.vue"]};const C=S({__name:"KitSecuredInput.story",setup(e){const a=r("");return(i,l)=>(p(),A("div",null,[u(k,{"data-cy":"field-group",label:"Label",required:""},{default:c(()=>[u(g,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=s=>a.value=s),"should-fit-container":"",placeholder:"Click here to input"},null,8,["modelValue"]),K(" The message is: "+V(a.value),1)]),_:1}),u(k,{label:"Disabled input",required:""},{default:c(()=>[u(g,{modelValue:a.value,"onUpdate:modelValue":l[1]||(l[1]=s=>a.value=s),"should-fit-container":"",placeholder:"Click here to input",disabled:""},null,8,["modelValue"]),K(" The message is: "+V(a.value),1)]),_:1})]))}}),q=Y(C,[["__scopeId","data-v-6dd3442c"]]);C.__docgenInfo={exportName:"default",displayName:"KitSecuredInput.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Form/KitSecuredInput.story.vue"]};const Q=`<template>
  <div>
    <KitFieldGroup data-cy="field-group" label="Label" required>
      <KitSecuredInput v-model="message" should-fit-container placeholder="Click here to input" />
      The message is: {{ message }}
    </KitFieldGroup>
    <KitFieldGroup label="Disabled input" required>
      <KitSecuredInput v-model="message" should-fit-container placeholder="Click here to input" disabled />
      The message is: {{ message }}
    </KitFieldGroup>
  </div>
</template>

<script setup lang="ts">
import KitFieldGroup from '@components/Form/KitFieldGroup.vue'
import { ref } from 'vue'
import KitSecuredInput from '@/components/Form/KitSecuredInput.vue'

const message = ref('')
<\/script>
<style scoped>
.icon {
  transform: translateY(25%);
}
</style>
`,ie={title:"Form",component:q,parameters:{docs:{source:{code:Q}}}},W=e=>({components:{Comp:q},setup(){return{args:e}},template:'<Comp v-bind="args" />'}),d=W.bind({});var I,x,w;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(w=(x=d.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};const de=["KitSecuredInput"];export{d as KitSecuredInput,de as __namedExportsOrder,ie as default};
