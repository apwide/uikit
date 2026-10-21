import{d as f,j as v,k as n,A as o,J as i,f as _}from"./vue.esm-bundler-bSWh6tln.js";import{f as a}from"./chunk-NAVWDHVN-nYOG0we8.js";import{K as d}from"./KitStringLineRenderer-CjzB3HHs.js";import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";const h={class:"limited-width"},u=f({__name:"Renderer.story",setup(t){a.seed(1);const s=a.lorem.sentence();return(w,e)=>(_(),v("div",null,[e[0]||(e[0]=n("h5",null,"Full width",-1)),n("p",null,[o(d,{value:i(s)},null,8,["value"])]),e[1]||(e[1]=n("h5",null,"100px width",-1)),n("p",h,[o(d,{value:i(s)},null,8,["value"])])]))}}),c=g(u,[["__scopeId","data-v-6aac7edd"]]);u.__docgenInfo={exportName:"default",displayName:"Renderer.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/InlineEdit/StringLine/Renderer.story.vue"]};const k=`<template>
  <div>
    <h5>Full width</h5>
    <p>
      <KitStringLineRenderer :value="value" />
    </p>
    <h5>100px width</h5>
    <p class="limited-width">
      <KitStringLineRenderer :value="value" />
    </p>
  </div>
</template>

<script setup lang="ts">
import { faker } from '@faker-js/faker'
import KitStringLineRenderer from '@/components/field-renderers/KitStringLineRenderer.vue'

faker.seed(1)
const value = faker.lorem.sentence()
<\/script>

<style scoped>
.limited-width {
  width: 100px;
}
</style>
`,C={title:"InlineEdit/StringLine",component:c,parameters:{docs:{source:{code:k}}}},R=t=>({components:{Comp:c},setup(){return{args:t}},template:'<Comp v-bind="args" />'}),r=R.bind({});var l,p,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const K=["Renderer"];export{r as Renderer,K as __namedExportsOrder,C as default};
