import{d as m,j as c,k as o,A as l,J as u,f}from"./vue.esm-bundler-bSWh6tln.js";import{f as s}from"./chunk-NAVWDHVN-nYOG0we8.js";import{K as k}from"./KitDateRenderer-BXDIldeb.js";import"./format-CL5xAmzD.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const r=m({__name:"Renderer.story",setup(t){s.seed(1);const i=s.date.recent().getTime();return(R,n)=>(f(),c("div",null,[n[0]||(n[0]=o("h5",null,"Date",-1)),o("p",null,[l(k,{date:u(i)},null,8,["date"])])]))}});r.__docgenInfo={exportName:"default",displayName:"Renderer.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/InlineEdit/Date/Renderer.story.vue"]};const _=`<template>
  <div>
    <h5>Date</h5>
    <p>
      <KitDateRenderer :date="date" />
    </p>
  </div>
</template>

<script setup lang="ts">
import { faker } from '@faker-js/faker'
import KitDateRenderer from '@/components/field-renderers/KitDateRenderer.vue'

faker.seed(1)
const date = faker.date.recent().getTime()
<\/script>
`,y={title:"InlineEdit/Date",component:r,parameters:{docs:{source:{code:_}}}},g=t=>({components:{Comp:r},setup(){return{args:t}},template:'<Comp v-bind="args" />'}),e=g.bind({});var a,d,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const E=["Renderer"];export{e as Renderer,E as __namedExportsOrder,y as default};
