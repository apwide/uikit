import{d as G,r as d,n as A,w as D,K as ie,j as J,s as O,t as c,p as U,f as R,k as u,A as i,T as le,L as se}from"./vue.esm-bundler-Bq7iw15p.js";import{K as de}from"./KitTable-BDm3JMkh.js";import{K as ue,a as T}from"./KitBorderedPanelRow-DWfTpgzb.js";import{M as S}from"./KitMarkdownEditor-CqOsRNHd.js";import{K as me}from"./KitInlineEdit-CnKKQxpm.js";import{s as M,f as q,a as ce}from"./dom-kh-IIGlH.js";import{_ as pe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./KitSpinner-C_FlB-Bt.js";import"./KitIcon-DzjcMukR.js";import"./KitButton-s-nB5WLS.js";import"./KitDraggable-CBHrbWIN.js";import"./ChevronDownIcon-B6u_Npdu.js";import"./IconWrapper-BpnstkGd.js";import"./_commonjsHelpers-BosuxZz1.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./Popper-CqRkecYS.js";import"./KitIconButton-iUT2hFoW.js";import"./KitSectionMessage-nuySiFpO.js";import"./InfoIcon-BqBYV2uy.js";import"./ErrorIcon-9HV6gVst.js";import"./KitTextField-CorFKCZO.js";const ve=["data-disabled-ok"],fe={class:"kit-markdown-editable-renderer__editor"},y="kitPreviousWidth",g="kitOpenMarkdownCount",Q=G({__name:"KitMarkdownEditableRenderer",props:{value:{default:""},placeholder:{},toolbar:{},sizeLimit:{},minHeight:{},editable:{type:Boolean,default:!0},forceIsEditing:{type:Boolean},blurToSave:{type:Boolean}},emits:["save-requested","start-editing","stop-editing"],setup(l,{emit:f}){const r=l,m=d(!1),b=d(r.value),v=d(!1),t=d(),s=d(),K=d();function X(e){e.target.tagName.toUpperCase()==="A"&&e.stopPropagation()}const B=f,C=d(!1);function Y(e,n){e(n),b.value=n,v.value=!!r.sizeLimit&&b.value.length>r.sizeLimit,C.value=n!==r.value}function Z(e,n){r.blurToSave&&!(r.sizeLimit&&r.sizeLimit<b.value.length)&&e(n)}function ee(e){e()}function te(){const e=q(t.value);if(e){const n=Number(e.dataset[g]||0);if(n===0){const a=e.querySelectorAll("thead th");if(!a||!a.length)return;a.forEach(o=>{const x=o.getBoundingClientRect();o.style.width&&(o.dataset[y]=o.style.width),o.style.width=`${x.width}px`})}e.dataset[g]=String(n+1)}}function ne(){const e=q(t.value);if(e){const n=Number(e.dataset[g]||1);if(n<=1){const a=e.querySelectorAll("thead th");if(!a||!a.length)return;a.forEach(o=>{o.dataset[y]?(o.style.width=o.dataset[y],delete o.dataset[y]):o.style.width=void 0})}n===1?delete e.dataset[g]:e.dataset[g]=String(n-1)}}let I=0;const w=new ResizeObserver(e=>{const n=e[0].contentRect.height;n!==I&&(I=n,h())}),P=d(!0),L=new IntersectionObserver(e=>{P.value=e[0].isIntersecting},{root:null,threshold:[0,1],rootMargin:"0px"});let V=!1;async function h(){if(!s.value)await A(),V||h();else{P.value||M(s.value,{display:"none"});const e=K.value.getBoundingClientRect(),n=document.body.getBoundingClientRect(),a=s.value.querySelector(".editor-toolbar");let o={display:"block"};if(a){a.style.backgroundColor="var(--kit-md-toolbar-bg)";const x=!!q(t.value);let k=a.getBoundingClientRect().height;x?k+=8:k+=10,r.value.trim().length===0&&(k+=10),o={...o,...ce({top:e.top-n.top-k,left:e.left-n.left-10,width:N})},M(s.value.querySelector(".CodeMirror-scroll"),{minHeight:`${r.minHeight??25}px`}),M(s.value,o)}}}function oe(){ne()}let N=0,F=null;function _(){clearTimeout(F),F=setTimeout(h,100)}D(m,e=>{e?(w.observe(s.value),L.observe(K.value),setTimeout(()=>{w.disconnect()},300),h(),window.addEventListener("wheel",_)):(w.disconnect(),L.disconnect(),window.removeEventListener("wheel",_))}),D(()=>r.forceIsEditing,async e=>{e&&setTimeout(()=>{$(),m.value=!0},100)},{immediate:!0});async function $(){te(),N=t.value.getBoundingClientRect().width,await A(),m.value=!0,B("start-editing")}function ae(){m.value=!1,oe(),B("stop-editing")}function re(e,n){if(r.sizeLimit&&e.trim().length>r.sizeLimit){n(new Error(`Too many characters, field is limited to ${r.sizeLimit}`));return}C.value=!1,B("save-requested",e,n)}return ie(()=>{V=!0,w.disconnect()}),(e,n)=>(R(),J("div",{class:"kit-markdown-editable-renderer",ref_key:"containerRef",ref:t,"data-disabled-ok":v.value},[l.editable?(R(),O(me,{key:0,"blur-to-save":l.blurToSave,type:"text",placement:"top","force-is-editing":l.forceIsEditing,value:l.value,"keep-readonly-view-on-edit":"","element-to-position-confirm-buttons-to":s.value,onStartEditing:$,onStopEditing:ae,onSaveRequested:re},{editor:c(a=>[(R(),O(le,{to:"body"},[u("div",{class:"kit-markdown-editable-renderer__editor-container",ref_key:"markdownEditorRef",ref:s},[u("div",fe,[i(S,{"auto-focus":"",placeholder:l.placeholder,"model-value":a.value,"size-limit":l.sizeLimit,toolbar:l.toolbar,"min-height":l.minHeight,onCtrlEnter:o=>ee(a.confirm),"onUpdate:modelValue":o=>Y(a.input,o),onFocus:a.focus,onBlur:o=>Z(a.blur,o)},null,8,["placeholder","model-value","size-limit","toolbar","min-height","onCtrlEnter","onUpdate:modelValue","onFocus","onBlur"])])],512)]))]),default:c(()=>[u("span",{ref_key:"placeholderRef",ref:K,onClick:X},[U(e.$slots,"default",{},()=>[i(S,{"model-value":l.value,readonly:""},null,8,["model-value"])],!0)],512)]),_:3},8,["blur-to-save","force-is-editing","value","element-to-position-confirm-buttons-to"])):U(e.$slots,"default",{},()=>[i(S,{"model-value":l.value,readonly:""},null,8,["model-value"])],!0,1)],8,ve))}}),p=pe(Q,[["__scopeId","data-v-bad56160"]]);Q.__docgenInfo={exportName:"default",displayName:"KitMarkdownEditableRenderer",description:"",tags:{},props:[{name:"value",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"toolbar",required:!1,type:{name:"Array",elements:[{name:"ToolbarItem"}]}},{name:"sizeLimit",required:!1,type:{name:"number"}},{name:"minHeight",required:!1,type:{name:"number"}},{name:"editable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"forceIsEditing",required:!1,type:{name:"boolean"}},{name:"blurToSave",required:!1,type:{name:"boolean"}}],events:[{name:"save-requested",type:{names:["string"]}},{name:"start-editing"},{name:"stop-editing"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/field-renderers/KitMarkdownEditableRenderer.vue"]};const be={style:{"padding-bottom":"50px"}},z=G({__name:"MarkdownEditableRenderer.story",setup(l){const f=d(`# Description

this environment serves as a demo for our main application Rotozor 3000.

## Account

Email [Bob](mailto:bob@rotozor-corp.com) to get a test account.

## Features

* Best in class generator
* Super amazing suspense manager
* Very nice

[Report issues here](https://support.rotozor-corp.com/demo)
`),r=d("This is a small text");function m(v,t){f.value=v,t()}function b(v,t){setTimeout(()=>t(new Error("Something went wrong")),100)}return(v,t)=>(R(),J("div",be,[t[1]||(t[1]=u("h5",null,"Editable - callback with error:",-1)),i(p,{"allow-blur-to-save":"",value:f.value,onSaveRequested:b},null,8,["value"]),t[2]||(t[2]=u("hr",null,null,-1)),t[3]||(t[3]=u("h5",null,"Editable:",-1)),i(p,{value:f.value,"allow-blur-to-save":"",onSaveRequested:m},null,8,["value"]),t[4]||(t[4]=u("hr",null,null,-1)),t[5]||(t[5]=u("h5",null,"Fewer edition options and limiting allowed characters",-1)),i(p,{value:"has a small text","size-limit":50,toolbar:["bold","italic"],style:{"margin-bottom":"100px"},onSaveRequested:m}),t[6]||(t[6]=u("h5",null,"In a table",-1)),i(de,{style:{"margin-bottom":"30px",width:"200px"},columns:[{id:"id",label:"ID"},{id:"value",label:"Value"}],data:[{id:"1",value:"asdasdfasd"},{id:"2",value:"asdfasdf"}]},{value:c(({value:s})=>[i(p,{value:s,"size-limit":50,onSaveRequested:m},null,8,["value"])]),_:1}),t[7]||(t[7]=u("h5",null,"In KitBorderedPanels",-1)),i(ue,null,{default:c(()=>[i(T,{label:"First row"},{default:c(()=>[i(p,{value:r.value},null,8,["value"])]),_:1}),i(T,{label:"Second row"},{default:c(()=>[i(p,{value:r.value},null,8,["value"])]),_:1}),i(T,{label:"Third row"},{default:c(()=>[i(p,{"force-is-editing":""},{default:c(()=>[...t[0]||(t[0]=[se(" <empty> ",-1)])]),_:1})]),_:1})]),_:1})]))}});z.__docgenInfo={exportName:"default",displayName:"MarkdownEditableRenderer.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/InlineEdit/MarkdownEditor/MarkdownEditableRenderer.story.vue"]};const ge=`<template>
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
`,Ae={title:"InlineEdit/MarkdownEditor",component:z,parameters:{docs:{source:{code:ge}}}},we=l=>({components:{Comp:z},setup(){return{args:l}},template:'<Comp v-bind="args" />'}),E=we.bind({});var H,W,j;E.parameters={...E.parameters,docs:{...(H=E.parameters)==null?void 0:H.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(j=(W=E.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};const De=["MarkdownEditableRenderer"];export{E as MarkdownEditableRenderer,De as __namedExportsOrder,Ae as default};
