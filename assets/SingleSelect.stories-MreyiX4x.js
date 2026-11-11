import{d as m,j as u,A as l,t as S,k as e,E as f,r as v,f as g,J as y}from"./vue.esm-bundler-Bq7iw15p.js";import{K as _}from"./KitFieldGroup-DJlr_tEu.js";import{c as b}from"./fake-data-E_ZtP2lM.js";import{K}from"./KitSelect-BdrpqOSM.js";import{_ as h}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./KitTextField-CorFKCZO.js";import"./Popper-CqRkecYS.js";import"./EditorCloseIcon-DEX8M97N.js";import"./IconWrapper-BpnstkGd.js";import"./KitSpinner-C_FlB-Bt.js";const k={class:"wrapper"},i=m({__name:"SingleSelect.story",setup(r){const n=v();return(C,t)=>(g(),u("div",k,[l(_,{"data-cy":"field-group",label:"Single Select"},{default:S(()=>[l(K,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=d=>n.value=d),"data-cy":"input-component","append-to-body":"",options:y(b),placeholder:"Select city..."},null,8,["modelValue","options"])]),_:1}),e("table",null,[t[1]||(t[1]=e("thead",null,[e("tr",null,[e("th",null,"value")])],-1)),e("tbody",null,[e("tr",null,[e("td",null,f(n.value),1)])])])]))}}),c=h(i,[["__scopeId","data-v-d4481612"]]);i.__docgenInfo={exportName:"default",displayName:"SingleSelect.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Select/SingleSelect.story.vue"]};const x=`<template>
  <div class="wrapper">
    <KitFieldGroup data-cy="field-group" label="Single Select">
      <KitSelect v-model="value" data-cy="input-component" append-to-body :options="cities" placeholder="Select city..." />
    </KitFieldGroup>
    <table>
      <thead>
        <tr>
          <th>value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import KitFieldGroup from '@components/Form/KitFieldGroup.vue'
import { cities } from '../api-mocks/fake-data'
import KitSelect from '@/components/Select/KitSelect.vue'

const value = ref()
<\/script>
<style scoped>
.wrapper {
  padding: 20px;
  width: 245px;
  overflow: hidden;
}
</style>
`,J={title:"Select",component:c,parameters:{docs:{source:{code:x}}}},w=r=>({components:{Comp:c},setup(){return{args:r}},template:'<Comp v-bind="args" />'}),o=w.bind({});var a,s,p;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(p=(s=o.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const O=["SingleSelect"];export{o as SingleSelect,O as __namedExportsOrder,J as default};
