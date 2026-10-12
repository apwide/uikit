import{d as f,j as s,F as _,G as T,f as r,A as p,t as a,L as g}from"./vue.esm-bundler-bSWh6tln.js";import{K as v}from"./KitButton-DXemt05q.js";import{T as b}from"./Tooltip-CBE7IUNl.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./KitSpinner-BNue20UW.js";import"./Popper-D7RkQmME.js";const x={class:"buttons-group"},c=f({__name:"Tooltip.story",setup(o){const d=["top","right","bottom","left"];return(C,e)=>(r(),s("div",x,[(r(),s(_,null,T(d,n=>p(b,{key:n,"append-to-body":"",placement:n,label:"Hello World!"},{default:a(()=>[p(v,null,{default:a(()=>[...e[0]||(e[0]=[g("Hover over me!",-1)])]),_:1})]),_:1},8,["placement"])),64))]))}}),u=y(c,[["__scopeId","data-v-ec7e3d69"]]);c.__docgenInfo={exportName:"default",displayName:"Tooltip.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Tooltip/Tooltip.story.vue"]};const B=`<template>
  <div class="buttons-group">
    <Tooltip
      v-for="placement in placements"
      :key="placement"
      append-to-body
      :placement="placement"
      label="Hello World!">
      <KitButton>Hover over me!</KitButton>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
import KitButton from '@components/Button/KitButton.vue'
import Tooltip from '@/components/Tooltip/Tooltip.vue'

const placements = ['top', 'right', 'bottom', 'left']
<\/script>
<style scoped>
.buttons-group {
  max-width: 800px;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
}
</style>
`,j={title:"Tooltip",component:u,parameters:{docs:{source:{code:B}}}},k=o=>({components:{Comp:u},setup(){return{args:o}},template:'<Comp v-bind="args" />'}),t=k.bind({});var i,l,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const E=["Tooltip"];export{t as Tooltip,E as __namedExportsOrder,j as default};
