import{d as c,f as d,j as m,A as u,t as _,k as a,s as x}from"./vue.esm-bundler-Bq7iw15p.js";import{_ as L}from"./ContentLoader-DGb7uzNq.js";const p=c({__name:"AvatarDetailsLoader",setup(t){return(l,r)=>(d(),m("div",null,[u(L,{"view-box":"0 0 340 65",height:"65px",width:"340px"},{default:_(()=>[...r[0]||(r[0]=[a("rect",{x:"0",y:"0",rx:"5",ry:"5",width:"60",height:"60"},null,-1),a("rect",{x:"75",y:"0",rx:"5",ry:"5",width:"150",height:"28"},null,-1),a("rect",{x:"75",y:"34",rx:"5",ry:"5",width:"80",height:"16"},null,-1)])]),_:1})]))}});p.__docgenInfo={exportName:"default",displayName:"AvatarDetailsLoader",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/src/components/ContentLoader/AvatarDetailsLoader.vue"]};const o=c({__name:"DetailsLoader.story",setup(t){return(l,r)=>(d(),x(p))}});o.__docgenInfo={exportName:"default",displayName:"DetailsLoader.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/ContentLoader/DetailsLoader.story.vue"]};const h=`<template>
  <AvatarDetailsLoader />
</template>

<script setup lang="ts">
import AvatarDetailsLoader from '@/components/ContentLoader/AvatarDetailsLoader.vue'
<\/script>
`,D={title:"ContentLoader",component:o,parameters:{docs:{source:{code:h}}}},f=t=>({components:{Comp:o},setup(){return{args:t}},template:'<Comp v-bind="args" />'}),e=f.bind({});var s,n,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const y=["DetailsLoader"];export{e as DetailsLoader,y as __namedExportsOrder,D as default};
