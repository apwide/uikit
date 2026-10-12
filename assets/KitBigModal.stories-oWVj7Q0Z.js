import{d as q,I as z,o as D,K as F,s as x,x as E,J as B,t,r as v,f as i,p as m,k as f,A as a,j as p,m as N,F as b,G as w,L as C,E as M}from"./vue.esm-bundler-bSWh6tln.js";import{f as L}from"./chunk-NAVWDHVN-nYOG0we8.js";import{K as I}from"./KitButton-DXemt05q.js";import{K as V}from"./KitButtonGroup-C3xrb6-O.js";import{K as y}from"./KitIconButton-Bak3xkMk.js";import{_ as k}from"./KitIcon-IXZtQfsY.js";import{K as A,H}from"./KitModal-CGAKokQF.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./KitSpinner-BNue20UW.js";import"./ErrorIcon-DMkoEFcw.js";import"./IconWrapper-DdkEMErG.js";const R={class:"kit-modal__header-pre-title"},j={class:"kit-modal__header-title"},G={class:"kit-modal__content"},O=q({__name:"KitBigModal",props:{heading:{default:""},appearance:{},autoFocus:{type:Boolean},actions:{},pending:{type:Boolean},zIndex:{},closeOnEsc:{type:Boolean},closeOnOutsideClick:{type:Boolean},noFooter:{type:Boolean},noHeader:{type:Boolean}},emits:["cancel","close"],setup(o,{emit:r}){const l=r,g=z(),u=v("");function c(){const{width:n}=document.body.getBoundingClientRect();n>1200?u.value="80%":u.value="900px"}return D(()=>{c(),window.addEventListener("resize",c)}),F(()=>{window.addEventListener("resize",c)}),(n,d)=>(i(),x(A,E({class:"kit-modal","no-footer":!B(g).footer,appearance:o.appearance,"auto-focus":o.autoFocus,actions:o.actions,pending:o.pending,"z-index":o.zIndex,"close-on-esc":o.closeOnEsc,"close-on-outside-click":o.closeOnOutsideClick,width:u.value},n.$attrs,{"no-padding":""}),{header:t(()=>[f("div",R,[m(n.$slots,"breadcrumb",{class:""},void 0,!0),a(V,{spacing:"normal"},{default:t(()=>[m(n.$slots,"actions",{},void 0,!0),a(y,{class:"kit-modal__close",title:"close",onClick:d[0]||(d[0]=e=>{l("cancel"),l("close")})},{default:t(()=>[a(k,{type:"times",style:{"font-size":"1.2rem"}})]),_:1})]),_:3})]),f("div",j,[m(n.$slots,"title",{},()=>[a(H,{heading:o.heading},null,8,["heading"])],!0)])]),content:t(()=>[f("div",G,[m(n.$slots,"default",{},void 0,!0)])]),footer:t(()=>[m(n.$slots,"footer",{},void 0,!0)]),_:3},16,["no-footer","appearance","auto-focus","actions","pending","z-index","close-on-esc","close-on-outside-click","width"]))}}),J=T(O,[["__scopeId","data-v-9a3dd586"]]);O.__docgenInfo={exportName:"default",displayName:"KitBigModal",description:"",tags:{},props:[{name:"heading",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"appearance",required:!1,type:{name:"string"}},{name:"autoFocus",required:!1,type:{name:"boolean"}},{name:"actions",required:!1,type:{name:"Array",elements:[{name:"string"}]}},{name:"pending",required:!1,type:{name:"boolean"}},{name:"zIndex",required:!1,type:{name:"number"}},{name:"closeOnEsc",required:!1,type:{name:"boolean"}},{name:"closeOnOutsideClick",required:!1,type:{name:"boolean"}},{name:"noFooter",required:!1,type:{name:"boolean"}},{name:"noHeader",required:!1,type:{name:"boolean"}}],events:[{name:"cancel"},{name:"close"}],slots:[{name:"breadcrumb",scoped:!0,bindings:[{name:"class",title:"binding"}]},{name:"actions"},{name:"title"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/Modal/KitBigModal.vue"]};const K=q({__name:"KitBigModal.story",setup(o){const r=Array.from({length:30}).map(()=>L.lorem.paragraph()),l=v(!0),g=v(r);function u(){console.log("submit!"),n()}function c(d){l.value=!0,g.value=d}function n(){l.value=!1}return(d,e)=>(i(),p("div",null,[a(I,{"data-cy":"show-modal",onClick:e[0]||(e[0]=s=>c([B(r)[0]]))},{default:t(()=>[...e[2]||(e[2]=[C(" Show Dialog with little content",-1)])]),_:1}),a(I,{onClick:e[1]||(e[1]=s=>c(B(r)))},{default:t(()=>[...e[3]||(e[3]=[C(" Show Dialog with lots of content",-1)])]),_:1}),l.value?(i(),x(J,{key:0,"close-on-outside-click":"","auto-focus":"",onSubmit:u,onCancel:n},{breadcrumb:t(()=>[...e[4]||(e[4]=[f("p",null,"this • is • the • breadcrumb",-1)])]),title:t(()=>[...e[5]||(e[5]=[f("h2",null,"This is the title",-1)])]),actions:t(()=>[a(y,{title:"Run"},{default:t(()=>[a(k,{type:"play"})]),_:1}),a(y,{title:"Lock this item"},{default:t(()=>[a(k,{type:"lock"})]),_:1})]),default:t(()=>[(i(!0),p(b,null,w(g.value,s=>(i(),p("p",{key:s},M(s),1))),128))]),_:1})):N("",!0),(i(!0),p(b,null,w(B(r),s=>(i(),p("p",{key:s},M(s),1))),128))]))}});K.__docgenInfo={exportName:"default",displayName:"KitBigModal.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Modal/KitBigModal.story.vue"]};const P=`<template>
  <div>
    <KitButton data-cy="show-modal" @click="showDialog([paragraphs[0]])"> Show Dialog with little content</KitButton>
    <KitButton @click="showDialog(paragraphs)"> Show Dialog with lots of content</KitButton>
    <KitBigModal close-on-outside-click v-if="show" auto-focus @submit="onSubmit" @cancel="onCancel">
      <template #breadcrumb>
        <p>this • is • the • breadcrumb</p>
      </template>
      <template #title>
        <h2>This is the title</h2>
      </template>
      <template #actions>
        <KitIconButton title="Run">
          <KitIcon type="play" />
        </KitIconButton>
        <KitIconButton title="Lock this item">
          <KitIcon type="lock" />
        </KitIconButton>
      </template>
      <p v-for="p in modalContent" :key="p">
        {{ p }}
      </p>
    </KitBigModal>
    <p v-for="p in paragraphs" :key="p">
      {{ p }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { faker } from '@faker-js/faker'
import { ref } from 'vue'
import KitButton from '@components/Button/KitButton.vue'
import KitBigModal from '../../src/components/Modal/KitBigModal.vue'
import KitIconButton from '../../src/components/Button/KitIconButton.vue'
import KitIcon from '../../src/components/Icon/KitIcon.vue'

const paragraphs = Array.from({ length: 30 }).map(() => faker.lorem.paragraph())

const show = ref(true)
const modalContent = ref(paragraphs)

function onSubmit() {
  console.log('submit!')
  onCancel()
}

function showDialog(content) {
  show.value = true
  modalContent.value = content
}

function onCancel() {
  show.value = false
}
<\/script>
`,ie={title:"Modal",component:K,parameters:{docs:{source:{code:P}}}},U=o=>({components:{Comp:K},setup(){return{args:o}},template:'<Comp v-bind="args" />'}),h=U.bind({});var _,$,S;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(S=($=h.parameters)==null?void 0:$.docs)==null?void 0:S.source}}};const re=["KitBigModal"];export{h as KitBigModal,re as __namedExportsOrder,ie as default};
