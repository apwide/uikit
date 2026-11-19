import{d as f,l as v,m as r,E as s,B as i,k as S}from"./vue.esm-bundler-wNF6-2fW.js";import{f as p}from"./chunk-NAVWDHVN-nYOG0we8.js";import{S as a}from"./SecureStringLineRenderer-CCmSyocC.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./KitIconButton-BGzFrlw1.js";import"./KitButton-CNA1GrKR.js";import"./KitSpinner-D_AgCq8k.js";import"./KitButtonGroup-DtDuu3wX.js";import"./KitIcon-cw-FHNvL.js";import"./index.es-BO1D75ye.js";import"./KitCopyToClipboard-CwNV3anP.js";import"./Tooltip-3GAGjwzl.js";import"./Popper-Cj7Zy2p4.js";import"./KitStringLineRenderer-Dx1d3Sct.js";const g={class:"limited-width"},u=f({__name:"Renderer.story",setup(t){p.seed(1);const o=p.lorem.sentence();return(R,e)=>(S(),v("div",null,[e[0]||(e[0]=r("h5",null,"Full width",-1)),r("p",null,[s(a,{value:i(o)},null,8,["value"])]),e[1]||(e[1]=r("h5",null,"100px width",-1)),r("p",g,[s(a,{value:i(o)},null,8,["value"])])]))}}),c=_(u,[["__scopeId","data-v-3d59534d"]]);u.__docgenInfo={exportName:"default",displayName:"Renderer.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/InlineEdit/SecuredStringLine/Renderer.story.vue"]};const h=`<template>
  <div>
    <h5>Full width</h5>
    <p>
      <SecureStringLineRenderer :value="value" />
    </p>
    <h5>100px width</h5>
    <p class="limited-width">
      <SecureStringLineRenderer :value="value" />
    </p>
  </div>
</template>

<script setup lang="ts">
import { faker } from '@faker-js/faker'
import SecureStringLineRenderer from '@components/field-renderers/SecureStringLineRenderer.vue'

faker.seed(1)
const value = faker.lorem.sentence()
<\/script>

<style scoped>
.limited-width {
  width: 100px;
}
</style>
`,T={title:"InlineEdit/SecuredStringLine",component:c,parameters:{docs:{source:{code:h}}}},k=t=>({components:{Comp:c},setup(){return{args:t}},template:'<Comp v-bind="args" />'}),n=k.bind({});var d,l,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const q=["Renderer"];export{n as Renderer,q as __namedExportsOrder,T as default};
