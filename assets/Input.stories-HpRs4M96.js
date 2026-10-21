import{d as K,f as h,s as F,t,k as c,j as T,A as r,q as V,L as u,E as m,r as g}from"./vue.esm-bundler-bSWh6tln.js";import{_ as d}from"./KitInput-BLSabwWp.js";import{K as a}from"./KitFieldGroup-CtYmuqBU.js";import{K as _}from"./KitInlineDialog-BqNDwNPo.js";import{K as x}from"./KitToggle-C-vlZ-_z.js";import{I as q}from"./IconWrapper-DdkEMErG.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./KitTextField-DL9zzDIB.js";import"./Popup-CYbvf_Tg.js";import"./Popper-D7RkQmME.js";import"./EditorDoneIcon-CO2Tf0aw.js";import"./EditorCloseIcon-DqsKPtqI.js";import"./dom-kh-IIGlH.js";const y=K({__name:"EditorInfoIcon",props:{size:{},primaryColor:{},secondaryColor:{}},setup(i){return(l,n)=>(h(),F(q,{size:i.size,"primary-color":i.primaryColor,"secondary-color":i.secondaryColor},{default:t(()=>[...n[0]||(n[0]=[c("svg",{viewBox:"0 0 24 24"},[c("path",{d:"M12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-8.5a1 1 0 0 0-1 1V15a1 1 0 0 0 2 0v-2.5a1 1 0 0 0-1-1zm0-1.125a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75z",fill:"currentColor","fill-rule":"evenodd"})],-1)])]),_:1},8,["size","primary-color","secondary-color"]))}});y.__docgenInfo={exportName:"default",displayName:"EditorInfoIcon",description:"",tags:{},props:[{name:"size",required:!1,type:{name:"string"}},{name:"primaryColor",required:!1,type:{name:"string"}},{name:"secondaryColor",required:!1,type:{name:"string"}}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/Icon/aui/EditorInfoIcon.vue"]};const C=K({__name:"Input.story",setup(i){const l=g(""),n=g(""),f=g(!1),s=V(()=>f.value?["This field is required. Try entering text in this field."]:[]);return(E,e)=>(h(),T("div",null,[r(a,{"data-cy":"field-group",errors:s.value,label:"Label",required:""},{default:t(()=>[r(d,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=o=>l.value=o),"should-fit-container":"",placeholder:"Click here to input"},null,8,["modelValue"]),u(" The message is: "+m(l.value),1)]),_:1},8,["errors"]),r(a,{label:"Label",errors:s.value,required:""},{default:t(()=>[r(d,{modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=o=>n.value=o),type:"number",min:"1",max:"3","allowed-values":"[^0-9\\.]","should-fit-container":"",placeholder:"Click here to input"},null,8,["modelValue"]),u(" The number is: "+m(n.value),1)]),_:1},8,["errors"]),r(a,{label:"Disabled input",errors:s.value,required:""},{default:t(()=>[r(d,{modelValue:l.value,"onUpdate:modelValue":e[2]||(e[2]=o=>l.value=o),"should-fit-container":"",placeholder:"Click here to input",disabled:""},null,8,["modelValue"]),u(" The message is: "+m(l.value),1)]),_:1},8,["errors"]),r(a,{label:"Icon after",errors:s.value,required:""},{after:t(()=>[r(_,{placement:"right"},{trigger:t(({toggle:o})=>[r(y,{class:"icon",size:"small",onClick:o},null,8,["onClick"])]),default:t(()=>[e[5]||(e[5]=c("div",{class:"content"},[c("span",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit.")],-1))]),_:1})]),default:t(()=>[r(d,{modelValue:n.value,"onUpdate:modelValue":e[3]||(e[3]=o=>n.value=o),type:"number",min:"1",max:"3","allowed-values":"[^0-9\\.]","should-fit-container":"",placeholder:"Click here to input"},null,8,["modelValue"]),u(" The number is: "+m(n.value),1)]),_:1},8,["errors"]),r(a,{label:"danger"},{default:t(()=>[r(x,{modelValue:f.value,"onUpdate:modelValue":e[4]||(e[4]=o=>f.value=o)},null,8,["modelValue"])]),_:1})]))}}),k=G(C,[["__scopeId","data-v-45b0b8f6"]]);C.__docgenInfo={exportName:"default",displayName:"Input.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Form/Input.story.vue"]};const z=`<template>
  <div>
    <KitFieldGroup data-cy="field-group" :errors="errors" label="Label" required>
      <KitInput v-model="message" should-fit-container placeholder="Click here to input" />
      The message is: {{ message }}
    </KitFieldGroup>
    <KitFieldGroup label="Label" :errors="errors" required>
      <KitInput
        v-model="number"
        type="number"
        min="1"
        max="3"
        allowed-values="[^0-9\\.]"
        should-fit-container
        placeholder="Click here to input" />
      The number is: {{ number }}
    </KitFieldGroup>
    <KitFieldGroup label="Disabled input" :errors="errors" required>
      <KitInput v-model="message" should-fit-container placeholder="Click here to input" disabled />
      The message is: {{ message }}
    </KitFieldGroup>
    <KitFieldGroup label="Icon after" :errors="errors" required>
      <template #after>
        <KitInlineDialog placement="right">
          <template v-slot:trigger="{ toggle }">
            <EditorInfoIcon class="icon" size="small" @click="toggle" />
          </template>
          <div class="content">
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          </div>
        </KitInlineDialog>
      </template>
      <KitInput
        v-model="number"
        type="number"
        min="1"
        max="3"
        allowed-values="[^0-9\\.]"
        should-fit-container
        placeholder="Click here to input" />
      The number is: {{ number }}
    </KitFieldGroup>
    <KitFieldGroup label="danger">
      <KitToggle v-model="danger" />
    </KitFieldGroup>
  </div>
</template>

<script setup lang="ts">
import KitInput from '@components/Form/KitInput.vue'
import KitFieldGroup from '@components/Form/KitFieldGroup.vue'
import KitInlineDialog from '@components/InlineDialog/KitInlineDialog.vue'
import { computed, ref } from 'vue'
import KitToggle from '@components/Toggle/KitToggle.vue'
import EditorInfoIcon from '@/components/Icon/aui/EditorInfoIcon.vue'

const message = ref('')
const number = ref('')
const danger = ref(false)

const errors = computed(() => danger.value ? ['This field is required. Try entering text in this field.'] : [])

<\/script>
<style scoped>
.icon {
  transform: translateY(25%);
}
</style>
`,H={title:"Form",component:k,parameters:{docs:{source:{code:z}}}},D=i=>({components:{Comp:k},setup(){return{args:i}},template:'<Comp v-bind="args" />'}),p=D.bind({});var v,I,b;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(b=(I=p.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};const J=["Input"];export{p as Input,J as __namedExportsOrder,H as default};
