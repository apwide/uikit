import{d,o as f,j as v,A as a,t as l,r as y,f as P,L as c}from"./vue.esm-bundler-Bq7iw15p.js";import{K as h}from"./KitButton-s-nB5WLS.js";import"./KitSpinner-C_FlB-Bt.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";class C{constructor({backgroundColor:e="var(--kit-progress-top-color)",transition:s="all 0.5s ease-out",zIndex:i="999999",height:p="3px"}={}){this.el=null,this.timer=null,this.progress=0,this.props={backgroundColor:e,transition:s,zIndex:i,height:p},this.max=.95}applyCss(){for(const[e,s]of Object.entries(this.props))this.el.style[e]=s}clamp(e){return e>this.max?this.max:e}createElement(){this.el=document.createElement("div"),this.el.style.position="fixed",this.el.style.top="0",this.el.style.left="0",this.applyCss(),document.body.appendChild(this.el)}start(){this.el||(this.createElement(),clearInterval(this.timer),this.timer=setInterval(()=>{this.increase()},200))}hide(){clearInterval(this.timer),setTimeout(()=>{this.el&&document.body.removeChild(this.el),this.reset()},300)}reset(){this.timer=null,this.progress=0,this.el=null}setProgress(){this.el&&(this.el.style.width=`${this.progress*100}%`)}increase(e){let s=e;this.progress>1||(typeof s!="number"&&(this.progress>=0&&this.progress<.01?s=.01:this.progress>=.01&&this.progress<.3?s=.1:this.progress>=.3&&this.progress<.5?s=.05:this.progress>=.5&&this.progress<.8?s=.03:this.progress>=.8&&this.progress<.99?s=.005:s=0),this.progress=this.clamp(this.progress+s),this.setProgress())}finish(){this.el&&(this.progress=1,this.setProgress(),this.hide())}}const n=d({__name:"Progress.story",setup(o){const e=y();function s(){e.value.start()}function i(){e.value.finish()}return f(()=>{e.value=new C}),(p,t)=>(P(),v("div",null,[a(h,{appearance:"primary",onClick:s},{default:l(()=>[...t[0]||(t[0]=[c(" Start ",-1)])]),_:1}),a(h,{onClick:i},{default:l(()=>[...t[1]||(t[1]=[c(" Finish ",-1)])]),_:1})]))}});n.__docgenInfo={exportName:"default",displayName:"Progress.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Progress/Progress.story.vue"]};const x=`<template>
  <div>
    <KitButton appearance="primary" @click="start"> Start </KitButton>
    <KitButton @click="finish"> Finish </KitButton>
  </div>
</template>

<script setup lang="ts">
import KitButton from '@components/Button/KitButton.vue'
import { onMounted, ref } from 'vue'
import Progress from '@/components/Progress/progress'

const progress = ref<Progress>()

function start() {
  progress.value.start()
}

function finish() {
  progress.value.finish()
}

onMounted(() => {
  progress.value = new Progress()
})
<\/script>

<style scoped></style>
`,w={title:"Progress",component:n,parameters:{docs:{source:{code:x}}}},B=o=>({components:{Comp:n},setup(){return{args:o}},template:'<Comp v-bind="args" />'}),r=B.bind({});var m,u,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const E=["Progress"];export{r as Progress,E as __namedExportsOrder,w as default};
