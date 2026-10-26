import{d as S,j as i,k as n,A as s,F as d,G as m,r as k,q as u,f as r,t as y,E as f}from"./vue.esm-bundler-Bq7iw15p.js";import{_ as a,l as v}from"./KitIcon-DzjcMukR.js";import{K as g}from"./KitCopyToClipboard-JtkSG0w4.js";import{K as z}from"./KitSelect-BdrpqOSM.js";import{_ as w}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./KitButton-s-nB5WLS.js";import"./KitSpinner-C_FlB-Bt.js";import"./Tooltip-DPoj6qPg.js";import"./Popper-CqRkecYS.js";import"./KitTextField-CorFKCZO.js";import"./EditorCloseIcon-DEX8M97N.js";import"./IconWrapper-BpnstkGd.js";const T={style:{width:"400px"}},j={class:"grid-5"},A={style:{display:"flex","flex-direction":"column","align-items":"center"}},O={class:"grid-5"},V={style:{display:"flex","flex-direction":"column","align-items":"center"}},_=S({__name:"KitIcon.story",setup(p){const c=k(),h=u(()=>{const o=Object.keys(v.definitions.fas);return o.sort(),o}),K=u(()=>{const o=Object.keys(v.definitions.far);return o.sort(),o});return(o,t)=>(r(),i("div",null,[t[1]||(t[1]=n("h2",null,"Changing the size of the icon",-1)),n("div",null,[n("div",T,[s(z,{modelValue:c.value,"onUpdate:modelValue":t[0]||(t[0]=e=>c.value=e),options:["5em","5x","30px"],placeholder:"Select size"},null,8,["modelValue"])]),n("div",null,[s(a,{size:c.value,type:"trash"},null,8,["size"])])]),t[2]||(t[2]=n("h2",null,"Solid icons",-1)),n("div",j,[(r(!0),i(d,null,m(h.value,e=>(r(),i("div",{key:e,class:"box"},[s(g,{text:e},{default:y(()=>[n("div",A,[s(a,{type:e,class:"story-icon"},null,8,["type"]),n("span",null,f(e),1)])]),_:2},1032,["text"])]))),128))]),t[3]||(t[3]=n("h2",null,"Regular icons",-1)),n("div",O,[(r(!0),i(d,null,m(K.value,e=>(r(),i("div",{key:e,class:"box"},[s(g,{text:e},{default:y(()=>[n("div",V,[s(a,{title:e,type:e,class:"story-icon","icon-style":"regular"},null,8,["title","type"]),n("span",null,f(e),1)])]),_:2},1032,["text"])]))),128))])]))}}),I=w(_,[["__scopeId","data-v-775b288d"]]);_.__docgenInfo={exportName:"default",displayName:"KitIcon.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Icons/KitIcon.story.vue"]};const N=`<template>
  <div>
    <h2>Changing the size of the icon</h2>
    <div>
      <div style="width: 400px">
        <KitSelect v-model="size" :options="['5em', '5x', '30px']" placeholder="Select size" />
      </div>
      <div>
        <AwesomeIcon :size="size" type="trash" />
      </div>
    </div>
    <h2>Solid icons</h2>
    <div class="grid-5">
      <div v-for="icon in solidSupportedIcons" :key="icon" class="box">
        <KitCopyToClipboard :text="icon">
          <div style="display: flex; flex-direction: column; align-items: center">
            <AwesomeIcon :type="icon" class="story-icon" />
            <span>{{ icon }}</span>
          </div>
        </KitCopyToClipboard>
      </div>
    </div>
    <h2>Regular icons</h2>
    <div class="grid-5">
      <div v-for="icon in regularSupportedIcons" :key="icon" class="box">
        <KitCopyToClipboard :text="icon">
          <div style="display: flex; flex-direction: column; align-items: center">
            <AwesomeIcon :title="icon" :type="icon" class="story-icon" icon-style="regular" />
            <span>{{ icon }}</span>
          </div>
        </KitCopyToClipboard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { library } from '@fortawesome/fontawesome-svg-core'
import KitCopyToClipboard from '@components/CopyToClipboard/KitCopyToClipboard.vue'
import { computed, ref } from 'vue'
import AwesomeIcon from '../../src/components/Icon/KitIcon.vue'
import KitSelect from '../../src/components/Select/KitSelect.vue'

const size = ref()

const solidSupportedIcons = computed(() => {
  const list = Object.keys(library.definitions.fas)
  list.sort()
  return list
})

const regularSupportedIcons = computed(() => {
  const list = Object.keys(library.definitions.far)
  list.sort()
  return list
})
<\/script>
<style scoped>
.story-icon {
  margin: 5px;
}

.grid-5 {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}

.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
}
</style>
`,P={title:"Icons",component:I,parameters:{docs:{source:{code:N}}}},B=p=>({components:{Comp:I},setup(){return{args:p}},template:'<Comp v-bind="args" />'}),l=B.bind({});var x,b,C;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(C=(b=l.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const Q=["KitIcon"];export{l as KitIcon,Q as __namedExportsOrder,P as default};
