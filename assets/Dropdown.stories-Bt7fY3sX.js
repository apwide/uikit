import{d as G,u as N,f as s,s as S,t,k as i,p as B,L as e,m as E,z as P,q as L,j as f,E as b,A as n,r as v}from"./vue.esm-bundler-bSWh6tln.js";import{K as r}from"./KitDropdownGroup-B0kJtg1w.js";import{K as d}from"./KitDropdownItem-DY0xHaJw.js";import{K as J}from"./KitCheckbox-PGmgYjGS.js";import{K as M}from"./KitButton-DXemt05q.js";import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{K as m}from"./KitDropdown-BZzWVijU.js";import{K as $}from"./KitIconButton-Bak3xkMk.js";import{_ as O}from"./KitIcon-IXZtQfsY.js";import"./IconWrapper-DdkEMErG.js";import"./KitSpinner-BNue20UW.js";import"./ChevronDownIcon-BpZDYj0q.js";import"./Popup-CYbvf_Tg.js";import"./Popper-D7RkQmME.js";const c={class:"label-text"},A=G({__name:"KitDropdownCheckboxItem",props:P({value:{default:void 0},showOnlyButton:{type:Boolean,default:!0}},{modelValue:{type:[Boolean,Array],required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(u){const a=u,p=N(u,"modelValue"),w=L(()=>Array.isArray(p.value)&&!!a.value);function k(){p.value=[a.value]}return(o,l)=>(s(),S(J,{modelValue:p.value,"onUpdate:modelValue":l[0]||(l[0]=I=>p.value=I),class:"kit-dropdown-checkbox-item",value:u.value},{default:t(()=>[i("span",c,[B(o.$slots,"default",{},void 0,!0)]),w.value&&u.showOnlyButton?(s(),S(M,{key:0,class:"only-button",appearance:"subtle",spacing:"none",onClick:k},{default:t(()=>[...l[1]||(l[1]=[e(" only ",-1)])]),_:1})):E("",!0)]),_:3},8,["modelValue","value"]))}}),D=g(A,[["__scopeId","data-v-a213da83"]]);A.__docgenInfo={exportName:"default",displayName:"KitDropdownCheckboxItem",description:"",tags:{},props:[{name:"value",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"showOnlyButton",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/Dropdown/KitDropdownCheckboxItem.vue"]};const V={},q={class:"kit-dropdown-separator"};function z(u,a){return s(),f("div",q)}const T=g(V,[["render",z],["__scopeId","data-v-d8ac97e4"]]);V.__docgenInfo={displayName:"KitDropdownSeparator",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/src/components/Dropdown/KitDropdownSeparator.vue"]};const W={style:{width:"500px"}},j={class:"custom-trigger"},H=["onClick"],Q=["onClick"],U=G({__name:"Dropdown.story",setup(u){const a=v("second"),p=v(["second"]),w=v(!1);return(k,o)=>(s(),f("div",null,[o[65]||(o[65]=i("h3",null,"Simple dropdown",-1)),i("b",null,"selected value: "+b(a.value),1),i("p",null,[n(m,{"data-cy":"simple-dropdown",label:"Drop down menu"},{default:t(()=>[n(d,{selected:a.value==="first","data-cy":"simple-dropdown-item",onClick:o[0]||(o[0]=l=>a.value="first")},{default:t(()=>[...o[6]||(o[6]=[e(" First item ",-1)])]),_:1},8,["selected"]),n(d,{selected:a.value==="second",onClick:o[1]||(o[1]=l=>a.value="second")},{default:t(()=>[...o[7]||(o[7]=[e("Second item",-1)])]),_:1},8,["selected"]),n(d,{disabled:""},{default:t(()=>[...o[8]||(o[8]=[e(" Lorem ipsum dolor sit amet consectetur adipisicing elit ",-1)])]),_:1})]),_:1})]),o[66]||(o[66]=i("h3",null,"Full width mode",-1)),i("p",W,[n(m,{"data-cy":"full-width-dropdown",label:"Drop down menu","full-width-trigger":""},{default:t(()=>[n(d,{"data-cy":"full-wdith-dropdown-item"},{default:t(()=>[...o[9]||(o[9]=[e(" First item ",-1)])]),_:1}),n(d,null,{default:t(()=>[...o[10]||(o[10]=[e("Second item",-1)])]),_:1}),n(d,null,{default:t(()=>[...o[11]||(o[11]=[e("Lorem ipsum dolor sit amet consectetur adipisicing elit",-1)])]),_:1})]),_:1})]),o[67]||(o[67]=i("h3",null,"Grouped items",-1)),i("p",null,[n(m,{label:"Drop down menu"},{default:t(()=>[n(r,{label:"Europe"},{default:t(()=>[n(d,null,{default:t(()=>[...o[12]||(o[12]=[e("Poland",-1)])]),_:1}),n(d,null,{default:t(()=>[...o[13]||(o[13]=[e("Germany",-1)])]),_:1}),n(d,{selected:""},{default:t(()=>[...o[14]||(o[14]=[e("France (Selected)",-1)])]),_:1}),n(d,null,{default:t(()=>[...o[15]||(o[15]=[e("United Kingdom",-1)])]),_:1}),n(d,null,{default:t(()=>[...o[16]||(o[16]=[e("Spain",-1)])]),_:1})]),_:1}),n(r,{label:"North America"},{actions:t(()=>[n($,{title:"Settings",spacing:"compact"},{default:t(()=>[n(O,{type:"cog"})]),_:1})]),default:t(()=>[n(d,null,{default:t(()=>[...o[17]||(o[17]=[e("Canada",-1)])]),_:1}),n(d,null,{default:t(()=>[...o[18]||(o[18]=[e("United States of America",-1)])]),_:1})]),_:1}),n(T),n(r,{label:"Asia"},{default:t(()=>[n(d,null,{default:t(()=>[...o[19]||(o[19]=[e("China",-1)])]),_:1}),n(d,null,{default:t(()=>[...o[20]||(o[20]=[e("Japan",-1)])]),_:1}),n(d,null,{default:t(()=>[...o[21]||(o[21]=[e("India",-1)])]),_:1})]),_:1})]),_:1})]),o[68]||(o[68]=i("h3",null,"Custom trigger",-1)),i("p",null,[n(m,{label:"Drop down menu"},{trigger:t(({toggle:l,isOpen:I})=>[i("div",j,[I?(s(),f("span",{key:0,onClick:l},"💥",8,H)):(s(),f("span",{key:1,onClick:l},"🎁",8,Q))])]),default:t(()=>[n(d,null,{default:t(()=>[...o[22]||(o[22]=[e("First item",-1)])]),_:1}),n(d,null,{default:t(()=>[...o[23]||(o[23]=[e("Second item",-1)])]),_:1}),n(d,null,{default:t(()=>[...o[24]||(o[24]=[e("Lorem ipsum dolor sit amet consectetur adipisicing elit",-1)])]),_:1})]),_:1})]),i("h3",null,"Dropdown with checkboxes (selected: "+b(p.value)+")",1),i("p",null,[n(m,{label:"With checkboxes","close-on-click":!1},{default:t(()=>[n(D,{modelValue:p.value,"onUpdate:modelValue":o[2]||(o[2]=l=>p.value=l),value:"first"},{default:t(()=>[...o[25]||(o[25]=[e(" First item ",-1)])]),_:1},8,["modelValue"]),n(D,{modelValue:p.value,"onUpdate:modelValue":o[3]||(o[3]=l=>p.value=l),value:"second"},{default:t(()=>[...o[26]||(o[26]=[e(" Second item ",-1)])]),_:1},8,["modelValue"]),n(D,{modelValue:p.value,"onUpdate:modelValue":o[4]||(o[4]=l=>p.value=l),value:"third"},{default:t(()=>[...o[27]||(o[27]=[e(" Lorem ipsum dolor sit amet consectetur adipisicing elit ",-1)])]),_:1},8,["modelValue"])]),_:1})]),i("h3",null,"Mixed (value: "+b(w.value)+")",1),i("p",null,[n(m,{label:"Mixed values","close-on-click":!1},{default:t(()=>[n(r,{label:"Europe"},{default:t(()=>[n(d,null,{default:t(()=>[...o[28]||(o[28]=[e("Poland",-1)])]),_:1}),n(d,null,{default:t(()=>[...o[29]||(o[29]=[e("Germany",-1)])]),_:1}),n(d,null,{default:t(()=>[...o[30]||(o[30]=[e("France",-1)])]),_:1}),n(d,null,{default:t(()=>[...o[31]||(o[31]=[e("United Kingdom",-1)])]),_:1}),n(d,null,{default:t(()=>[...o[32]||(o[32]=[e("Spain",-1)])]),_:1})]),_:1}),n(r,{label:"North America"},{default:t(()=>[n(D,{modelValue:w.value,"onUpdate:modelValue":o[5]||(o[5]=l=>w.value=l)},{default:t(()=>[...o[33]||(o[33]=[e(" Some checkbox ",-1)])]),_:1},8,["modelValue"]),n(d,null,{default:t(()=>[...o[34]||(o[34]=[e("United States of America",-1)])]),_:1})]),_:1})]),_:1})]),o[69]||(o[69]=i("h3",null,"Scrolled items",-1)),i("p",null,[n(m,{label:"Drop down menu"},{default:t(()=>[n(r,{label:"Europe"},{default:t(()=>[n(d,null,{default:t(()=>[...o[35]||(o[35]=[e("Poland",-1)])]),_:1}),n(d,null,{default:t(()=>[...o[36]||(o[36]=[e("Germany",-1)])]),_:1}),n(d,null,{default:t(()=>[...o[37]||(o[37]=[e("France",-1)])]),_:1}),n(d,null,{default:t(()=>[...o[38]||(o[38]=[e("United Kingdom",-1)])]),_:1}),n(d,null,{default:t(()=>[...o[39]||(o[39]=[e("Spain",-1)])]),_:1})]),_:1}),n(r,{label:"North America"},{default:t(()=>[n(d,null,{default:t(()=>[...o[40]||(o[40]=[e("Canada",-1)])]),_:1}),n(d,null,{default:t(()=>[...o[41]||(o[41]=[e("United States of America",-1)])]),_:1})]),_:1}),n(r,{label:"Asia"},{default:t(()=>[n(d,null,{default:t(()=>[...o[42]||(o[42]=[e("China",-1)])]),_:1}),n(d,null,{default:t(()=>[...o[43]||(o[43]=[e("Japan",-1)])]),_:1}),n(d,null,{default:t(()=>[...o[44]||(o[44]=[e("India",-1)])]),_:1})]),_:1}),n(r,{label:"Europe"},{default:t(()=>[n(d,null,{default:t(()=>[...o[45]||(o[45]=[e("Poland",-1)])]),_:1}),n(d,null,{default:t(()=>[...o[46]||(o[46]=[e("Germany",-1)])]),_:1}),n(d,null,{default:t(()=>[...o[47]||(o[47]=[e("France",-1)])]),_:1}),n(d,null,{default:t(()=>[...o[48]||(o[48]=[e("United Kingdom",-1)])]),_:1}),n(d,null,{default:t(()=>[...o[49]||(o[49]=[e("Spain",-1)])]),_:1})]),_:1}),n(r,{label:"North America"},{default:t(()=>[n(d,null,{default:t(()=>[...o[50]||(o[50]=[e("Canada",-1)])]),_:1}),n(d,null,{default:t(()=>[...o[51]||(o[51]=[e("United States of America",-1)])]),_:1})]),_:1}),n(r,{label:"Asia"},{default:t(()=>[n(d,null,{default:t(()=>[...o[52]||(o[52]=[e("China",-1)])]),_:1}),n(d,null,{default:t(()=>[...o[53]||(o[53]=[e("Japan",-1)])]),_:1}),n(d,null,{default:t(()=>[...o[54]||(o[54]=[e("India",-1)])]),_:1})]),_:1}),n(r,{label:"Europe"},{default:t(()=>[n(d,null,{default:t(()=>[...o[55]||(o[55]=[e("Poland",-1)])]),_:1}),n(d,null,{default:t(()=>[...o[56]||(o[56]=[e("Germany",-1)])]),_:1}),n(d,null,{default:t(()=>[...o[57]||(o[57]=[e("France",-1)])]),_:1}),n(d,null,{default:t(()=>[...o[58]||(o[58]=[e("United Kingdom",-1)])]),_:1}),n(d,null,{default:t(()=>[...o[59]||(o[59]=[e("Spain",-1)])]),_:1})]),_:1}),n(r,{label:"North America"},{default:t(()=>[n(d,null,{default:t(()=>[...o[60]||(o[60]=[e("Canada",-1)])]),_:1}),n(d,null,{default:t(()=>[...o[61]||(o[61]=[e("United States of America",-1)])]),_:1})]),_:1}),n(r,{label:"Asia"},{default:t(()=>[n(d,null,{default:t(()=>[...o[62]||(o[62]=[e("China",-1)])]),_:1}),n(d,null,{default:t(()=>[...o[63]||(o[63]=[e("Japan",-1)])]),_:1}),n(d,null,{default:t(()=>[...o[64]||(o[64]=[e("India",-1)])]),_:1})]),_:1})]),_:1})])]))}}),F=g(U,[["__scopeId","data-v-1d39cb66"]]);U.__docgenInfo={exportName:"default",displayName:"Dropdown.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Dropdown/Dropdown.story.vue"]};const R=`<template>
  <div>
    <h3>Simple dropdown</h3>
    <b>selected value: {{ singleSelected }}</b>
    <p>
      <KitDropdown data-cy="simple-dropdown" label="Drop down menu">
        <KitDropdownItem :selected="singleSelected === 'first'" data-cy="simple-dropdown-item" @click="singleSelected = 'first'"> First item </KitDropdownItem>
        <KitDropdownItem :selected="singleSelected === 'second'" @click="singleSelected = 'second'">Second item</KitDropdownItem>
        <KitDropdownItem disabled> Lorem ipsum dolor sit amet consectetur adipisicing elit </KitDropdownItem>
      </KitDropdown>
    </p>
    <h3>Full width mode</h3>
    <p style="width: 500px">
      <KitDropdown data-cy="full-width-dropdown" label="Drop down menu" full-width-trigger>
        <KitDropdownItem data-cy="full-wdith-dropdown-item"> First item </KitDropdownItem>
        <KitDropdownItem>Second item</KitDropdownItem>
        <KitDropdownItem>Lorem ipsum dolor sit amet consectetur adipisicing elit</KitDropdownItem>
      </KitDropdown>
    </p>
    <h3>Grouped items</h3>
    <p>
      <KitDropdown label="Drop down menu">
        <KitDropdownGroup label="Europe">
          <KitDropdownItem>Poland</KitDropdownItem>
          <KitDropdownItem>Germany</KitDropdownItem>
          <KitDropdownItem selected>France (Selected)</KitDropdownItem>
          <KitDropdownItem>United Kingdom</KitDropdownItem>
          <KitDropdownItem>Spain</KitDropdownItem>
        </KitDropdownGroup>
        <KitDropdownGroup label="North America">
          <template #actions>
            <KitIconButton title="Settings" spacing="compact">
              <KitIcon type="cog" />
            </KitIconButton>
          </template>
          <KitDropdownItem>Canada</KitDropdownItem>
          <KitDropdownItem>United States of America</KitDropdownItem>
        </KitDropdownGroup>
        <KitDropdownSeparator />
        <KitDropdownGroup label="Asia">
          <KitDropdownItem>China</KitDropdownItem>
          <KitDropdownItem>Japan</KitDropdownItem>
          <KitDropdownItem>India</KitDropdownItem>
        </KitDropdownGroup>
      </KitDropdown>
    </p>
    <h3>Custom trigger</h3>
    <p>
      <KitDropdown label="Drop down menu">
        <template #trigger="{ toggle, isOpen }">
          <div class="custom-trigger">
            <span v-if="isOpen" @click="toggle">💥</span>
            <span v-else @click="toggle">🎁</span>
          </div>
        </template>
        <KitDropdownItem>First item</KitDropdownItem>
        <KitDropdownItem>Second item</KitDropdownItem>
        <KitDropdownItem>Lorem ipsum dolor sit amet consectetur adipisicing elit</KitDropdownItem>
      </KitDropdown>
    </p>
    <h3>Dropdown with checkboxes (selected: {{ selected }})</h3>
    <p>
      <KitDropdown label="With checkboxes" :close-on-click="false">
        <KitDropdownCheckboxItem v-model="selected" value="first"> First item </KitDropdownCheckboxItem>
        <KitDropdownCheckboxItem v-model="selected" value="second"> Second item </KitDropdownCheckboxItem>
        <KitDropdownCheckboxItem v-model="selected" value="third">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </KitDropdownCheckboxItem>
      </KitDropdown>
    </p>
    <h3>Mixed (value: {{ mixedValue }})</h3>
    <p>
      <KitDropdown label="Mixed values" :close-on-click="false">
        <KitDropdownGroup label="Europe">
          <KitDropdownItem>Poland</KitDropdownItem>
          <KitDropdownItem>Germany</KitDropdownItem>
          <KitDropdownItem>France</KitDropdownItem>
          <KitDropdownItem>United Kingdom</KitDropdownItem>
          <KitDropdownItem>Spain</KitDropdownItem>
        </KitDropdownGroup>
        <KitDropdownGroup label="North America">
          <KitDropdownCheckboxItem v-model="mixedValue"> Some checkbox </KitDropdownCheckboxItem>
          <KitDropdownItem>United States of America</KitDropdownItem>
        </KitDropdownGroup>
      </KitDropdown>
    </p>
    <h3>Scrolled items</h3>
    <p>
      <KitDropdown label="Drop down menu">
        <KitDropdownGroup label="Europe">
          <KitDropdownItem>Poland</KitDropdownItem>
          <KitDropdownItem>Germany</KitDropdownItem>
          <KitDropdownItem>France</KitDropdownItem>
          <KitDropdownItem>United Kingdom</KitDropdownItem>
          <KitDropdownItem>Spain</KitDropdownItem>
        </KitDropdownGroup>
        <KitDropdownGroup label="North America">
          <KitDropdownItem>Canada</KitDropdownItem>
          <KitDropdownItem>United States of America</KitDropdownItem>
        </KitDropdownGroup>
        <KitDropdownGroup label="Asia">
          <KitDropdownItem>China</KitDropdownItem>
          <KitDropdownItem>Japan</KitDropdownItem>
          <KitDropdownItem>India</KitDropdownItem>
        </KitDropdownGroup>
        <KitDropdownGroup label="Europe">
          <KitDropdownItem>Poland</KitDropdownItem>
          <KitDropdownItem>Germany</KitDropdownItem>
          <KitDropdownItem>France</KitDropdownItem>
          <KitDropdownItem>United Kingdom</KitDropdownItem>
          <KitDropdownItem>Spain</KitDropdownItem>
        </KitDropdownGroup>
        <KitDropdownGroup label="North America">
          <KitDropdownItem>Canada</KitDropdownItem>
          <KitDropdownItem>United States of America</KitDropdownItem>
        </KitDropdownGroup>
        <KitDropdownGroup label="Asia">
          <KitDropdownItem>China</KitDropdownItem>
          <KitDropdownItem>Japan</KitDropdownItem>
          <KitDropdownItem>India</KitDropdownItem>
        </KitDropdownGroup>
        <KitDropdownGroup label="Europe">
          <KitDropdownItem>Poland</KitDropdownItem>
          <KitDropdownItem>Germany</KitDropdownItem>
          <KitDropdownItem>France</KitDropdownItem>
          <KitDropdownItem>United Kingdom</KitDropdownItem>
          <KitDropdownItem>Spain</KitDropdownItem>
        </KitDropdownGroup>
        <KitDropdownGroup label="North America">
          <KitDropdownItem>Canada</KitDropdownItem>
          <KitDropdownItem>United States of America</KitDropdownItem>
        </KitDropdownGroup>
        <KitDropdownGroup label="Asia">
          <KitDropdownItem>China</KitDropdownItem>
          <KitDropdownItem>Japan</KitDropdownItem>
          <KitDropdownItem>India</KitDropdownItem>
        </KitDropdownGroup>
      </KitDropdown>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import KitDropdownGroup from '@components/Dropdown/KitDropdownGroup.vue'
import KitDropdownItem from '@components/Dropdown/KitDropdownItem.vue'
import KitDropdownCheckboxItem from '@components/Dropdown/KitDropdownCheckboxItem.vue'
import KitDropdown from '@/components/Dropdown/KitDropdown.vue'
import KitDropdownSeparator from '@/components/Dropdown/KitDropdownSeparator.vue'
import KitIconButton from '@/components/Button/KitIconButton.vue'
import KitIcon from '@/components/Icon/KitIcon.vue'

const singleSelected = ref('second')
const selected = ref(['second'])
const mixedValue = ref(false)
<\/script>

<style scoped>
.custom-trigger {
  font-size: 20px;
  cursor: pointer;
}
</style>
`,mo={title:"Dropdown",component:F,parameters:{docs:{source:{code:R}}}},X=u=>({components:{Comp:F},setup(){return{args:u}},template:'<Comp v-bind="args" />'}),K=X.bind({});var C,y,x;K.parameters={...K.parameters,docs:{...(C=K.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(x=(y=K.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const so=["Dropdown"];export{K as Dropdown,so as __namedExportsOrder,mo as default};
