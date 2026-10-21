import{d as f,r as S,j as E,k as n,A as r,f as g}from"./vue.esm-bundler-bSWh6tln.js";import{f as s}from"./chunk-NAVWDHVN-nYOG0we8.js";import{_ as a}from"./KitSecureStringLineEditableRenderer-CAXRpxkB.js";import{_ as h}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./KitInlineEdit-H4Kwi3m_.js";import"./Popper-D7RkQmME.js";import"./KitIcon-IXZtQfsY.js";import"./KitIconButton-Bak3xkMk.js";import"./KitButton-DXemt05q.js";import"./KitSpinner-BNue20UW.js";import"./KitSectionMessage-BqSHQlrB.js";import"./IconWrapper-DdkEMErG.js";import"./InfoIcon-CvXOTOjS.js";import"./ErrorIcon-DMkoEFcw.js";import"./KitTextField-DL9zzDIB.js";import"./SecureStringLineRenderer-LwKewaaQ.js";import"./KitButtonGroup-C3xrb6-O.js";import"./KitCopyToClipboard-nWkQ8tVB.js";import"./Tooltip-CBE7IUNl.js";import"./KitStringLineRenderer-CjzB3HHs.js";const w={style:{"max-width":"600px"}},k={class:"limited-width"},c=f({__name:"EditableRenderer.story",setup(d){s.seed(1);const t=S(s.lorem.sentence());function l(o,e){t.value=o,e()}function b(o,e){e(new Error("Something went wrong"))}return(o,e)=>(g(),E("div",w,[e[0]||(e[0]=n("h5",null,"Editable:",-1)),n("p",null,[r(a,{"data-cy":"editable",value:t.value,onSaveRequested:l},null,8,["value"])]),e[1]||(e[1]=n("h5",null,"Editable - callback with error:",-1)),n("p",null,[r(a,{"data-cy":"editable-error",value:t.value,onSaveRequested:b},null,8,["value"])]),e[2]||(e[2]=n("h5",null,"Limited width:",-1)),n("p",k,[r(a,{value:t.value,onSaveRequested:l},null,8,["value"])]),e[3]||(e[3]=n("h5",null,"Non-editable:",-1)),n("p",null,[r(a,{"data-cy":"non-editable",value:t.value,editable:!1},null,8,["value"])]),e[4]||(e[4]=n("h5",null,"Without confirmation:",-1)),n("p",null,[r(a,{value:t.value,confirm:!1,align:"end",icon:!1,type:"number",onSaveRequested:l},null,8,["value"])])]))}}),v=h(c,[["__scopeId","data-v-8eb2c14c"]]);c.__docgenInfo={exportName:"default",displayName:"EditableRenderer.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/InlineEdit/SecuredStringLine/EditableRenderer.story.vue"]};const R=`<template>
  <div style="max-width: 600px">
    <h5>Editable:</h5>
    <p>
      <KitSecureStringLineEditableRenderer data-cy="editable" :value="value" @save-requested="onSave" />
    </p>
    <h5>Editable - callback with error:</h5>
    <p>
      <KitSecureStringLineEditableRenderer data-cy="editable-error" :value="value" @save-requested="onSaveError" />
    </p>
    <h5>Limited width:</h5>
    <p class="limited-width">
      <KitSecureStringLineEditableRenderer :value="value" @save-requested="onSave" />
    </p>
    <h5>Non-editable:</h5>
    <p>
      <KitSecureStringLineEditableRenderer data-cy="non-editable" :value="value" :editable="false" />
    </p>
    <h5>Without confirmation:</h5>
    <p>
      <KitSecureStringLineEditableRenderer
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
import KitSecureStringLineEditableRenderer from '@components/field-renderers/KitSecureStringLineEditableRenderer.vue'

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
`,H={title:"InlineEdit/SecuredStringLine",component:v,parameters:{docs:{source:{code:R}}}},y=d=>({components:{Comp:v},setup(){return{args:d}},template:'<Comp v-bind="args" />'}),i=y.bind({});var u,p,m;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(m=(p=i.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const J=["EditableRenderer"];export{i as EditableRenderer,J as __namedExportsOrder,H as default};
