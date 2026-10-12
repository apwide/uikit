import{d as V,s,t as y,T as W,f as n,j as v,k as r,O as j,E as K,p as A,F as N,G as S,m as G,r as m,q as w,A as c,L as x}from"./vue.esm-bundler-bSWh6tln.js";import{K as b}from"./KitButton-DXemt05q.js";import{_ as T}from"./ChevronDownIcon-BpZDYj0q.js";import{a as D,_ as z}from"./InfoIcon-CvXOTOjS.js";import{_ as O,a as U}from"./ErrorIcon-DMkoEFcw.js";import{_ as H}from"./EditorCloseIcon-DqsKPtqI.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as J}from"./KitInput-BLSabwWp.js";import{K as M}from"./KitFieldGroup-CtYmuqBU.js";import"./KitSpinner-BNue20UW.js";import"./IconWrapper-DdkEMErG.js";import"./KitTextField-DL9zzDIB.js";const P=["appearance"],Q={class:"header"},R={class:"icon"},X={class:"title"},Y=["expanded"],Z={class:"description"},ee={class:"actions"},ne=["onClick"],I=V({__name:"KitFlag",props:{title:{default:""},description:{default:""},actions:{default:()=>[]},appearance:{default:"default"},type:{default:"success"},leaveLeft:{type:Boolean,default:!1}},emits:["close"],setup(t,{emit:u}){const a=t,p=u,g=m(!0),l=m(!1),_=w(()=>{switch(a.type){case"info":return"#6554c0";case"error":return"#de350a";case"warning":return"#ffab00";case"success":return"#36b37e";default:return"#6554c0"}}),e=w(()=>{switch(a.appearance){case"info":return{name:a.appearance,primary:"#fff",secondary:"#42526E"};case"error":return{name:a.appearance,primary:"#fff",secondary:"#DE350B"};case"warning":return{name:a.appearance,primary:"",secondary:"#FFC400"};case"success":return{name:a.appearance,primary:"#fff",secondary:"#00875A"};default:return{name:a.type,primary:_.value,secondary:"#fff"}}});function o(){l.value=!l.value}function i(d){d.href&&window.open(d.href,"_blank"),d.handler&&d.handler()}return(d,k)=>(n(),s(W,{name:t.leaveLeft?"flag-left":"flag",appear:"",onAfterLeave:k[1]||(k[1]=f=>p("close"))},{default:y(()=>[g.value?(n(),v("div",{key:0,class:"kit-flag",appearance:t.appearance},[r("div",Q,[r("div",R,[e.value.name==="success"?(n(),s(D,{key:0,"primary-color":e.value.primary,"secondary-color":e.value.secondary,class:"icon"},null,8,["primary-color","secondary-color"])):e.value.name==="info"?(n(),s(z,{key:1,"primary-color":e.value.primary,"secondary-color":e.value.secondary,class:"icon"},null,8,["primary-color","secondary-color"])):e.value.name==="warning"?(n(),s(O,{key:2,"primary-color":e.value.primary,"secondary-color":e.value.secondary,class:"icon"},null,8,["primary-color","secondary-color"])):e.value.name==="error"?(n(),s(U,{key:3,"primary-color":e.value.primary,"secondary-color":e.value.secondary,class:"icon"},null,8,["primary-color","secondary-color"])):(n(),s(j(e.value.name),{key:4,"primary-color":e.value.primary,"secondary-color":e.value.secondary,class:"icon"},null,8,["primary-color","secondary-color"]))]),r("span",X,K(t.title),1),t.appearance!=="default"?(n(),s(T,{key:0,class:"chevron",size:"large",expanded:l.value,onClick:o},null,8,["expanded"])):(n(),s(H,{key:1,class:"close",onClick:k[0]||(k[0]=f=>g.value=!1)}))]),A(d.$slots,"default",{},()=>[r("div",{class:"content",expanded:l.value},[r("div",Z,K(t.description),1),r("div",ee,[(n(!0),v(N,null,S(t.actions,f=>(n(),v("a",{key:f.content,class:"action",onClick:le=>i(f)},K(f.content),9,ne))),128))])],8,Y)],!0)],8,P)):G("",!0)]),_:3},8,["name"]))}}),F=q(I,[["__scopeId","data-v-38ca13dd"]]);I.__docgenInfo={exportName:"default",displayName:"KitFlag",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"description",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"actions",required:!1,type:{name:"Array"},defaultValue:{func:!1,value:"() => []"}},{name:"appearance",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"success"'},{name:'"info"'},{name:'"error"'},{name:'"warning"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"type",required:!1,type:{name:"union",elements:[{name:'"success"'},{name:'"info"'},{name:'"error"'},{name:'"warning"'}]},defaultValue:{func:!1,value:"'success'"}},{name:"leaveLeft",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"close"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/Flag/KitFlag.vue"]};const ae={class:"container"},te={class:"content"},oe={class:"buttons"},E=V({__name:"Flag.story",setup(t){const u=m("Welcome to the jungle"),a=m("We got fun and games. We got everything you want honey, we know the names."),p=[{content:"Show me",href:"http://google.com"},{content:"No thanks"}],g=["error","info","success","warning"],l=m(""),_=m(!0);return(e,o)=>(n(),v("div",ae,[c(F,{class:"flag",title:u.value,description:a.value,actions:p},null,8,["title","description"]),c(F,{class:"flag",title:u.value,description:a.value,type:"info",actions:p},null,8,["title","description"]),_.value?(n(),s(F,{key:0,class:"flag",title:u.value,description:a.value,type:"info",actions:p,onClose:o[1]||(o[1]=i=>_.value=!1)},{default:y(()=>[r("div",te,[c(M,{label:"Give us your best email address"},{default:y(()=>[c(J,{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=i=>l.value=i)},null,8,["modelValue"])]),_:1}),r("div",oe,[c(b,null,{default:y(()=>[...o[2]||(o[2]=[x("Skip",-1)])]),_:1}),c(b,{appearance:"primary"},{default:y(()=>[...o[3]||(o[3]=[x(" Send ",-1)])]),_:1})])])]),_:1},8,["title","description"])):G("",!0),(n(),v(N,null,S(g,i=>c(F,{key:i,class:"flag",appearance:i,title:u.value,description:a.value,actions:p},null,8,["appearance","title","description"])),64))]))}}),L=q(E,[["__scopeId","data-v-dad7b3cb"]]);E.__docgenInfo={exportName:"default",displayName:"Flag.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Flag/Flag.story.vue"]};const se=`<template>
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
`,Fe={title:"Flag",component:L,parameters:{docs:{source:{code:se}}}},re=t=>({components:{Comp:L},setup(){return{args:t}},template:'<Comp v-bind="args" />'}),h=re.bind({});var C,$,B;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(B=($=h.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};const he=["Flag"];export{h as Flag,he as __namedExportsOrder,Fe as default};
