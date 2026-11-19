import{d as V,u as s,v as f,V as j,k as a,l as v,m as r,Q as A,I as F,t as D,J as N,K as S,s as I,r as d,c as K,E as c,N as x}from"./vue.esm-bundler-wNF6-2fW.js";import{K as b}from"./KitButton-CNA1GrKR.js";import{_ as T}from"./ChevronDownIcon-dMK6cwah.js";import{a as z,_ as U}from"./InfoIcon-Mv_mc-HR.js";import{_ as J,a as O}from"./ErrorIcon-CcOA9YPC.js";import{_ as Q}from"./EditorCloseIcon-aMuF3bKr.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as H}from"./KitInput-DDfIBYQr.js";import{K as M}from"./KitFieldGroup-CpvzPD4B.js";import"./KitSpinner-D_AgCq8k.js";import"./IconWrapper-CCL1wCId.js";import"./KitTextField-xvdMhYYp.js";import"./fieldGroup-CvGAAVzd.js";import"./dom-kh-IIGlH.js";const P=["appearance","role"],R={class:"header"},X={class:"icon"},Y={class:"title"},Z=["expanded"],ee={class:"description"},ne={class:"actions"},ae=["onClick"],q=V({__name:"KitFlag",props:{title:{default:""},description:{default:""},actions:{default:()=>[]},appearance:{default:"default"},type:{default:"success"},leaveLeft:{type:Boolean,default:!1}},emits:["close"],setup(t,{emit:u}){const n=t,p=u,y=d(!0),g=K(()=>[n.appearance,n.type].some(o=>o==="error"||o==="warning")),l=d(!1),w=K(()=>{switch(n.type){case"info":return"#6554c0";case"error":return"#de350a";case"warning":return"#ffab00";case"success":return"#36b37e";default:return"#6554c0"}}),e=K(()=>{switch(n.appearance){case"info":return{name:n.appearance,primary:"#fff",secondary:"#42526E"};case"error":return{name:n.appearance,primary:"#fff",secondary:"#DE350B"};case"warning":return{name:n.appearance,primary:"",secondary:"#FFC400"};case"success":return{name:n.appearance,primary:"#fff",secondary:"#00875A"};default:return{name:n.type,primary:w.value,secondary:"#fff"}}});function i(){l.value=!l.value}function L(o){o.href&&window.open(o.href,"_blank"),o.handler&&o.handler()}return(o,_)=>(a(),s(j,{name:t.leaveLeft?"flag-left":"flag",appear:"",onAfterLeave:_[1]||(_[1]=m=>p("close"))},{default:f(()=>[y.value?(a(),v("div",{key:0,class:"kit-flag",appearance:t.appearance,role:g.value?"alert":"status"},[r("div",R,[r("div",X,[e.value.name==="success"?(a(),s(z,{key:0,"primary-color":e.value.primary,"secondary-color":e.value.secondary,class:"icon"},null,8,["primary-color","secondary-color"])):e.value.name==="info"?(a(),s(U,{key:1,"primary-color":e.value.primary,"secondary-color":e.value.secondary,class:"icon"},null,8,["primary-color","secondary-color"])):e.value.name==="warning"?(a(),s(J,{key:2,"primary-color":e.value.primary,"secondary-color":e.value.secondary,class:"icon"},null,8,["primary-color","secondary-color"])):e.value.name==="error"?(a(),s(O,{key:3,"primary-color":e.value.primary,"secondary-color":e.value.secondary,class:"icon"},null,8,["primary-color","secondary-color"])):(a(),s(A(e.value.name),{key:4,"primary-color":e.value.primary,"secondary-color":e.value.secondary,class:"icon"},null,8,["primary-color","secondary-color"]))]),r("span",Y,F(t.title),1),t.appearance!=="default"?(a(),s(T,{key:0,class:"chevron",size:"large",expanded:l.value,onClick:i},null,8,["expanded"])):(a(),s(Q,{key:1,class:"close",onClick:_[0]||(_[0]=m=>y.value=!1)}))]),D(o.$slots,"default",{},()=>[r("div",{class:"content",expanded:l.value},[r("div",ee,F(t.description),1),r("div",ne,[(a(!0),v(N,null,S(t.actions,m=>(a(),v("a",{key:m.content,class:"action",onClick:ie=>L(m)},F(m.content),9,ae))),128))])],8,Z)],!0)],8,P)):I("",!0)]),_:3},8,["name"]))}}),k=G(q,[["__scopeId","data-v-d568616d"]]);q.__docgenInfo={exportName:"default",displayName:"KitFlag",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"description",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"actions",required:!1,type:{name:"Array"},defaultValue:{func:!1,value:"() => []"}},{name:"appearance",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"success"'},{name:'"info"'},{name:'"error"'},{name:'"warning"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"type",required:!1,type:{name:"union",elements:[{name:'"success"'},{name:'"info"'},{name:'"error"'},{name:'"warning"'}]},defaultValue:{func:!1,value:"'success'"}},{name:"leaveLeft",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"close"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/Flag/KitFlag.vue"]};const te={class:"container"},oe={class:"content"},se={class:"buttons"},E=V({__name:"Flag.story",setup(t){const u=d("Welcome to the jungle"),n=d("We got fun and games. We got everything you want honey, we know the names."),p=[{content:"Show me",href:"http://google.com"},{content:"No thanks"}],y=["error","info","success","warning"],g=d(""),l=d(!0);return(w,e)=>(a(),v("div",te,[c(k,{class:"flag",title:u.value,description:n.value,actions:p},null,8,["title","description"]),c(k,{class:"flag",title:u.value,description:n.value,type:"info",actions:p},null,8,["title","description"]),l.value?(a(),s(k,{key:0,class:"flag",title:u.value,description:n.value,type:"info",actions:p,onClose:e[1]||(e[1]=i=>l.value=!1)},{default:f(()=>[r("div",oe,[c(M,{label:"Give us your best email address"},{default:f(()=>[c(H,{modelValue:g.value,"onUpdate:modelValue":e[0]||(e[0]=i=>g.value=i)},null,8,["modelValue"])]),_:1}),r("div",se,[c(b,null,{default:f(()=>[...e[2]||(e[2]=[x("Skip",-1)])]),_:1}),c(b,{appearance:"primary"},{default:f(()=>[...e[3]||(e[3]=[x(" Send ",-1)])]),_:1})])])]),_:1},8,["title","description"])):I("",!0),(a(),v(N,null,S(y,i=>c(k,{key:i,class:"flag",appearance:i,title:u.value,description:n.value,actions:p},null,8,["appearance","title","description"])),64))]))}}),W=G(E,[["__scopeId","data-v-dad7b3cb"]]);E.__docgenInfo={exportName:"default",displayName:"Flag.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Flag/Flag.story.vue"]};const re=`<template>
  <div class="container">
    <KitFlag class="flag" :title="title" :description="description" :actions="actions" />
    <KitFlag class="flag" :title="title" :description="description" type="info" :actions="actions" />
    <KitFlag
      v-if="show"
      class="flag"
      :title="title"
      :description="description"
      type="info"
      :actions="actions"
      @close="show = false">
      <div class="content">
        <KitFieldGroup label="Give us your best email address">
          <KitInput v-model="value" />
        </KitFieldGroup>
        <div class="buttons">
          <KitButton>Skip</KitButton>
          <KitButton appearance="primary"> Send </KitButton>
        </div>
      </div>
    </KitFlag>
    <KitFlag
      v-for="appearance in appearances"
      :key="appearance"
      class="flag"
      :appearance="appearance"
      :title="title"
      :description="description"
      :actions="actions" />
  </div>
