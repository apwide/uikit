import{d as b,u as m,v as E,k as u,t as y,E as i,l as g,m as l,r as R}from"./vue.esm-bundler-wNF6-2fW.js";import{K as w}from"./KitInlineEdit-BeMvDPSR.js";import{K as c}from"./KitHyperlinkRenderer-BSclv7Eb.js";import"./Popper-Cj7Zy2p4.js";import"./KitIcon-cw-FHNvL.js";import"./index.es-BO1D75ye.js";import"./KitIconButton-BGzFrlw1.js";import"./KitButton-CNA1GrKR.js";import"./KitSpinner-D_AgCq8k.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./KitSectionMessage-iXCg13Ut.js";import"./IconWrapper-CCL1wCId.js";import"./InfoIcon-Mv_mc-HR.js";import"./ErrorIcon-CcOA9YPC.js";import"./KitTextField-xvdMhYYp.js";const o=b({__name:"KitHyperlinkEditableRenderer",props:{link:{},editable:{type:Boolean,default:!0},placement:{default:"right"}},emits:["save-requested"],setup(n,{emit:r}){const s=r;function d(...t){s("save-requested",...t)}return(t,e)=>n.editable?(u(),m(w,{key:0,value:n.link,placement:n.placement,onSaveRequested:d},{default:E(()=>[y(t.$slots,"default",{},()=>[i(c,{link:n.link},null,8,["link"])])]),_:3},8,["value","placement"])):(u(),m(c,{key:1,link:n.link},null,8,["link"]))}});o.__docgenInfo={exportName:"default",displayName:"KitHyperlinkEditableRenderer",description:"",tags:{},props:[{name:"link",required:!1,type:{name:"string"}},{name:"editable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"placement",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'right'"}}],events:[{name:"save-requested",type:{names:["undefined"]}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/field-renderers/KitHyperlinkEditableRenderer.vue"]};const p=b({__name:"EditableRenderer.story",setup(n){const r=R("https://www.spartez.com");function s(t,e){r.value=t,e()}function d(t,e){e(new Error("Something went wrong"))}return(t,e)=>(u(),g("div",null,[e[0]||(e[0]=l("h5",null,"Editable:",-1)),l("p",null,[i(o,{link:r.value,onSaveRequested:s},null,8,["link"])]),e[1]||(e[1]=l("h5",null,"Editable - callback with error:",-1)),l("p",null,[i(o,{link:r.value,onSaveRequested:d},null,8,["link"])]),e[2]||(e[2]=l("h5",null,"Non-editable:",-1)),l("p",null,[i(o,{link:r.value,editable:!1},null,8,["link"])])]))}});p.__docgenInfo={exportName:"default",displayName:"EditableRenderer.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/InlineEdit/Hyperlink/EditableRenderer.story.vue"]};const h=`<template>
  <div>
    <h5>Editable:</h5>
    <p>
      <KitHyperlinkEditableRenderer :link="link" @save-requested="onSave" />
    </p>
    <h5>Editable - callback with error:</h5>
    <p>
      <KitHyperlinkEditableRenderer :link="link" @save-requested="onSaveError" />
    </p>
    <h5>Non-editable:</h5>
    <p>
      <KitHyperlinkEditableRenderer :link="link" :editable="false" />
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import KitHyperlinkEditableRenderer from '@/components/field-renderers/KitHyperlinkEditableRenderer.vue'

const link = ref('https://www.spartez.com')

function onSave(value, callback) {
  link.value = value
  callback()
}

function onSaveError(value, callback) {
  callback(new Error('Something went wrong'))
}
<\/script>
`,j={title:"InlineEdit/Hyperlink",component:p,parameters:{docs:{source:{code:h}}}},S=n=>({components:{Comp:p},setup(){return{args:n}},template:'<Comp v-bind="args" />'}),a=S.bind({});var k,f,v;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(v=(f=a.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const A=["EditableRenderer"];export{a as EditableRenderer,A as __namedExportsOrder,j as default};
