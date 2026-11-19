import{d as k,l as w,E as i,v as a,u as C,s as K,r as u,k as m,N as c,m as S,I as M,B}from"./vue.esm-bundler-wNF6-2fW.js";import{f as x}from"./chunk-NAVWDHVN-nYOG0we8.js";import{K as _}from"./KitButton-CNA1GrKR.js";import{K as y}from"./KitModal-CEVIWD4d.js";import{K as N}from"./KitCheckbox-D4A8u_-X.js";import"./KitSpinner-D_AgCq8k.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ErrorIcon-CcOA9YPC.js";import"./IconWrapper-CCL1wCId.js";import"./dom-kh-IIGlH.js";const r=k({__name:"ModalPreventSubmit.story",setup(s){const h=x.lorem.paragraph(),e=u(!1),n=u(!1);function b(){console.log("submit!"),l()}function g(){e.value=!0}function l(){e.value=!1}return(P,o)=>(m(),w("div",null,[i(_,{onClick:g},{default:a(()=>[...o[1]||(o[1]=[c(" Show Dialog ",-1)])]),_:1}),e.value?(m(),C(y,{key:0,heading:"Modal Basic","auto-focus":"","should-allow-submit":n.value,onSubmit:b,onCancel:l},{content:a(()=>[S("p",null,M(B(h)),1),i(N,{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=v=>n.value=v)},{default:a(()=>[...o[2]||(o[2]=[c(" By checking agree and continue ",-1)])]),_:1},8,["modelValue"])]),_:1},8,["should-allow-submit"])):K("",!0)]))}});r.__docgenInfo={exportName:"default",displayName:"ModalPreventSubmit.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Modal/ModalPreventSubmit.story.vue"]};const V=`<template>
  <div>
    <KitButton @click="showDialog"> Show Dialog </KitButton>
    <KitModal
      v-if="show"
      heading="Modal Basic"
      auto-focus
      :should-allow-submit="shouldAllowSubmit"
      @submit="onSubmit"
      @cancel="onCancel">
      <template #content>
        <p>{{ paragraph }}</p>
        <KitCheckbox v-model="shouldAllowSubmit"> By checking agree and continue </KitCheckbox>
      </template>
    </KitModal>
  </div>
</template>

<script setup lang="ts">
import { faker } from '@faker-js/faker'
import { ref } from 'vue'
import KitButton from '@components/Button/KitButton.vue'
import KitModal from '@components/Modal/KitModal.vue'
import KitCheckbox from '@/components/Checkbox/KitCheckbox.vue'

const paragraph = faker.lorem.paragraph()

const show = ref(false)
const shouldAllowSubmit = ref(false)

function onSubmit() {
  console.log('submit!')
  onCancel()
}
function showDialog() {
  show.value = true
}
function onCancel() {
  show.value = false
}
<\/script>
`,G={title:"Modal",component:r,parameters:{docs:{source:{code:V}}}},D=s=>({components:{Comp:r},setup(){return{args:s}},template:'<Comp v-bind="args" />'}),t=D.bind({});var p,d,f;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(f=(d=t.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};const H=["ModalPreventSubmit"];export{t as ModalPreventSubmit,H as __namedExportsOrder,G as default};
