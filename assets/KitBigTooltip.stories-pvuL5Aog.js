import{d as g,s as m,T as q,t as i,f as a,A as p,p as c,j as x,k as f,m as E,S as H,r as d,L as T}from"./vue.esm-bundler-bSWh6tln.js";import{K as _}from"./KitButton-DXemt05q.js";import{P as I}from"./Popup-CYbvf_Tg.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./KitSpinner-BNue20UW.js";import"./Popper-D7RkQmME.js";const h=g({__name:"KitBigTooltipContent",props:{placement:{default:"right"},targetElement:{}},setup(o){return(s,e)=>(a(),m(q,{name:"fade",appear:""},{default:i(()=>[p(I,{ref:"popup",placement:o.placement,"target-element":o.targetElement,"transition-delay":300,"is-open":!0},{default:i(()=>[c(s.$slots,"default",{},void 0,!0)]),_:3},8,["placement","target-element"])]),_:3}))}}),M=C(h,[["__scopeId","data-v-1ca58023"]]);h.__docgenInfo={exportName:"default",displayName:"KitBigTooltipContent",description:"",tags:{},props:[{name:"placement",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'right'"}},{name:"targetElement",required:!0,type:{name:"HTMLElement"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/Tooltip/KitBigTooltipContent.vue"]};const F={class:"kit-big-tooltip"},N=g({__name:"KitBigTooltip",props:{placement:{default:"right"},disabled:{type:Boolean,default:!1},appendToBody:{type:Boolean,default:!1}},setup(o){const s=o,e=d(),l=d(),u=d(!1);function $(){s.disabled||(u.value=!0)}function B(t,n){return n.x<=t.x&&t.x<=n.x+n.width&&n.y<=t.y&&t.y<=n.y+n.height}function v(t){if(!(B(t,e.value.getBoundingClientRect())||B(t,l.value.$el.getBoundingClientRect())))return y()}function y(){u.value=!1}return(t,n)=>(a(),x("div",F,[f("span",{ref_key:"trigger",ref:e,onMouseenter:$,onMouseleave:v},[c(t.$slots,"trigger")],544),(a(),m(H,{to:"body",disabled:!o.appendToBody},[u.value?(a(),m(M,{key:0,ref_key:"popper",ref:l,placement:o.placement,"target-element":e.value,onMouseleave:v},{default:i(()=>[c(t.$slots,"default",{hide:y})]),_:3},8,["placement","target-element"])):E("",!0)],8,["disabled"]))]))}});N.__docgenInfo={exportName:"default",displayName:"KitBigTooltip",description:"",tags:{},props:[{name:"placement",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'right'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"appendToBody",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"trigger"},{name:"default",scoped:!0,bindings:[{name:"hide",title:"binding"}]}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/Tooltip/KitBigTooltip.vue"]};const S={class:"buttons-group"},w=g({__name:"KitBigTooltip.story",setup(o){return(s,e)=>(a(),x("div",S,[p(N,{placement:"top"},{trigger:i(()=>[p(_,null,{default:i(()=>[...e[0]||(e[0]=[T("Hover over me!",-1)])]),_:1})]),default:i(({hide:l})=>[e[2]||(e[2]=f("h1",{id:"kit-bigtooltip-content"},"My Detail",-1)),e[3]||(e[3]=f("p",null," Here is an example of tooltip ",-1)),p(_,{onClick:l},{default:i(()=>[...e[1]||(e[1]=[T(" Close ",-1)])]),_:1},8,["onClick"])]),_:1})]))}}),V=C(w,[["__scopeId","data-v-0a13cd84"]]);w.__docgenInfo={exportName:"default",displayName:"KitBigTooltip.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Tooltip/KitBigTooltip.story.vue"]};const j=`<template>
  <div class="buttons-group">
    <KitBigTooltip
      placement="top"
    >
      <template #trigger>
        <KitButton>Hover over me!</KitButton>
      </template>
      <template #default="{ hide }">
        <h1 id="kit-bigtooltip-content">My Detail</h1>
        <p>
          Here is an example of tooltip
        </p>
        <KitButton @click="hide">
          Close
        </KitButton>
      </template>
    </KitBigTooltip>
  </div>
</template>

<script setup lang="ts">
import KitButton from '@components/Button/KitButton.vue'
import KitBigTooltip from '@components/Tooltip/KitBigTooltip.vue'

<\/script>
<style scoped>
.buttons-group {
  max-width: 800px;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
}
</style>
`,G={title:"Tooltip",component:V,parameters:{docs:{source:{code:j}}}},D=o=>({components:{Comp:V},setup(){return{args:o}},template:'<Comp v-bind="args" />'}),r=D.bind({});var K,k,b;r.parameters={...r.parameters,docs:{...(K=r.parameters)==null?void 0:K.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(b=(k=r.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};const J=["KitBigTooltip"];export{r as KitBigTooltip,J as __namedExportsOrder,G as default};
