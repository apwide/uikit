import{d as _,f as d,j as k,k as v,L as q,E as f,r as V,q as m,u as N,F as w,G as x,s as $,z as B,A as s,t as y}from"./vue.esm-bundler-bSWh6tln.js";import{f as I}from"./chunk-NAVWDHVN-nYOG0we8.js";import{K as b}from"./KitFieldGroup-CtYmuqBU.js";import{_ as h}from"./_plugin-vue_export-helper-DlAUqK2U.js";const E=["checked","name"],z=_({__name:"KitRadio",props:{value:{},name:{},checked:{type:Boolean,default:!0}},emits:["input","blur","focus"],setup(a,{emit:u}){const l=a,o=V(),r=u,i=m({get(){return l.checked},set(e){r("input",e)}});function t(e){o.value.contains(e.relatedTarget)||r("blur",e)}function n(e){r("focus",e)}return(e,p)=>(d(),k("label",{ref_key:"radio",ref:o,class:"kit-radio"},[v("input",{ref:"input",checked:i.value,name:a.name,type:"radio",onBlur:t,onChange:p[0]||(p[0]=T=>i.value=a.value),onFocus:n},null,40,E),q(" "+f(a.value.label),1)],512))}}),A=h(z,[["__scopeId","data-v-cf3292a2"]]);z.__docgenInfo={exportName:"default",displayName:"KitRadio",description:"",tags:{},props:[{name:"value",required:!0,type:{name:"unknown"}},{name:"name",required:!1,type:{name:"string"}},{name:"checked",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"input",type:{names:["unknown"]}},{name:"blur",type:{names:["FocusEvent"]}},{name:"focus",type:{names:["FocusEvent"]}}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/Radio/KitRadio.vue"]};const S={class:"kit-radio-group"},C=_({__name:"KitRadioGroup",props:B({values:{default:()=>[]},normalizer:{type:Function,default:a=>({key:a,label:a,value:a})}},{modelValue:{default:""},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const u=a,l=N(a,"modelValue"),o=m(()=>`kit-d-${Date.now()}`),r=m(()=>u.values.map(t=>u.normalizer(t))),i=m({get(){return u.normalizer(l.value).key},set(t){l.value=t.value}});return(t,n)=>(d(),k("div",S,[(d(!0),k(w,null,x(r.value,e=>(d(),$(A,{key:e.key,checked:i.value===e.key,name:o.value,value:e,onInput:n[0]||(n[0]=p=>i.value=p)},null,8,["checked","name","value"]))),128))]))}}),g=h(C,[["__scopeId","data-v-b5b38c64"]]);C.__docgenInfo={exportName:"default",displayName:"KitRadioGroup",description:"",tags:{},props:[{name:"values",required:!1,type:{name:"Array"},defaultValue:{func:!1,value:"() => []"}},{name:"normalizer",required:!1,type:{name:"Normalizer"},defaultValue:{func:!1,value:"(str) => ({ key: str, label: str, value: str })"}}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/Radio/KitRadioGroup.vue"]};const K=_({__name:"Radio.story",setup(a){const u=Array.from({length:10}).map(()=>I.internet.email()),l=V(""),o=V(u[0]),r=m(()=>u);function i(t){return{key:t,label:`Normalized ${t}`,value:t}}return(t,n)=>(d(),k("div",null,[s(b,{"data-cy":"field-group",label:"Simple version",required:""},{default:y(()=>[s(g,{modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=e=>l.value=e),values:r.value},null,8,["modelValue","values"])]),_:1}),v("p",null,"Current selected value: "+f(l.value),1),s(b,{"data-cy":"field-group",label:"With normalizer",required:""},{default:y(()=>[s(g,{modelValue:l.value,"onUpdate:modelValue":n[1]||(n[1]=e=>l.value=e),values:r.value,normalizer:i},null,8,["modelValue","values"])]),_:1}),v("p",null,"Current selected value: "+f(l.value),1),s(b,{"data-cy":"field-group",label:"With default value",required:""},{default:y(()=>[s(g,{modelValue:o.value,"onUpdate:modelValue":n[2]||(n[2]=e=>o.value=e),values:r.value,normalizer:i},null,8,["modelValue","values"])]),_:1}),v("p",null,"Current selected value: "+f(o.value),1)]))}});K.__docgenInfo={exportName:"default",displayName:"Radio.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Form/Radio.story.vue"]};const W=`<template>
  <div>
    <KitFieldGroup data-cy="field-group" label="Simple version" required>
      <KitRadioGroup v-model="value" :values="availableValues" />
    </KitFieldGroup>
    <p>Current selected value: {{ value }}</p>

    <KitFieldGroup data-cy="field-group" label="With normalizer" required>
      <KitRadioGroup v-model="value" :values="availableValues" :normalizer="normalizer" />
    </KitFieldGroup>
    <p>Current selected value: {{ value }}</p>

    <KitFieldGroup data-cy="field-group" label="With default value" required>
      <KitRadioGroup v-model="defaultValue" :values="availableValues" :normalizer="normalizer" />
    </KitFieldGroup>
    <p>Current selected value: {{ defaultValue }}</p>
  </div>
</template>

<script setup lang="ts">
import { faker } from '@faker-js/faker'
import KitFieldGroup from '@components/Form/KitFieldGroup.vue'
import { computed, ref } from 'vue'
import KitRadioGroup from '../../src/components/Radio/KitRadioGroup.vue'

const values = Array.from({ length: 10 }).map(() => faker.internet.email())

const value = ref('')
const defaultValue = ref(values[0])
const availableValues = computed(() => values)

function normalizer(value) {
  return {
    // the unique key
    key: value,
    // what will be displayed
    label: \`Normalized \${value}\`,
    // what will be return upon selection
    value
  }
}
<\/script>
`,O={title:"Form",component:K,parameters:{docs:{source:{code:W}}}},M=a=>({components:{Comp:K},setup(){return{args:a}},template:'<Comp v-bind="args" />'}),c=M.bind({});var R,F,G;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(G=(F=c.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};const H=["Radio"];export{c as Radio,H as __namedExportsOrder,O as default};
