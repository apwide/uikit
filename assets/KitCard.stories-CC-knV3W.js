import{d as v,j as C,p as K,f as c,k as n,A as r,t as a,L as s}from"./vue.esm-bundler-Bq7iw15p.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";const g=["elevation"],f=v({__name:"KitCard",props:{elevation:{default:1}},setup(t){return(d,e)=>(c(),C("div",{class:"kit-card",elevation:t.elevation},[K(d.$slots,"default",{},void 0,!0)],8,g))}}),i=_(f,[["__scopeId","data-v-3459186a"]]);f.__docgenInfo={exportName:"default",displayName:"KitCard",description:"",tags:{},props:[{name:"elevation",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]},defaultValue:{func:!1,value:"1"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/Card/KitCard.vue"]};const l=v({__name:"KitCard.story",setup(t){return(d,e)=>(c(),C("div",null,[e[3]||(e[3]=n("h2",null,"Elevation 1",-1)),r(i,{elevation:1},{default:a(()=>[...e[0]||(e[0]=[s(" Hello world ",-1)])]),_:1}),e[4]||(e[4]=n("h2",null,"Elevation 2",-1)),r(i,{elevation:2},{default:a(()=>[...e[1]||(e[1]=[s(" Hello world ",-1)])]),_:1}),e[5]||(e[5]=n("h2",null,"Elevation 3",-1)),r(i,{elevation:3},{default:a(()=>[...e[2]||(e[2]=[s(" Hello world ",-1)])]),_:1})]))}});l.__docgenInfo={exportName:"default",displayName:"KitCard.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Card/KitCard.story.vue"]};const k=`<template>
  <div>
    <h2>Elevation 1</h2>
    <KitCard :elevation="1"> Hello world </KitCard>

    <h2>Elevation 2</h2>
    <KitCard :elevation="2"> Hello world </KitCard>

    <h2>Elevation 3</h2>
    <KitCard :elevation="3"> Hello world </KitCard>
  </div>
</template>
<script setup lang="ts">
import KitCard from '../../src/components/Card/KitCard.vue'
<\/script>
`,N={title:"Card",component:l,parameters:{docs:{source:{code:k}}}},w=t=>({components:{Comp:l},setup(){return{args:t}},template:'<Comp v-bind="args" />'}),o=w.bind({});var p,u,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const y=["KitCard"];export{o as KitCard,y as __namedExportsOrder,N as default};
