import{d as k,j as w,A as i,t as a,s as C,m as K,r as u,f as m,L as c,k as S,E as M,J as B}from"./vue.esm-bundler-bSWh6tln.js";import{f as x}from"./chunk-NAVWDHVN-nYOG0we8.js";import{K as _}from"./KitButton-DXemt05q.js";import{K as y}from"./KitModal-CGAKokQF.js";import{K as V}from"./KitCheckbox-PGmgYjGS.js";import"./KitSpinner-BNue20UW.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ErrorIcon-DMkoEFcw.js";import"./IconWrapper-DdkEMErG.js";const r=k({__name:"ModalPreventSubmit.story",setup(s){const h=x.lorem.paragraph(),e=u(!1),n=u(!1);function b(){console.log("submit!"),l()}function g(){e.value=!0}function l(){e.value=!1}return(P,o)=>(m(),w("div",null,[i(_,{onClick:g},{default:a(()=>[...o[1]||(o[1]=[c(" Show Dialog ",-1)])]),_:1}),e.value?(m(),C(y,{key:0,heading:"Modal Basic","auto-focus":"","should-allow-submit":n.value,onSubmit:b,onCancel:l},{content:a(()=>[S("p",null,M(B(h)),1),i(V,{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=v=>n.value=v)},{default:a(()=>[...o[2]||(o[2]=[c(" By checking agree and continue ",-1)])]),_:1},8,["modelValue"])]),_:1},8,["should-allow-submit"])):K("",!0)]))}});r.__docgenInfo={exportName:"default",displayName:"ModalPreventSubmit.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Modal/ModalPreventSubmit.story.vue"]};const D=`<template>
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
`,U={title:"Modal",component:r,parameters:{docs:{source:{code:D}}}},N=s=>({components:{Comp:r},setup(){return{args:s}},template:'<Comp v-bind="args" />'}),t=N.bind({});var p,d,f;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(f=(d=t.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};const q=["ModalPreventSubmit"];export{t as ModalPreventSubmit,q as __namedExportsOrder,U as default};
