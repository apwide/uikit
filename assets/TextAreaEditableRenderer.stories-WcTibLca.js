import{d as f,r as E,l as h,m as n,E as r,k as w}from"./vue.esm-bundler-wNF6-2fW.js";import{f as s}from"./chunk-NAVWDHVN-nYOG0we8.js";import{_ as a}from"./KitMultiLineEditableRenderer-CEXIl2Ku.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./KitTextArea-7THohJrA.js";import"./KitTextField-xvdMhYYp.js";import"./fieldGroup-CvGAAVzd.js";import"./KitInlineEdit-BeMvDPSR.js";import"./Popper-Cj7Zy2p4.js";import"./KitIcon-cw-FHNvL.js";import"./index.es-BO1D75ye.js";import"./KitIconButton-BGzFrlw1.js";import"./KitButton-CNA1GrKR.js";import"./KitSpinner-D_AgCq8k.js";import"./KitSectionMessage-iXCg13Ut.js";import"./IconWrapper-CCL1wCId.js";import"./InfoIcon-Mv_mc-HR.js";import"./ErrorIcon-CcOA9YPC.js";const R={class:"limited-width"},v=f({__name:"TextAreaEditableRenderer.story",setup(d){s.seed(1);const t=E(s.lorem.sentence());function i(o,e){t.value=o,e()}function b(o,e){e(new Error("Something went wrong"))}return(o,e)=>(w(),h("div",null,[e[0]||(e[0]=n("h5",null,"Editable:",-1)),n("p",null,[r(a,{"data-cy":"editable",value:t.value,onSaveRequested:i},null,8,["value"])]),e[1]||(e[1]=n("h5",null,"Editable - callback with error:",-1)),n("p",null,[r(a,{"data-cy":"editable-error",value:t.value,onSaveRequested:b},null,8,["value"])]),e[2]||(e[2]=n("h5",null,"Limited width:",-1)),n("p",R,[r(a,{value:t.value,onSaveRequested:i},null,8,["value"])]),e[3]||(e[3]=n("h5",null,"Non-editable:",-1)),n("p",null,[r(a,{"data-cy":"non-editable",value:t.value,editable:!1},null,8,["value"])]),e[4]||(e[4]=n("h5",null,"Without confirmation:",-1)),n("p",null,[r(a,{value:t.value,confirm:!1,align:"end",icon:!1,type:"number",onSaveRequested:i},null,8,["value"])])]))}}),c=k(v,[["__scopeId","data-v-8254d353"]]);v.__docgenInfo={exportName:"default",displayName:"TextAreaEditableRenderer.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/InlineEdit/TextArea/TextAreaEditableRenderer.story.vue"]};const S=`<template>
  <div>
    <h5>Editable:</h5>
    <p>
      <KitMultiLineEditableRenderer data-cy="editable" :value="value" @save-requested="onSave" />
    </p>
    <h5>Editable - callback with error:</h5>
    <p>
      <KitMultiLineEditableRenderer data-cy="editable-error" :value="value" @save-requested="onSaveError" />
    </p>
    <h5>Limited width:</h5>
    <p class="limited-width">
      <KitMultiLineEditableRenderer :value="value" @save-requested="onSave" />
    </p>
    <h5>Non-editable:</h5>
    <p>
      <KitMultiLineEditableRenderer data-cy="non-editable" :value="value" :editable="false" />
    </p>
    <h5>Without confirmation:</h5>
    <p>
      <KitMultiLineEditableRenderer
        :value="value"
        :confirm="false"
        align="end"
        :icon="false"
        type="number"
        @save-requested="onSave" />
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { faker } from '@faker-js/faker'
import KitMultiLineEditableRenderer from '@/components/field-renderers/KitMultiLineEditableRenderer.vue'

faker.seed(1)
const value = ref(faker.lorem.sentence())

function onSave(newValue, callback) {
  value.value = newValue
  callback()
}

function onSaveError(newValue, callback) {
  callback(new Error('Something went wrong'))
}
<\/script>

<style scoped>
.limited-width {
  width: 300px;
}
</style>
`,$={title:"InlineEdit/TextArea",component:c,parameters:{docs:{source:{code:S}}}},g=d=>({components:{Comp:c},setup(){return{args:d}},template:'<Comp v-bind="args" />'}),l=g.bind({});var u,p,m;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(m=(p=l.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const z=["TextAreaEditableRenderer"];export{l as TextAreaEditableRenderer,z as __namedExportsOrder,$ as default};
