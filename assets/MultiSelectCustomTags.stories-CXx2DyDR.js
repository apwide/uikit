import{d as v,j as _,A as l,t as i,k as t,E as m,r as y,f as S,J as C}from"./vue.esm-bundler-Bq7iw15p.js";import{f as b}from"./chunk-NAVWDHVN-nYOG0we8.js";import{K as h}from"./KitSelect-BdrpqOSM.js";import{K}from"./KitFieldGroup-DJlr_tEu.js";import{m as k}from"./helpers-CDDBEDKi.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./KitTextField-CorFKCZO.js";import"./Popper-CqRkecYS.js";import"./EditorCloseIcon-DEX8M97N.js";import"./IconWrapper-BpnstkGd.js";import"./KitSpinner-C_FlB-Bt.js";const T={class:"wrapper"},w={class:"custom-tag"},d=v({__name:"MultiSelectCustomTags.story",setup(a){const r=k(b.location.city)({},10),[g]=r,n=y([g]);return(G,e)=>(S(),_("div",T,[l(K,{class:"multiselect",label:"Custom Tags"},{default:i(()=>[l(h,{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=s=>n.value=s),multi:!0,options:C(r),placeholder:"select item"},{tag:i(({tag:s})=>[t("span",w,"🌈 "+m(s.value),1)]),_:1},8,["modelValue","options"])]),_:1}),t("table",null,[e[1]||(e[1]=t("thead",null,[t("tr",null,[t("th",null,"value")])],-1)),t("tbody",null,[t("tr",null,[t("td",null,m(n.value),1)])])])]))}}),f=x(d,[["__scopeId","data-v-8908cc02"]]);d.__docgenInfo={exportName:"default",displayName:"MultiSelectCustomTags.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Select/MultiSelectCustomTags.story.vue"]};const F=`<template>
  <div class="wrapper">
    <KitFieldGroup class="multiselect" label="Custom Tags">
      <KitSelect v-model="value" :multi="true" :options="cities" placeholder="select item">
        <template #tag="{ tag }">
          <span class="custom-tag">🌈 {{ tag.value }}</span>
        </template>
      </KitSelect>
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
import { faker } from '@faker-js/faker'
import { ref } from 'vue'
import KitSelect from '@components/Select/KitSelect.vue'
import KitFieldGroup from '@components/Form/KitFieldGroup.vue'
import { many } from '../api-mocks/helpers'

const cities = many(faker.location.city)({}, 10)
const [city] = cities

const value = ref([city])
<\/script>
<style scoped>
.wrapper {
  padding: 20px;
}

.multiselect {
  max-width: 500px;
}

.custom-tag {
  color: magenta;
  font-size: 85%;
  font-weight: bold;
  text-transform: uppercase;
  padding: 2px;
}
</style>
`,U={title:"Select",component:f,parameters:{docs:{source:{code:F}}}},M=a=>({components:{Comp:f},setup(){return{args:a}},template:'<Comp v-bind="args" />'}),o=M.bind({});var c,p,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const q=["MultiSelectCustomTags"];export{o as MultiSelectCustomTags,q as __namedExportsOrder,U as default};
