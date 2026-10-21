import{d as C,j as S,A as o,t as l,s as V,m as _,r,f as c,L as w,k}from"./vue.esm-bundler-bSWh6tln.js";import{K as B}from"./KitButton-DXemt05q.js";import{K as G}from"./KitModal-CGAKokQF.js";import{_ as f}from"./KitInput-BLSabwWp.js";import{K as u}from"./KitFieldGroup-CtYmuqBU.js";import{K as N}from"./KitSelect-CyppK1da.js";import"./KitSpinner-BNue20UW.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ErrorIcon-DMkoEFcw.js";import"./IconWrapper-DdkEMErG.js";import"./KitTextField-DL9zzDIB.js";import"./Popper-D7RkQmME.js";import"./EditorCloseIcon-DqsKPtqI.js";const m=C({__name:"ModalForm.story",setup(p){const a=r(""),t=r(""),g=r(),y=r(["foo","bar","baz"]),s=r(!1);function d(){s.value=!1}function b(){console.log(JSON.stringify({title:a.value,type:t.value})),d()}function M(){s.value=!0}return(D,e)=>(c(),S("div",null,[o(B,{onClick:M},{default:l(()=>[...e[3]||(e[3]=[w(" Show Dialog ",-1)])]),_:1}),s.value?(c(),V(G,{key:0,heading:"Form Demo",onSubmit:b,onCancel:d},{content:l(()=>[k("div",null,[o(u,{label:"Title",required:""},{default:l(()=>[o(f,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=n=>a.value=n),"auto-focus":""},null,8,["modelValue"])]),_:1}),o(u,{label:"Type",required:""},{default:l(()=>[o(f,{modelValue:t.value,"onUpdate:modelValue":e[1]||(e[1]=n=>t.value=n)},null,8,["modelValue"])]),_:1}),o(u,{label:"Type",required:""},{default:l(()=>[o(N,{modelValue:t.value,"onUpdate:modelValue":e[2]||(e[2]=n=>t.value=n),options:y.value,selected:g.value},null,8,["modelValue","options","selected"])]),_:1})])]),_:1})):_("",!0)]))}});m.__docgenInfo={exportName:"default",displayName:"ModalForm.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Modal/ModalForm.story.vue"]};const T=`<template>
  <div>
    <KitButton @click="showDialog"> Show Dialog </KitButton>
    <KitModal v-if="show" heading="Form Demo" @submit="onSubmit" @cancel="onCancel">
      <template #content>
        <div>
          <KitFieldGroup label="Title" required>
            <KitInput v-model="title" auto-focus />
          </KitFieldGroup>
          <KitFieldGroup label="Type" required>
            <KitInput v-model="type" />
          </KitFieldGroup>
          <KitFieldGroup label="Type" required>
            <KitSelect v-model="type" :options="options" :selected="selected" />
          </KitFieldGroup>
        </div>
      </template>
    </KitModal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import KitButton from '@components/Button/KitButton.vue'
import KitModal from '@components/Modal/KitModal.vue'
import KitInput from '@components/Form/KitInput.vue'
import KitFieldGroup from '@components/Form/KitFieldGroup.vue'
import KitSelect from '@/components/Select/KitSelect.vue'

const title = ref('')
const type = ref('')
const selected = ref()
const options = ref(['foo', 'bar', 'baz'])
const show = ref(false)

function onCancel() {
  show.value = false
}

function onSubmit() {
  console.log(JSON.stringify({ title: title.value, type: type.value }))
  onCancel()
}

function showDialog() {
  show.value = true
}
<\/script>
`,P={title:"Modal",component:m,parameters:{docs:{source:{code:T}}}},h=p=>({components:{Comp:m},setup(){return{args:p}},template:'<Comp v-bind="args" />'}),i=h.bind({});var v,K,F;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(F=(K=i.parameters)==null?void 0:K.docs)==null?void 0:F.source}}};const Q=["ModalForm"];export{i as ModalForm,Q as __namedExportsOrder,P as default};
