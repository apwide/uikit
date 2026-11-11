import{d as D,w as J,o as P,a as Q,j as g,C as B,k as v,l as K,p as R,m as S,r as f,f as d,E as C,q as b,I as X,K as Y,s as M,T as Z,t as w,A as $,G as tt,F as et,L as E}from"./vue.esm-bundler-Bq7iw15p.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{K as nt}from"./KitDropdown-BI7w2uBs.js";import{K as H}from"./KitDropdownItem-B3gq7h7p.js";import{K as ot}from"./KitButton-s-nB5WLS.js";import"./ChevronDownIcon-B6u_Npdu.js";import"./IconWrapper-BpnstkGd.js";import"./Popup-GsyzzzmS.js";import"./Popper-CqRkecYS.js";import"./KitSpinner-C_FlB-Bt.js";function st(l){let s=1/0,o=1/0,a=0,c=0,n=!0;for(const p of l){const r=p.getBoundingClientRect();n?(s=r.x,o=r.y,a=r.height,c=r.width,n=!1):(s=Math.round(Math.min(s,r.x)),o=Math.round(Math.min(o,r.y)),c=Math.round(Math.max(s+c,r.x+r.width)-s),a=Math.round(Math.max(o+a,r.y+r.height)-o))}return{x:s,y:o,height:a,width:c}}const V=D({__name:"KitSpotlightMask",props:{elements:{},textWidth:{default:300},margin:{default:()=>[10,10]}},setup(l){const s=l,o=f(!0),a=f(),c=f(),n=f(),p=f(),r=f(),u=f(),h=f();J(()=>{var e;return(e=s.elements)==null?void 0:e.length},()=>{k()},{immediate:!0});function _(e,t,i=3){let m=0,y=e.y-t[0];a.value={top:"0",left:"0",height:`${y}px`,right:"0"},m+=y,y=e.height+2*t[0];const I=window.innerWidth-e.x-e.width-t[1];c.value={top:`${m}px`,right:"0",height:`${y}px`,width:I>0?`${I}px`:"0"};const U=e.x-t[1];n.value={top:`${e.y-t[0]}px`,left:"0",height:`${e.height+2*t[0]}px`,width:U>0?`${e.x-t[1]}px`:"0"},m+=y,p.value={top:`${m}px`,left:"0",right:"0",bottom:"0"},r.value={top:`${e.y-t[0]-i}px`,left:`${e.x-t[1]-i}px`,width:`${e.width+2*t[1]}px`,height:`${e.height+2*t[0]}px`,borderWidth:`${i}px`}}function N(e,t){let i=e.x-s.textWidth-t-30-20;const m=e.y-t-3;i<0&&(i=e.x+e.width+2*t),u.value={width:`${s.textWidth}px`,left:`${i}px`,top:`${m}px`}}function k(){const e=s.elements||[];if(e.length){const t=st(e);_(t,s.margin,3),N(t,10),o.value=!0}else o.value=!1}function x(e){var t;(t=h.value)!=null&&t.contains(e.target||null)||(e.stopPropagation(),e.preventDefault())}return P(()=>{document.addEventListener("click",x),window.addEventListener("resize",k)}),Q(()=>{document.removeEventListener("click",x),window.removeEventListener("resize",k)}),(e,t)=>o.value?(d(),g("div",{key:0,class:"kit-spotlight-mask",onClick:t[0]||(t[0]=B(()=>{},["stop","prevent"]))},[v("div",{class:"kit-spotlight-mask__background kit-spotlight-mask__top",style:K(a.value)},null,4),v("div",{class:"kit-spotlight-mask__background kit-spotlight-mask__right",style:K(c.value)},null,4),v("div",{class:"kit-spotlight-mask__background kit-spotlight-mask__left",style:K(n.value)},null,4),v("div",{class:"kit-spotlight-mask__background kit-spotlight-mask__bottom",style:K(p.value)},null,4),v("div",{class:"kit-spotlight-mask__border",style:K(r.value)},null,4),v("div",{ref_key:"textRef",ref:h,class:"kit-spotlight-mask__text",style:K(u.value)},[R(e.$slots,"default",{},void 0,!0)],4)])):S("",!0)}}),it=q(V,[["__scopeId","data-v-1d2de77a"]]);V.__docgenInfo={exportName:"default",displayName:"KitSpotlightMask",description:"",tags:{},props:[{name:"elements",required:!1,type:{name:"Array",elements:[{name:"Element"}]}},{name:"textWidth",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"300"}},{name:"margin",required:!1,type:{name:"tuple",elements:[{name:"number"},{name:"number"}]},defaultValue:{func:!1,value:"() => [10, 10]"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/Spotlight/KitSpotlightMask.vue"]};const lt={style:{"min-height":"2.4em"}},rt={class:"kit-row kit-space-between kit-align-center"},at={key:0,style:{"flex-shrink":"0"}},pt={key:1,class:"kit-row kit-align-center kit-xsmall-gap",style:{"justify-content":"flex-end"}},W=D({__name:"KitSpotlightHintContainer",props:{step:{},total:{}},emits:["go-to","close"],setup(l,{emit:s}){const o=l,a=s,c=b(()=>typeof o.step=="number"),n=b(()=>o.step===o.total-1),p=b(()=>n.value?"Done":"Next");function r(u){n.value?a("close"):a("go-to",u)}return(u,h)=>(d(),g("div",null,[v("div",lt,[R(u.$slots,"default",{},void 0,!0)]),v("div",rt,[l.total?(d(),g("span",at,C(l.step+1)+" / "+C(l.total),1)):S("",!0),c.value?(d(),g("div",pt,[n.value?S("",!0):(d(),g("button",{key:0,class:"kit-unstyled-button",type:"button",onClick:h[0]||(h[0]=B(_=>a("close"),["stop","prevent"]))}," Dismiss ")),l.step!==0?(d(),g("button",{key:1,class:"kit-unstyled-button",type:"button",onClick:h[1]||(h[1]=B(_=>a("go-to",l.step-1),["stop","prevent"]))}," Go back ")):S("",!0),v("button",{class:"kit-unstyled-button primary",type:"button",onClick:h[2]||(h[2]=_=>r(l.step+1))},C(p.value),1)])):S("",!0)])]))}}),ut=q(W,[["__scopeId","data-v-f59e2cf2"]]);W.__docgenInfo={exportName:"default",displayName:"KitSpotlightHintContainer",description:"",tags:{},props:[{name:"step",required:!1,type:{name:"number"}},{name:"total",required:!1,type:{name:"number"}}],events:[{name:"go-to",type:{names:["number"]}},{name:"close"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/Spotlight/KitSpotlightHintContainer.vue"]};const ct={class:"kit-spotlight-step-hint"},dt={class:"kit-spotlight-step-hint__title"},O=D({__name:"KitSpotlightStepHint",props:{title:{}},setup(l){return(s,o)=>(d(),g("div",ct,[v("p",dt,C(l.title),1),R(s.$slots,"default",{},void 0,!0)]))}}),mt=q(O,[["__scopeId","data-v-f96d0169"]]);O.__docgenInfo={exportName:"default",displayName:"KitSpotlightStepHint",description:"",tags:{},props:[{name:"title",required:!0,type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/Spotlight/KitSpotlightStepHint.vue"]};const ft={class:"kit-spotlight"},j=D({__name:"KitSpotlight",props:{steps:{}},emits:["start","close"],setup(l,{emit:s}){const o=l,a=s,c=X(),n=b(()=>Object.keys(c).filter(t=>t.startsWith("step"))),p=f([]),r=f([]),u=f(0),h=b(()=>o.steps[u.value].title),_=b(()=>o.steps[u.value].p),N=b(()=>`step${u.value+1}`);async function k(t){var m,y,I;if(t<0||t>=o.steps.length)return;await((y=(m=o.steps[u.value]).cleanup)==null?void 0:y.call(m));const i=o.steps[t];await((I=i.before)==null?void 0:I.call(i)),p.value=i.elements(),typeof i.margin>"u"?r.value=[10,10]:Array.isArray(i.margin)?r.value=i.margin:r.value=[i.margin,i.margin],u.value=t}function x(){a("close")}function e(t){if(t.ctrlKey)return;switch(t.stopPropagation(),t.preventDefault(),t.code){case"ArrowRight":case"Enter":k(u.value+1);break;case"ArrowLeft":k(u.value-1);break;case"Escape":a("close")}}return P(async()=>{document.body.style.position="fixed",document.addEventListener("keydown",e),window.addEventListener("hashchange",x),k(0)}),Y(()=>{document.body.style.position="static",document.removeEventListener("keydown",e),window.removeEventListener("hashchange",x),x()}),(t,i)=>(d(),M(Z,{to:"body"},[v("div",ft,[p.value.length?(d(),M(it,{key:0,elements:p.value,margin:r.value,"text-width":l.steps[u.value].textWidth},{default:w(()=>[$(ut,{step:u.value,total:l.steps.length,onClose:i[0]||(i[0]=m=>a("close")),onGoTo:k},{default:w(()=>[n.value.includes(N.value)?R(t.$slots,N.value,{currentStep:u.value+1},void 0,!0,0):(d(),M(mt,{key:1,title:h.value},{default:w(()=>[(d(!0),g(et,null,tt(_.value,m=>(d(),g("p",{key:m},C(m),1))),128))]),_:1},8,["title"]))]),_:3},8,["step","total"])]),_:3},8,["elements","margin","text-width"])):S("",!0)])]))}}),ht=q(j,[["__scopeId","data-v-60bcf61e"]]);j.__docgenInfo={exportName:"default",displayName:"KitSpotlight",description:"",tags:{},props:[{name:"steps",required:!0,type:{name:"Array",elements:[{name:"KitSpotlightStep"}]}}],events:[{name:"start"},{name:"close"}],slots:[{name:"currentSlotName",scoped:!0,bindings:[{name:"currentStep",title:"binding"},{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/Spotlight/KitSpotlight.vue"]};const z=D({__name:"Hint.story",setup(l){const s=f(!1),o=f(),a=[{elements(){return[o.value.$el]},title:"Step 1",p:["Click on next and the dropdown will open.","The spotlight will shift to contain the opened dropdown."]},{before(){return new Promise(c=>{console.log("printed before step 2"),o.value.$el.querySelector("button").click();let n=0;const p=setInterval(()=>{n>50?(console.log("Something is broken"),clearInterval(p)):document.querySelector(".kit-popup")&&(clearInterval(p),c()),n+=1},100)})},elements(){return[o.value.$el,document.querySelector(".kit-popup")]},cleanup(){return new Promise(c=>{document.querySelector(".kit-popup")&&o.value.$el.querySelector("button").click();let n=0;const p=setInterval(()=>{n>50?(console.log("Something is broken"),clearInterval(p)):document.querySelector(".kit-popup")||(clearInterval(p),c()),n+=1},100)})},title:"Step 2",p:["Each step enables to run action before (before) and after (cleanup)","All action done in before should be undone in cleanup to allow smooth transition between steps."]},{elements(){return[o.value.$el]},title:"Step 3",p:["Thanks for watching!"]}];return(c,n)=>(d(),g("div",null,[$(ot,{onClick:n[0]||(n[0]=p=>s.value=!0)},{default:w(()=>[...n[2]||(n[2]=[E("Start",-1)])]),_:1}),$(nt,{label:"Drop down menu",ref_key:"menuRef",ref:o},{default:w(()=>[$(H,{"data-cy":"simple-dropdown-item"},{default:w(()=>[...n[3]||(n[3]=[E(" First item ",-1)])]),_:1}),$(H,null,{default:w(()=>[...n[4]||(n[4]=[E("Second item",-1)])]),_:1}),$(H,{disabled:""},{default:w(()=>[...n[5]||(n[5]=[E(" Lorem ipsum dolor sit amet consectetur adipisicing elit ",-1)])]),_:1})]),_:1},512),s.value?(d(),M(ht,{key:0,steps:a,onClose:n[1]||(n[1]=p=>s.value=!1)})):S("",!0)]))}}),G=q(z,[["__scopeId","data-v-0f2df798"]]);z.__docgenInfo={exportName:"default",displayName:"Hint.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Onboarding/Hint.story.vue"]};const vt=`<template>
  <div>
    <KitButton @click="showSpolight = true">Start</KitButton>
    <KitDropdown label="Drop down menu" ref="menuRef">
      <KitDropdownItem data-cy="simple-dropdown-item"> First item </KitDropdownItem>
      <KitDropdownItem>Second item</KitDropdownItem>
      <KitDropdownItem disabled> Lorem ipsum dolor sit amet consectetur adipisicing elit </KitDropdownItem>
    </KitDropdown>
    <KitSpotlight v-if="showSpolight" :steps="steps" @close="showSpolight = false" />
  </div>
</template>

<script setup lang="ts">
import KitSpotlight from '@components/Spotlight/KitSpotlight.vue'
import { Component, ref } from 'vue'
import KitDropdown from '@components/Dropdown/KitDropdown.vue'
import { KitSpotlightStep } from '@components/Spotlight/spotlight-helpers'
import KitDropdownItem from '@components/Dropdown/KitDropdownItem.vue'
import KitButton from '@components/Button/KitButton.vue'

const showSpolight = ref(false)
const menuRef = ref<Component>()

const steps: KitSpotlightStep[] = [
  {
    elements() {
      return [menuRef.value.$el]
    },
    title: 'Step 1',
    p: ['Click on next and the dropdown will open.', 'The spotlight will shift to contain the opened dropdown.']
  },
  {
    before() {
      return new Promise((resolve) => {
        console.log('printed before step 2')
        menuRef.value.$el.querySelector('button').click()
        let count = 0
        const interval = setInterval(() => {
          if (count > 50) {
            console.log('Something is broken')
            clearInterval(interval)
          } else if (document.querySelector('.kit-popup')) {
            clearInterval(interval)
            resolve()
          }
          count += 1
        }, 100)
      })
    },
    elements() {
      return [menuRef.value.$el, document.querySelector('.kit-popup')]
    },
    cleanup() {
      return new Promise((resolve) => {
        if (document.querySelector('.kit-popup')) {
          menuRef.value.$el.querySelector('button').click()
        }
        let count = 0
        const interval = setInterval(() => {
          if (count > 50) {
            console.log('Something is broken')
            clearInterval(interval)
          } else if (!document.querySelector('.kit-popup')) {
            clearInterval(interval)
            resolve()
          }
          count += 1
        }, 100)
      })
    },
    title: 'Step 2',
    p: [
      'Each step enables to run action before (before) and after (cleanup)',
      'All action done in before should be undone in cleanup to allow smooth transition between steps.'
    ]
  },
  {
    elements() {
      return [menuRef.value.$el]
    },
    title: 'Step 3',
    p: ['Thanks for watching!']
  }
]
<\/script>

<style scoped>
.hint * {
  color: white;
}
</style>
`,Ct={title:"Onboarding",component:G,parameters:{docs:{source:{code:vt}}}},gt=l=>({components:{Comp:G},setup(){return{args:l}},template:'<Comp v-bind="args" />'}),L=gt.bind({});var T,F,A;L.parameters={...L.parameters,docs:{...(T=L.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(A=(F=L.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};const Dt=["Hint"];export{L as Hint,Dt as __namedExportsOrder,Ct as default};
