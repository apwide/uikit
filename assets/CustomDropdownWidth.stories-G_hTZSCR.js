import{d as c,j as u,A as s,t as f,k as t,E as v,r as h,f as w,J as _}from"./vue.esm-bundler-bSWh6tln.js";import{K as y}from"./KitFieldGroup-CtYmuqBU.js";import{c as b}from"./fake-data-E_ZtP2lM.js";import{K as g}from"./KitSelect-CyppK1da.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./KitTextField-DL9zzDIB.js";import"./Popper-D7RkQmME.js";import"./EditorCloseIcon-DqsKPtqI.js";import"./IconWrapper-DdkEMErG.js";import"./KitSpinner-BNue20UW.js";const S={class:"wrapper"},i=c({__name:"CustomDropdownWidth.story",setup(r){const n=h();return(x,e)=>(w(),u("div",S,[s(y,{"data-cy":"field-group",label:"Single Select"},{default:f(()=>[s(g,{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=m=>n.value=m),"data-cy":"input-component","append-to-body":"",options:_(b),"dropdown-width":400,placeholder:"select item"},null,8,["modelValue","options"])]),_:1}),t("table",null,[e[1]||(e[1]=t("thead",null,[t("tr",null,[t("th",null,"value")])],-1)),t("tbody",null,[t("tr",null,[t("td",null,v(n.value),1)])])])]))}}),d=C(i,[["__scopeId","data-v-483c34fb"]]);i.__docgenInfo={exportName:"default",displayName:"CustomDropdownWidth.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Select/CustomDropdownWidth.story.vue"]};const K=`<template>
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
`,A={title:"Select",component:d,parameters:{docs:{source:{code:K}}}},k=r=>({components:{Comp:d},setup(){return{args:r}},template:'<Comp v-bind="args" />'}),o=k.bind({});var a,p,l;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(l=(p=o.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const J=["CustomDropdownWidth"];export{o as CustomDropdownWidth,J as __namedExportsOrder,A as default};
