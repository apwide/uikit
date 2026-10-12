import{d as K,f as c,s as E,t as o,p as C,T as F,j as v,A as a,L as m,m as B,r as p}from"./vue.esm-bundler-bSWh6tln.js";import{K as S}from"./KitButton-DXemt05q.js";import{K as f}from"./KitFieldGroup-CtYmuqBU.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{K as g}from"./KitCheckbox-PGmgYjGS.js";import"./KitSpinner-BNue20UW.js";import"./IconWrapper-DdkEMErG.js";const k=K({__name:"KitTransitionExpand",props:{enterTransition:{type:Boolean,default:!0},leaveTransition:{type:Boolean,default:!0}},setup(u){const n=u;function i(t){n.enterTransition&&(t.style.height="auto")}function r(t){if(!n.enterTransition)return;const{width:e}=getComputedStyle(t);t.style.position="absolute",t.style.visibility="hidden",t.style.height="auto";const{height:s}=getComputedStyle(t);t.style.position=null,t.style.visibility=null,t.style.height="0",getComputedStyle(t).height,requestAnimationFrame(()=>{t.style.height=s})}function d(t){if(!n.leaveTransition)return;const{height:e}=getComputedStyle(t);t.style.height=e,getComputedStyle(t).height,requestAnimationFrame(()=>{t.style.height="0"})}return(t,e)=>(c(),E(F,{name:"expand",onEnter:r,onAfterEnter:i,onLeave:d},{default:o(()=>[C(t.$slots,"default",{},void 0,!0)]),_:3}))}}),V=b(k,[["__scopeId","data-v-b90268dc"]]);k.__docgenInfo={exportName:"default",displayName:"KitTransitionExpand",description:"",tags:{},props:[{name:"enterTransition",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"leaveTransition",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/common/KitTransitionExpand.vue"]};const L={key:0,class:"content"},h=K({__name:"TransitionExpand.story",setup(u){const n=p(!1),i=p(!0),r=p(!0);function d(){n.value=!n.value}return(t,e)=>(c(),v("div",null,[a(f,null,{default:o(()=>[a(S,{onClick:d},{default:o(()=>[...e[2]||(e[2]=[m(" Toggle ",-1)])]),_:1})]),_:1}),a(f,null,{default:o(()=>[a(g,{modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=s=>i.value=s)},{default:o(()=>[...e[3]||(e[3]=[m(" Enter transition ",-1)])]),_:1},8,["modelValue"]),a(g,{modelValue:r.value,"onUpdate:modelValue":e[1]||(e[1]=s=>r.value=s)},{default:o(()=>[...e[4]||(e[4]=[m(" Leave transition ",-1)])]),_:1},8,["modelValue"])]),_:1}),a(V,{"enter-transition":i.value,"leave-transition":r.value},{default:o(()=>[n.value?(c(),v("div",L," Magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ")):B("",!0)]),_:1},8,["enter-transition","leave-transition"])]))}}),_=b(h,[["__scopeId","data-v-330f9a7e"]]);h.__docgenInfo={exportName:"default",displayName:"TransitionExpand.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/TransitionExpand/TransitionExpand.story.vue"]};const q=`<template>
  <div>
    <KitFieldGroup>
      <KitButton @click="toggle"> Toggle </KitButton>
    </KitFieldGroup>
    <KitFieldGroup>
      <KitCheckbox v-model="enterTransition"> Enter transition </KitCheckbox>
      <KitCheckbox v-model="leaveTransition"> Leave transition </KitCheckbox>
    </KitFieldGroup>
    <KitTransitionExpand :enter-transition="enterTransition" :leave-transition="leaveTransition">
      <div v-if="expanded" class="content">
        Magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
        gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
        sanctus est Lorem ipsum dolor sit amet.
      </div>
    </KitTransitionExpand>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import KitButton from '@components/Button/KitButton.vue'
import KitFieldGroup from '@components/Form/KitFieldGroup.vue'
import KitTransitionExpand from '@/components/common/KitTransitionExpand.vue'
import KitCheckbox from '@/components/Checkbox/KitCheckbox.vue'

const expanded = ref(false)
const enterTransition = ref(true)
const leaveTransition = ref(true)

function toggle() {
  expanded.value = !expanded.value
}
<\/script>

<style scoped>
.content {
  background: lightblue;
  overflow: hidden;
}
</style>
`,$={title:"TransitionExpand",component:_,parameters:{docs:{source:{code:q}}}},A=u=>({components:{Comp:_},setup(){return{args:u}},template:'<Comp v-bind="args" />'}),l=A.bind({});var x,T,y;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(y=(T=l.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};const O=["TransitionExpand"];export{l as TransitionExpand,O as __namedExportsOrder,$ as default};
