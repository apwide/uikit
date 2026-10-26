import{d as h,j as f,k as r,A as t,t as E,r as b,f as w,L as S,E as y}from"./vue.esm-bundler-Bq7iw15p.js";import{_ as s}from"./KitStringLineEditableRenderer-jB_bebwy.js";import{_ as p}from"./KitSecureStringLineEditableRenderer-CaVUdV-C.js";import{_ as x}from"./KitMultiLineEditableRenderer-BDUoT0p6.js";import"./KitInlineEdit-CnKKQxpm.js";import"./Popper-CqRkecYS.js";import"./KitIcon-DzjcMukR.js";import"./KitIconButton-iUT2hFoW.js";import"./KitButton-s-nB5WLS.js";import"./KitSpinner-C_FlB-Bt.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./KitSectionMessage-nuySiFpO.js";import"./IconWrapper-BpnstkGd.js";import"./InfoIcon-BqBYV2uy.js";import"./ErrorIcon-9HV6gVst.js";import"./KitTextField-CorFKCZO.js";import"./KitStringLineRenderer-DcjJAECb.js";import"./SecureStringLineRenderer-lssZ8bXq.js";import"./KitButtonGroup-DC-yPAk3.js";import"./KitCopyToClipboard-JtkSG0w4.js";import"./Tooltip-DPoj6qPg.js";import"./KitTextArea-DFHepCvO.js";class R extends Error{constructor(n,l){super(n),this.generalError=l}}const G={style:{width:"300px"}},_={style:{width:"300px"}},k={style:{width:"300px"}},q={style:{"font-weight":"500","font-size":"20px"}},u=h({__name:"ErrorManagement.story",setup(a){const n=b("This is the default text, try to edit me.");function l(d,e){e(new Error("Something went wrong"))}function i(d,e){const g=new R("General Error","Something went wrong, your request was refused by the big boss of the database. The issue is unrelated to the current edition, make sure to check you entries.");e(g)}return(d,e)=>(w(),f("div",null,[e[0]||(e[0]=r("h3",null,"Simple error",-1)),r("p",null,[t(s,{value:n.value,onSaveRequested:l},null,8,["value"])]),e[1]||(e[1]=r("h3",null,"General error",-1)),e[2]||(e[2]=r("p",null,"Might be useful when there is an error unrelated with current edition.",-1)),e[3]||(e[3]=r("h4",null,"Width 100%",-1)),r("p",null,[t(s,{value:n.value,onSaveRequested:i},null,8,["value"])]),e[4]||(e[4]=r("h4",null,"Width 300px",-1)),r("p",G,[t(s,{value:n.value,"force-is-editing":"",onSaveRequested:i},null,8,["value"])]),e[5]||(e[5]=r("h4",null,"On secured single line",-1)),r("p",_,[t(p,{value:n.value,"force-is-editing":"",onSaveRequested:i},null,8,["value"])]),e[6]||(e[6]=r("h4",null,"On Multi line",-1)),r("p",k,[t(x,{value:n.value,"force-is-editing":"",onSaveRequested:i},null,8,["value"])]),e[7]||(e[7]=r("h4",null,"In a bigger parent element",-1)),r("div",q,[t(p,{value:n.value,onSaveRequested:i},{default:E(()=>[S(y(n.value),1)]),_:1},8,["value"])])]))}});u.__docgenInfo={exportName:"default",displayName:"ErrorManagement.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/InlineEdit/ErrorManagement.story.vue"]};const L=`<template>
  <div>
    <h3>Simple error</h3>
    <p>
      <KitStringLineEditableRenderer :value="value" @save-requested="onSaveError" />
    </p>
    <h3>General error</h3>
    <p>Might be useful when there is an error unrelated with current edition.</p>
    <h4>Width 100%</h4>
    <p>
      <KitStringLineEditableRenderer :value="value" @save-requested="onGeneralError" />
    </p>
    <h4>Width 300px</h4>
    <p style="width: 300px">
      <KitStringLineEditableRenderer :value="value" force-is-editing @save-requested="onGeneralError" />
    </p>
    <h4>On secured single line</h4>
    <p style="width: 300px">
      <KitSecureStringLineEditableRenderer :value="value" force-is-editing @save-requested="onGeneralError" />
    </p>
    <h4>On Multi line</h4>
    <p style="width: 300px">
      <KitMultiLineEditableRenderer :value="value" force-is-editing @save-requested="onGeneralError" />
    </p>
    <h4>In a bigger parent element</h4>
    <div style="font-weight: 500; font-size: 20px">
      <KitSecureStringLineEditableRenderer :value="value" @save-requested="onGeneralError">
        {{ value }}
      </KitSecureStringLineEditableRenderer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import GeneralError from '@components/Form/GeneralError'
import KitStringLineEditableRenderer from '@components/field-renderers/KitStringLineEditableRenderer.vue'
import KitSecureStringLineEditableRenderer from '@components/field-renderers/KitSecureStringLineEditableRenderer.vue'
import KitMultiLineEditableRenderer from '@components/field-renderers/KitMultiLineEditableRenderer.vue'

const value = ref('This is the default text, try to edit me.')

function onSaveError(newValue, callback) {
  callback(new Error('Something went wrong'))
}

function onGeneralError(newValue, callback) {
  const error = new GeneralError(
    'General Error',
    'Something went wrong, your request was refused by the big boss of the database. ' +
      'The issue is unrelated to the current edition, make sure to check you entries.'
  )
  callback(error)
}
<\/script>
`,Z={title:"InlineEdit",component:u,parameters:{docs:{source:{code:L}}}},K=a=>({components:{Comp:u},setup(){return{args:a}},template:'<Comp v-bind="args" />'}),o=K.bind({});var m,v,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(c=(v=o.parameters)==null?void 0:v.docs)==null?void 0:c.source}}};const ee=["ErrorManagement"];export{o as ErrorManagement,ee as __namedExportsOrder,Z as default};
