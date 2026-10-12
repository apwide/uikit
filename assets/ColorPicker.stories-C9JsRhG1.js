import{d as p,f as n,j as d,k as i,s as x,m as S,l as u,q as N,u as q,A as s,t as m,F as w,G as D,z as I,r as f,L as y,E as g}from"./vue.esm-bundler-bSWh6tln.js";import{P as A}from"./Popup-CYbvf_Tg.js";import{_ as T}from"./KitIcon-IXZtQfsY.js";import{_ as h}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{K as F}from"./KitFieldGroup-CtYmuqBU.js";import"./Popper-D7RkQmME.js";const $=["data-cy-color"],G=p({__name:"KitColorCard",props:{color:{default:"#000000"},selected:{default:"#000000"}},emits:["color-selected"],setup(e,{emit:o}){const l=e,r=o,t=N(()=>({backgroundColor:l.color}));function a(){r("color-selected",l.color)}return(k,v)=>(n(),d("div",{class:"kit-color-card__wrapper",onClick:a},[i("div",{class:"kit-color-card","data-cy-color":e.color,style:u(t.value)},[e.selected===e.color?(n(),x(T,{key:0,type:"check",style:{color:"white"}})):S("",!0)],12,$)]))}}),M=h(G,[["__scopeId","data-v-bcda8952"]]);G.__docgenInfo={exportName:"default",displayName:"KitColorCard",description:"",tags:{},props:[{name:"color",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'#000000'"}},{name:"selected",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'#000000'"}}],events:[{name:"color-selected",type:{names:["string"]}}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/ColorPicker/KitColorCard.vue"]};const E=p({__name:"KitColorPicker",props:I({colors:{default:()=>["#000","#0052CC","#172B4D","#FF5630","#FFAB00","#36B37E","#00B8D9","#6554C0"]},editable:{type:Boolean,default:!0},columns:{default:8}},{modelValue:{default:"#DFE1E1"},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const o=e,l=q(e,"modelValue"),r=f(!1),t=f(),a=N(()=>({backgroundColor:l.value}));function k(){o.editable&&(r.value=!r.value)}function v(b){l.value=b,r.value=!1}return(b,O)=>(n(),d("div",{ref_key:"containerRef",ref:t,class:"kit-color-picker"},[i("button",{type:"button",style:u({cursor:e.editable?"pointer":"default"}),onClick:k},[i("div",{class:"kit-color-picker__color",style:u(a.value)},null,4)],4),s(A,{"is-open":r.value,offset:[0,8],"target-element":t.value,placement:"bottom-start"},{default:m(()=>[i("div",{class:"kit-color-picker__content",style:u({gridTemplateColumns:`repeat(${e.columns}, 1fr)`})},[(n(!0),d(w,null,D(e.colors,_=>(n(),x(M,{key:_,color:_,selected:l.value,onColorSelected:v},null,8,["color","selected"]))),128))],4)]),_:1},8,["is-open","target-element"])],512))}}),P=h(E,[["__scopeId","data-v-fd60a232"]]);E.__docgenInfo={exportName:"default",displayName:"KitColorPicker",description:"",tags:{},props:[{name:"colors",required:!1,type:{name:"Array",elements:[{name:"string"}]},defaultValue:{func:!1,value:"() => ['#000', '#0052CC', '#172B4D', '#FF5630', '#FFAB00', '#36B37E', '#00B8D9', '#6554C0']"}},{name:"editable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"columns",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"8"}}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/ColorPicker/KitColorPicker.vue"]};const C=p({__name:"ColorPicker.story",setup(e){const o=f("#0052CC"),l=["#388bff","#42b2d7","#2abb7f","#82b536","#cf9f02","#f38a3f","#f15b50","#da62ac","#8f7ee7","#0055cc","#206a83","#216e4e","#4c6b1f","#7f5f01","#a54800","#ae2e24","#943d73","#5e4db2"];return(r,t)=>(n(),d("div",null,[s(F,{label:"Select color"},{default:m(()=>[s(P,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=a=>o.value=a)},null,8,["modelValue"]),y(" selected: "+g(o.value),1)]),_:1}),s(F,{label:"Custom color list"},{default:m(()=>[s(P,{modelValue:o.value,"onUpdate:modelValue":t[1]||(t[1]=a=>o.value=a),colors:l,columns:9},null,8,["modelValue"]),y(" selected: "+g(o.value),1)]),_:1})]))}});C.__docgenInfo={exportName:"default",displayName:"ColorPicker.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/ColorPicker/ColorPicker.story.vue"]};const z=`<template>
  <div>
    <KitFieldGroup label="Select color">
      <KitColorPicker v-model="color" />
      selected: {{ color }}
    </KitFieldGroup>
    <KitFieldGroup label="Custom color list">
      <KitColorPicker v-model="color" :colors="customColors" :columns="9" />
      selected: {{ color }}
    </KitFieldGroup>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import KitColorPicker from '@components/ColorPicker/KitColorPicker.vue'
import KitFieldGroup from '@components/Form/KitFieldGroup.vue'

const color = ref('#0052CC')

const customColors = [
  '#388bff',
  '#42b2d7',
  '#2abb7f',
  '#82b536',
  '#cf9f02',
  '#f38a3f',
  '#f15b50',
  '#da62ac',
  '#8f7ee7',
  '#0055cc',
  '#206a83',
  '#216e4e',
  '#4c6b1f',
  '#7f5f01',
  '#a54800',
  '#ae2e24',
  '#943d73',
  '#5e4db2'
]
<\/script>
`,W={title:"ColorPicker",component:C,parameters:{docs:{source:{code:z}}}},L=e=>({components:{Comp:C},setup(){return{args:e}},template:'<Comp v-bind="args" />'}),c=L.bind({});var K,V,B;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(B=(V=c.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};const X=["ColorPicker"];export{c as ColorPicker,X as __namedExportsOrder,W as default};
