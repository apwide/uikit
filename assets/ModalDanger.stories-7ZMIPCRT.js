import{d as f,j as g,A as h,t as s,s as M,m as v,r as k,f as i,L as D,k as C,E as _,J as w}from"./vue.esm-bundler-Bq7iw15p.js";import{f as K}from"./chunk-NAVWDHVN-nYOG0we8.js";import{K as B}from"./KitButton-s-nB5WLS.js";import{K as b}from"./KitModal-BX21NeJx.js";import"./KitSpinner-C_FlB-Bt.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ErrorIcon-9HV6gVst.js";import"./IconWrapper-BpnstkGd.js";const S="danger",e=f({__name:"ModalDanger.story",setup(a){const m=K.lorem.paragraph(),n=k(!1);function u(){console.log("submit!"),t()}function d(){n.value=!0}function t(){n.value=!1}return(N,r)=>(i(),g("div",null,[h(B,{onClick:d},{default:s(()=>[...r[0]||(r[0]=[D(" Show Dialog ",-1)])]),_:1}),n.value?(i(),M(b,{key:0,heading:"Modal Danger","auto-focus":"",appearance:S,onSubmit:u,onCancel:t},{content:s(()=>[C("p",null,_(w(m)),1)]),_:1})):v("",!0)]))}});e.__docgenInfo={exportName:"default",displayName:"ModalDanger.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Modal/ModalDanger.story.vue"]};const x=`<template>
  <div>
    <KitButton @click="showDialog"> Show Dialog </KitButton>
    <KitModal v-if="show" heading="Modal Danger" auto-focus :appearance="appearance" @submit="onSubmit" @cancel="onCancel">
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
const appearance = 'danger'
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
`,L={title:"Modal",component:e,parameters:{docs:{source:{code:x}}}},y=a=>({components:{Comp:e},setup(){return{args:a}},template:'<Comp v-bind="args" />'}),o=y.bind({});var p,l,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const O=["ModalDanger"];export{o as ModalDanger,O as __namedExportsOrder,L as default};
