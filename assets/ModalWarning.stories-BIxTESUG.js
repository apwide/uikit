import{d as f,l as g,E as h,v as s,u as v,s as M,r as k,k as i,N as w,m as C,I as _,B as K}from"./vue.esm-bundler-wNF6-2fW.js";import{f as B}from"./chunk-NAVWDHVN-nYOG0we8.js";import{K as b}from"./KitButton-CNA1GrKR.js";import{K as W}from"./KitModal-CEVIWD4d.js";import"./KitSpinner-D_AgCq8k.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ErrorIcon-CcOA9YPC.js";import"./IconWrapper-CCL1wCId.js";import"./dom-kh-IIGlH.js";const N="warning",a=f({__name:"ModalWarning.story",setup(t){const m=B.lorem.paragraph(),o=k(!1);function u(){console.log("submit!"),e()}function d(){o.value=!0}function e(){o.value=!1}return(y,r)=>(i(),g("div",null,[h(b,{onClick:d},{default:s(()=>[...r[0]||(r[0]=[w(" Show Dialog ",-1)])]),_:1}),o.value?(i(),v(W,{key:0,heading:"Modal Warning","auto-focus":"",appearance:N,onSubmit:u,onCancel:e},{content:s(()=>[C("p",null,_(K(m)),1)]),_:1})):M("",!0)]))}});a.__docgenInfo={exportName:"default",displayName:"ModalWarning.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Modal/ModalWarning.story.vue"]};const S=`<template>
  <div>
    <KitButton @click="showDialog"> Show Dialog </KitButton>
    <KitModal
      v-if="show"
      heading="Modal Warning"
      auto-focus
      :appearance="appearance"
      @submit="onSubmit"
      @cancel="onCancel">
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
const appearance = 'warning'
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
`,z={title:"Modal",component:a,parameters:{docs:{source:{code:S}}}},x=t=>({components:{Comp:a},setup(){return{args:t}},template:'<Comp v-bind="args" />'}),n=x.bind({});var p,l,c;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const A=["ModalWarning"];export{n as ModalWarning,A as __namedExportsOrder,z as default};
