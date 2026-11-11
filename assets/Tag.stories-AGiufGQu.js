import{d,f as a,j as r,s as f,t as _,L as h,E as y,O as T,F as k,G as b,A as s}from"./vue.esm-bundler-Bq7iw15p.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";const x=["color"],p=d({__name:"KitTag",props:{label:{default:""},color:{default:""},tag:{default:"span"},link:{}},setup(e){return(o,m)=>(a(),r("div",{class:"kit-tag",color:e.color},[(a(),f(T(e.tag),{class:"text",href:e.link},{default:_(()=>[h(y(e.label),1)]),_:1},8,["href"]))],8,x))}}),i=v(p,[["__scopeId","data-v-f25d69c0"]]);p.__docgenInfo={exportName:"default",displayName:"KitTag",description:"",tags:{},props:[{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"color",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"tag",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'span'"}},{name:"link",required:!1,type:{name:"string"}}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/Tag/KitTag.vue"]};const C={class:"tags"},l=d({__name:"Tag.story",setup(e){const o=["standard","green","blue","red","purple","grey","teal","yellow","green-light","blue-light","red-light","purple-light","grey-light","teal-light","yellow-light"];return(m,N)=>(a(),r("div",C,[(a(),r(k,null,b(o,n=>s(i,{key:n,label:n,color:n},null,8,["label","color"])),64)),s(i,{color:"standard",label:"link",link:"#",tag:"a"})]))}});l.__docgenInfo={exportName:"default",displayName:"Tag.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Tag/Tag.story.vue"]};const K=`<template>
  <div class="tags">
    <KitTag v-for="color in colors" :key="color" :label="color" :color="color" />
    <KitTag color="standard" label="link" link="#" tag="a" />
  </div>
</template>

<script setup lang="ts">
import KitTag from '@components/Tag/KitTag.vue'

const colors = [
  'standard',
  'green',
  'blue',
  'red',
  'purple',
  'grey',
  'teal',
  'yellow',
  'green-light',
  'blue-light',
  'red-light',
  'purple-light',
  'grey-light',
  'teal-light',
  'yellow-light'
]

<\/script>
`,F={title:"Tag",component:l,parameters:{docs:{source:{code:K}}}},w=e=>({components:{Comp:l},setup(){return{args:e}},template:'<Comp v-bind="args" />'}),t=w.bind({});var c,g,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(u=(g=t.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const B=["Tag"];export{t as Tag,B as __namedExportsOrder,F as default};
