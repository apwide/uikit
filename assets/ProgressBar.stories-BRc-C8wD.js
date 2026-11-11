import{d as g,j as l,k as s,E as i,m as v,l as _,f as a,o as B,K as P,s as b,r as p}from"./vue.esm-bundler-Bq7iw15p.js";import{_ as h}from"./_plugin-vue_export-helper-DlAUqK2U.js";const y={class:"kit-progress-bar-wrapper"},k={key:0,ref:"labels",class:"labels"},K={class:"label"},w={class:"kit-progress-bar"},f=g({__name:"KitProgressBar",props:{progress:{default:0},showLabels:{type:Boolean,default:!0},label:{default:"Processing"},transitionDuration:{}},setup(e){return(r,t)=>(a(),l("div",y,[e.showLabels?(a(),l("div",k,[s("span",K,i(e.label),1),s("span",null,i(e.progress)+"%",1)],512)):v("",!0),s("div",w,[s("span",{ref:"progress",class:"progress",style:_({width:`${e.progress}%`,transitionDuration:e.transitionDuration})},null,4)])]))}}),x=h(f,[["__scopeId","data-v-f2c3b4b4"]]);f.__docgenInfo={exportName:"default",displayName:"KitProgressBar",description:"",tags:{},props:[{name:"progress",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"showLabels",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Processing'"}},{name:"transitionDuration",required:!1,type:{name:"string"}}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/ProgressBar/KitProgressBar.vue"]};const n=g({__name:"ProgressBar.story",setup(e){const r=p(0),t=p();B(()=>{t.value=u()}),P(()=>{clearTimeout(t.value)});function u(){return r.value>=100&&(r.value=0),r.value=r.value+5,setTimeout(()=>{u()},Math.floor(Math.random()*500)+200)}return(N,D)=>(a(),b(x,{progress:r.value},null,8,["progress"]))}});n.__docgenInfo={exportName:"default",displayName:"ProgressBar.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/ProgressBar/ProgressBar.story.vue"]};const C=`<template>
  <KitProgressBar :progress="progress" />
</template>

<script setup lang="ts">
import KitProgressBar from '@components/ProgressBar/KitProgressBar.vue'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const progress = ref(0)
const timer = ref()

onMounted(() => {
  timer.value = updateProgress()
})

onBeforeUnmount(() => {
  clearTimeout(timer.value)
})

function updateProgress() {
  if (progress.value >= 100) {
    progress.value = 0
  }
  progress.value = progress.value + 5
  return setTimeout(() => {
    updateProgress()
  }, Math.floor(Math.random() * 500) + 200)
}
<\/script>

<style scoped></style>
`,q={title:"ProgressBar",component:n,parameters:{docs:{source:{code:C}}}},M=e=>({components:{Comp:n},setup(){return{args:e}},template:'<Comp v-bind="args" />'}),o=M.bind({});var c,m,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const E=["ProgressBar"];export{o as ProgressBar,E as __namedExportsOrder,q as default};
