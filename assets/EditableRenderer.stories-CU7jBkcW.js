import{d as h,r as R,l as L,m as n,E as r,v as i,k as w,N as s,I as u}from"./vue.esm-bundler-wNF6-2fW.js";import{f as v}from"./chunk-NAVWDHVN-nYOG0we8.js";import{K as m}from"./KitLozenge-a_onoOoa.js";import{_ as a}from"./KitStringLineEditableRenderer-BghVOo2O.js";import{_ as K}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./KitInlineEdit-BeMvDPSR.js";import"./Popper-Cj7Zy2p4.js";import"./KitIcon-cw-FHNvL.js";import"./index.es-BO1D75ye.js";import"./KitIconButton-BGzFrlw1.js";import"./KitButton-CNA1GrKR.js";import"./KitSpinner-D_AgCq8k.js";import"./KitSectionMessage-iXCg13Ut.js";import"./IconWrapper-CCL1wCId.js";import"./InfoIcon-Mv_mc-HR.js";import"./ErrorIcon-CcOA9YPC.js";import"./KitTextField-xvdMhYYp.js";import"./KitStringLineRenderer-Dx1d3Sct.js";const y={class:"limited-width"},k={style:{"font-weight":"500","font-size":"20px"}},c=h({__name:"EditableRenderer.story",setup(p){v.seed(1);const t=R(v.lorem.sentence());function l(d,e){t.value=d,e()}function E(d,e){e(new Error("Something went wrong"))}return(d,e)=>(w(),L("div",null,[e[0]||(e[0]=n("h5",null,"Editable:",-1)),n("p",null,[r(a,{"data-cy":"editable",value:t.value,onSaveRequested:l},null,8,["value"])]),e[1]||(e[1]=n("h5",null,"Editable - callback with error:",-1)),n("p",null,[r(a,{"data-cy":"editable-error",value:t.value,onSaveRequested:E},null,8,["value"])]),e[2]||(e[2]=n("h5",null,"Limited width:",-1)),n("p",y,[r(a,{value:t.value,onSaveRequested:l},null,8,["value"])]),e[3]||(e[3]=n("h5",null,"Non-editable:",-1)),n("p",null,[r(a,{"data-cy":"non-editable",value:t.value,editable:!1},null,8,["value"])]),e[4]||(e[4]=n("h5",null,"Without confirmation:",-1)),n("p",null,[r(a,{value:t.value,confirm:!1,align:"end",icon:!1,type:"number",onSaveRequested:l},null,8,["value"])]),e[5]||(e[5]=n("h5",null,"Custom renderer",-1)),e[6]||(e[6]=n("p",null,"Useful when value is to be presented differently than just text",-1)),n("p",null,[r(a,{value:t.value,onSaveRequested:l},{default:i(()=>[r(m,null,{default:i(()=>[s(u(t.value),1)]),_:1})]),_:1},8,["value"])]),e[7]||(e[7]=n("h5",null,"Custom renderer (when none-editable)",-1)),n("p",null,[r(a,{editable:!1,onSaveRequested:l},{default:i(()=>[r(m,null,{default:i(()=>[s(u(t.value),1)]),_:1})]),_:1})]),e[8]||(e[8]=n("h5",null,"In a bigger parent element",-1)),n("div",k,[r(a,{value:t.value,onSaveRequested:l},{default:i(()=>[s(u(t.value),1)]),_:1},8,["value"])])]))}}),S=K(c,[["__scopeId","data-v-8a98f48c"]]);c.__docgenInfo={exportName:"default",displayName:"EditableRenderer.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/InlineEdit/StringLine/EditableRenderer.story.vue"]};const q=`<template>
  <div>
    <h5>Editable:</h5>
    <p>
      <KitStringLineEditableRenderer data-cy="editable" :value="value" @save-requested="onSave" />
    </p>
    <h5>Editable - callback with error:</h5>
    <p>
      <KitStringLineEditableRenderer data-cy="editable-error" :value="value" @save-requested="onSaveError" />
    </p>
    <h5>Limited width:</h5>
    <p class="limited-width">
      <KitStringLineEditableRenderer :value="value" @save-requested="onSave" />
    </p>
    <h5>Non-editable:</h5>
    <p>
      <KitStringLineEditableRenderer data-cy="non-editable" :value="value" :editable="false" />
    </p>
    <h5>Without confirmation:</h5>
    <p>
      <KitStringLineEditableRenderer
        :value="value"
        :confirm="false"
        align="end"
        :icon="false"
        type="number"
        @save-requested="onSave" />
    </p>
    <h5>Custom renderer</h5>
    <p>Useful when value is to be presented differently than just text</p>
    <p>
      <KitStringLineEditableRenderer :value="value" @save-requested="onSave">
        <KitLozenge>{{ value }}</KitLozenge>
      </KitStringLineEditableRenderer>
    </p>
    <h5>Custom renderer (when none-editable)</h5>
    <p>
      <KitStringLineEditableRenderer :editable="false" @save-requested="onSave">
        <KitLozenge>{{ value }}</KitLozenge>
      </KitStringLineEditableRenderer>
    </p>
    <h5>In a bigger parent element</h5>
    <div style="font-weight: 500; font-size: 20px">
      <KitStringLineEditableRenderer :value="value" @save-requested="onSave">
        {{ value }}
      </KitStringLineEditableRenderer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { faker } from '@faker-js/faker'
import KitLozenge from '@components/Lozenge/KitLozenge.vue'
import { ref } from 'vue'
import KitStringLineEditableRenderer from '@/components/field-renderers/KitStringLineEditableRenderer.vue'

faker.seed(1)

const value = ref(faker.lorem.sentence())

function onSave(v, callback) {
  value.value = v
  callback()
}

function onSaveError(value, callback) {
  callback(new Error('Something went wrong'))
}
<\/script>

<style scoped>
.limited-width {
  width: 300px;
}
</style>
`,J={title:"InlineEdit/StringLine",component:S,parameters:{docs:{source:{code:q}}}},x=p=>({components:{Comp:S},setup(){return{args:p}},template:'<Comp v-bind="args" />'}),o=x.bind({});var f,b,g;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(g=(b=o.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const M=["EditableRenderer"];export{o as EditableRenderer,M as __namedExportsOrder,J as default};
