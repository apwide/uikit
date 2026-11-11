import{d as v,j as k,A as i,t,s as M,m as w,r as B,f as l,L as p,k as m,E as K,J as _}from"./vue.esm-bundler-Bq7iw15p.js";import{f as b}from"./chunk-NAVWDHVN-nYOG0we8.js";import{K as c}from"./KitButton-s-nB5WLS.js";import{K as x}from"./KitModal-BX21NeJx.js";import"./KitSpinner-C_FlB-Bt.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ErrorIcon-9HV6gVst.js";import"./IconWrapper-BpnstkGd.js";const y={class:"footer"},r=v({__name:"ModalCustom.story",setup(s){const g=b.lorem.paragraph(),e=B(!1);function C(){console.log("submit!"),a()}function h(){e.value=!0}function a(){e.value=!1}return(N,o)=>(l(),k("div",null,[i(c,{onClick:h},{default:t(()=>[...o[0]||(o[0]=[p(" Show Dialog ",-1)])]),_:1}),e.value?(l(),M(x,{key:0,heading:"Modal Basic","auto-focus":"",width:"400px",onSubmit:C,onCancel:a},{content:t(()=>[m("p",null,K(_(g)),1)]),footer:t(()=>[m("div",y,[i(c,{appearance:"primary",onClick:a},{default:t(()=>[...o[1]||(o[1]=[p(" Go it! ",-1)])]),_:1})])]),_:1})):w("",!0)]))}});r.__docgenInfo={exportName:"default",displayName:"ModalCustom.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Modal/ModalCustom.story.vue"]};const S=`<template>
  <div>
    <KitButton @click="showDialog"> Show Dialog </KitButton>
    <KitModal v-if="show" heading="Modal Basic" auto-focus width="400px" @submit="onSubmit" @cancel="onCancel">
      <template #content>
        <p>
          {{ paragraph }}
        </p>
      </template>
      <template #footer>
        <div class="footer">
          <KitButton appearance="primary" @click="onCancel"> Go it! </KitButton>
        </div>
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
`,J={title:"Modal",component:r,parameters:{docs:{source:{code:S}}}},D=s=>({components:{Comp:r},setup(){return{args:s}},template:'<Comp v-bind="args" />'}),n=D.bind({});var u,d,f;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(f=(d=n.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};const L=["ModalCustom"];export{n as ModalCustom,L as __namedExportsOrder,J as default};
