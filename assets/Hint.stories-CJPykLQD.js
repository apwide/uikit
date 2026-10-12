import{d as D,w as V,o as W,a as Q,j as g,C as B,k,l as K,p as M,m as S,r as m,f,E as C,q as b,I as X,K as Y,s as F,t as y,A as $,F as Z,G as tt,L as E}from"./vue.esm-bundler-bSWh6tln.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{K as et}from"./KitDropdown-BZzWVijU.js";import{K as H}from"./KitDropdownItem-DY0xHaJw.js";import{K as nt}from"./KitButton-DXemt05q.js";import"./ChevronDownIcon-BpZDYj0q.js";import"./IconWrapper-DdkEMErG.js";import"./Popup-CYbvf_Tg.js";import"./Popper-D7RkQmME.js";import"./KitSpinner-BNue20UW.js";function ot(l){let i=1/0,n=1/0,p=0,c=0,t=!0;for(const d of l){const u=d.getBoundingClientRect();t?(i=u.x,n=u.y,p=u.height,c=u.width,t=!1):(i=Math.round(Math.min(i,u.x)),n=Math.round(Math.min(n,u.y)),c=Math.round(Math.max(i+c,u.x+u.width)-i),p=Math.round(Math.max(n+p,u.y+u.height)-n))}return{x:i,y:n,height:p,width:c}}const O=D({__name:"KitSpotlightMask",props:{elements:{},textWidth:{default:300},margin:{default:()=>[10,10]}},setup(l){const i=l,n=m(!0),p=m(),c=m(),t=m(),d=m(),u=m(),v=m(),r=m();V(()=>{var e;return(e=i.elements)==null?void 0:e.length},()=>{x()},{immediate:!0});function _(e,o,s=3){let a=0,h=e.y-o[0];p.value={top:"0",left:"0",height:`${h}px`,right:"0"},a+=h,h=e.height+2*o[0];const I=window.innerWidth-e.x-e.width-o[1];c.value={top:`${a}px`,right:"0",height:`${h}px`,width:I>0?`${I}px`:"0"};const N=e.x-o[1];t.value={top:`${e.y-o[0]}px`,left:"0",height:`${e.height+2*o[0]}px`,width:N>0?`${e.x-o[1]}px`:"0"},a+=h,d.value={top:`${a}px`,left:"0",right:"0",bottom:"0"},u.value={top:`${e.y-o[0]-s}px`,left:`${e.x-o[1]-s}px`,width:`${e.width+2*o[1]}px`,height:`${e.height+2*o[0]}px`,borderWidth:`${s}px`}}function R(e,o){let s=e.x-i.textWidth-o-30-20;const a=e.y-o-3;s<0&&(s=e.x+e.width+2*o),v.value={width:`${i.textWidth}px`,left:`${s}px`,top:`${a}px`}}function x(){const e=i.elements||[];if(e.length){const o=ot(e);_(o,i.margin,3),R(o,10),n.value=!0}else n.value=!1}function w(e){var o;(o=r.value)!=null&&o.contains(e.target||null)||(e.stopPropagation(),e.preventDefault())}return W(()=>{document.addEventListener("click",w),window.addEventListener("resize",x)}),Q(()=>{document.removeEventListener("click",w),window.removeEventListener("resize",x)}),(e,o)=>n.value?(f(),g("div",{key:0,class:"kit-spotlight-mask",onClick:o[0]||(o[0]=B(()=>{},["stop","prevent"]))},[k("div",{class:"kit-spotlight-mask__background kit-spotlight-mask__top",style:K(p.value)},null,4),k("div",{class:"kit-spotlight-mask__background kit-spotlight-mask__right",style:K(c.value)},null,4),k("div",{class:"kit-spotlight-mask__background kit-spotlight-mask__left",style:K(t.value)},null,4),k("div",{class:"kit-spotlight-mask__background kit-spotlight-mask__bottom",style:K(d.value)},null,4),k("div",{class:"kit-spotlight-mask__border",style:K(u.value)},null,4),k("div",{ref_key:"textRef",ref:r,class:"kit-spotlight-mask__text",style:K(v.value)},[M(e.$slots,"default",{},void 0,!0)],4)])):S("",!0)}}),st=q(O,[["__scopeId","data-v-1d2de77a"]]);O.__docgenInfo={exportName:"default",displayName:"KitSpotlightMask",description:"",tags:{},props:[{name:"elements",required:!1,type:{name:"Array",elements:[{name:"Element"}]}},{name:"textWidth",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"300"}},{name:"margin",required:!1,type:{name:"tuple",elements:[{name:"number"},{name:"number"}]},defaultValue:{func:!1,value:"() => [10, 10]"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/Spotlight/KitSpotlightMask.vue"]};const it={style:{"min-height":"2.4em"}},lt={class:"kit-row kit-space-between kit-align-center"},rt={key:0,style:{"flex-shrink":"0"}},at={key:1,class:"kit-row kit-align-center kit-xsmall-gap",style:{"justify-content":"flex-end"}},j=D({__name:"KitSpotlightHintContainer",props:{step:{},total:{}},emits:["go-to","close"],setup(l,{emit:i}){const n=l,p=i,c=b(()=>typeof n.step=="number"),t=b(()=>n.step===n.total-1),d=b(()=>t.value?"Done":"Next");function u(v){t.value?p("close"):p("go-to",v)}return(v,r)=>(f(),g("div",null,[k("div",it,[M(v.$slots,"default",{},void 0,!0)]),k("div",lt,[l.total?(f(),g("span",rt,C(l.step+1)+" / "+C(l.total),1)):S("",!0),c.value?(f(),g("div",at,[t.value?S("",!0):(f(),g("button",{key:0,class:"kit-unstyled-button",type:"button",onClick:r[0]||(r[0]=B(_=>p("close"),["stop","prevent"]))}," Dismiss ")),l.step!==0?(f(),g("button",{key:1,class:"kit-unstyled-button",type:"button",onClick:r[1]||(r[1]=B(_=>p("go-to",l.step-1),["stop","prevent"]))}," Go back ")):S("",!0),k("button",{class:"kit-unstyled-button primary",type:"button",onClick:r[2]||(r[2]=_=>u(l.step+1))},C(d.value),1)])):S("",!0)])]))}}),ut=q(j,[["__scopeId","data-v-f59e2cf2"]]);j.__docgenInfo={exportName:"default",displayName:"KitSpotlightHintContainer",description:"",tags:{},props:[{name:"step",required:!1,type:{name:"number"}},{name:"total",required:!1,type:{name:"number"}}],events:[{name:"go-to",type:{names:["number"]}},{name:"close"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/Spotlight/KitSpotlightHintContainer.vue"]};const pt={class:"kit-spotlight-step-hint"},ct={class:"kit-spotlight-step-hint__title"},z=D({__name:"KitSpotlightStepHint",props:{title:{}},setup(l){return(i,n)=>(f(),g("div",pt,[k("p",ct,C(l.title),1),M(i.$slots,"default",{},void 0,!0)]))}}),dt=q(z,[["__scopeId","data-v-f96d0169"]]);z.__docgenInfo={exportName:"default",displayName:"KitSpotlightStepHint",description:"",tags:{},props:[{name:"title",required:!0,type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/Spotlight/KitSpotlightStepHint.vue"]};const G=D({__name:"KitSpotlight",props:{steps:{}},emits:["start","close"],setup(l,{emit:i}){const n=l,p=i,c=X(),t=m(),d=b(()=>Object.keys(c).filter(s=>s.startsWith("step"))),u=m([]),v=m([]),r=m(0),_=b(()=>n.steps[r.value].title),R=b(()=>n.steps[r.value].p),x=b(()=>`step${r.value+1}`);async function w(s){var h,I,N;if(s<0||s>=n.steps.length)return;await((I=(h=n.steps[r.value]).cleanup)==null?void 0:I.call(h));const a=n.steps[s];await((N=a.before)==null?void 0:N.call(a)),u.value=a.elements(),typeof a.margin>"u"?v.value=[10,10]:Array.isArray(a.margin)?v.value=a.margin:v.value=[a.margin,a.margin],r.value=s}function e(){p("close")}function o(s){if(s.ctrlKey)return;switch(s.stopPropagation(),s.preventDefault(),s.code){case"ArrowRight":case"Enter":w(r.value+1);break;case"ArrowLeft":w(r.value-1);break;case"Escape":p("close")}}return W(async()=>{document.body.style.position="fixed",document.addEventListener("keydown",o),window.addEventListener("hashchange",e),w(0)}),Y(()=>{var s;document.body.style.position="static",document.removeEventListener("keydown",o),window.removeEventListener("hashchange",e),((s=t.value)==null?void 0:s.parentElement)===document.body&&document.body.removeChild(t.value),e()}),V(t,s=>{s&&document.body.appendChild(s)},{immediate:!0}),(s,a)=>(f(),g("div",{ref_key:"me",ref:t,class:"kit-spotlight"},[u.value.length?(f(),F(st,{key:0,elements:u.value,margin:v.value,"text-width":l.steps[r.value].textWidth},{default:y(()=>[$(ut,{step:r.value,total:l.steps.length,onClose:a[0]||(a[0]=h=>p("close")),onGoTo:w},{default:y(()=>[d.value.includes(x.value)?M(s.$slots,x.value,{currentStep:r.value+1},void 0,!0,0):(f(),F(dt,{key:1,title:_.value},{default:y(()=>[(f(!0),g(Z,null,tt(R.value,h=>(f(),g("p",{key:h},C(h),1))),128))]),_:1},8,["title"]))]),_:3},8,["step","total"])]),_:3},8,["elements","margin","text-width"])):S("",!0)],512))}}),mt=q(G,[["__scopeId","data-v-984350fb"]]);G.__docgenInfo={exportName:"default",displayName:"KitSpotlight",description:"",tags:{},props:[{name:"steps",required:!0,type:{name:"Array",elements:[{name:"KitSpotlightStep"}]}}],events:[{name:"start"},{name:"close"}],slots:[{name:"currentSlotName",scoped:!0,bindings:[{name:"currentStep",title:"binding"},{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/Spotlight/KitSpotlight.vue"]};const U=D({__name:"Hint.story",setup(l){const i=m(!1),n=m(),p=[{elements(){return[n.value.$el]},title:"Step 1",p:["Click on next and the dropdown will open.","The spotlight will shift to contain the opened dropdown."]},{before(){return new Promise(c=>{console.log("printed before step 2"),n.value.$el.querySelector("button").click();let t=0;const d=setInterval(()=>{t>50?(console.log("Something is broken"),clearInterval(d)):document.querySelector(".kit-popup")&&(clearInterval(d),c()),t+=1},100)})},elements(){return[n.value.$el,document.querySelector(".kit-popup")]},cleanup(){return new Promise(c=>{document.querySelector(".kit-popup")&&n.value.$el.querySelector("button").click();let t=0;const d=setInterval(()=>{t>50?(console.log("Something is broken"),clearInterval(d)):document.querySelector(".kit-popup")||(clearInterval(d),c()),t+=1},100)})},title:"Step 2",p:["Each step enables to run action before (before) and after (cleanup)","All action done in before should be undone in cleanup to allow smooth transition between steps."]},{elements(){return[n.value.$el]},title:"Step 3",p:["Thanks for watching!"]}];return(c,t)=>(f(),g("div",null,[$(nt,{onClick:t[0]||(t[0]=d=>i.value=!0)},{default:y(()=>[...t[2]||(t[2]=[E("Start",-1)])]),_:1}),$(et,{label:"Drop down menu",ref_key:"menuRef",ref:n},{default:y(()=>[$(H,{"data-cy":"simple-dropdown-item"},{default:y(()=>[...t[3]||(t[3]=[E(" First item ",-1)])]),_:1}),$(H,null,{default:y(()=>[...t[4]||(t[4]=[E("Second item",-1)])]),_:1}),$(H,{disabled:""},{default:y(()=>[...t[5]||(t[5]=[E(" Lorem ipsum dolor sit amet consectetur adipisicing elit ",-1)])]),_:1})]),_:1},512),i.value?(f(),F(mt,{key:0,steps:p,onClose:t[1]||(t[1]=d=>i.value=!1)})):S("",!0)]))}}),J=q(U,[["__scopeId","data-v-0f2df798"]]);U.__docgenInfo={exportName:"default",displayName:"Hint.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Onboarding/Hint.story.vue"]};const ft=`<template>
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
`,$t={title:"Onboarding",component:J,parameters:{docs:{source:{code:ft}}}},ht=l=>({components:{Comp:J},setup(){return{args:l}},template:'<Comp v-bind="args" />'}),L=ht.bind({});var T,A,P;L.parameters={...L.parameters,docs:{...(T=L.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(P=(A=L.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};const It=["Hint"];export{L as Hint,It as __namedExportsOrder,$t as default};
