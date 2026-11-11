import{d as f,j as g,A as h,t as r,s as C,m as M,r as k,f as l,L as b,k as v,E as w,J as _}from"./vue.esm-bundler-Bq7iw15p.js";import{f as B}from"./chunk-NAVWDHVN-nYOG0we8.js";import{K}from"./KitButton-s-nB5WLS.js";import{K as N}from"./KitModal-BX21NeJx.js";import"./KitSpinner-C_FlB-Bt.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ErrorIcon-9HV6gVst.js";import"./IconWrapper-BpnstkGd.js";const t=f({__name:"ModalNotCloseable.story",setup(n){const p=B.lorem.paragraph(),e=k(!1);function u(){console.log("submit!"),a()}function d(){e.value=!0}function a(){e.value=!1}return(x,s)=>(l(),g("div",null,[h(K,{"data-cy":"show-modal",onClick:d},{default:r(()=>[...s[0]||(s[0]=[b(" Show Dialog ",-1)])]),_:1}),e.value?(l(),C(N,{key:0,heading:"Modal Basic","auto-focus":"","close-on-esc":!1,actions:["Must click me"],onSubmit:u,onCancel:a},{content:r(()=>[v("p",null,w(_(p)),1)]),_:1})):M("",!0)]))}});t.__docgenInfo={exportName:"default",displayName:"ModalNotCloseable.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Modal/ModalNotCloseable.story.vue"]};const y=`<template>
  <div>
    <KitButton data-cy="show-modal" @click="showDialog"> Show Dialog </KitButton>
    <KitModal
      v-if="show"
      heading="Modal Basic"
      auto-focus
      :close-on-esc="false"
      :actions="['Must click me']"
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
`,J={title:"Modal",component:t,parameters:{docs:{source:{code:y}}}},S=n=>({components:{Comp:t},setup(){return{args:n}},template:'<Comp v-bind="args" />'}),o=S.bind({});var i,c,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const L=["ModalNotCloseable"];export{o as ModalNotCloseable,L as __namedExportsOrder,J as default};
