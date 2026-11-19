import{d as B,u as f,V as I,v as i,k as r,E as d,t as g,w as L,M as D,l as V,m as v,s as O,T as P,r as c,N as x}from"./vue.esm-bundler-wNF6-2fW.js";import{K as C}from"./KitButton-CNA1GrKR.js";import{P as R}from"./Popup-BrfFHZ0X.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./KitSpinner-D_AgCq8k.js";import"./Popper-Cj7Zy2p4.js";const F=B({__name:"KitBigTooltipContent",props:{placement:{default:"right"},targetElement:{}},setup(o){return(l,t)=>(r(),f(I,{name:"fade",appear:""},{default:i(()=>[d(R,{ref:"popup",placement:o.placement,"target-element":o.targetElement,"transition-delay":300,"is-open":!0},{default:i(()=>[g(l.$slots,"default",{},void 0,!0)]),_:3},8,["placement","target-element"])]),_:3}))}}),S=$(F,[["__scopeId","data-v-1ca58023"]]);F.__docgenInfo={exportName:"default",displayName:"KitBigTooltipContent",description:"",tags:{},props:[{name:"placement",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'right'"}},{name:"targetElement",required:!0,type:{name:"HTMLElement"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/Tooltip/KitBigTooltipContent.vue"]};const j={class:"kit-big-tooltip"},M=B({__name:"KitBigTooltip",props:{placement:{default:"right"},disabled:{type:Boolean,default:!1},appendToBody:{type:Boolean,default:!1}},setup(o){const l=o,t=c(),a=c(),p=c(!1);function y(){l.disabled||(p.value=!0)}function T(e,n){return n.x<=e.x&&e.x<=n.x+n.width&&n.y<=e.y&&e.y<=n.y+n.height}function _(e){if(a.value&&!(T(e,t.value.getBoundingClientRect())||T(e,a.value.$el.getBoundingClientRect())))return s()}function s(){p.value=!1}function k(e){var K,b,h;const n=e.relatedTarget;n&&((K=t.value)!=null&&K.contains(n)||(h=(b=a.value)==null?void 0:b.$el)!=null&&h.contains(n))||s()}function m(e){e.key==="Escape"&&s()}return L(p,e=>{e?document.addEventListener("keydown",m):document.removeEventListener("keydown",m)}),D(()=>document.removeEventListener("keydown",m)),(e,n)=>(r(),V("div",j,[v("span",{ref_key:"trigger",ref:t,onMouseenter:y,onMouseleave:_,onFocusin:y,onFocusout:k},[g(e.$slots,"trigger",{hide:s})],544),(r(),f(P,{to:"body",disabled:!o.appendToBody},[p.value?(r(),f(S,{key:0,ref_key:"popper",ref:a,placement:o.placement,"target-element":t.value,onMouseleave:_,onFocusout:k},{default:i(()=>[g(e.$slots,"default",{hide:s})]),_:3},8,["placement","target-element"])):O("",!0)],8,["disabled"]))]))}});M.__docgenInfo={exportName:"default",displayName:"KitBigTooltip",description:"",tags:{},props:[{name:"placement",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'right'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"appendToBody",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"trigger",scoped:!0,bindings:[{name:"hide",title:"binding"}]},{name:"default",scoped:!0,bindings:[{name:"hide",title:"binding"}]}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/Tooltip/KitBigTooltip.vue"]};const U={class:"buttons-group"},q=B({__name:"KitBigTooltip.story",setup(o){return(l,t)=>(r(),V("div",U,[d(M,{placement:"top"},{trigger:i(()=>[d(C,null,{default:i(()=>[...t[0]||(t[0]=[x("Hover over me!",-1)])]),_:1})]),default:i(({hide:a})=>[t[2]||(t[2]=v("h1",{id:"kit-bigtooltip-content"},"My Detail",-1)),t[3]||(t[3]=v("p",null," Here is an example of tooltip ",-1)),d(C,{onClick:a},{default:i(()=>[...t[1]||(t[1]=[x(" Close ",-1)])]),_:1},8,["onClick"])]),_:1})]))}}),H=$(q,[["__scopeId","data-v-0a13cd84"]]);q.__docgenInfo={exportName:"default",displayName:"KitBigTooltip.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Tooltip/KitBigTooltip.story.vue"]};const z=`<template>
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
`,Z={title:"Tooltip",component:H,parameters:{docs:{source:{code:z}}}},A=o=>({components:{Comp:H},setup(){return{args:o}},template:'<Comp v-bind="args" />'}),u=A.bind({});var w,E,N;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(N=(E=u.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};const ee=["KitBigTooltip"];export{u as KitBigTooltip,ee as __namedExportsOrder,Z as default};
