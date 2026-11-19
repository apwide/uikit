import{d as v,l as _,E as l,v as i,m as t,I as m,r as y,k as S,B as C}from"./vue.esm-bundler-wNF6-2fW.js";import{f as b}from"./chunk-NAVWDHVN-nYOG0we8.js";import{K as h}from"./KitSelect-CEwbDo_J.js";import{K}from"./KitFieldGroup-CpvzPD4B.js";import{m as k}from"./helpers-CDDBEDKi.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./KitTextField-xvdMhYYp.js";import"./fieldGroup-CvGAAVzd.js";import"./Popper-Cj7Zy2p4.js";import"./dom-kh-IIGlH.js";import"./EditorCloseIcon-aMuF3bKr.js";import"./IconWrapper-CCL1wCId.js";import"./KitSpinner-D_AgCq8k.js";const T={class:"wrapper"},w={class:"custom-tag"},d=v({__name:"MultiSelectCustomTags.story",setup(a){const r=k(b.location.city)({},10),[g]=r,n=y([g]);return(G,e)=>(S(),_("div",T,[l(K,{class:"multiselect",label:"Custom Tags"},{default:i(()=>[l(h,{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=s=>n.value=s),multi:!0,options:C(r),placeholder:"select item"},{tag:i(({tag:s})=>[t("span",w,"🌈 "+m(s.value),1)]),_:1},8,["modelValue","options"])]),_:1}),t("table",null,[e[1]||(e[1]=t("thead",null,[t("tr",null,[t("th",null,"value")])],-1)),t("tbody",null,[t("tr",null,[t("td",null,m(n.value),1)])])])]))}}),f=x(d,[["__scopeId","data-v-8908cc02"]]);d.__docgenInfo={exportName:"default",displayName:"MultiSelectCustomTags.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Select/MultiSelectCustomTags.story.vue"]};const F=`<template>
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
`,J={title:"Select",component:f,parameters:{docs:{source:{code:F}}}},M=a=>({components:{Comp:f},setup(){return{args:a}},template:'<Comp v-bind="args" />'}),o=M.bind({});var p,c,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const L=["MultiSelectCustomTags"];export{o as MultiSelectCustomTags,L as __namedExportsOrder,J as default};
