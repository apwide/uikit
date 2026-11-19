import{d as f,l as g,E as h,v as r,u as B,s as v,r as M,k as i,N as k,m as w,I as C,B as _}from"./vue.esm-bundler-wNF6-2fW.js";import{f as K}from"./chunk-NAVWDHVN-nYOG0we8.js";import{K as b}from"./KitButton-CNA1GrKR.js";import{K as y}from"./KitModal-CEVIWD4d.js";import"./KitSpinner-D_AgCq8k.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ErrorIcon-CcOA9YPC.js";import"./IconWrapper-CCL1wCId.js";import"./dom-kh-IIGlH.js";const n=f({__name:"ModalBasic.story",setup(a){const p=K.lorem.paragraph(),t=M(!1);function u(){console.log("submit!"),e()}function d(){t.value=!0}function e(){t.value=!1}return(x,s)=>(i(),g("div",null,[h(b,{"data-cy":"show-modal",onClick:d},{default:r(()=>[...s[0]||(s[0]=[k(" Show Dialog ",-1)])]),_:1}),t.value?(i(),B(y,{key:0,heading:"Modal Basic","auto-focus":"",onSubmit:u,onCancel:e},{content:r(()=>[w("p",null,C(_(p)),1)]),_:1})):v("",!0)]))}});n.__docgenInfo={exportName:"default",displayName:"ModalBasic.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Modal/ModalBasic.story.vue"]};const N=`<template>
  <div>
    <KitButton data-cy="show-modal" @click="showDialog"> Show Dialog </KitButton>
    <KitModal v-if="show" heading="Modal Basic" auto-focus @submit="onSubmit" @cancel="onCancel">
      <template #content>
        <p>
          {{ paragraph }}
        </p>
      </template>
    </KitModal>
  </div>
</template>

<script setup lang="ts">
import { faker } from '@faker-js/faker'
import KitButton from '@components/Button/KitButton.vue'
import { ref } from 'vue'
import KitModal from '@components/Modal/KitModal.vue'

const paragraph = faker.lorem.paragraph()

const show = ref(false)

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
`,z={title:"Modal",component:n,parameters:{docs:{source:{code:N}}}},S=a=>({components:{Comp:n},setup(){return{args:a}},template:'<Comp v-bind="args" />'}),o=S.bind({});var c,l,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const A=["ModalBasic"];export{o as ModalBasic,A as __namedExportsOrder,z as default};
