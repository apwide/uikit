import{d as P,j as k,A as a,k as n,E as m,r as y,f as V}from"./vue.esm-bundler-bSWh6tln.js";import{K as i}from"./KitDatePicker-CgZK00Rr.js";import{s as g}from"./subDays-w7_X3kZt.js";import{f as z}from"./format-CL5xAmzD.js";import{t as b}from"./Calendar-BRsxTJzS.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./KitTextField-DL9zzDIB.js";import"./Popup-CYbvf_Tg.js";import"./Popper-D7RkQmME.js";import"./KitIcon-IXZtQfsY.js";import"./parse-C7v2ivj5.js";import"./KitIconButton-Bak3xkMk.js";import"./KitButton-DXemt05q.js";import"./KitSpinner-BNue20UW.js";const _={class:"wrapper"},x={class:"time-zones"},f=P({__name:"DatePicker.story",setup(d){const t=y(""),D={to:g(new Date,1)};function r(s,e){return s&&z(b(s,e),"yyyy-MM-dd HH:mm")}return(s,e)=>(V(),k("div",_,[a(i,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=o=>t.value=o)},null,8,["modelValue"]),e[5]||(e[5]=n("h3",null,"With time zones",-1)),n("div",x,[n("div",null,[n("p",null,"Pacific/Auckland: "+m(r(t.value,"Pacific/Auckland")),1),a(i,{modelValue:t.value,"onUpdate:modelValue":e[1]||(e[1]=o=>t.value=o),"time-zone":"Pacific/Auckland"},null,8,["modelValue"])]),n("div",null,[n("p",null,"Default (system) time zone: "+m(r(t.value)),1),a(i,{modelValue:t.value,"onUpdate:modelValue":e[2]||(e[2]=o=>t.value=o)},null,8,["modelValue"])]),n("div",null,[n("p",null,"Pacific/Honolulu: "+m(r(t.value,"Pacific/Honolulu")),1),a(i,{modelValue:t.value,"onUpdate:modelValue":e[3]||(e[3]=o=>t.value=o),"time-zone":"Pacific/Honolulu"},null,8,["modelValue"])])]),e[6]||(e[6]=n("h3",null,"Disabled past dates",-1)),n("p",null,[a(i,{modelValue:t.value,"onUpdate:modelValue":e[4]||(e[4]=o=>t.value=o),"disabled-range":D},null,8,["modelValue"])])]))}}),v=H(f,[["__scopeId","data-v-c0152b2c"]]);f.__docgenInfo={exportName:"default",displayName:"DatePicker.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/DatePicker/DatePicker.story.vue"]};const A=`<template>
  <div class="wrapper">
    <DatePicker v-model="date" />
    <h3>With time zones</h3>
    <div class="time-zones">
      <div>
        <p>Pacific/Auckland: {{ formatDate(date, 'Pacific/Auckland') }}</p>
        <DatePicker v-model="date" time-zone="Pacific/Auckland" />
      </div>
      <div>
        <p>Default (system) time zone: {{ formatDate(date) }}</p>
        <DatePicker v-model="date" />
      </div>
      <div>
        <p>Pacific/Honolulu: {{ formatDate(date, 'Pacific/Honolulu') }}</p>
        <DatePicker v-model="date" time-zone="Pacific/Honolulu" />
      </div>
    </div>
    <h3>Disabled past dates</h3>
    <p>
      <DatePicker v-model="date" :disabled-range="noPastRange" />
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { subDays, format } from 'date-fns'
import { toZonedTime } from 'date-fns-tz'
import DatePicker from '@components/Calendar/KitDatePicker.vue'

const date = ref('')
const noPastRange = {
  to: subDays(new Date(), 1)
}

function formatDate(dateToFormat, timeZone) {
  return dateToFormat && format(toZonedTime(dateToFormat, timeZone), 'yyyy-MM-dd HH:mm')
}
<\/script>

<style scoped>
.time-zones {
  display: flex;
}

.time-zones > * {
  margin: 0 20px 0 0;
}
</style>
`,j={title:"DatePicker",component:v,parameters:{docs:{source:{code:A}}}},C=d=>({components:{Comp:v},setup(){return{args:d}},template:'<Comp v-bind="args" />'}),l=C.bind({});var u,p,c;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(c=(p=l.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const O=["DatePicker"];export{l as DatePicker,O as __namedExportsOrder,j as default};
