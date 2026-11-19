import{d as w,l as a,m as e,z as x,S as K,J as p,K as c,r as A,k as s,E as l,v as d,N as u,I as m}from"./vue.esm-bundler-wNF6-2fW.js";import{K as v}from"./KitButton-CNA1GrKR.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./KitSpinner-D_AgCq8k.js";const L={class:"outer"},z={class:"loading-state-switcher"},S={class:"wrapper"},N={class:"buttons"},V={class:"buttons"},E={class:"buttons"},I={class:"buttons"},k=w({__name:"ButtonApperance.story",setup(b){const i=["default","primary","link","subtle","subtle-link","warning","danger","help"],t=A(!1);function o(f){return f.charAt(0).toUpperCase()+f.slice(1)}return(f,r)=>(s(),a("div",L,[e("div",z,[e("label",null,[x(e("input",{"onUpdate:modelValue":r[0]||(r[0]=n=>t.value=n),type:"checkbox"},null,512),[[K,t.value]]),r[1]||(r[1]=e("span",null,"Show Loading State",-1))])]),e("div",S,[e("div",N,[(s(),a(p,null,c(i,n=>e("div",{key:n},[l(v,{"is-loading":t.value,appearance:n},{default:d(()=>[u(m(o(n)),1)]),_:2},1032,["is-loading","appearance"])])),64))]),e("div",V,[(s(),a(p,null,c(i,n=>e("div",{key:n},[l(v,{"is-loading":t.value,"is-disabled":!0,appearance:n},{default:d(()=>[u(m(o(n)),1)]),_:2},1032,["is-loading","appearance"])])),64))]),e("div",E,[(s(),a(p,null,c(i,n=>e("div",{key:n},[l(v,{"is-loading":t.value,"is-selected":!0,appearance:n},{default:d(()=>[u(m(o(n)),1)]),_:2},1032,["is-loading","appearance"])])),64))]),e("div",I,[(s(),a(p,null,c(i,n=>e("div",{key:n},[l(v,{"is-loading":t.value,round:"",appearance:n},{default:d(()=>[u(m(o(n)),1)]),_:2},1032,["is-loading","appearance"])])),64))])])]))}}),h=C(k,[["__scopeId","data-v-b93b18ca"]]);k.__docgenInfo={exportName:"default",displayName:"ButtonApperance.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Button/ButtonApperance.story.vue"]};const U=`<template>
  <div class="outer">
    <div class="loading-state-switcher">
      <label>
        <input v-model="isLoading" type="checkbox" />
        <span>Show Loading State</span>
      </label>
    </div>
    <div class="wrapper">
      <div class="buttons">
        <div v-for="appearance in appearances" :key="appearance">
          <KitButton :is-loading="isLoading" :appearance="appearance">
            {{ capitalize(appearance) }}
          </KitButton>
        </div>
      </div>
      <div class="buttons">
        <div v-for="appearance in appearances" :key="appearance">
          <KitButton :is-loading="isLoading" :is-disabled="true" :appearance="appearance">
            {{ capitalize(appearance) }}
          </KitButton>
        </div>
      </div>
      <div class="buttons">
        <div v-for="appearance in appearances" :key="appearance">
          <KitButton :is-loading="isLoading" :is-selected="true" :appearance="appearance">
            {{ capitalize(appearance) }}
          </KitButton>
        </div>
      </div>
      <div class="buttons">
        <div v-for="appearance in appearances" :key="appearance">
          <KitButton :is-loading="isLoading" round :appearance="appearance">
            {{ capitalize(appearance) }}
          </KitButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import KitButton from '@components/Button/KitButton.vue'
import { ref } from 'vue'
import { KitButtonAppearance } from '@components/Button/KitButton.types'

const appearances = [
  'default',
  'primary',
  'link',
  'subtle',
  'subtle-link',
  'warning',
  'danger',
  'help'
] as KitButtonAppearance[]

const isLoading = ref(false)

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
<\/script>

<style scoped>
.buttons {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: normal;
}

.buttons :deep(button) {
  margin-bottom: 10px;
}

.wrapper {
  display: flex;
  max-width: 80%;
  justify-content: space-between;
}

.loading-state-switcher {
  margin-bottom: 10px;
}
</style>
`,M={title:"Button",component:h,parameters:{docs:{source:{code:U}}}},j=b=>({components:{Comp:h},setup(){return{args:b}},template:'<Comp v-bind="args" />'}),g=j.bind({});var _,B,y;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(y=(B=g.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};const O=["ButtonApperance"];export{g as ButtonApperance,O as __namedExportsOrder,M as default};
