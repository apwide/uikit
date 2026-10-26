import{d as f,j as v,k as r,A as s,J as i,f as S}from"./vue.esm-bundler-Bq7iw15p.js";import{f as p}from"./chunk-NAVWDHVN-nYOG0we8.js";import{S as a}from"./SecureStringLineRenderer-lssZ8bXq.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./KitIconButton-iUT2hFoW.js";import"./KitButton-s-nB5WLS.js";import"./KitSpinner-C_FlB-Bt.js";import"./KitButtonGroup-DC-yPAk3.js";import"./KitIcon-DzjcMukR.js";import"./KitCopyToClipboard-JtkSG0w4.js";import"./Tooltip-DPoj6qPg.js";import"./Popper-CqRkecYS.js";import"./KitStringLineRenderer-DcjJAECb.js";const g={class:"limited-width"},u=f({__name:"Renderer.story",setup(t){p.seed(1);const o=p.lorem.sentence();return(R,e)=>(S(),v("div",null,[e[0]||(e[0]=r("h5",null,"Full width",-1)),r("p",null,[s(a,{value:i(o)},null,8,["value"])]),e[1]||(e[1]=r("h5",null,"100px width",-1)),r("p",g,[s(a,{value:i(o)},null,8,["value"])])]))}}),c=_(u,[["__scopeId","data-v-3d59534d"]]);u.__docgenInfo={exportName:"default",displayName:"Renderer.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/InlineEdit/SecuredStringLine/Renderer.story.vue"]};const h=`<template>
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
`,A={title:"InlineEdit/SecuredStringLine",component:c,parameters:{docs:{source:{code:h}}}},k=t=>({components:{Comp:c},setup(){return{args:t}},template:'<Comp v-bind="args" />'}),n=k.bind({});var d,l,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const J=["Renderer"];export{n as Renderer,J as __namedExportsOrder,A as default};
