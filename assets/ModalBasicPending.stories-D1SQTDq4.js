import{d as v,l as B,E as h,v as i,u as M,s as k,r as l,k as p,N as C,m as _,I as w,B as K}from"./vue.esm-bundler-wNF6-2fW.js";import{f as b}from"./chunk-NAVWDHVN-nYOG0we8.js";import{K as N}from"./KitButton-CNA1GrKR.js";import{K as S}from"./KitModal-CEVIWD4d.js";import"./KitSpinner-D_AgCq8k.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ErrorIcon-CcOA9YPC.js";import"./IconWrapper-CCL1wCId.js";import"./dom-kh-IIGlH.js";const t=v({__name:"ModalBasicPending.story",setup(a){const d=b.lorem.paragraph(),e=l(!1),o=l(!1);function f(){o.value=!0,console.log("submit!"),setTimeout(()=>s(),2e3)}function g(){e.value=!0}function s(){o.value=!1,e.value=!1}return(D,r)=>(p(),B("div",null,[h(N,{onClick:g},{default:i(()=>[...r[0]||(r[0]=[C(" Show Dialog ",-1)])]),_:1}),e.value?(p(),M(S,{key:0,heading:"Modal Basic","auto-focus":"",pending:o.value,onSubmit:f,onCancel:s},{content:i(()=>[_("p",null,w(K(d)),1)]),_:1},8,["pending"])):k("",!0)]))}});t.__docgenInfo={exportName:"default",displayName:"ModalBasicPending.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Modal/ModalBasicPending.story.vue"]};const x=`<template>
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
`,z={title:"Modal",component:t,parameters:{docs:{source:{code:x}}}},y=a=>({components:{Comp:t},setup(){return{args:a}},template:'<Comp v-bind="args" />'}),n=y.bind({});var c,u,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const A=["ModalBasicPending"];export{n as ModalBasicPending,A as __namedExportsOrder,z as default};
