import{d as i,j as t,F as m,G as u,f as o,k as l,L as g,E as B,A as v}from"./vue.esm-bundler-Bq7iw15p.js";import{K as _}from"./KitBadge-tWvFYniD.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const n=i({__name:"Badge.story",setup(r){const c=["added","default","important","primary","removed"];return(k,C)=>(o(),t("div",null,[(o(),t(m,null,u(c,a=>l("div",{key:a},[g(B(a)+" ",1),v(_,{value:"22",appearance:a},null,8,["appearance"])])),64))]))}});n.__docgenInfo={exportName:"default",displayName:"Badge.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Badge/Badge.story.vue"]};const f=`<template>
  <div>
    <div v-for="appearance in appearances" :key="appearance">
      {{ appearance }}
      <Badge value="22" :appearance="appearance" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Badge from '@components/Badge/KitBadge.vue'

const appearances = ['added', 'default', 'important', 'primary', 'removed']
<\/script>
`,E={title:"Badge",component:n,parameters:{docs:{source:{code:f}}}},y=r=>({components:{Comp:n},setup(){return{args:r}},template:'<Comp v-bind="args" />'}),e=y.bind({});var s,p,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(d=(p=e.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const F=["Badge"];export{e as Badge,F as __namedExportsOrder,E as default};
