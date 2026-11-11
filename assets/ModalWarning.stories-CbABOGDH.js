import{d as f,j as g,A as h,t as s,s as M,m as v,r as k,f as i,L as w,k as C,E as _,J as K}from"./vue.esm-bundler-Bq7iw15p.js";import{f as B}from"./chunk-NAVWDHVN-nYOG0we8.js";import{K as b}from"./KitButton-s-nB5WLS.js";import{K as W}from"./KitModal-BX21NeJx.js";import"./KitSpinner-C_FlB-Bt.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ErrorIcon-9HV6gVst.js";import"./IconWrapper-BpnstkGd.js";const S="warning",a=f({__name:"ModalWarning.story",setup(t){const m=B.lorem.paragraph(),o=k(!1);function u(){console.log("submit!"),e()}function d(){o.value=!0}function e(){o.value=!1}return(D,r)=>(i(),g("div",null,[h(b,{onClick:d},{default:s(()=>[...r[0]||(r[0]=[w(" Show Dialog ",-1)])]),_:1}),o.value?(i(),M(W,{key:0,heading:"Modal Warning","auto-focus":"",appearance:S,onSubmit:u,onCancel:e},{content:s(()=>[C("p",null,_(K(m)),1)]),_:1})):v("",!0)]))}});a.__docgenInfo={exportName:"default",displayName:"ModalWarning.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Modal/ModalWarning.story.vue"]};const x=`<template>
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
`,J={title:"Modal",component:a,parameters:{docs:{source:{code:x}}}},y=t=>({components:{Comp:a},setup(){return{args:t}},template:'<Comp v-bind="args" />'}),n=y.bind({});var p,l,c;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const L=["ModalWarning"];export{n as ModalWarning,L as __namedExportsOrder,J as default};
