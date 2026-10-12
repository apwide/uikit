import{d,j as c,k as r,A as a,J as p,f}from"./vue.esm-bundler-bSWh6tln.js";import{c as v}from"./people-CQhRGP95.js";import{K as i}from"./KitUserRenderer-R0MSsxyy.js";import"./chunk-NAVWDHVN-nYOG0we8.js";import"./helpers-CDDBEDKi.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const t=d({__name:"Renderer.story",setup(s){const o=v();return(g,e)=>(f(),c("div",null,[e[0]||(e[0]=r("h5",null,"Normal state:",-1)),r("p",null,[a(i,{user:p(o)},null,8,["user"])]),e[1]||(e[1]=r("h5",null,"Avatar only:",-1)),r("p",null,[a(i,{user:p(o),"avatar-only":!0},null,8,["user"])])]))}});t.__docgenInfo={exportName:"default",displayName:"Renderer.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/InlineEdit/User/Renderer.story.vue"]};const R=`<template>
  <div>
    <h5>Normal state:</h5>
    <p>
      <KitUserRenderer :user="user" />
    </p>
    <h5>Avatar only:</h5>
    <p>
      <KitUserRenderer :user="user" :avatar-only="true" />
    </p>
  </div>
</template>

<script setup lang="ts">
import { createPerson } from '../../api-mocks/people'
import KitUserRenderer from '@/components/field-renderers/KitUserRenderer.vue'

const user = createPerson()
<\/script>
`,h={title:"InlineEdit/User",component:t,parameters:{docs:{source:{code:R}}}},_=s=>({components:{Comp:t},setup(){return{args:s}},template:'<Comp v-bind="args" />'}),n=_.bind({});var m,u,l;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(l=(u=n.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const x=["Renderer"];export{n as Renderer,x as __namedExportsOrder,h as default};
