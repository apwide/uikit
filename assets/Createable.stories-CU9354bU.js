import{d as x,j as C,A as a,t as o,k as t,E as _,r as p,f as g}from"./vue.esm-bundler-Bq7iw15p.js";import{K as i}from"./KitSelect-BdrpqOSM.js";import{K as s}from"./KitFieldGroup-DJlr_tEu.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./KitTextField-CorFKCZO.js";import"./Popper-CqRkecYS.js";import"./EditorCloseIcon-DEX8M97N.js";import"./IconWrapper-BpnstkGd.js";import"./KitSpinner-C_FlB-Bt.js";const h={class:"wrapper"},f=x({__name:"Createable.story",setup(m){const l=p([]),d=p([10]);function K(u){return/^\d+$/.test(u)}return(u,e)=>(g(),C("div",h,[a(s,{class:"createable",label:"Createable"},{default:o(()=>[a(i,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=n=>l.value=n),"data-cy":"simple",createable:"",multi:"",placeholder:"Type something and press enter..."},null,8,["modelValue"])]),_:1}),a(s,{class:"createable",label:"Limited number of tags"},{default:o(()=>[a(i,{modelValue:l.value,"onUpdate:modelValue":e[1]||(e[1]=n=>l.value=n),"data-cy":"limited",max:3,createable:"",multi:"",placeholder:"Maximum 3 elements.."},null,8,["modelValue"])]),_:1}),a(s,{class:"createable",label:"Minimum number of elements, plus validation"},{default:o(()=>[a(i,{modelValue:d.value,"onUpdate:modelValue":e[2]||(e[2]=n=>d.value=n),"data-cy":"validated",multi:"",createable:"","is-valid-option":K,min:1,max:3,placeholder:"KitSelect city..."},null,8,["modelValue"])]),_:1}),t("table",null,[e[3]||(e[3]=t("thead",null,[t("tr",null,[t("th",null,"value")])],-1)),t("tbody",null,[t("tr",null,[t("td",null,_(l.value),1)])])])]))}}),y=S(f,[["__scopeId","data-v-b77d1a13"]]);f.__docgenInfo={exportName:"default",displayName:"Createable.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Select/Createable.story.vue"]};const F=`<template>
  <div class="wrapper">
    <KitFieldGroup class="createable" label="Createable">
      <KitSelect v-model="value" data-cy="simple" createable multi placeholder="Type something and press enter..." />
    </KitFieldGroup>
    <KitFieldGroup class="createable" label="Limited number of tags">
      <KitSelect v-model="value" data-cy="limited" :max="3" createable multi placeholder="Maximum 3 elements.." />
    </KitFieldGroup>
    <KitFieldGroup class="createable" label="Minimum number of elements, plus validation">
      <KitSelect
        v-model="minmax"
        data-cy="validated"
        multi
        createable
        :is-valid-option="validateTimer"
        :min="1"
        :max="3"
        placeholder="KitSelect city..." />
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
import KitSelect from '@components/Select/KitSelect.vue'
import KitFieldGroup from '@components/Form/KitFieldGroup.vue'

const value = ref([])
const minmax = ref([10])

function validateTimer(value) {
  return /^\\d+$/.test(value)
}
<\/script>
<style scoped>
.wrapper {
  padding: 20px;
}

.createable {
  max-width: 500px;
}
</style>
`,I={title:"Select",component:y,parameters:{docs:{source:{code:F}}}},V=m=>({components:{Comp:y},setup(){return{args:m}},template:'<Comp v-bind="args" />'}),r=V.bind({});var c,b,v;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(v=(b=r.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const L=["Createable"];export{r as Createable,L as __namedExportsOrder,I as default};
