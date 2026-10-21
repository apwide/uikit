import{d as g,j as b,k as o,A as e,t as p,P as w,r as y,f,L as m}from"./vue.esm-bundler-bSWh6tln.js";import{K as u}from"./KitButton-DXemt05q.js";import{M as r}from"./KitMarkdownEditor-CMlH_6xE.js";import"./KitSpinner-BNue20UW.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";const E={style:{width:"300px"}},a=g({__name:"MarkdownEditor.story",setup(s){const n=y(`# Description

this environment serves as a demo for our main application Rotozor 3000.

## Account

Email [Bob](mailto:bob@rotozor-corp.com) to get a test account.

## Features

* Best in class generator
* Super amazing suspense manager
* Very nice

[Report issues here](https://support.rotozor-corp.com/demo)
`);function d(){alert(n.value)}return(M,t)=>(f(),b("div",null,[t[4]||(t[4]=o("h2",null,"Editable",-1)),e(r,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=l=>n.value=l),style:{"margin-bottom":"10px"}},null,8,["modelValue"]),e(u,{appearance:"primary",onClick:d},{default:p(()=>[...t[2]||(t[2]=[m("Save",-1)])]),_:1}),t[5]||(t[5]=o("hr",null,null,-1)),t[6]||(t[6]=o("h2",null,"Editable with limited width",-1)),o("div",E,[e(r,{value:n.value,style:{"margin-bottom":"10px"}},null,8,["value"])]),t[7]||(t[7]=o("hr",null,null,-1)),t[8]||(t[8]=o("h2",null,"Readonly",-1)),e(r,{readonly:"",modelValue:n.value,"onUpdate:modelValue":t[1]||(t[1]=l=>n.value=l),style:{"margin-bottom":"10px"}},null,8,["modelValue"]),t[9]||(t[9]=o("hr",null,null,-1)),t[10]||(t[10]=o("h2",null,"Little content",-1)),e(r,{readonly:"",value:"This is a test"}),e(u,{appearance:"primary",onClick:d},{default:p(()=>[...t[3]||(t[3]=[m("Save",-1)])]),_:1}),t[11]||(t[11]=w("<hr><h2>Different toolbar</h2><p>Available values</p><ul><li>heading,</li><li>bold,</li><li>italic,</li><li>unordered-list,</li><li>ordered-list,</li><li>link,</li><li>preview,</li><li>code,</li><li>image,</li><li>|</li></ul>",4)),e(r,{value:"",placeholder:"Type something...",toolbar:["bold","italic","|","image","link"]})]))}});a.__docgenInfo={exportName:"default",displayName:"MarkdownEditor.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/MarkdownEditor/MarkdownEditor.story.vue"]};const h=`<template>
  <div>
    <h2>Editable</h2>
    <MarkdownEditor v-model="text" style="margin-bottom: 10px" />
    <KitButton appearance="primary" @click="save">Save</KitButton>
    <hr />
    <h2>Editable with limited width</h2>
    <div style="width: 300px">
      <MarkdownEditor :value="text" style="margin-bottom: 10px" />
    </div>
    <hr />

    <h2>Readonly</h2>
    <MarkdownEditor readonly v-model="text" style="margin-bottom: 10px" />
    <hr />

    <h2>Little content</h2>
    <MarkdownEditor readonly value="This is a test" />
    <KitButton appearance="primary" @click="save">Save</KitButton>
    <hr />

    <h2>Different toolbar</h2>
    <p>Available values</p>
    <ul>
      <li>heading,</li>
      <li>bold,</li>
      <li>italic,</li>
      <li>unordered-list,</li>
      <li>ordered-list,</li>
      <li>link,</li>
      <li>preview,</li>
      <li>code,</li>
      <li>image,</li>
      <li>|</li>
    </ul>
    <MarkdownEditor value="" placeholder="Type something..." :toolbar="['bold', 'italic', '|', 'image', 'link']" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import KitButton from '@components/Button/KitButton.vue'
import MarkdownEditor from '../../src/components/MarkdownEditor/KitMarkdownEditor.vue'

const text = ref(\`# Description

this environment serves as a demo for our main application Rotozor 3000.

## Account

Email [Bob](mailto:bob@rotozor-corp.com) to get a test account.

## Features

* Best in class generator
* Super amazing suspense manager
* Very nice

[Report issues here](https://support.rotozor-corp.com/demo)
\`)

function save() {
  alert(text.value)
}
<\/script>
`,R={title:"MarkdownEditor",component:a,parameters:{docs:{source:{code:h}}}},x=s=>({components:{Comp:a},setup(){return{args:s}},template:'<Comp v-bind="args" />'}),i=x.bind({});var v,c,k;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(k=(c=i.parameters)==null?void 0:c.docs)==null?void 0:k.source}}};const T=["MarkdownEditor"];export{i as MarkdownEditor,T as __namedExportsOrder,R as default};
