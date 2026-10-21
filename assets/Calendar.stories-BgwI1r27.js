import{d as P,r as z,w as M,j as X,k as o,A as c,E as g,f as Z}from"./vue.esm-bundler-bSWh6tln.js";import{g as N,b as _,c as k,a as D,C as d,t as S}from"./Calendar-BRsxTJzS.js";import{s as R}from"./subDays-w7_X3kZt.js";import{f as H}from"./format-CL5xAmzD.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./KitIconButton-Bak3xkMk.js";import"./KitButton-DXemt05q.js";import"./KitSpinner-BNue20UW.js";import"./KitIcon-IXZtQfsY.js";function y(n,e,t){const a=N(),l=A(n,t.timeZone,t.locale??a.locale);return"formatToParts"in l?I(l,e):E(l,e)}function I(n,e){const t=n.formatToParts(e);for(let a=t.length-1;a>=0;--a)if(t[a].type==="timeZoneName")return t[a].value}function E(n,e){const t=n.format(e).replace(/\u200E/g,""),a=/ [\w-+ ]+$/.exec(t);return a?a[0].substr(1):""}function A(n,e,t){return new Intl.DateTimeFormat(t?[t.code,"en-US"]:void 0,{timeZone:e,timeZoneName:n})}const B=60*1e3,$={X:function(n,e,t){const a=h(t.timeZone,n);if(a===0)return"Z";switch(e){case"X":return w(a);case"XXXX":case"XX":return m(a);case"XXXXX":case"XXX":default:return m(a,":")}},x:function(n,e,t){const a=h(t.timeZone,n);switch(e){case"x":return w(a);case"xxxx":case"xx":return m(a);case"xxxxx":case"xxx":default:return m(a,":")}},O:function(n,e,t){const a=h(t.timeZone,n);switch(e){case"O":case"OO":case"OOO":return"GMT"+L(a,":");case"OOOO":default:return"GMT"+m(a,":")}},z:function(n,e,t){switch(e){case"z":case"zz":case"zzz":return y("short",n,t);case"zzzz":default:return y("long",n,t)}}};function h(n,e){const t=n?_(n,e,!0)/B:(e==null?void 0:e.getTimezoneOffset())??0;if(Number.isNaN(t))throw new RangeError("Invalid time zone specified: "+n);return t}function p(n,e){const t=n<0?"-":"";let a=Math.abs(n).toString();for(;a.length<e;)a="0"+a;return t+a}function m(n,e=""){const t=n>0?"-":"+",a=Math.abs(n),l=p(Math.floor(a/60),2),s=p(Math.floor(a%60),2);return t+l+e+s}function w(n,e){return n%60===0?(n>0?"-":"+")+p(Math.abs(n)/60,2):m(n,e)}function L(n,e=""){const t=n>0?"-":"+",a=Math.abs(n),l=Math.floor(a/60),s=a%60;return s===0?t+String(l):t+String(l)+e+p(s,2)}const W=/([xXOz]+)|''|'(''|[^'])+('|$)/g;function G(n,e,t={}){e=String(e);const a=e.match(W);if(a){const l=k(t.originalDate||n,t);e=a.reduce(function(s,u){if(u[0]==="'")return s;const i=s.indexOf(u),r=s[i-1]==="'",v=s.replace(u,"'"+$[u[0]](l,u,t)+"'");return r?v.substring(0,i-1)+v.substring(i+1):v},e)}return H(n,e,t)}const U={class:"wrapper"},V={class:"time-zones"},b=P({__name:"Calendar.story",setup(n){const e=z(new Date),t={from:D(new Date,1)},a={to:R(new Date,1)},l=z({from:D(new Date,7),to:D(new Date,21)});M(e,()=>{console.log(e.value)});function s(i){e.value=i}function u(i,r){return i&&G(S(i,r),"yyyy-MM-dd HH:mm")}return(i,r)=>(Z(),X("div",U,[r[0]||(r[0]=o("h3",null,"Normal view",-1)),o("p",null,[c(d,{"data-cy":"calendar",value:e.value,onDateSelected:s},null,8,["value"])]),r[1]||(r[1]=o("h3",null,"With time zones",-1)),o("div",V,[o("div",null,[o("p",null,"Pacific/Auckland: "+g(u(e.value,"Pacific/Auckland")),1),c(d,{value:e.value,"time-zone":"Pacific/Auckland",onDateSelected:s},null,8,["value"])]),o("div",null,[o("p",null,"Default (system) time zone: "+g(u(e.value)),1),c(d,{value:e.value,onDateSelected:s},null,8,["value"])]),o("div",null,[o("p",null,"Pacific/Honolulu: "+g(u(e.value,"Pacific/Honolulu")),1),c(d,{value:e.value,"time-zone":"Pacific/Honolulu",onDateSelected:s},null,8,["value"])])]),r[2]||(r[2]=o("h3",null,"Disabled past dates",-1)),o("p",null,[c(d,{value:e.value,"disabled-range":a},null,8,["value"])]),r[3]||(r[3]=o("h3",null,"Disabled future dates",-1)),o("p",null,[c(d,{value:e.value,"disabled-range":t},null,8,["value"])]),r[4]||(r[4]=o("h3",null,"Date range",-1)),o("p",null,[c(d,{value:l.value,"range-value":!0},null,8,["value"])])]))}}),T=F(b,[["__scopeId","data-v-2f7cc662"]]);b.__docgenInfo={exportName:"default",displayName:"Calendar.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/DatePicker/Calendar.story.vue"]};const j=`<template>
  <div class="wrapper">
    <h3>Normal view</h3>
    <p>
      <Calendar data-cy="calendar" :value="date" @date-selected="onDateSelected" />
    </p>
    <h3>With time zones</h3>
    <div class="time-zones">
      <div>
        <p>Pacific/Auckland: {{ formatDate(date, 'Pacific/Auckland') }}</p>
        <Calendar :value="date" time-zone="Pacific/Auckland" @date-selected="onDateSelected" />
      </div>
      <div>
        <p>Default (system) time zone: {{ formatDate(date) }}</p>
        <Calendar :value="date" @date-selected="onDateSelected" />
      </div>
      <div>
        <p>Pacific/Honolulu: {{ formatDate(date, 'Pacific/Honolulu') }}</p>
        <Calendar :value="date" time-zone="Pacific/Honolulu" @date-selected="onDateSelected" />
      </div>
    </div>
    <h3>Disabled past dates</h3>
    <p>
      <Calendar :value="date" :disabled-range="noPastRange" />
    </p>
    <h3>Disabled future dates</h3>
    <p>
      <Calendar :value="date" :disabled-range="noFutureRange" />
    </p>
    <h3>Date range</h3>
    <p>
      <Calendar :value="dateRange" :range-value="true" />
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { addDays, subDays } from 'date-fns'
import { format, toZonedTime } from 'date-fns-tz'
import Calendar from '@/components/Calendar/Calendar.vue'

const date = ref(new Date())
const noFutureRange = {
  from: addDays(new Date(), 1)
}
const noPastRange = {
  to: subDays(new Date(), 1)
}
const dateRange = ref({
  from: addDays(new Date(), 7),
  to: addDays(new Date(), 21)
})

watch(date, () => {
  console.log(date.value)
})

function onDateSelected(value) {
  date.value = value
}

function formatDate(dateToFormat, timeZone) {
  return dateToFormat && format(toZonedTime(dateToFormat, timeZone), 'yyyy-MM-dd HH:mm')
}
<\/script>

<style scoped>
.time-zones {
  display: flex;
}
</style>
`,se={title:"DatePicker",component:T,parameters:{docs:{source:{code:j}}}},Q=n=>({components:{Comp:T},setup(){return{args:n}},template:'<Comp v-bind="args" />'}),f=Q.bind({});var x,O,C;f.parameters={...f.parameters,docs:{...(x=f.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(C=(O=f.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};const re=["Calendar"];export{f as Calendar,re as __namedExportsOrder,se as default};
