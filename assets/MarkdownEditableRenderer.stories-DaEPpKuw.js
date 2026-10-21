import{d as j,r as d,n as A,w as D,K as re,j as G,s as ie,t as c,p as O,f as C,k as u,A as l,L as le}from"./vue.esm-bundler-bSWh6tln.js";import{K as se}from"./KitTable-kJJj6_bH.js";import{K as de,a as x}from"./KitBorderedPanelRow-9ftOkd3w.js";import{M as T}from"./KitMarkdownEditor-CMlH_6xE.js";import{K as ue}from"./KitInlineEdit-H4Kwi3m_.js";import{s as S,f as M,a as me}from"./dom-kh-IIGlH.js";import{_ as ce}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./KitSpinner-BNue20UW.js";import"./KitIcon-IXZtQfsY.js";import"./KitButton-DXemt05q.js";import"./KitDraggable-rwHm5TPS.js";import"./ChevronDownIcon-BpZDYj0q.js";import"./IconWrapper-DdkEMErG.js";import"./_commonjsHelpers-BosuxZz1.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./Popper-D7RkQmME.js";import"./KitIconButton-Bak3xkMk.js";import"./KitSectionMessage-BqSHQlrB.js";import"./InfoIcon-CvXOTOjS.js";import"./ErrorIcon-DMkoEFcw.js";import"./KitTextField-DL9zzDIB.js";const ve=["data-disabled-ok"],pe={class:"kit-markdown-editable-renderer__editor"},y="kitPreviousWidth",g="kitOpenMarkdownCount",J=j({__name:"KitMarkdownEditableRenderer",props:{value:{default:""},placeholder:{},toolbar:{},sizeLimit:{},minHeight:{},editable:{type:Boolean,default:!0},forceIsEditing:{type:Boolean},blurToSave:{type:Boolean}},emits:["save-requested","start-editing","stop-editing"],setup(s,{emit:f}){const r=s,m=d(!1),b=d(r.value),p=d(!1),t=d(),i=d(),R=d();function Q(e){e.target.tagName.toUpperCase()==="A"&&e.stopPropagation()}const K=f,z=d(!1);function X(e,n){e(n),b.value=n,p.value=!!r.sizeLimit&&b.value.length>r.sizeLimit,z.value=n!==r.value}function Y(e,n){r.blurToSave&&!(r.sizeLimit&&r.sizeLimit<b.value.length)&&e(n)}function Z(e){e()}function ee(){const e=M(t.value);if(e){const n=Number(e.dataset[g]||0);if(n===0){const a=e.querySelectorAll("thead th");if(!a||!a.length)return;a.forEach(o=>{const B=o.getBoundingClientRect();o.style.width&&(o.dataset[y]=o.style.width),o.style.width=`${B.width}px`})}e.dataset[g]=String(n+1)}}function te(){const e=M(t.value);if(e){const n=Number(e.dataset[g]||1);if(n<=1){const a=e.querySelectorAll("thead th");if(!a||!a.length)return;a.forEach(o=>{o.dataset[y]?(o.style.width=o.dataset[y],delete o.dataset[y]):o.style.width=void 0})}n===1?delete e.dataset[g]:e.dataset[g]=String(n-1)}}let I=0;const h=new ResizeObserver(e=>{const n=e[0].contentRect.height;n!==I&&(I=n,w())}),P=d(!0),L=new IntersectionObserver(e=>{P.value=e[0].isIntersecting},{root:null,threshold:[0,1],rootMargin:"0px"});let V=!1;async function w(){if(!i.value)await A(),V||w();else{i.value.parentElement!==document.body&&document.body.appendChild(i.value),P.value||S(i.value,{display:"none"});const e=R.value.getBoundingClientRect(),n=document.body.getBoundingClientRect(),a=i.value.querySelector(".editor-toolbar");let o={display:"block"};if(a){a.style.backgroundColor="var(--kit-md-toolbar-bg)";const B=!!M(t.value);let k=a.getBoundingClientRect().height;B?k+=8:k+=10,r.value.trim().length===0&&(k+=10),o={...o,...me({top:e.top-n.top-k,left:e.left-n.left-10,width:N})},S(i.value.querySelector(".CodeMirror-scroll"),{minHeight:`${r.minHeight??25}px`}),S(i.value,o)}}}function ne(){var e;te(),(e=i.value)==null||e.remove()}let N=0,F=null;function _(){clearTimeout(F),F=setTimeout(w,100)}D(m,e=>{e?(h.observe(i.value),L.observe(R.value),setTimeout(()=>{h.disconnect()},300),w(),window.addEventListener("wheel",_)):(h.disconnect(),L.disconnect(),window.removeEventListener("wheel",_))}),D(()=>r.forceIsEditing,async e=>{e&&setTimeout(()=>{$(),m.value=!0},100)},{immediate:!0});async function $(){ee(),N=t.value.getBoundingClientRect().width,await A(),m.value=!0,K("start-editing")}function oe(){m.value=!1,ne(),K("stop-editing")}function ae(e,n){if(r.sizeLimit&&e.trim().length>r.sizeLimit){n(new Error(`Too many characters, field is limited to ${r.sizeLimit}`));return}z.value=!1,K("save-requested",e,n)}return re(()=>{V=!0,i.value&&i.value.remove(),h.disconnect()}),(e,n)=>(C(),G("div",{class:"kit-markdown-editable-renderer",ref_key:"containerRef",ref:t,"data-disabled-ok":p.value},[s.editable?(C(),ie(ue,{key:0,"blur-to-save":s.blurToSave,type:"text",placement:"top","force-is-editing":s.forceIsEditing,value:s.value,"keep-readonly-view-on-edit":"","element-to-position-confirm-buttons-to":i.value,onStartEditing:$,onStopEditing:oe,onSaveRequested:ae},{editor:c(a=>[u("div",{class:"kit-markdown-editable-renderer__editor-container",ref_key:"markdownEditorRef",ref:i},[u("div",pe,[l(T,{"auto-focus":"",placeholder:s.placeholder,"model-value":a.value,"size-limit":s.sizeLimit,toolbar:s.toolbar,"min-height":s.minHeight,onCtrlEnter:o=>Z(a.confirm),"onUpdate:modelValue":o=>X(a.input,o),onFocus:a.focus,onBlur:o=>Y(a.blur,o)},null,8,["placeholder","model-value","size-limit","toolbar","min-height","onCtrlEnter","onUpdate:modelValue","onFocus","onBlur"])])],512)]),default:c(()=>[u("span",{ref_key:"placeholderRef",ref:R,onClick:Q},[O(e.$slots,"default",{},()=>[l(T,{"model-value":s.value,readonly:""},null,8,["model-value"])],!0)],512)]),_:3},8,["blur-to-save","force-is-editing","value","element-to-position-confirm-buttons-to"])):O(e.$slots,"default",{},()=>[l(T,{"model-value":s.value,readonly:""},null,8,["model-value"])],!0,1)],8,ve))}}),v=ce(J,[["__scopeId","data-v-97d5153d"]]);J.__docgenInfo={exportName:"default",displayName:"KitMarkdownEditableRenderer",description:"",tags:{},props:[{name:"value",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"toolbar",required:!1,type:{name:"Array",elements:[{name:"ToolbarItem"}]}},{name:"sizeLimit",required:!1,type:{name:"number"}},{name:"minHeight",required:!1,type:{name:"number"}},{name:"editable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"forceIsEditing",required:!1,type:{name:"boolean"}},{name:"blurToSave",required:!1,type:{name:"boolean"}}],events:[{name:"save-requested",type:{names:["string"]}},{name:"start-editing"},{name:"stop-editing"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/field-renderers/KitMarkdownEditableRenderer.vue"]};const fe={style:{"padding-bottom":"50px"}},q=j({__name:"MarkdownEditableRenderer.story",setup(s){const f=d(`# Description

this environment serves as a demo for our main application Rotozor 3000.

## Account

Email [Bob](mailto:bob@rotozor-corp.com) to get a test account.

## Features

* Best in class generator
* Super amazing suspense manager
* Very nice

[Report issues here](https://support.rotozor-corp.com/demo)
`),r=d("This is a small text");function m(p,t){f.value=p,t()}function b(p,t){setTimeout(()=>t(new Error("Something went wrong")),100)}return(p,t)=>(C(),G("div",fe,[t[1]||(t[1]=u("h5",null,"Editable - callback with error:",-1)),l(v,{"allow-blur-to-save":"",value:f.value,onSaveRequested:b},null,8,["value"]),t[2]||(t[2]=u("hr",null,null,-1)),t[3]||(t[3]=u("h5",null,"Editable:",-1)),l(v,{value:f.value,"allow-blur-to-save":"",onSaveRequested:m},null,8,["value"]),t[4]||(t[4]=u("hr",null,null,-1)),t[5]||(t[5]=u("h5",null,"Fewer edition options and limiting allowed characters",-1)),l(v,{value:"has a small text","size-limit":50,toolbar:["bold","italic"],style:{"margin-bottom":"100px"},onSaveRequested:m}),t[6]||(t[6]=u("h5",null,"In a table",-1)),l(se,{style:{"margin-bottom":"30px",width:"200px"},columns:[{id:"id",label:"ID"},{id:"value",label:"Value"}],data:[{id:"1",value:"asdasdfasd"},{id:"2",value:"asdfasdf"}]},{value:c(({value:i})=>[l(v,{value:i,"size-limit":50,onSaveRequested:m},null,8,["value"])]),_:1}),t[7]||(t[7]=u("h5",null,"In KitBorderedPanels",-1)),l(de,null,{default:c(()=>[l(x,{label:"First row"},{default:c(()=>[l(v,{value:r.value},null,8,["value"])]),_:1}),l(x,{label:"Second row"},{default:c(()=>[l(v,{value:r.value},null,8,["value"])]),_:1}),l(x,{label:"Third row"},{default:c(()=>[l(v,{"force-is-editing":""},{default:c(()=>[...t[0]||(t[0]=[le(" <empty> ",-1)])]),_:1})]),_:1})]),_:1})]))}});q.__docgenInfo={exportName:"default",displayName:"MarkdownEditableRenderer.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/InlineEdit/MarkdownEditor/MarkdownEditableRenderer.story.vue"]};const be=`<template>
  <div style="padding-bottom: 50px">
    <h5>Editable - callback with error:</h5>
    <KitMarkdownEditableRenderer allow-blur-to-save :value="text" @save-requested="onSaveError" />
    <hr />
    <h5>Editable:</h5>
    <KitMarkdownEditableRenderer :value="text" allow-blur-to-save @save-requested="onSaveRequested" />
    <hr />

    <h5>Fewer edition options and limiting allowed characters</h5>
    <KitMarkdownEditableRenderer
      value="has a small text"
      :size-limit="50"
      :toolbar="['bold', 'italic']"
      style="margin-bottom: 100px"
      @save-requested="onSaveRequested" />

    <h5>In a table</h5>

    <KitTable
      style="margin-bottom: 30px; width: 200px"
      :columns="[
        { id: 'id', label: 'ID' },
        { id: 'value', label: 'Value' }
      ]"
      :data="[
        { id: '1', value: 'asdasdfasd' },
        { id: '2', value: 'asdfasdf' }
      ]">
      <template #value="{ value }">
        <KitMarkdownEditableRenderer :value="value" :size-limit="50" @save-requested="onSaveRequested" />
      </template>
    </KitTable>

    <h5>In KitBorderedPanels</h5>

    <KitBorderedPanel>
      <KitBorderedPanelRow label="First row">
        <KitMarkdownEditableRenderer :value="smallText" />
      </KitBorderedPanelRow>
      <KitBorderedPanelRow label="Second row">
        <KitMarkdownEditableRenderer :value="smallText" />
      </KitBorderedPanelRow>
      <KitBorderedPanelRow label="Third row">
        <KitMarkdownEditableRenderer force-is-editing> &lt;empty&gt; </KitMarkdownEditableRenderer>
      </KitBorderedPanelRow>
    </KitBorderedPanel>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import KitTable from '@components/Table/KitTable.vue'
import KitBorderedPanel from '@components/layout/BorderedPanel/KitBorderedPanel.vue'
import KitBorderedPanelRow from '@components/layout/BorderedPanel/KitBorderedPanelRow.vue'
import KitMarkdownEditableRenderer from '../../../src/components/field-renderers/KitMarkdownEditableRenderer.vue'

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

const smallText = ref('This is a small text')

function onSaveRequested(content, callback) {
  text.value = content
  callback()
}

function onSaveError(value, callback) {
  setTimeout(() => callback(new Error('Something went wrong')), 100)
}
<\/script>

<style scoped></style>
`,$e={title:"InlineEdit/MarkdownEditor",component:q,parameters:{docs:{source:{code:be}}}},ge=s=>({components:{Comp:q},setup(){return{args:s}},template:'<Comp v-bind="args" />'}),E=ge.bind({});var U,H,W;E.parameters={...E.parameters,docs:{...(U=E.parameters)==null?void 0:U.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(W=(H=E.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};const Ae=["MarkdownEditableRenderer"];export{E as MarkdownEditableRenderer,Ae as __namedExportsOrder,$e as default};
