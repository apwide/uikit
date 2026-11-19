import{d as v,l as i,m as t,J as g,K as L,E as s,v as r,k as l,N as o,I as u}from"./vue.esm-bundler-wNF6-2fW.js";import{K as a}from"./KitLozenge-a_onoOoa.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const y={style:{all:"unset",cursor:"pointer"}},m=v({__name:"Lozenges.story",setup(d){const c=["default","success","yellow","removed","inprogress","new","moved","brown"];return(x,e)=>(l(),i("div",null,[e[4]||(e[4]=t("h3",null,"Normal",-1)),(l(),i(g,null,L(c,n=>t("p",{key:`${n}-std`},[s(a,{appearance:n},{default:r(()=>[o(u(n),1)]),_:2},1032,["appearance"]),e[0]||(e[0]=o("   ",-1)),t("button",y,[s(a,{appearance:n},{default:r(()=>[o(u(n)+" (button) ",1)]),_:2},1032,["appearance"])]),e[1]||(e[1]=o("   with some text ",-1))])),64)),e[5]||(e[5]=t("h3",null,"Subtle",-1)),(l(),i(g,null,L(c,n=>t("p",{key:n},[s(a,{appearance:n,subtle:""},{default:r(()=>[o(u(n),1)]),_:2},1032,["appearance"]),e[2]||(e[2]=o(" with some text ",-1))])),64)),e[6]||(e[6]=t("h3",null,"Long text",-1)),t("p",null,[s(a,null,{default:r(()=>[...e[3]||(e[3]=[o(" Lorem ipsum dolor sit amet consectetur adipisicing elit. ",-1)])]),_:1})])]))}});m.__docgenInfo={exportName:"default",displayName:"Lozenges.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Lozenge/Lozenges.story.vue"]};const K=`<template>
  <div>
    <h3>Normal</h3>
    <p v-for="appearance in appearances" :key="\`\${appearance}-std\`">
      <KitLozenge :appearance="appearance">
        {{ appearance }}
      </KitLozenge>
      &nbsp;
      <button style="all: unset; cursor: pointer">
        <KitLozenge :appearance="appearance"> {{ appearance }} (button) </KitLozenge>
      </button>
      &nbsp;
      with some text
    </p>
    <h3>Subtle</h3>
    <p v-for="appearance in appearances" :key="appearance">
      <KitLozenge :appearance="appearance" subtle> {{ appearance }} </KitLozenge> with some text
    </p>
    <h3>Long text</h3>
    <p>
      <KitLozenge> Lorem ipsum dolor sit amet consectetur adipisicing elit. </KitLozenge>
    </p>
  </div>
</template>

<script setup lang="ts">
import KitLozenge from '@components/Lozenge/KitLozenge.vue'

const appearances = ['default', 'success', 'yellow', 'removed', 'inprogress', 'new', 'moved', 'brown']
<\/script>
`,_={title:"Lozenge",component:m,parameters:{docs:{source:{code:K}}}},w=d=>({components:{Comp:m},setup(){return{args:d}},template:'<Comp v-bind="args" />'}),p=w.bind({});var z,b,f;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(f=(b=p.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const S=["Lozenges"];export{p as Lozenges,S as __namedExportsOrder,_ as default};
