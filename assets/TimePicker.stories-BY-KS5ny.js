import{d as M,w as F,o as j,M as Q,k as w,l as D,m as r,J as X,K as Y,u as Z,v as C,N as ee,I as B,r as f,c as P,y as te,x as ne,G as ae,B as N,E as p,F as z,D as E,A as le,n as ie}from"./vue.esm-bundler-wNF6-2fW.js";import{K as oe}from"./KitTextField-xvdMhYYp.js";import{P as se}from"./Popup-BrfFHZ0X.js";import{u as ue}from"./fieldGroup-CvGAAVzd.js";import{u as re}from"./dom-kh-IIGlH.js";import{K as de}from"./KitButton-CNA1GrKR.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Popper-Cj7Zy2p4.js";import"./KitSpinner-D_AgCq8k.js";const ce={tabindex:"-1",class:"kit-time-picker-menu",style:{height:"200px","overflow-y":"scroll","padding-right":"10px"}},S=M({__name:"TimePickerMenu",props:{value:{}},emits:["time-selected"],setup(u,{emit:i}){const y=u,a=i,t=f(),d=f(),n=f();F(()=>y.value,e=>{t.value=c(n.value.children,e),m(t.value)});const v=P(()=>{const e=[];for(let o=0;o<24;o++){const s=g(o,2,0);e.push(`${s}:00`,`${s}:30`)}return e});j(()=>{window.addEventListener("keydown",T),t.value=c(n.value.children,y.value),setTimeout(()=>m(t.value),30)}),Q(()=>{window.removeEventListener("keydown",T)});function g(e,o,s){for(;`${e}`.length<o;)e=`${s}${e}`;return e}function c(e,o){for(let s=0;s<e.length;s++)if(e.item(s).innerText===o)return e.item(s);return null}function T(e){var o;e.key==="ArrowDown"?(e.preventDefault(),e.stopPropagation(),A()):e.key==="ArrowUp"?(e.preventDefault(),e.stopPropagation(),b()):e.key==="Enter"&&(e.preventDefault(),e.stopPropagation(),_((o=d.value)==null?void 0:o.innerText))}function V(e){var o;return((o=d.value)==null?void 0:o.innerText)===e}function K(e){e.target!==d.value&&x(e.target)}function A(){if(!d.value)m(n.value.children[0]);else{const e=Array.from(n.value.children).indexOf(d.value)+1;e<n.value.children.length&&m(n.value.children[e])}}function m(e){x(e),e&&(n.value.parentElement.scrollTop=e.offsetTop-e.getBoundingClientRect().height*3)}function x(e){d.value=e}function b(){if(!d.value)m(n.value.children[n.value.children.length-1]);else{const e=Array.from(n.value.children).indexOf(d.value)-1;e>-1&&m(n.value.children[e])}}function _(e){a("time-selected",e)}return(e,o)=>(w(),D("div",ce,[r("div",{ref_key:"me",ref:n,style:{display:"flex","flex-direction":"column"}},[(w(!0),D(X,null,Y(v.value,s=>(w(),Z(de,{tabindex:"-1",key:s,style:{"margin-left":"0px"},appearance:"subtle","data-highlight":V(s)||void 0,onMousemove:K,onClick:$=>_(s)},{default:C(()=>[ee(B(s),1)]),_:2},1032,["data-highlight","onClick"]))),128))],512)]))}}),me=q(S,[["__scopeId","data-v-09518d02"]]);S.__docgenInfo={exportName:"default",displayName:"TimePickerMenu",description:"",tags:{},props:[{name:"value",required:!1,type:{name:"string"}}],events:[{name:"time-selected",type:{names:["string"]}}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/Calendar/TimePickerMenu.vue"]};const fe=["id"],pe=["value","placeholder","disabled"],k=M({__name:"KitTimePicker",props:E({isLoading:{type:Boolean,default:!1},isFocused:{type:Boolean,default:!1},isInvalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},placeholder:{default:"e.g. 11:00"}},{modelValue:{},modelModifiers:{}}),emits:E(["focus","blur"],["update:modelValue"]),setup(u,{emit:i}){const y=u,a=i,t=te(u,"modelValue"),d=f(!1),n=f(!1),v=f(),g=f(),c=f(),T=ne(),V=re(),K=ue(T,V),A=P(()=>{const{onFocus:l,onBlur:h,onInput:ye,...R}=T;return R}),m=P(()=>t.value),x=P({get(){if(m.value)return t.value},set(l){t.value=l}}),b=P(()=>m.value?t.value:"");F(t,l=>{c.value=l},{immediate:!0}),F(()=>y.isFocused,l=>{l&&ie(()=>{var h;return(h=g.value)==null?void 0:h.focus()})},{immediate:!0});function _(l){l.target.value.length===0?c.value=void 0:c.value=l.target.value}function e(){n.value||o()}function o(){n.value=!n.value}function s(){n.value=!1,c.value=t.value}function $(l){v.value.contains(l.relatedTarget)||(d.value=!0,n.value=!0,a("focus",l))}function W(l){v.value.contains(l.relatedTarget)?l.relatedTarget.getAttribute("tabindex")==="-1"&&g.value.focus():(d.value=!1,n.value=!1,t.value!==c.value&&(x.value=c.value),a("blur",l))}function J(l){n.value=!1,x.value=l,g.value.focus()}return(l,h)=>(w(),D("div",{ref_key:"me",ref:v,class:"kit-time-picker",onClick:h[0]||(h[0]=ae(()=>{},["stop"]))},[r("span",{id:N(V),hidden:""},"time",8,fe),p(oe,{"is-focused":d.value,"is-loading":u.isLoading,disabled:u.disabled||u.isLoading,"is-invalid":u.isInvalid,select:"",onKeydown:z(e,["down"]),onMousedown:o},{default:C(()=>[r("input",le({ref_key:"input",ref:g,value:b.value,type:"text",width:"50%",placeholder:u.placeholder,disabled:u.disabled||u.isLoading},{...N(K),...A.value},{onInput:_,onKeyup:z(s,["esc"]),onFocus:$,onBlur:W}),null,16,pe)]),_:1},8,["is-focused","is-loading","disabled","is-invalid"]),p(se,{"is-open":n.value,"target-element":v.value,placement:"bottom-start","data-cy":"select-menu"},{default:C(()=>[p(me,{value:b.value,onTimeSelected:J},null,8,["value"])]),_:1},8,["is-open","target-element"])],512))}});k.__docgenInfo={exportName:"default",displayName:"KitTimePicker",description:"",tags:{},props:[{name:"isLoading",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isFocused",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isInvalid",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'e.g. 11:00'"}}],events:[{name:"focus"},{name:"blur"}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/Calendar/KitTimePicker.vue"]};const ve={class:"wrapper"},ge={class:"time-zones"},G=M({__name:"TimePicker.story",setup(u){const i=f("");return(y,a)=>(w(),D("div",ve,[p(k,{modelValue:i.value,"onUpdate:modelValue":a[0]||(a[0]=t=>i.value=t),disabled:""},null,8,["modelValue"]),a[5]||(a[5]=r("h3",null,"With time zones",-1)),r("div",ge,[r("div",null,[r("p",null,"Pacific/Auckland: "+B(i.value),1),p(k,{modelValue:i.value,"onUpdate:modelValue":a[1]||(a[1]=t=>i.value=t)},null,8,["modelValue"])]),r("div",null,[r("p",null,"Default (system) time zone: "+B(i.value)+" is-focused",1),p(k,{modelValue:i.value,"onUpdate:modelValue":a[2]||(a[2]=t=>i.value=t)},null,8,["modelValue"])]),r("div",null,[r("p",null,"Pacific/Honolulu: "+B(i.value),1),p(k,{modelValue:i.value,"onUpdate:modelValue":a[3]||(a[3]=t=>i.value=t),placeholder:"11:00"},null,8,["modelValue"])])]),a[6]||(a[6]=r("h3",null,"Disabled past dates",-1)),r("p",null,[p(k,{modelValue:i.value,"onUpdate:modelValue":a[4]||(a[4]=t=>i.value=t)},null,8,["modelValue"])])]))}}),H=q(G,[["__scopeId","data-v-f7d4d0a7"]]);G.__docgenInfo={exportName:"default",displayName:"TimePicker.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/DatePicker/TimePicker.story.vue"]};const he=`<template>
  <div class="wrapper">
    <TimePicker v-model="date" disabled />
    <h3>With time zones</h3>
    <div class="time-zones">
      <div>
        <p>Pacific/Auckland: {{ date }}</p>
        <TimePicker v-model="date" />
      </div>
      <div>
        <p>Default (system) time zone: {{ date }} is-focused</p>
        <TimePicker v-model="date" />
      </div>
      <div>
        <p>Pacific/Honolulu: {{ date }}</p>
        <TimePicker v-model="date" placeholder="11:00" />
      </div>
    </div>
    <h3>Disabled past dates</h3>
    <p>
      <TimePicker v-model="date" />
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TimePicker from '@components/Calendar/KitTimePicker.vue'

const date = ref('')
<\/script>

<style scoped>
.time-zones {
  display: flex;
}

.time-zones > * {
  margin: 0 20px 0 0;
}
</style>
`,De={title:"DatePicker",component:H,parameters:{docs:{source:{code:he}}}},ke=u=>({components:{Comp:H},setup(){return{args:u}},template:'<Comp v-bind="args" />'}),I=ke.bind({});var L,O,U;I.parameters={...I.parameters,docs:{...(L=I.parameters)==null?void 0:L.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(U=(O=I.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};const Ke=["TimePicker"];export{I as TimePicker,Ke as __namedExportsOrder,De as default};
