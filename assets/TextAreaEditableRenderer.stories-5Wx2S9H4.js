import{d as b,r as E,j as h,k as n,A as a,f as w}from"./vue.esm-bundler-Bq7iw15p.js";import{f as s}from"./chunk-NAVWDHVN-nYOG0we8.js";import{_ as r}from"./KitMultiLineEditableRenderer-BDUoT0p6.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./KitTextArea-DFHepCvO.js";import"./KitTextField-CorFKCZO.js";import"./KitInlineEdit-CnKKQxpm.js";import"./Popper-CqRkecYS.js";import"./KitIcon-DzjcMukR.js";import"./KitIconButton-iUT2hFoW.js";import"./KitButton-s-nB5WLS.js";import"./KitSpinner-C_FlB-Bt.js";import"./KitSectionMessage-nuySiFpO.js";import"./IconWrapper-BpnstkGd.js";import"./InfoIcon-BqBYV2uy.js";import"./ErrorIcon-9HV6gVst.js";const R={class:"limited-width"},v=b({__name:"TextAreaEditableRenderer.story",setup(d){s.seed(1);const t=E(s.lorem.sentence());function i(o,e){t.value=o,e()}function f(o,e){e(new Error("Something went wrong"))}return(o,e)=>(w(),h("div",null,[e[0]||(e[0]=n("h5",null,"Editable:",-1)),n("p",null,[a(r,{"data-cy":"editable",value:t.value,onSaveRequested:i},null,8,["value"])]),e[1]||(e[1]=n("h5",null,"Editable - callback with error:",-1)),n("p",null,[a(r,{"data-cy":"editable-error",value:t.value,onSaveRequested:f},null,8,["value"])]),e[2]||(e[2]=n("h5",null,"Limited width:",-1)),n("p",R,[a(r,{value:t.value,onSaveRequested:i},null,8,["value"])]),e[3]||(e[3]=n("h5",null,"Non-editable:",-1)),n("p",null,[a(r,{"data-cy":"non-editable",value:t.value,editable:!1},null,8,["value"])]),e[4]||(e[4]=n("h5",null,"Without confirmation:",-1)),n("p",null,[a(r,{value:t.value,confirm:!1,align:"end",icon:!1,type:"number",onSaveRequested:i},null,8,["value"])])]))}}),c=k(v,[["__scopeId","data-v-8254d353"]]);v.__docgenInfo={exportName:"default",displayName:"TextAreaEditableRenderer.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/InlineEdit/TextArea/TextAreaEditableRenderer.story.vue"]};const S=`<template>
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
`,F={title:"InlineEdit/TextArea",component:c,parameters:{docs:{source:{code:S}}}},g=d=>({components:{Comp:c},setup(){return{args:d}},template:'<Comp v-bind="args" />'}),l=g.bind({});var u,p,m;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(m=(p=l.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const O=["TextAreaEditableRenderer"];export{l as TextAreaEditableRenderer,O as __namedExportsOrder,F as default};
