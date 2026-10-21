import{d as m,f as d,s as y,t as n,k as p,j as f,A as e,L as x}from"./vue.esm-bundler-bSWh6tln.js";import{K as g}from"./KitButton-DXemt05q.js";import{K as a}from"./KitCopyToClipboard-nWkQ8tVB.js";import{I as b}from"./IconWrapper-DdkEMErG.js";import"./KitSpinner-BNue20UW.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./KitIcon-IXZtQfsY.js";import"./Tooltip-CBE7IUNl.js";import"./Popper-D7RkQmME.js";const u=m({__name:"EditorLinkIcon",props:{size:{},primaryColor:{},secondaryColor:{}},setup(o){return(C,t)=>(d(),y(b,{size:o.size,"primary-color":o.primaryColor,"secondary-color":o.secondaryColor},{default:n(()=>[...t[0]||(t[0]=[p("svg",{viewBox:"0 0 24 24"},[p("path",{d:"M12.654 8.764a.858.858 0 0 1-1.213-1.213l1.214-1.214a3.717 3.717 0 0 1 5.257 0 3.714 3.714 0 0 1 .001 5.258l-1.214 1.214-.804.804a3.72 3.72 0 0 1-5.263.005.858.858 0 0 1 1.214-1.214c.781.782 2.05.78 2.836-.005l.804-.803 1.214-1.214a1.998 1.998 0 0 0-.001-2.831 2 2 0 0 0-2.83 0l-1.215 1.213zm-.808 6.472a.858.858 0 0 1 1.213 1.213l-1.214 1.214a3.717 3.717 0 0 1-5.257 0 3.714 3.714 0 0 1-.001-5.258l1.214-1.214.804-.804a3.72 3.72 0 0 1 5.263-.005.858.858 0 0 1-1.214 1.214 2.005 2.005 0 0 0-2.836.005l-.804.803L7.8 13.618a1.998 1.998 0 0 0 .001 2.831 2 2 0 0 0 2.83 0l1.215-1.213z",fill:"currentColor"})],-1)])]),_:1},8,["size","primary-color","secondary-color"]))}});u.__docgenInfo={exportName:"default",displayName:"EditorLinkIcon",description:"",tags:{},props:[{name:"size",required:!1,type:{name:"string"}},{name:"primaryColor",required:!1,type:{name:"string"}},{name:"secondaryColor",required:!1,type:{name:"string"}}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/Icon/aui/EditorLinkIcon.vue"]};const T={style:{display:"flex","align-items":"center",gap:"20px"}},i=m({__name:"CopyToClipboard.story",setup(o){return(C,t)=>(d(),f("div",T,[e(a,{text:"text"}),e(a,{text:"text",spacing:"none",placement:"right"},{default:n(()=>[e(g,{appearance:"subtle"},{default:n(()=>[e(u)]),_:1})]),_:1}),e(a,{text:"text",placement:"right"},{default:n(()=>[...t[0]||(t[0]=[x(" Copy ",-1)])]),_:1})]))}});i.__docgenInfo={exportName:"default",displayName:"CopyToClipboard.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/CopyToClipboard/CopyToClipboard.story.vue"]};const _=`<template>
  <div style="display: flex; align-items: center; gap: 20px">
    <KitCopyToClipboard text="text" />
    <KitCopyToClipboard text="text" spacing="none" placement="right">
      <KitButton appearance="subtle">
        <EditorLinkIcon />
      </KitButton>
    </KitCopyToClipboard>
    <KitCopyToClipboard text="text" placement="right"> Copy </KitCopyToClipboard>
  </div>
</template>

<script setup lang="ts">
import KitButton from '@components/Button/KitButton.vue'
import KitCopyToClipboard from '@components/CopyToClipboard/KitCopyToClipboard.vue'
import EditorLinkIcon from '../../src/components/Icon/aui/EditorLinkIcon.vue'
<\/script>
`,w={title:"CopyToClipboard",component:i,parameters:{docs:{source:{code:_}}}},k=o=>({components:{Comp:i},setup(){return{args:o}},template:'<Comp v-bind="args" />'}),r=k.bind({});var s,l,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const q=["CopyToClipboard"];export{r as CopyToClipboard,q as __namedExportsOrder,w as default};
