import{d as p,j as a,k as i,A as d,f as m}from"./vue.esm-bundler-bSWh6tln.js";import{f as c}from"./chunk-NAVWDHVN-nYOG0we8.js";import{K as l}from"./KitHyperlinkRenderer-KZRavG2N.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const u="https://www.spartez.com",r=p({__name:"Renderer.story",setup(n){return c.seed(1),(_,y)=>(m(),a("div",null,[i("p",null,[d(l,{link:u})])]))}});r.__docgenInfo={exportName:"default",displayName:"Renderer.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/InlineEdit/Hyperlink/Renderer.story.vue"]};const k=`<template>
  <div>
    <p>
      <KitHyperlinkRenderer :link="link" />
    </p>
  </div>
</template>

<script setup lang="ts">
import { faker } from '@faker-js/faker'
import KitHyperlinkRenderer from '@/components/field-renderers/KitHyperlinkRenderer.vue'

faker.seed(1)
const link = 'https://www.spartez.com'
<\/script>
`,C={title:"InlineEdit/Hyperlink",component:r,parameters:{docs:{source:{code:k}}}},f=n=>({components:{Comp:r},setup(){return{args:n}},template:'<Comp v-bind="args" />'}),e=f.bind({});var t,o,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const H=["Renderer"];export{e as Renderer,H as __namedExportsOrder,C as default};
