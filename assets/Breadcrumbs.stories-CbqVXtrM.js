import{d as B,f as n,j as f,k as a,p as k,E as T,w as S,s as u,t as o,m as z,r as v,F as V,G as $,n as A,A as t}from"./vue.esm-bundler-Bq7iw15p.js";import{K as q}from"./KitCopyToClipboard-JtkSG0w4.js";import{_ as l}from"./KitIcon-DzjcMukR.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{T as x}from"./Tooltip-DPoj6qPg.js";import"./KitButton-s-nB5WLS.js";import"./KitSpinner-C_FlB-Bt.js";import"./Popper-CqRkecYS.js";const F=["with-icon"],P={class:"kit-item"},E=["href","target"],I=B({__name:"KitBreadcrumbItem",props:{link:{default:"#"},text:{default:""},target:{default:"_self"}},setup(s){return(r,m)=>(n(),f("div",{class:"kit-breadcrumb","with-icon":r.$slots.icon},[a("span",P,[k(r.$slots,"icon",{},void 0,!0),k(r.$slots,"link",{},()=>[a("a",{href:s.link,target:s.target},T(s.text),9,E)],!0)])],8,F))}}),d=_(I,[["__scopeId","data-v-fbb279a3"]]);I.__docgenInfo={exportName:"default",displayName:"KitBreadcrumbItem",description:"",tags:{},props:[{name:"link",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'#'"}},{name:"text",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"target",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'_self'"}}],slots:[{name:"icon"},{name:"link"}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/Breadcrumbs/KitBreadcrumbItem.vue"]};const O={class:"kit-breadcrumbs"},C=B({__name:"KitBreadcrumbs",props:{items:{default:()=>[]},copy:{type:Boolean,default:!1}},setup(s){const r=s,m=v(),e=v();return S(()=>r.copy,b=>{b&&A(()=>{const c=m.value.querySelectorAll("a");c.length&&(e.value=c[c.length-1].href)})},{immediate:!0}),(b,c)=>(n(),f("div",{ref_key:"me",ref:m,class:"kit-wrapper"},[a("div",O,[k(b.$slots,"default",{},()=>[(n(!0),f(V,null,$(s.items,i=>(n(),u(d,{key:i.text,link:i.link,text:i.text},null,8,["link","text"]))),128))],!0)]),s.copy?(n(),u(q,{key:0,text:e.value,placement:"top-start",style:{color:"var(--kit-header-text)"},label:"Copy link to clipboard"},{default:o(({copied:i})=>[i?(n(),u(l,{key:1,class:"kit-copy-icon",size:"sm",type:"check"})):(n(),u(l,{key:0,class:"kit-copy-icon",size:"sm",type:"link"}))]),_:1},8,["text"])):z("",!0)],512))}}),y=_(C,[["__scopeId","data-v-582ef3fd"]]);C.__docgenInfo={exportName:"default",displayName:"KitBreadcrumbs",description:"",tags:{},props:[{name:"items",required:!1,type:{name:"Array",elements:[{name:"Item"}]},defaultValue:{func:!1,value:"() => []"}},{name:"copy",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/Breadcrumbs/KitBreadcrumbs.vue"]};const w=B({__name:"Breadcrumbs.story",setup(s){const r=[{text:"first"},{text:"veeeeeeery loooooong breadcrumb"},{text:"long breadcrumb"},{link:"#/last-item",text:"never ellipsis"}];return(m,e)=>(n(),f("div",null,[e[1]||(e[1]=a("h3",null,"Only last + Copy",-1)),t(y,{copy:!0,items:r,wrap:!1}),e[2]||(e[2]=a("h3",null,"Custom",-1)),t(y,null,{default:o(()=>[t(d,{text:"Board"},{icon:o(()=>[t(l,{size:"sm",type:"columns"})]),_:1}),t(d,{text:"Agile Poooooooooooker"},{icon:o(()=>[t(l,{size:"sm",type:"robot"})]),_:1}),t(d,{class:"last",text:"Awesome Session Name"},{icon:o(()=>[t(x,{label:"Private session"},{default:o(()=>[t(l,{class:"icon",size:"sm",type:"lock"})]),_:1})]),link:o(()=>[t(x,{class:"tooltip",label:"Session"},{default:o(()=>[...e[0]||(e[0]=[a("a",{class:"link",href:"#",target:"_top"},"Session Name loooooong",-1)])]),_:1})]),_:1})]),_:1}),e[3]||(e[3]=a("h3",null,"With very short items",-1)),t(y,{items:[{text:"Home"},{text:"dev"},{text:"2",link:"#test/path"}],copy:""})]))}}),N=_(w,[["__scopeId","data-v-164d0714"]]);w.__docgenInfo={exportName:"default",displayName:"Breadcrumbs.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Breadcrumbs/Breadcrumbs.story.vue"]};const H=`<template>
  <div>
    <h3>Only last + Copy</h3>
    <KitBreadcrumbs :copy="true" :items="items" :wrap="false" />
    <h3>Custom</h3>
    <KitBreadcrumbs>
      <KitBreadcrumbItem text="Board">
        <template #icon>
          <KitIcon size="sm" type="columns" />
        </template>
      </KitBreadcrumbItem>
      <KitBreadcrumbItem text="Agile Poooooooooooker">
        <template #icon>
          <KitIcon size="sm" type="robot" />
        </template>
      </KitBreadcrumbItem>
      <KitBreadcrumbItem class="last" text="Awesome Session Name">
        <template #icon>
          <Tooltip label="Private session">
            <KitIcon class="icon" size="sm" type="lock" />
          </Tooltip>
        </template>
        <template #link>
          <Tooltip class="tooltip" label="Session">
            <a class="link" href="#" target="_top">Session Name loooooong</a>
          </Tooltip>
        </template>
      </KitBreadcrumbItem>
    </KitBreadcrumbs>
    <h3>With very short items</h3>
    <KitBreadcrumbs :items="[{ text: 'Home' }, { text: 'dev' }, { text: '2', link: '#test/path' }]" copy />
  </div>
</template>

<script setup lang="ts">
import KitBreadcrumbs from '@components/Breadcrumbs/KitBreadcrumbs.vue'
import KitBreadcrumbItem from '@components/Breadcrumbs/KitBreadcrumbItem.vue'
import KitIcon from '../../src/components/Icon/KitIcon.vue'
import Tooltip from '../../src/components/Tooltip/Tooltip.vue'

const items = [
  {
    text: 'first'
  },
  {
    text: 'veeeeeeery loooooong breadcrumb'
  },
  {
    text: 'long breadcrumb'
  },
  {
    link: '#/last-item',
    text: 'never ellipsis'
  }
]
<\/script>
<style scoped>
.icon {
  display: flex;
}
</style>
`,U={title:"Breadcrumbs",component:N,parameters:{docs:{source:{code:H}}}},L=s=>({components:{Comp:N},setup(){return{args:s}},template:'<Comp v-bind="args" />'}),p=L.bind({});var g,h,K;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(K=(h=p.parameters)==null?void 0:h.docs)==null?void 0:K.source}}};const X=["Breadcrumbs"];export{p as Breadcrumbs,X as __namedExportsOrder,U as default};
