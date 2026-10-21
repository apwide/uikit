import{d as h,j as f,k as r,A as t,t as E,r as b,f as w,L as S,E as y}from"./vue.esm-bundler-bSWh6tln.js";import{_ as s}from"./KitStringLineEditableRenderer-DQxDIMIW.js";import{_ as p}from"./KitSecureStringLineEditableRenderer-CAXRpxkB.js";import{_ as x}from"./KitMultiLineEditableRenderer-CZon66jK.js";import"./KitInlineEdit-H4Kwi3m_.js";import"./Popper-D7RkQmME.js";import"./KitIcon-IXZtQfsY.js";import"./KitIconButton-Bak3xkMk.js";import"./KitButton-DXemt05q.js";import"./KitSpinner-BNue20UW.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./KitSectionMessage-BqSHQlrB.js";import"./IconWrapper-DdkEMErG.js";import"./InfoIcon-CvXOTOjS.js";import"./ErrorIcon-DMkoEFcw.js";import"./KitTextField-DL9zzDIB.js";import"./KitStringLineRenderer-CjzB3HHs.js";import"./SecureStringLineRenderer-LwKewaaQ.js";import"./KitButtonGroup-C3xrb6-O.js";import"./KitCopyToClipboard-nWkQ8tVB.js";import"./Tooltip-CBE7IUNl.js";import"./KitTextArea-CQkW55gh.js";class R extends Error{constructor(n,l){super(n),this.generalError=l}}const G={style:{width:"300px"}},_={style:{width:"300px"}},k={style:{width:"300px"}},q={style:{"font-weight":"500","font-size":"20px"}},u=h({__name:"ErrorManagement.story",setup(a){const n=b("This is the default text, try to edit me.");function l(d,e){e(new Error("Something went wrong"))}function i(d,e){const g=new R("General Error","Something went wrong, your request was refused by the big boss of the database. The issue is unrelated to the current edition, make sure to check you entries.");e(g)}return(d,e)=>(w(),f("div",null,[e[0]||(e[0]=r("h3",null,"Simple error",-1)),r("p",null,[t(s,{value:n.value,onSaveRequested:l},null,8,["value"])]),e[1]||(e[1]=r("h3",null,"General error",-1)),e[2]||(e[2]=r("p",null,"Might be useful when there is an error unrelated with current edition.",-1)),e[3]||(e[3]=r("h4",null,"Width 100%",-1)),r("p",null,[t(s,{value:n.value,onSaveRequested:i},null,8,["value"])]),e[4]||(e[4]=r("h4",null,"Width 300px",-1)),r("p",G,[t(s,{value:n.value,"force-is-editing":"",onSaveRequested:i},null,8,["value"])]),e[5]||(e[5]=r("h4",null,"On secured single line",-1)),r("p",_,[t(p,{value:n.value,"force-is-editing":"",onSaveRequested:i},null,8,["value"])]),e[6]||(e[6]=r("h4",null,"On Multi line",-1)),r("p",k,[t(x,{value:n.value,"force-is-editing":"",onSaveRequested:i},null,8,["value"])]),e[7]||(e[7]=r("h4",null,"In a bigger parent element",-1)),r("div",q,[t(p,{value:n.value,onSaveRequested:i},{default:E(()=>[S(y(n.value),1)]),_:1},8,["value"])])]))}});u.__docgenInfo={exportName:"default",displayName:"ErrorManagement.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/InlineEdit/ErrorManagement.story.vue"]};const L=`<template>
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