</template>

<script setup lang="ts">
import KitButton from '@components/Button/KitButton.vue'
import { ref } from 'vue'
import KitFlag from '@components/Flag/KitFlag.vue'
import KitInput from '@components/Form/KitInput.vue'
import KitFieldGroup from '@components/Form/KitFieldGroup.vue'

const title = ref('Welcome to the jungle')
const description = ref('We got fun and games. We got everything you want honey, we know the names.')
const actions = [{ content: 'Show me', href: 'http://google.com' }, { content: 'No thanks' }]
const appearances = ['error', 'info', 'success', 'warning']
const value = ref('')
const show = ref(true)
<\/script>

<style scoped>
.flag {
  margin-bottom: 10px;
}

.container {
  position: fixed;
  right: 10px;
  top: 10px;
  z-index: 999;
}

.content {
  padding: 0px 24px 0px 40px;
}

.buttons {
  display: flex;
  margin-top: 20px;
  justify-content: flex-end;
}
</style>
`,we={title:"Flag",component:W,parameters:{docs:{source:{code:re}}}},le=t=>({components:{Comp:W},setup(){return{args:t}},template:'<Comp v-bind="args" />'}),h=le.bind({});var C,$,B;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(B=($=h.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};const xe=["Flag"];export{h as Flag,xe as __namedExportsOrder,we as default};
