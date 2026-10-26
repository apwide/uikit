import{d as y,u as j,j as l,p as K,f as n,Z as V,_ as g,A as r,J as U,t as a,k as b,Y as W,s as m,m as S,q as x,w as z,l as O,r as P,F as p,G as f,E as v,L as H}from"./vue.esm-bundler-Bq7iw15p.js";import{K as G}from"./KitBadge-tWvFYniD.js";import{T as J}from"./Tooltip-DPoj6qPg.js";import{K as Y}from"./KitDraggable-CBHrbWIN.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as C}from"./KitIcon-DzjcMukR.js";import{K as Z}from"./KitIconButton-iUT2hFoW.js";import{_ as Q,K as $}from"./KitMenuItem-BPIMrCAY.js";import"./Popper-CqRkecYS.js";import"./dom-kh-IIGlH.js";import"./KitButton-s-nB5WLS.js";import"./KitSpinner-C_FlB-Bt.js";import"./KitDropdown-BI7w2uBs.js";import"./ChevronDownIcon-B6u_Npdu.js";import"./IconWrapper-BpnstkGd.js";import"./Popup-GsyzzzmS.js";import"./KitDropdownItem-B3gq7h7p.js";const _=y({__name:"KitTabProvider",props:{modelValue:{required:!0},modelModifiers:{}},emits:["update:modelValue"],setup(s){const o=j(s,"modelValue");function i(u){o.value=u}const d={};return Object.defineProperty(d,"activeTab",{enumerable:!0,get:()=>o.value}),V("select",i),V("state",d),(u,c)=>(n(),l("div",null,[K(u.$slots,"default")]))}});_.__docgenInfo={exportName:"default",displayName:"KitTabProvider",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/Tabs/KitTabProvider.vue"]};const X={class:"kit-tab-headers"},F=y({__name:"KitTabHeaders",props:{reorderable:{type:Boolean,default:!1},reorderableIdsList:{},reorderableItemsDraggableClass:{}},emits:["reorder"],setup(s,{emit:o}){const i=s,d=o,u=g("state");return Object.defineProperty(u,"reorderable",{enumerable:!0,get:()=>i.reorderable}),V("state",u),(c,t)=>(n(),l("div",X,[r(U(Y),{enabled:s.reorderable,list:s.reorderableIdsList,handleSelector:".kit-drag-handle","draggable-class":"kit-is-reorderable",onReorder:t[0]||(t[0]=e=>d("reorder",e))},{default:a(()=>[b("nav",null,[K(c.$slots,"default",{},void 0,!0)])]),_:3},8,["enabled","list"])]))}}),h=I(F,[["__scopeId","data-v-8eb21056"]]);F.__docgenInfo={exportName:"default",displayName:"KitTabHeaders",description:"",tags:{},props:[{name:"reorderable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"reorderableIdsList",required:!1,type:{name:"Arrays"}},{name:"reorderableItemsDraggableClass",required:!1,type:{name:"string"}}],events:[{name:"reorder",type:{names:["Array"],elements:[{name:"unknown"}]}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/Tabs/KitTabHeaders.vue"]};const ee=["disabled"],L=y({__name:"KitTabButton",props:{id:{},disabled:{type:Boolean,default:!1},stretch:{type:Boolean,default:!1}},setup(s){const o=s;function i(){!o.disabled&&!o.inactive&&d(o.id)}const d=g("select",()=>()=>{console.error("TabKitButton: this component can only be used with KitTabProvider.")});return g("state",()=>({activeTab:void 0})),(u,c)=>(n(),l("button",{class:"kit-tab-button",type:"button",onClick:i,disabled:s.disabled},[K(u.$slots,"default",{},void 0,!0)],8,ee))}}),A=I(L,[["__scopeId","data-v-7ec7ece1"]]);L.__docgenInfo={exportName:"default",displayName:"KitTabButton",description:"",tags:{},props:[{name:"id",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"stretch",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/Tabs/KitTabButton.vue"]};const te=["active","disabled"],ae={key:1,class:"kit-tab-header__custom"},E=y({__name:"KitTabHeader",props:{id:{},custom:{type:Boolean,default:!1},disabled:{type:Boolean},reorderable:{type:Boolean,default:!1}},setup(s){const o=s,i=g("select",()=>()=>{console.error("TabKitButton: this component can only be used with KitTabProvider.")}),d=g("state",()=>({activeTab:void 0})),u=x(()=>String(d.activeTab)===String(o.id)),c=x(()=>d&&d.reorderable&&o.reorderable||!1);function t(){i(o.id)}return(e,me)=>(n(),l("div",{class:W(["kit-tab-header",{"kit-is-reorderable":c.value}]),active:u.value||void 0,disabled:s.disabled||void 0},[c.value?(n(),m(C,{key:0,class:"kit-drag-handle",type:"grip-vertical"})):S("",!0),s.custom?(n(),l("span",ae,[K(e.$slots,"default",{},void 0,!0)])):(n(),m(A,{key:2,id:s.id,class:"kit-tab-header__button",disabled:s.disabled,onClick:t},{default:a(()=>[K(e.$slots,"default",{},void 0,!0)]),_:3},8,["id","disabled"]))],10,te))}}),T=I(E,[["__scopeId","data-v-0e1da850"]]);E.__docgenInfo={exportName:"default",displayName:"KitTabHeader",description:"",tags:{},props:[{name:"id",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"custom",description:"By default, KitTabButton is wrapping the content.\nSet `custom` to true to avoid that behavior.\nNote that the content should contain a `KitTabButton` to activate a tab.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"reorderable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/Tabs/KitTabHeader.vue"]};const ne={key:0},k=y({__name:"KitTabPanel",props:{id:{}},setup(s){const o=s,i=g("state"),d=x(()=>String(i.activeTab)===String(o.id));return(u,c)=>d.value?(n(),l("div",ne,[K(u.$slots,"default")])):S("",!0)}});k.__docgenInfo={exportName:"default",displayName:"KitTabPanel",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/Tabs/KitTabPanel.vue"]};const w=y({__name:"KitTabPanels",setup(s){const o=P(),i=P({maxHeight:"inherit"}),d=P(null),u=g("state");return z(()=>u.activeTab,()=>{if(clearTimeout(d.value),o.value){const c=o.value.getBoundingClientRect().height;i.value={maxHeight:`${c}px`,overflow:"hidden"},setTimeout(()=>{i.value={maxHeight:"inherit"}},500)}}),(c,t)=>(n(),l("div",{class:"kit-tab-panels",ref_key:"container",ref:o,style:O(i.value)},[K(c.$slots,"default")],4))}});w.__docgenInfo={exportName:"default",displayName:"KitTabPanels",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/Tabs/KitTabPanels.vue"]};const oe={class:"content"},ie={class:"content"},re={class:"tab-item"},se={class:"title"},le={class:"content"},de={class:"content"},ue={class:"content"},D=y({__name:"Tabs.story",setup(s){const o=P(1),i=P([0,1,2,3,4,5,6]);function d(){alert("clicked")}function u(c){i.value=c,console.log("Tabs reordered",c)}return(c,t)=>(n(),l("div",null,[t[7]||(t[7]=b("h3",null,"Simple",-1)),r(_,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=e=>o.value=e)},{default:a(()=>[r(h,null,{default:a(()=>[(n(!0),l(p,null,f(i.value,e=>(n(),m(T,{id:e,key:e,disabled:e===4},{default:a(()=>[b("span",null,"Tab "+v(e),1)]),_:2},1032,["id","disabled"]))),128))]),_:1}),r(w,null,{default:a(()=>[(n(!0),l(p,null,f(i.value,e=>(n(),m(k,{id:e,key:e},{default:a(()=>[b("div",oe,"Tab Content "+v(e),1)]),_:2},1032,["id"]))),128))]),_:1})]),_:1},8,["modelValue"]),t[8]||(t[8]=b("hr",null,null,-1)),t[9]||(t[9]=b("h3",null,"Draggable",-1)),r(_,{modelValue:o.value,"onUpdate:modelValue":t[1]||(t[1]=e=>o.value=e)},{default:a(()=>[r(h,{reorderable:"","reorderable-ids-list":i.value,onReorder:u},{default:a(()=>[(n(!0),l(p,null,f(i.value,e=>(n(),m(T,{reorderable:"",id:e,key:e,disabled:e===4},{default:a(()=>[b("span",null,"Tab "+v(e),1)]),_:2},1032,["id","disabled"]))),128)),r(T,{id:"cog"},{default:a(()=>[r(C,{type:"cog"})]),_:1})]),_:1},8,["reorderable-ids-list"]),r(w,null,{default:a(()=>[(n(!0),l(p,null,f(i.value,e=>(n(),m(k,{id:e,key:e},{default:a(()=>[b("div",ie,"Tab Content "+v(e),1)]),_:2},1032,["id"]))),128))]),_:1})]),_:1},8,["modelValue"]),t[10]||(t[10]=b("h3",null,"With tooltip and badge",-1)),r(_,{modelValue:o.value,"onUpdate:modelValue":t[2]||(t[2]=e=>o.value=e)},{default:a(()=>[r(h,null,{default:a(()=>[(n(!0),l(p,null,f(i.value,e=>(n(),m(T,{id:e,key:e,disabled:e===4},{default:a(()=>[r(J,{label:"Tab "+e,"append-to-body":""},{default:a(()=>[b("div",re,[b("span",se,"Tab "+v(e),1),r(G,{value:e,appearance:"default"},null,8,["value"])])]),_:2},1032,["label"])]),_:2},1032,["id","disabled"]))),128))]),_:1}),(n(!0),l(p,null,f(i.value,e=>(n(),m(k,{id:e,key:e},{default:a(()=>[b("span",le,"Tab Content "+v(e),1)]),_:2},1032,["id"]))),128))]),_:1},8,["modelValue"]),t[11]||(t[11]=b("h3",null,"Very long",-1)),r(_,{modelValue:o.value,"onUpdate:modelValue":t[3]||(t[3]=e=>o.value=e)},{default:a(()=>[r(h,null,{default:a(()=>[(n(!0),l(p,null,f(i.value,e=>(n(),m(T,{id:e,key:e,disabled:e===4},{default:a(()=>[H(" Verrryyy Loooooong Tab "+v(e),1)]),_:2},1032,["id","disabled"]))),128))]),_:1}),(n(!0),l(p,null,f(i.value,e=>(n(),m(k,{id:e,key:e},{default:a(()=>[b("span",de,"Tab Content "+v(e),1)]),_:2},1032,["id"]))),128))]),_:1},8,["modelValue"]),t[12]||(t[12]=b("h3",null,"With custom tab headers",-1)),r(_,{modelValue:o.value,"onUpdate:modelValue":t[4]||(t[4]=e=>o.value=e)},{default:a(()=>[r(h,null,{default:a(()=>[(n(!0),l(p,null,f(i.value,e=>(n(),m(T,{id:e,key:e,custom:""},{default:a(()=>[r(A,{id:e,disabled:e===4},{default:a(()=>[H(" Tab "+v(e),1)]),_:2},1032,["id","disabled"]),r(Z,{onClick:d,title:"Configure tabs"},{default:a(()=>[r(C,{type:"cog",spacing:"compact"})]),_:1})]),_:2},1032,["id"]))),128)),r(T,{id:"cog",custom:""},{default:a(()=>[r(Q,null,{default:a(()=>[r($,null,{default:a(()=>[...t[5]||(t[5]=[H("Entry 1",-1)])]),_:1}),r($,null,{default:a(()=>[...t[6]||(t[6]=[H("Entry 2",-1)])]),_:1})]),_:1})]),_:1})]),_:1}),(n(!0),l(p,null,f(i.value,e=>(n(),m(k,{id:e,key:e},{default:a(()=>[b("span",ue,"Tab Content "+v(e),1)]),_:2},1032,["id"]))),128))]),_:1},8,["modelValue"])]))}}),R=I(D,[["__scopeId","data-v-dbc8dce8"]]);D.__docgenInfo={exportName:"default",displayName:"Tabs.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Tabs/Tabs.story.vue"]};const be=`<template>
  <div>
    <h3>Simple</h3>
    <KitTabProvider v-model="active">
      <KitTabHeaders>
        <KitTabHeader v-for="i in tabs" :id="i" :key="i" :disabled="i === 4">
          <span>Tab {{ i }}</span>
        </KitTabHeader>
      </KitTabHeaders>
      <KitTabPanels>
        <KitTabPanel v-for="i in tabs" :id="i" :key="i">
          <div class="content">Tab Content {{ i }}</div>
        </KitTabPanel>
      </KitTabPanels>
    </KitTabProvider>
    <hr />

    <h3>Draggable</h3>
    <KitTabProvider v-model="active">
      <KitTabHeaders
        reorderable
        :reorderable-ids-list="tabs"
        @reorder="onReorder">
        <KitTabHeader reorderable v-for="i in tabs" :id="i" :key="i" :disabled="i === 4">
          <span>Tab {{ i }}</span>
        </KitTabHeader>
        <KitTabHeader id="cog">
          <KitIcon type="cog" />
        </KitTabHeader>
      </KitTabHeaders>
      <KitTabPanels>
        <KitTabPanel v-for="i in tabs" :id="i" :key="i">
          <div class="content">Tab Content {{ i }}</div>
        </KitTabPanel>
      </KitTabPanels>
    </KitTabProvider>

    <h3>With tooltip and badge</h3>
    <KitTabProvider v-model="active">
      <KitTabHeaders>
        <KitTabHeader v-for="i in tabs" :id="i" :key="i" :disabled="i === 4">
          <KitTooltip :label="'Tab ' + i" append-to-body>
            <div class="tab-item">
              <span class="title">Tab {{ i }}</span>
              <KitBadge :value="i" appearance="default" />
            </div>
          </KitTooltip>
        </KitTabHeader>
      </KitTabHeaders>
      <KitTabPanel v-for="i in tabs" :id="i" :key="i">
        <span class="content">Tab Content {{ i }}</span>
      </KitTabPanel>
    </KitTabProvider>

    <h3>Very long</h3>
    <KitTabProvider v-model="active">
      <KitTabHeaders>
        <KitTabHeader v-for="i in tabs" :id="i" :key="i" :disabled="i === 4">
          Verrryyy Loooooong Tab {{ i }}
        </KitTabHeader>
      </KitTabHeaders>
      <KitTabPanel v-for="i in tabs" :id="i" :key="i">
        <span class="content">Tab Content {{ i }}</span>
      </KitTabPanel>
    </KitTabProvider>

    <h3>With custom tab headers</h3>
    <KitTabProvider v-model="active">
      <KitTabHeaders>
        <KitTabHeader v-for="i in tabs" :id="i" :key="i" custom>
          <KitTabButton :id="i" :disabled="i === 4"> Tab {{ i }} </KitTabButton>
          <KitIconButton @click="click" title="Configure tabs">
            <KitIcon type="cog" spacing="compact" />
          </KitIconButton>
        </KitTabHeader>
        <KitTabHeader id="cog" custom>
          <KitActionMenu>
            <KitMenuItem>Entry 1</KitMenuItem>
            <KitMenuItem>Entry 2</KitMenuItem>
          </KitActionMenu>
        </KitTabHeader>
      </KitTabHeaders>
      <KitTabPanel v-for="i in tabs" :id="i" :key="i">
        <span class="content">Tab Content {{ i }}</span>
      </KitTabPanel>
    </KitTabProvider>
  </div>
</template>

<script setup lang="ts">
import KitBadge from '@components/Badge/KitBadge.vue'
import { ref } from 'vue'
import KitTooltip from '../../src/components/Tooltip/Tooltip.vue'
import KitTabProvider from '../../src/components/Tabs/KitTabProvider.vue'
import KitTabHeaders from '../../src/components/Tabs/KitTabHeaders.vue'
import KitTabHeader from '../../src/components/Tabs/KitTabHeader.vue'
import KitTabPanel from '../../src/components/Tabs/KitTabPanel.vue'
import KitTabButton from '../../src/components/Tabs/KitTabButton.vue'
import KitIconButton from '../../src/components/Button/KitIconButton.vue'
import KitIcon from '../../src/components/Icon/KitIcon.vue'
import KitActionMenu from '../../src/components/Menu/KitActionMenu.vue'
import KitMenuItem from '../../src/components/Menu/KitMenuItem.vue'
import KitTabPanels from '../../src/components/Tabs/KitTabPanels.vue'

const active = ref(1)
const tabs = ref([0, 1, 2, 3, 4, 5, 6])

function click() {
  alert('clicked')
}

function onReorder(newList) {
  tabs.value = newList
  console.log('Tabs reordered', newList)
}
<\/script>

<style scoped>
.content {
  --story-tab-content-bg:  rgb(244, 245, 247);
  --story-tab-content-text: rgb(107, 119, 140);
}

[data-color-mode="dark"] .content {
  --story-tab-content-bg:  var(--kit-dialog-bg);
  --story-tab-content-text: var(--kit-body-text);
}

.content {
  align-items: center;
  background-color: var(--story-tab-content-bg);
  border-radius: 3px;
  color: var(--story-tab-content-text);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  font-size: 4em;
  font-weight: 500;
  justify-content: center;
  margin-bottom: 8px;
  margin-top: 16px;
  padding: 32px;
}

.tab-item {
  display: inline-flex;
  align-items: center;
  width: 100%;
}

.title {
  margin-right: 8px;
  white-space: nowrap;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
}

hr {
  background-color: var(--kit-table-header-text);
}
</style>
`,we={title:"Tabs",component:R,parameters:{docs:{source:{code:be}}}},ce=s=>({components:{Comp:R},setup(){return{args:s}},template:'<Comp v-bind="args" />'}),B=ce.bind({});var N,M,q;B.parameters={...B.parameters,docs:{...(N=B.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(q=(M=B.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};const $e=["Tabs"];export{B as Tabs,$e as __namedExportsOrder,we as default};
