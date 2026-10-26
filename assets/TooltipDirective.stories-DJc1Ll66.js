import{d as C,r as d,o as x,a as U,j as B,k as r,v as n,s as i,t as a,A as K,L as l,q as V,R as k,f as e,E as T}from"./vue.esm-bundler-Bq7iw15p.js";import{K as s}from"./KitButton-s-nB5WLS.js";import{K as _}from"./KitToggle-CUBH32H8.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./KitSpinner-C_FlB-Bt.js";import"./EditorDoneIcon-BwMeAnvt.js";import"./IconWrapper-BpnstkGd.js";import"./EditorCloseIcon-DEX8M97N.js";import"./dom-kh-IIGlH.js";const S={class:"buttons-group"},N={class:"buttons-group"},E={class:"buttons-group"},M={class:"buttons-group"},R={class:"buttons-group"},W={class:"buttons-group"},j={class:"buttons-group"},w=C({__name:"TooltipDirective.story",setup(b){const g=d(new Date().toUTCString()),c=d(),u=d(!0),v=d(!0),f=V(()=>v.value?"I'm enabled now!":void 0);return x(()=>{c.value=setInterval(()=>{g.value=new Date().toUTCString()},1e3)}),U(()=>{clearInterval(c.value)}),(F,t)=>{const o=k("tooltip");return e(),B("div",null,[r("div",S,[n((e(),i(s,null,{default:a(()=>[...t[2]||(t[2]=[l(" Top ",-1)])]),_:1})),[[o,{label:"I'm at the top"},void 0,{top:!0}]]),n((e(),i(s,null,{default:a(()=>[...t[3]||(t[3]=[l(" Right ",-1)])]),_:1})),[[o,{label:"I'm at the right"},void 0,{right:!0}]]),n((e(),i(s,null,{default:a(()=>[...t[4]||(t[4]=[l(" Bottom ",-1)])]),_:1})),[[o,{label:"I'm at the bottom"},void 0,{bottom:!0}]]),n((e(),i(s,null,{default:a(()=>[...t[5]||(t[5]=[l(" Left ",-1)])]),_:1})),[[o,{label:"I'm at the left"},void 0,{left:!0}]])]),r("div",N,[n((e(),i(s,null,{default:a(()=>[...t[6]||(t[6]=[l(" Custom offset ",-1)])]),_:1})),[[o,{label:"Bigger offset here",offset:"0,20"},void 0,{right:!0}]])]),r("div",E,[n((e(),i(s,null,{default:a(()=>[...t[7]||(t[7]=[l(" Without delay ",-1)])]),_:1})),[[o,{label:"Instant tooltip",withDelay:!1},void 0,{right:!0}]])]),r("div",M,[n((e(),i(s,null,{default:a(()=>[...t[8]||(t[8]=[l(" Dynamic label ",-1)])]),_:1})),[[o,{label:g.value},void 0,{top:!0}]])]),r("div",R,[K(_,{modelValue:u.value,"onUpdate:modelValue":t[0]||(t[0]=m=>u.value=m)},null,8,["modelValue"]),n((e(),i(s,null,{default:a(()=>[l(" Disable using 'disabled' prop: disabled="+T(!u.value),1)]),_:1})),[[o,{label:"I'm enabled now!",disabled:!u.value},void 0,{top:!0}]])]),r("div",W,[K(_,{modelValue:v.value,"onUpdate:modelValue":t[1]||(t[1]=m=>v.value=m)},null,8,["modelValue"]),n((e(),i(s,null,{default:a(()=>[l(' Disable using empty label: label="'+T(f.value)+'" ',1)]),_:1})),[[o,f.value,void 0,{top:!0}]])]),r("div",j,[n((e(),B("div",null,[...t[9]||(t[9]=[l("Tooltip on plain div",-1)])])),[[o,"I'm on a div"]])])])}}}),y=L(w,[["__scopeId","data-v-9d624d61"]]);w.__docgenInfo={exportName:"default",displayName:"TooltipDirective.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Tooltip/TooltipDirective.story.vue"]};const q=`<template>
  <div>
    <div class="buttons-group">
      <KitButton v-tooltip.top="{ label: \`I'm at the top\` }"> Top </KitButton>
      <KitButton v-tooltip.right="{ label: \`I'm at the right\` }"> Right </KitButton>
      <KitButton v-tooltip.bottom="{ label: \`I'm at the bottom\` }"> Bottom </KitButton>
      <KitButton v-tooltip.left="{ label: \`I'm at the left\` }"> Left </KitButton>
    </div>
    <div class="buttons-group">
      <KitButton v-tooltip.right="{ label: 'Bigger offset here', offset: '0,20' }"> Custom offset </KitButton>
    </div>
    <div class="buttons-group">
      <KitButton v-tooltip.right="{ label: \`Instant tooltip\`, withDelay: false }"> Without delay </KitButton>
    </div>
    <div class="buttons-group">
      <KitButton v-tooltip.top="{ label: currentTime }"> Dynamic label </KitButton>
    </div>
    <div class="buttons-group">
      <KitToggle v-model="enabled" />
      <KitButton v-tooltip.top="{ label: \`I'm enabled now!\`, disabled: !enabled }">
        Disable using 'disabled' prop: disabled={{ !enabled }}
      </KitButton>
    </div>
    <div class="buttons-group">
      <KitToggle v-model="withLabel" />
      <KitButton v-tooltip.top="label"> Disable using empty label: label="{{ label }}" </KitButton>
    </div>
    <div class="buttons-group">
      <div v-tooltip="\`I'm on a div\`">Tooltip on plain div</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import KitButton from '@components/Button/KitButton.vue'
import KitToggle from '@/components/Toggle/KitToggle.vue'

const currentTime = ref(new Date().toUTCString())
const interval = ref()
const enabled = ref(true)
const withLabel = ref(true)

const label = computed(() => (withLabel.value ? "I'm enabled now!" : undefined))

onMounted(() => {
  interval.value = setInterval(() => {
    currentTime.value = new Date().toUTCString()
  }, 1000)
})

onUnmounted(() => {
  clearInterval(interval.value)
})
<\/script>

<style scoped>
.buttons-group {
  max-width: 800px;
  margin-top: 50px;
  display: flex;
  align-items: center;
}
</style>
`,Z={title:"Tooltip",component:y,parameters:{docs:{source:{code:q}}}},A=b=>({components:{Comp:y},setup(){return{args:b}},template:'<Comp v-bind="args" />'}),p=A.bind({});var I,D,h;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(h=(D=p.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};const $=["TooltipDirective"];export{p as TooltipDirective,$ as __namedExportsOrder,Z as default};
