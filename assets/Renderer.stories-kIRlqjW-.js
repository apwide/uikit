import{d as i,j as m,k as n,A as s,f as l}from"./vue.esm-bundler-bSWh6tln.js";import{K as p}from"./KitCheckboxRenderer-DdVdhBgx.js";import"./EditorDoneIcon-CO2Tf0aw.js";import"./IconWrapper-DdkEMErG.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const t=i({__name:"Renderer.story",setup(o){return(h,e)=>(l(),m("div",null,[e[0]||(e[0]=n("h5",null,"Checked",-1)),n("p",null,[s(p,{value:!0})]),e[1]||(e[1]=n("h5",null,"Unchecked",-1)),n("p",null,[s(p,{value:!1})])]))}});t.__docgenInfo={exportName:"default",displayName:"Renderer.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/InlineEdit/Checkbox/Renderer.story.vue"]};const u=`<template>
  <div>
    <h5>Checked</h5>
    <p>
      <KitCheckboxRenderer :value="true" />
    </p>
    <h5>Unchecked</h5>
    <p>
      <KitCheckboxRenderer :value="false" />
    </p>
  </div>
</template>

<script setup lang="ts">
import KitCheckboxRenderer from '@/components/field-renderers/KitCheckboxRenderer.vue'
<\/script>
`,b={title:"InlineEdit/Checkbox",component:t,parameters:{docs:{source:{code:u}}}},k=o=>({components:{Comp:t},setup(){return{args:o}},template:'<Comp v-bind="args" />'}),r=k.bind({});var a,d,c;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const _=["Renderer"];export{r as Renderer,_ as __namedExportsOrder,b as default};
