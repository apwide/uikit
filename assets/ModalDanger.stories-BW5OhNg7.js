import{d as f,l as g,E as h,v as s,u as v,s as M,r as k,k as i,N as D,m as C,I as _,B as w}from"./vue.esm-bundler-wNF6-2fW.js";import{f as K}from"./chunk-NAVWDHVN-nYOG0we8.js";import{K as B}from"./KitButton-CNA1GrKR.js";import{K as b}from"./KitModal-CEVIWD4d.js";import"./KitSpinner-D_AgCq8k.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ErrorIcon-CcOA9YPC.js";import"./IconWrapper-CCL1wCId.js";import"./dom-kh-IIGlH.js";const N="danger",e=f({__name:"ModalDanger.story",setup(a){const m=K.lorem.paragraph(),n=k(!1);function u(){console.log("submit!"),t()}function d(){n.value=!0}function t(){n.value=!1}return(y,r)=>(i(),g("div",null,[h(B,{onClick:d},{default:s(()=>[...r[0]||(r[0]=[D(" Show Dialog ",-1)])]),_:1}),n.value?(i(),v(b,{key:0,heading:"Modal Danger","auto-focus":"",appearance:N,onSubmit:u,onCancel:t},{content:s(()=>[C("p",null,_(w(m)),1)]),_:1})):M("",!0)]))}});e.__docgenInfo={exportName:"default",displayName:"ModalDanger.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Modal/ModalDanger.story.vue"]};const S=`<template>
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
`,A={title:"Modal",component:e,parameters:{docs:{source:{code:S}}}},x=a=>({components:{Comp:e},setup(){return{args:a}},template:'<Comp v-bind="args" />'}),o=x.bind({});var p,l,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const G=["ModalDanger"];export{o as ModalDanger,G as __namedExportsOrder,A as default};
