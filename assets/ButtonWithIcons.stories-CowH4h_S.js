import{d as I,j as m,k as l,A as t,t as n,L as u,f as y}from"./vue.esm-bundler-Bq7iw15p.js";import{K as s}from"./KitButton-s-nB5WLS.js";import{K as i}from"./KitIconButton-iUT2hFoW.js";import{K as p}from"./KitButtonGroup-DC-yPAk3.js";import{_ as o}from"./KitIcon-DzjcMukR.js";import"./KitSpinner-C_FlB-Bt.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const r=I({__name:"ButtonWithIcons.story",setup(c){return(g,e)=>(y(),m("div",null,[e[6]||(e[6]=l("h2",null,"KitIconButton",-1)),l("p",null,[t(i,{title:"Sit at the table"},{default:n(()=>[t(o,{type:"table"})]),_:1})]),l("p",null,[t(i,{"is-selected":!0,title:"Edit the settings"},{default:n(()=>[t(o,{type:"edit"})]),_:1}),e[0]||(e[0]=u(" (selected) ",-1))]),l("p",null,[t(i,{"inverted-colors":"",title:"..."},{default:n(()=>[t(o,{type:"search"})]),_:1})]),l("p",null,[t(i,{title:"Edit this"},{default:n(()=>[t(o,{type:"edit"})]),_:1})]),e[7]||(e[7]=l("h2",null,"Button with an icon",-1)),l("p",null,[t(s,null,{"icon-after":n(()=>[t(o,{type:"calendar-alt","icon-style":"regular"})]),default:n(()=>[e[1]||(e[1]=u("Pick Date ",-1))]),_:1}),t(s,null,{"icon-before":n(()=>[t(o,{type:"calendar-alt","icon-style":"regular"})]),default:n(()=>[e[2]||(e[2]=u("Pick Date ",-1))]),_:1})]),e[8]||(e[8]=l("h2",null,"KitButtonGroup",-1)),l("p",null,[e[3]||(e[3]=u(" Normal spacing ",-1)),t(p,{spacing:"normal"},{default:n(()=>[t(i,{title:"Sit at the table"},{default:n(()=>[t(o,{type:"table"})]),_:1}),t(i,{title:"Edit the content"},{default:n(()=>[t(o,{type:"edit"})]),_:1}),t(i,{title:"..."},{default:n(()=>[t(o,{type:"download"})]),_:1}),t(i,{title:"Edit this"},{default:n(()=>[t(o,{type:"edit"})]),_:1})]),_:1})]),l("p",null,[e[4]||(e[4]=u(" Wide Spacing ",-1)),t(p,{spacing:"wide"},{default:n(()=>[t(i,{title:"Sit at the table"},{default:n(()=>[t(o,{type:"table"})]),_:1}),t(i,{title:"Edit the content"},{default:n(()=>[t(o,{type:"edit"})]),_:1}),t(i,{title:"..."},{default:n(()=>[t(o,{type:"download"})]),_:1}),t(i,{title:"Edit this"},{default:n(()=>[t(o,{type:"edit"})]),_:1})]),_:1})]),l("p",null,[e[5]||(e[5]=u(" Narrow spacing ",-1)),t(p,{spacing:"narrow"},{default:n(()=>[t(i,{title:"Sit at the table"},{default:n(()=>[t(o,{type:"table"})]),_:1}),t(i,{title:"Edit the content"},{default:n(()=>[t(o,{type:"calendar-alt"})]),_:1}),t(i,{title:"..."},{default:n(()=>[t(o,{type:"square"})]),_:1}),t(i,{title:"Edit this"},{default:n(()=>[t(o,{type:"edit"})]),_:1})]),_:1})])]))}});r.__docgenInfo={exportName:"default",displayName:"ButtonWithIcons.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Button/ButtonWithIcons.story.vue"]};const f=`<template>
  <div>
    <h2>KitIconButton</h2>
    <p>
      <KitIconButton title="Sit at the table">
        <KitIcon type="table" />
      </KitIconButton>
    </p>
    <p>
      <KitIconButton :is-selected="true" title="Edit the settings">
        <KitIcon type="edit" />
      </KitIconButton>
      (selected)
    </p>
    <p>
      <KitIconButton inverted-colors title="...">
        <KitIcon type="search" />
      </KitIconButton>
    </p>
    <p>
      <KitIconButton title="Edit this">
        <KitIcon type="edit" />
      </KitIconButton>
    </p>
    <h2>Button with an icon</h2>
    <p>
      <KitButton>Pick Date
        <template #icon-after>
          <KitIcon type="calendar-alt" icon-style="regular" />
        </template>
      </KitButton>
      <KitButton>Pick Date
        <template #icon-before>
          <KitIcon type="calendar-alt" icon-style="regular" />
        </template>
      </KitButton>
    </p>

    <h2>KitButtonGroup</h2>
    <p>
      Normal spacing
      <KitButtonGroup spacing="normal">
        <KitIconButton title="Sit at the table">
          <KitIcon type="table" />
        </KitIconButton>
        <KitIconButton title="Edit the content">
          <KitIcon type="edit" />
        </KitIconButton>
        <KitIconButton title="...">
          <KitIcon type="download" />
        </KitIconButton>
        <KitIconButton title="Edit this">
          <KitIcon type="edit" />
        </KitIconButton>
      </KitButtonGroup>
    </p>
    <p>
      Wide Spacing
      <KitButtonGroup spacing="wide">
        <KitIconButton title="Sit at the table">
          <KitIcon type="table" />
        </KitIconButton>
        <KitIconButton title="Edit the content">
          <KitIcon type="edit" />
        </KitIconButton>
        <KitIconButton title="...">
          <KitIcon type="download" />
        </KitIconButton>
        <KitIconButton title="Edit this">
          <KitIcon type="edit" />
        </KitIconButton>
      </KitButtonGroup>
    </p>
    <p>
      Narrow spacing
      <KitButtonGroup spacing="narrow">
        <KitIconButton title="Sit at the table">
          <KitIcon type="table" />
        </KitIconButton>
        <KitIconButton title="Edit the content">
          <KitIcon type="calendar-alt" />
        </KitIconButton>
        <KitIconButton title="...">
          <KitIcon type="square" />
        </KitIconButton>
        <KitIconButton title="Edit this">
          <KitIcon type="edit" />
        </KitIconButton>
      </KitButtonGroup>
    </p>
  </div>
</template>

<script setup lang="ts">
import KitButton from '@components/Button/KitButton.vue'
import KitIconButton from '../../src/components/Button/KitIconButton.vue'
import KitButtonGroup from '../../src/components/Button/KitButtonGroup.vue'
import KitIcon from '../../src/components/Icon/KitIcon.vue'
<\/script>

<style scoped></style>
`,k={title:"Button",component:r,parameters:{docs:{source:{code:f}}}},h=c=>({components:{Comp:r},setup(){return{args:c}},template:'<Comp v-bind="args" />'}),a=h.bind({});var d,K,B;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(B=(K=a.parameters)==null?void 0:K.docs)==null?void 0:B.source}}};const N=["ButtonWithIcons"];export{a as ButtonWithIcons,N as __namedExportsOrder,k as default};
