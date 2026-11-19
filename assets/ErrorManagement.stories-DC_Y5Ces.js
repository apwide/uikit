import{d as h,l as f,m as r,E as t,v as E,r as b,k as w,N as S,I as y}from"./vue.esm-bundler-wNF6-2fW.js";import{_ as s}from"./KitStringLineEditableRenderer-BghVOo2O.js";import{_ as p}from"./KitSecureStringLineEditableRenderer-RZi7D0ea.js";import{_ as x}from"./KitMultiLineEditableRenderer-CEXIl2Ku.js";import"./KitInlineEdit-BeMvDPSR.js";import"./Popper-Cj7Zy2p4.js";import"./KitIcon-cw-FHNvL.js";import"./index.es-BO1D75ye.js";import"./KitIconButton-BGzFrlw1.js";import"./KitButton-CNA1GrKR.js";import"./KitSpinner-D_AgCq8k.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./KitSectionMessage-iXCg13Ut.js";import"./IconWrapper-CCL1wCId.js";import"./InfoIcon-Mv_mc-HR.js";import"./ErrorIcon-CcOA9YPC.js";import"./KitTextField-xvdMhYYp.js";import"./KitStringLineRenderer-Dx1d3Sct.js";import"./SecureStringLineRenderer-CCmSyocC.js";import"./KitButtonGroup-DtDuu3wX.js";import"./KitCopyToClipboard-CwNV3anP.js";import"./Tooltip-3GAGjwzl.js";import"./KitTextArea-7THohJrA.js";import"./fieldGroup-CvGAAVzd.js";class R extends Error{constructor(n,l){super(n),this.generalError=l}}const G={style:{width:"300px"}},_={style:{width:"300px"}},k={style:{width:"300px"}},q={style:{"font-weight":"500","font-size":"20px"}},u=h({__name:"ErrorManagement.story",setup(a){const n=b("This is the default text, try to edit me.");function l(d,e){e(new Error("Something went wrong"))}function i(d,e){const g=new R("General Error","Something went wrong, your request was refused by the big boss of the database. The issue is unrelated to the current edition, make sure to check you entries.");e(g)}return(d,e)=>(w(),f("div",null,[e[0]||(e[0]=r("h3",null,"Simple error",-1)),r("p",null,[t(s,{value:n.value,onSaveRequested:l},null,8,["value"])]),e[1]||(e[1]=r("h3",null,"General error",-1)),e[2]||(e[2]=r("p",null,"Might be useful when there is an error unrelated with current edition.",-1)),e[3]||(e[3]=r("h4",null,"Width 100%",-1)),r("p",null,[t(s,{value:n.value,onSaveRequested:i},null,8,["value"])]),e[4]||(e[4]=r("h4",null,"Width 300px",-1)),r("p",G,[t(s,{value:n.value,"force-is-editing":"",onSaveRequested:i},null,8,["value"])]),e[5]||(e[5]=r("h4",null,"On secured single line",-1)),r("p",_,[t(p,{value:n.value,"force-is-editing":"",onSaveRequested:i},null,8,["value"])]),e[6]||(e[6]=r("h4",null,"On Multi line",-1)),r("p",k,[t(x,{value:n.value,"force-is-editing":"",onSaveRequested:i},null,8,["value"])]),e[7]||(e[7]=r("h4",null,"In a bigger parent element",-1)),r("div",q,[t(p,{value:n.value,onSaveRequested:i},{default:E(()=>[S(y(n.value),1)]),_:1},8,["value"])])]))}});u.__docgenInfo={exportName:"default",displayName:"ErrorManagement.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/InlineEdit/ErrorManagement.story.vue"]};const K=`<template>
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
`,re={title:"InlineEdit",component:u,parameters:{docs:{source:{code:K}}}},L=a=>({components:{Comp:u},setup(){return{args:a}},template:'<Comp v-bind="args" />'}),o=L.bind({});var m,v,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(c=(v=o.parameters)==null?void 0:v.docs)==null?void 0:c.source}}};const ne=["ErrorManagement"];export{o as ErrorManagement,ne as __namedExportsOrder,re as default};
