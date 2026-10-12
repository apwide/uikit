import{d as M,w as F,o as j,K as G,f as P,j as K,k as d,F as R,G as J,s as Q,t as A,L as X,E as D,r as f,q as x,u as Y,H as Z,C as ee,A as p,B as z,z as L,x as te,n as ne}from"./vue.esm-bundler-bSWh6tln.js";import{K as ae}from"./KitTextField-DL9zzDIB.js";import{P as le}from"./Popup-CYbvf_Tg.js";import{K as ie}from"./KitButton-DXemt05q.js";import{_ as U}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Popper-D7RkQmME.js";import"./KitSpinner-BNue20UW.js";const oe={tabindex:"-1",class:"kit-time-picker-menu",style:{height:"200px","overflow-y":"scroll","padding-right":"10px"}},q=M({__name:"TimePickerMenu",props:{value:{}},emits:["time-selected"],setup(u,{emit:i}){const y=u,a=i,t=f(),r=f(),n=f();F(()=>y.value,e=>{t.value=c(n.value.children,e),m(t.value)});const v=x(()=>{const e=[];for(let o=0;o<24;o++){const s=g(o,2,0);e.push(`${s}:00`,`${s}:30`)}return e});j(()=>{window.addEventListener("keydown",w),t.value=c(n.value.children,y.value),setTimeout(()=>m(t.value),30)}),G(()=>{window.removeEventListener("keydown",w)});function g(e,o,s){for(;`${e}`.length<o;)e=`${s}${e}`;return e}function c(e,o){for(let s=0;s<e.length;s++)if(e.item(s).innerText===o)return e.item(s);return null}function w(e){var o;e.key==="ArrowDown"?(e.preventDefault(),e.stopPropagation(),b()):e.key==="ArrowUp"?(e.preventDefault(),e.stopPropagation(),I()):e.key==="Enter"&&(e.preventDefault(),e.stopPropagation(),T((o=r.value)==null?void 0:o.innerText))}function C(e){var o;return((o=r.value)==null?void 0:o.innerText)===e}function V(e){e.target!==r.value&&_(e.target)}function b(){if(!r.value)m(n.value.children[0]);else{const e=Array.from(n.value.children).indexOf(r.value)+1;e<n.value.children.length&&m(n.value.children[e])}}function m(e){_(e),e&&(n.value.parentElement.scrollTop=e.offsetTop-e.getBoundingClientRect().height*3)}function _(e){r.value=e}function I(){if(!r.value)m(n.value.children[n.value.children.length-1]);else{const e=Array.from(n.value.children).indexOf(r.value)-1;e>-1&&m(n.value.children[e])}}function T(e){a("time-selected",e)}return(e,o)=>(P(),K("div",oe,[d("div",{ref_key:"me",ref:n,style:{display:"flex","flex-direction":"column"}},[(P(!0),K(R,null,J(v.value,s=>(P(),Q(ie,{tabindex:"-1",key:s,style:{"margin-left":"0px"},appearance:"subtle","data-highlight":C(s)||void 0,onMousemove:V,onClick:$=>T(s)},{default:A(()=>[X(D(s),1)]),_:2},1032,["data-highlight","onClick"]))),128))],512)]))}}),se=U(q,[["__scopeId","data-v-09518d02"]]);q.__docgenInfo={exportName:"default",displayName:"TimePickerMenu",description:"",tags:{},props:[{name:"value",required:!1,type:{name:"string"}}],events:[{name:"time-selected",type:{names:["string"]}}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/Calendar/TimePickerMenu.vue"]};const ue=["value","placeholder","disabled"],h=M({__name:"KitTimePicker",props:L({isLoading:{type:Boolean,default:!1},isFocused:{type:Boolean,default:!1},isInvalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},placeholder:{default:"e.g. 11:00"}},{modelValue:{},modelModifiers:{}}),emits:L(["focus","blur"],["update:modelValue"]),setup(u,{emit:i}){const y=u,a=i,t=Y(u,"modelValue"),r=f(!1),n=f(!1),v=f(),g=f(),c=f(),w=Z(),C=x(()=>{const{onFocus:l,onBlur:k,onInput:fe,...W}=w;return W}),V=x(()=>t.value),b=x({get(){if(V.value)return t.value},set(l){t.value=l}}),m=x(()=>V.value?t.value:"");F(t,l=>{c.value=l},{immediate:!0}),F(()=>y.isFocused,l=>{l&&ne(()=>{var k;return(k=g.value)==null?void 0:k.focus()})},{immediate:!0});function _(l){l.target.value.length===0?c.value=void 0:c.value=l.target.value}function I(){n.value||T()}function T(){n.value=!n.value}function e(){n.value=!1,c.value=t.value}function o(l){v.value.contains(l.relatedTarget)||(r.value=!0,n.value=!0,a("focus",l))}function s(l){v.value.contains(l.relatedTarget)?l.relatedTarget.getAttribute("tabindex")==="-1"&&g.value.focus():(r.value=!1,n.value=!1,t.value!==c.value&&(b.value=c.value),a("blur",l))}function $(l){n.value=!1,b.value=l,g.value.focus()}return(l,k)=>(P(),K("div",{ref_key:"me",ref:v,class:"kit-time-picker",onClick:k[0]||(k[0]=ee(()=>{},["stop"]))},[p(ae,{"is-focused":r.value,"is-loading":u.isLoading,disabled:u.disabled||u.isLoading,"is-invalid":u.isInvalid,select:"",onKeydown:z(I,["down"]),onMousedown:T},{default:A(()=>[d("input",te({ref_key:"input",ref:g,value:m.value,type:"text",width:"50%",placeholder:u.placeholder,disabled:u.disabled||u.isLoading},C.value,{onInput:_,onKeyup:z(e,["esc"]),onFocus:o,onBlur:s}),null,16,ue)]),_:1},8,["is-focused","is-loading","disabled","is-invalid"]),p(le,{"is-open":n.value,"target-element":v.value,placement:"bottom-start","data-cy":"select-menu"},{default:A(()=>[p(se,{value:m.value,onTimeSelected:$},null,8,["value"])]),_:1},8,["is-open","target-element"])],512))}});h.__docgenInfo={exportName:"default",displayName:"KitTimePicker",description:"",tags:{},props:[{name:"isLoading",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isFocused",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isInvalid",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'e.g. 11:00'"}}],events:[{name:"focus"},{name:"blur"}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/Calendar/KitTimePicker.vue"]};const re={class:"wrapper"},de={class:"time-zones"},S=M({__name:"TimePicker.story",setup(u){const i=f("");return(y,a)=>(P(),K("div",re,[p(h,{modelValue:i.value,"onUpdate:modelValue":a[0]||(a[0]=t=>i.value=t),disabled:""},null,8,["modelValue"]),a[5]||(a[5]=d("h3",null,"With time zones",-1)),d("div",de,[d("div",null,[d("p",null,"Pacific/Auckland: "+D(i.value),1),p(h,{modelValue:i.value,"onUpdate:modelValue":a[1]||(a[1]=t=>i.value=t)},null,8,["modelValue"])]),d("div",null,[d("p",null,"Default (system) time zone: "+D(i.value)+" is-focused",1),p(h,{modelValue:i.value,"onUpdate:modelValue":a[2]||(a[2]=t=>i.value=t)},null,8,["modelValue"])]),d("div",null,[d("p",null,"Pacific/Honolulu: "+D(i.value),1),p(h,{modelValue:i.value,"onUpdate:modelValue":a[3]||(a[3]=t=>i.value=t),placeholder:"11:00"},null,8,["modelValue"])])]),a[6]||(a[6]=d("h3",null,"Disabled past dates",-1)),d("p",null,[p(h,{modelValue:i.value,"onUpdate:modelValue":a[4]||(a[4]=t=>i.value=t)},null,8,["modelValue"])])]))}}),H=U(S,[["__scopeId","data-v-f7d4d0a7"]]);S.__docgenInfo={exportName:"default",displayName:"TimePicker.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/DatePicker/TimePicker.story.vue"]};const ce=`<template>
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
`,xe={title:"DatePicker",component:H,parameters:{docs:{source:{code:ce}}}},me=u=>({components:{Comp:H},setup(){return{args:u}},template:'<Comp v-bind="args" />'}),B=me.bind({});var N,E,O;B.parameters={...B.parameters,docs:{...(N=B.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(O=(E=B.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};const Pe=["TimePicker"];export{B as TimePicker,Pe as __namedExportsOrder,xe as default};
