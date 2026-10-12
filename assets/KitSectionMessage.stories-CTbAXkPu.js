import{d as b,j as s,k as t,A as o,t as i,F as M,G as B,f as p,L as u}from"./vue.esm-bundler-bSWh6tln.js";import{K as l}from"./KitSectionMessage-BqSHQlrB.js";import{K as S}from"./KitButtonGroup-C3xrb6-O.js";import{K as m}from"./KitButton-DXemt05q.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./IconWrapper-DdkEMErG.js";import"./InfoIcon-CvXOTOjS.js";import"./ErrorIcon-DMkoEFcw.js";import"./KitSpinner-BNue20UW.js";const k={class:"wrapper"},f=b({__name:"KitSectionMessage.story",setup(r){const v=["setup","info","warning","error","confirmation","change"];return(x,e)=>(p(),s("div",null,[t("div",k,[o(l,{title:"Message title"},{actions:i(()=>[...e[0]||(e[0]=[t("ul",null,[t("li",null,[t("a",{href:""},"Help")]),t("li",null,[t("a",{href:""},"Ignore")])],-1)])]),default:i(()=>[e[1]||(e[1]=t("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt totam ipsa suscipit corrupti dolorum, dolor sit nihil? Earum ab alias dolorum molestiae porro consectetur deleniti ducimus velit amet a? ",-1))]),_:1})]),(p(),s(M,null,B(v,a=>t("div",{key:a,class:"wrapper"},[o(l,{appearance:a,title:a},{actions:i(()=>[o(S,null,{default:i(()=>[o(m,{appearance:"primary"},{default:i(()=>[...e[2]||(e[2]=[u("Primary button",-1)])]),_:1}),o(m,{appearance:"link"},{default:i(()=>[...e[3]||(e[3]=[u("Link button",-1)])]),_:1})]),_:1})]),default:i(()=>[e[4]||(e[4]=t("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ab cupiditate ratione voluptatem corporis? Asperiores accusamus tempore porro beatae repudiandae. Odit labore tempore nisi laboriosam repellat facilis aperiam in quos! ",-1))]),_:1},8,["appearance","title"])])),64))]))}}),K=_(f,[["__scopeId","data-v-f0ae67fc"]]);f.__docgenInfo={exportName:"default",displayName:"KitSectionMessage.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/SectionMessage/KitSectionMessage.story.vue"]};const y=`<template>
  <div>
    <div class="wrapper">
      <KitSectionMessage title="Message title">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt totam ipsa suscipit corrupti dolorum,
          dolor sit nihil? Earum ab alias dolorum molestiae porro consectetur deleniti ducimus velit amet a?
        </p>
        <template #actions>
          <ul>
            <li><a href>Help</a></li>
            <li><a href>Ignore</a></li>
          </ul>
        </template>
      </KitSectionMessage>
    </div>
    <div v-for="appearance of appearances" :key="appearance" class="wrapper">
      <KitSectionMessage :appearance="appearance" :title="appearance">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ab cupiditate ratione voluptatem corporis?
          Asperiores accusamus tempore porro beatae repudiandae. Odit labore tempore nisi laboriosam repellat facilis
          aperiam in quos!
        </p>
        <template #actions>
          <KitButtonGroup>
            <KitButton appearance="primary">Primary button</KitButton>
            <KitButton appearance="link">Link button</KitButton>
          </KitButtonGroup>
        </template>
      </KitSectionMessage>
    </div>
  </div>
</template>

<script setup lang="ts">
import KitSectionMessage from '@components/SectionMessage/KitSectionMessage.vue'
import KitButtonGroup from '@components/Button/KitButtonGroup.vue'
import KitButton from '@components/Button/KitButton.vue'
const appearances = ['setup', 'info', 'warning', 'error', 'confirmation', 'change']
<\/script>

<style scoped>
.wrapper {
  width: 600px;
  margin-bottom: 20px;
}
</style>
`,F={title:"SectionMessage",component:K,parameters:{docs:{source:{code:y}}}},w=r=>({components:{Comp:K},setup(){return{args:r}},template:'<Comp v-bind="args" />'}),n=w.bind({});var c,d,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(g=(d=n.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const O=["KitSectionMessage"];export{n as KitSectionMessage,O as __namedExportsOrder,F as default};
