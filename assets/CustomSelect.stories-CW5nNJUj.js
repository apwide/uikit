import{d as m,f as u,s as C,t as n,k as e,j as S,A as r,E as _,r as K,J as I,L as b}from"./vue.esm-bundler-bSWh6tln.js";import{K as g}from"./KitSelect-CyppK1da.js";import{K as h}from"./KitButton-DXemt05q.js";import{I as k}from"./IconWrapper-DdkEMErG.js";import{K as w}from"./KitFieldGroup-CtYmuqBU.js";import{c as x}from"./fake-data-E_ZtP2lM.js";import{_ as B}from"./KitIcon-IXZtQfsY.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./KitTextField-DL9zzDIB.js";import"./Popper-D7RkQmME.js";import"./EditorCloseIcon-DqsKPtqI.js";import"./KitSpinner-BNue20UW.js";const d=m({__name:"SearchIcon",props:{size:{},primaryColor:{},secondaryColor:{}},setup(t){return(a,l)=>(u(),C(k,{size:t.size,"primary-color":t.primaryColor,"secondary-color":t.secondaryColor},{default:n(()=>[...l[0]||(l[0]=[e("svg",{viewBox:"0 0 24 24"},[e("path",{d:"M16.436 15.085l3.94 4.01a1 1 0 0 1-1.425 1.402l-3.938-4.006a7.5 7.5 0 1 1 1.423-1.406zM10.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z",fill:"currentColor","fill-rule":"evenodd"})],-1)])]),_:1},8,["size","primary-color","secondary-color"]))}});d.__docgenInfo={exportName:"default",displayName:"SearchIcon",description:"",tags:{},props:[{name:"size",required:!1,type:{name:"string"}},{name:"primaryColor",required:!1,type:{name:"string"}},{name:"secondaryColor",required:!1,type:{name:"string"}}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/Icon/aui/SearchIcon.vue"]};const F={class:"wrapper"},f=m({__name:"CustomSelect.story",setup(t){const a=K();return(l,o)=>(u(),S("div",F,[r(w,{"data-cy":"field-group",label:"Custom Select"},{default:n(()=>[r(g,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=v=>a.value=v),"data-cy":"input-component","append-to-body":"",placeholder:"Quick add...",select:!1,class:"select-ww",options:I(x)},{icon:n(()=>[r(d,{size:"small"})]),"custom-action":n(()=>[r(h,{appearance:"subtle",class:"create"},{"icon-before":n(()=>[r(B,{type:"plus"})]),default:n(()=>[o[1]||(o[1]=b(" Create Issue ",-1))]),_:1})]),_:1},8,["modelValue","options"])]),_:1}),e("table",null,[o[2]||(o[2]=e("thead",null,[e("tr",null,[e("th",null,"value")])],-1)),e("tbody",null,[e("tr",null,[e("td",null,_(a.value),1)])])])]))}}),y=z(f,[["__scopeId","data-v-fff26e39"]]);f.__docgenInfo={exportName:"default",displayName:"CustomSelect.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Select/CustomSelect.story.vue"]};const N=`<template>
  <div class="wrapper">
    <KitFieldGroup data-cy="field-group" label="Custom Select">
      <KitSelect
        v-model="value"
        data-cy="input-component"
        append-to-body
        placeholder="Quick add..."
        :select="false"
        class="select-ww"
        :options="cities">
        <template #icon>
          <SearchIcon size="small" />
        </template>
        <template #custom-action>
          <KitButton appearance="subtle" class="create">
            <template #icon-before>
              <KitIcon type="plus" />
            </template>
            Create Issue
          </KitButton>
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
import { ref } from 'vue'
import KitSelect from '@components/Select/KitSelect.vue'
import KitButton from '@components/Button/KitButton.vue'
import SearchIcon from '@components/Icon/aui/SearchIcon.vue'
import KitFieldGroup from '@components/Form/KitFieldGroup.vue'
import { cities } from '../api-mocks/fake-data'
import KitIcon from '../../src/components/Icon/KitIcon.vue'

const value = ref()
<\/script>
<style scoped>
.wrapper {
  padding: 20px;
  width: 245px;
  overflow: hidden;
}

.create {
  width: 100%;
  border-top: 1px solid #f6f9fc;
}

.create :deep(span) {
  justify-content: flex-start;
}
</style>
`,O={title:"Select",component:y,parameters:{docs:{source:{code:N}}}},V=t=>({components:{Comp:y},setup(){return{args:t}},template:'<Comp v-bind="args" />'}),s=V.bind({});var c,i,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(p=(i=s.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const U=["CustomSelect"];export{s as CustomSelect,U as __namedExportsOrder,O as default};
