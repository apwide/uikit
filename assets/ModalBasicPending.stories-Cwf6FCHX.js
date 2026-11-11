import{d as v,j as h,A as B,t as i,s as M,m as k,r as l,f as c,L as C,k as _,E as w,J as K}from"./vue.esm-bundler-Bq7iw15p.js";import{f as b}from"./chunk-NAVWDHVN-nYOG0we8.js";import{K as S}from"./KitButton-s-nB5WLS.js";import{K as x}from"./KitModal-BX21NeJx.js";import"./KitSpinner-C_FlB-Bt.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ErrorIcon-9HV6gVst.js";import"./IconWrapper-BpnstkGd.js";const t=v({__name:"ModalBasicPending.story",setup(a){const d=b.lorem.paragraph(),e=l(!1),o=l(!1);function f(){o.value=!0,console.log("submit!"),setTimeout(()=>s(),2e3)}function g(){e.value=!0}function s(){o.value=!1,e.value=!1}return(N,r)=>(c(),h("div",null,[B(S,{onClick:g},{default:i(()=>[...r[0]||(r[0]=[C(" Show Dialog ",-1)])]),_:1}),e.value?(c(),M(x,{key:0,heading:"Modal Basic","auto-focus":"",pending:o.value,onSubmit:f,onCancel:s},{content:i(()=>[_("p",null,w(K(d)),1)]),_:1},8,["pending"])):k("",!0)]))}});t.__docgenInfo={exportName:"default",displayName:"ModalBasicPending.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Modal/ModalBasicPending.story.vue"]};const y=`<template>
  <div>
    <KitButton @click="showDialog"> Show Dialog </KitButton>
    <KitModal v-if="show" heading="Modal Basic" auto-focus :pending="pending" @submit="onSubmit" @cancel="onCancel">
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
const pending = ref(false)

function onSubmit() {
  pending.value = true
  console.log('submit!')
  setTimeout(() => onCancel(), 2000)
}

function showDialog() {
  show.value = true
}

function onCancel() {
  pending.value = false
  show.value = false
}
<\/script>
`,J={title:"Modal",component:t,parameters:{docs:{source:{code:y}}}},D=a=>({components:{Comp:t},setup(){return{args:a}},template:'<Comp v-bind="args" />'}),n=D.bind({});var p,u,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const L=["ModalBasicPending"];export{n as ModalBasicPending,L as __namedExportsOrder,J as default};
