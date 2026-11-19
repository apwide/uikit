import{d as c,l as u,E as s,v as f,m as t,I as v,r as h,k as w,B as _}from"./vue.esm-bundler-wNF6-2fW.js";import{K as y}from"./KitFieldGroup-CpvzPD4B.js";import{c as b}from"./fake-data-E_ZtP2lM.js";import{K as g}from"./KitSelect-CEwbDo_J.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./dom-kh-IIGlH.js";import"./fieldGroup-CvGAAVzd.js";import"./KitTextField-xvdMhYYp.js";import"./Popper-Cj7Zy2p4.js";import"./EditorCloseIcon-aMuF3bKr.js";import"./IconWrapper-CCL1wCId.js";import"./KitSpinner-D_AgCq8k.js";const S={class:"wrapper"},l=c({__name:"CustomDropdownWidth.story",setup(r){const n=h();return(x,e)=>(w(),u("div",S,[s(y,{"data-cy":"field-group",label:"Single Select"},{default:f(()=>[s(g,{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=m=>n.value=m),"data-cy":"input-component","append-to-body":"",options:_(b),"dropdown-width":400,placeholder:"select item"},null,8,["modelValue","options"])]),_:1}),t("table",null,[e[1]||(e[1]=t("thead",null,[t("tr",null,[t("th",null,"value")])],-1)),t("tbody",null,[t("tr",null,[t("td",null,v(n.value),1)])])])]))}}),d=C(l,[["__scopeId","data-v-483c34fb"]]);l.__docgenInfo={exportName:"default",displayName:"CustomDropdownWidth.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Select/CustomDropdownWidth.story.vue"]};const K=`<template>
  <div class="wrapper">
    <KitFieldGroup data-cy="field-group" label="Single Select">
      <KitSelect
        v-model="value"
        data-cy="input-component"
        append-to-body
        :options="cities"
        :dropdown-width="400"
        placeholder="select item" />
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

<script lang="ts" setup>
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
`,j={title:"Select",component:d,parameters:{docs:{source:{code:K}}}},k=r=>({components:{Comp:d},setup(){return{args:r}},template:'<Comp v-bind="args" />'}),o=k.bind({});var p,a,i;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const q=["CustomDropdownWidth"];export{o as CustomDropdownWidth,q as __namedExportsOrder,j as default};
