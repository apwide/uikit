import{f as r,j as s,p as v,d as I,E as x,m as K,k as a,s as z,t as n,A as t,L as o,q as D,r as L}from"./vue.esm-bundler-Bq7iw15p.js";import{_ as p}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as y,K as m,a as T}from"./KitMenuItem-BPIMrCAY.js";import{_ as J}from"./KitIcon-DzjcMukR.js";import{I as U}from"./IconWrapper-BpnstkGd.js";import{K as b,a as c}from"./KitBorderedPanelRow-DWfTpgzb.js";import"./KitDropdown-BI7w2uBs.js";import"./KitButton-s-nB5WLS.js";import"./KitSpinner-C_FlB-Bt.js";import"./ChevronDownIcon-B6u_Npdu.js";import"./Popup-GsyzzzmS.js";import"./Popper-CqRkecYS.js";import"./KitIconButton-iUT2hFoW.js";import"./KitDropdownItem-B3gq7h7p.js";const P={},Y={class:"kit-menu"};function j(i,l){return r(),s("div",Y,[v(i.$slots,"default",{},void 0,!0)])}const k=p(P,[["render",j],["__scopeId","data-v-ff692130"]]);P.__docgenInfo={displayName:"KitMenu",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/Menu/KitMenu.vue"]};const H={key:0,class:"kit-menu-section"},O={key:0,class:"kit-menu-section__title"},N=I({__name:"KitMenuSection",props:{title:{}},setup(i){return(l,d)=>l.$slots.default?(r(),s("div",H,[i.title?(r(),s("div",O,x(i.title),1)):K("",!0),v(l.$slots,"default",{},void 0,!0)])):K("",!0)}}),g=p(N,[["__scopeId","data-v-adb605ae"]]);N.__docgenInfo={exportName:"default",displayName:"KitMenuSection",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/Menu/KitMenuSection.vue"]};const R={},W={class:"kit-menu-separator"};function G(i,l){return r(),s("div",W)}const A=p(R,[["render",G],["__scopeId","data-v-493da7e0"]]);R.__docgenInfo={displayName:"KitMenuSeparator",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/src/components/Menu/KitMenuSeparator.vue"]};const Q=["active"],X={key:0,class:"menu-item-icon-before"},Z={class:"menu-item-label"},h=I({__name:"MenuItem",props:{active:{type:Boolean,default:!1}},setup(i){return(l,d)=>(r(),s("div",{class:"menu-item",active:i.active||void 0},[l.$slots["icon-before"]?(r(),s("span",X,[v(l.$slots,"icon-before",{},void 0,!0)])):K("",!0),a("span",Z,[v(l.$slots,"default",{},void 0,!0)])],8,Q))}}),u=p(h,[["__scopeId","data-v-0b940067"]]);h.__docgenInfo={exportName:"default",displayName:"MenuItem",description:"",tags:{},props:[{name:"active",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"icon-before"},{name:"default"}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/Menu/MenuItem.vue"]};const ee={class:"menu-section"},te={key:0,class:"menu-section-label"},V=I({__name:"MenuSection",props:{label:{},separator:{type:Boolean,default:!1}},setup(i){return(l,d)=>(r(),s("div",ee,[i.label?(r(),s("div",te,x(i.label),1)):K("",!0),v(l.$slots,"default",{},void 0,!0)]))}}),_=p(V,[["__scopeId","data-v-f01b479f"]]);V.__docgenInfo={exportName:"default",displayName:"MenuSection",description:"",tags:{},props:[{name:"label",required:!1,type:{name:"string"}},{name:"separator",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/Menu/MenuSection.vue"]};const E=I({__name:"EditorAddIcon",props:{size:{},primaryColor:{},secondaryColor:{}},setup(i){return(l,d)=>(r(),z(U,{size:i.size,"primary-color":i.primaryColor,"secondary-color":i.secondaryColor},{default:n(()=>[...d[0]||(d[0]=[a("svg",{viewBox:"0 0 24 24"},[a("path",{d:"M13 11V7a1 1 0 0 0-2 0v4H7a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0v-4h4a1 1 0 0 0 0-2h-4z",fill:"currentColor","fill-rule":"evenodd"})],-1)])]),_:1},8,["size","primary-color","secondary-color"]))}});E.__docgenInfo={exportName:"default",displayName:"EditorAddIcon",description:"",tags:{},props:[{name:"size",required:!1,type:{name:"string"}},{name:"primaryColor",required:!1,type:{name:"string"}},{name:"secondaryColor",required:!1,type:{name:"string"}}],sourceFiles:["/home/runner/work/uikit/uikit/src/components/Icon/aui/EditorAddIcon.vue"]};const ne={class:"wrapper"},oe={class:"wrapper"},ie={class:"wrapper"},F=I({__name:"Menu.story",setup(i){const l=L(null),d=D(()=>l.value?`"${l.value}" was selected`:"Nothing selected");function f(B){l.value=B}return(B,e)=>(r(),s("div",null,[e[28]||(e[28]=a("h3",null,"KitActionMenu",-1)),t(b,{title:"Classy menu"},{actions:n(()=>[t(y,{title:"Bla bla bla"},{default:n(()=>[t(m,{onClick:e[0]||(e[0]=M=>f("add"))},{default:n(()=>[...e[6]||(e[6]=[o(" Add entry ",-1)])]),_:1}),t(m,{onClick:e[1]||(e[1]=M=>f("edit"))},{default:n(()=>[...e[7]||(e[7]=[o(" Edit entry ",-1)])]),_:1}),t(A),t(m,{onClick:e[2]||(e[2]=M=>f("delete"))},{default:n(()=>[...e[8]||(e[8]=[o(" Delete entry ",-1)])]),_:1}),t(g,{title:"Section"},{default:n(()=>[t(m,{onClick:e[3]||(e[3]=M=>f("clone"))},{default:n(()=>[...e[9]||(e[9]=[o(" Clone entry ",-1)])]),_:1})]),_:1})]),_:1})]),default:n(()=>[t(c,{label:"Reporting scheme",value:"Some text"}),t(c,{label:"Reporting scheme",value:"Some text"}),t(c,{label:"Selected value in the menu",value:d.value},null,8,["value"])]),_:1}),e[29]||(e[29]=a("h3",null,"KitActionMenu - disappears if no content",-1)),t(b,{title:"Classy menu"},{actions:n(()=>[t(y,{title:"Bla bla bla"},{default:n(()=>[K("",!0)]),_:1})]),default:n(()=>[t(c,{label:"Reporting scheme",value:"Some text"}),t(c,{label:"Selected value in the menu",value:d.value},null,8,["value"])]),_:1}),e[30]||(e[30]=a("h3",null,"KitActionMenu and KitIconMenu",-1)),t(b,{title:"Classy menu"},{actions:n(()=>[t(T,{title:"Permission menu"},{icon:n(()=>[t(J,{type:"lock"})]),default:n(()=>[t(g,null,{default:n(()=>[...e[11]||(e[11]=[o(" Some text ",-1)])]),_:1}),t(A),t(g,{title:"Your permissions"},{default:n(()=>[t(m,{disabled:!0},{default:n(()=>[...e[12]||(e[12]=[o(" Bla bla ",-1)])]),_:1})]),_:1}),t(A),t(m,null,{default:n(()=>[...e[13]||(e[13]=[o("Click here",-1)])]),_:1})]),_:1}),t(y,{title:"Bla bla bla"},{default:n(()=>[t(m,{onClick:e[5]||(e[5]=M=>f("add"))},{default:n(()=>[...e[14]||(e[14]=[o(" Add entry ",-1)])]),_:1})]),_:1})]),default:n(()=>[t(c,{label:"Reporting scheme",value:"Some text"})]),_:1}),e[31]||(e[31]=a("h3",null,"Simple menu",-1)),a("div",ne,[t(k,null,{default:n(()=>[t(_,null,{default:n(()=>[t(u,null,{default:n(()=>[...e[15]||(e[15]=[o("First item",-1)])]),_:1}),t(u,null,{default:n(()=>[...e[16]||(e[16]=[o("Second item",-1)])]),_:1}),t(u,null,{default:n(()=>[...e[17]||(e[17]=[o("Lorem ipsum dolor sit amet consectetur adipisicing elit",-1)])]),_:1})]),_:1})]),_:1})]),e[32]||(e[32]=a("h3",null,"Menu sections with labels",-1)),a("div",oe,[t(k,null,{default:n(()=>[t(_,{label:"North America"},{default:n(()=>[t(u,null,{default:n(()=>[...e[18]||(e[18]=[o("Canada",-1)])]),_:1}),t(u,null,{default:n(()=>[...e[19]||(e[19]=[o("United States of America",-1)])]),_:1})]),_:1}),t(_,{label:"Asia"},{default:n(()=>[t(u,null,{default:n(()=>[...e[20]||(e[20]=[o("China",-1)])]),_:1}),t(u,null,{default:n(()=>[...e[21]||(e[21]=[o("Japan",-1)])]),_:1}),t(u,null,{default:n(()=>[...e[22]||(e[22]=[o("India",-1)])]),_:1})]),_:1})]),_:1})]),e[33]||(e[33]=a("h3",null,"Items with icons",-1)),a("div",ie,[t(k,null,{default:n(()=>[t(_,null,{default:n(()=>[t(u,null,{default:n(()=>[...e[23]||(e[23]=[o("First item",-1)])]),_:1}),t(u,null,{default:n(()=>[...e[24]||(e[24]=[o("Second item",-1)])]),_:1}),t(u,{active:""},{default:n(()=>[...e[25]||(e[25]=[o(" Active item ",-1)])]),_:1}),t(u,null,{"icon-before":n(()=>[t(E)]),default:n(()=>[e[26]||(e[26]=o(" Add item ",-1))]),_:1}),t(u,null,{default:n(()=>[...e[27]||(e[27]=[o("Second item",-1)])]),_:1})]),_:1})]),_:1})])]))}}),q=p(F,[["__scopeId","data-v-823d3b64"]]);F.__docgenInfo={exportName:"default",displayName:"Menu.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Menu/Menu.story.vue"]};const le=`<template>
  <div>
    <h3>KitActionMenu</h3>
    <KitBorderedPanel title="Classy menu">
      <template #actions>
        <KitActionMenu title="Bla bla bla">
          <KitMenuItem @click="select('add')"> Add entry </KitMenuItem>
          <KitMenuItem @click="select('edit')"> Edit entry </KitMenuItem>
          <KitMenuSeparator />
          <KitMenuItem @click="select('delete')"> Delete entry </KitMenuItem>
          <KitMenuSection title="Section">
            <KitMenuItem @click="select('clone')"> Clone entry </KitMenuItem>
          </KitMenuSection>
        </KitActionMenu>
      </template>
      <KitBorderedPanelRow label="Reporting scheme" value="Some text" />
      <KitBorderedPanelRow label="Reporting scheme" value="Some text" />
      <KitBorderedPanelRow label="Selected value in the menu" :value="selectedValue" />
    </KitBorderedPanel>

    <h3>KitActionMenu - disappears if no content</h3>
    <KitBorderedPanel title="Classy menu">
      <template #actions>
        <KitActionMenu title="Bla bla bla">
          <KitMenuItem v-if="false" @click="select('add')"> Add entry </KitMenuItem>
        </KitActionMenu>
      </template>
      <KitBorderedPanelRow label="Reporting scheme" value="Some text" />
      <KitBorderedPanelRow label="Selected value in the menu" :value="selectedValue" />
    </KitBorderedPanel>
    <h3>KitActionMenu and KitIconMenu</h3>
    <KitBorderedPanel title="Classy menu">
      <template #actions>
        <KitIconMenu title="Permission menu">
          <template #icon>
            <KitIcon type="lock" />
          </template>
          <KitMenuSection> Some text </KitMenuSection>
          <KitMenuSeparator />
          <KitMenuSection title="Your permissions">
            <KitMenuItem :disabled="true"> Bla bla </KitMenuItem>
          </KitMenuSection>
          <KitMenuSeparator />
          <KitMenuItem>Click here</KitMenuItem>
        </KitIconMenu>
        <KitActionMenu title="Bla bla bla">
          <KitMenuItem @click="select('add')"> Add entry </KitMenuItem>
        </KitActionMenu>
      </template>
      <KitBorderedPanelRow label="Reporting scheme" value="Some text" />
    </KitBorderedPanel>

    <h3>Simple menu</h3>
    <div class="wrapper">
      <KitMenu>
        <MenuSection>
          <MenuItem>First item</MenuItem>
          <MenuItem>Second item</MenuItem>
          <MenuItem>Lorem ipsum dolor sit amet consectetur adipisicing elit</MenuItem>
        </MenuSection>
      </KitMenu>
    </div>
    <h3>Menu sections with labels</h3>
    <div class="wrapper">
      <KitMenu>
        <MenuSection label="North America">
          <MenuItem>Canada</MenuItem>
          <MenuItem>United States of America</MenuItem>
        </MenuSection>
        <MenuSection label="Asia">
          <MenuItem>China</MenuItem>
          <MenuItem>Japan</MenuItem>
          <MenuItem>India</MenuItem>
        </MenuSection>
      </KitMenu>
    </div>
    <h3>Items with icons</h3>
    <div class="wrapper">
      <KitMenu>
        <MenuSection>
          <MenuItem>First item</MenuItem>
          <MenuItem>Second item</MenuItem>
          <MenuItem active> Active item </MenuItem>
          <MenuItem>
            <template #icon-before>
              <EditorAddIcon />
            </template>
            Add item
          </MenuItem>
          <MenuItem>Second item</MenuItem>
        </MenuSection>
      </KitMenu>
    </div>
  </div>
</template>

<script setup lang="ts">
import KitMenu from '@components/Menu/KitMenu.vue'
import { computed, ref } from 'vue'
import KitIconMenu from '../../src/components/Menu/KitIconMenu.vue'
import KitMenuSection from '../../src/components/Menu/KitMenuSection.vue'
import KitMenuSeparator from '../../src/components/Menu/KitMenuSeparator.vue'
import KitIcon from '../../src/components/Icon/KitIcon.vue'
import MenuItem from '@/components/Menu/MenuItem.vue'
import MenuSection from '@/components/Menu/MenuSection.vue'
import EditorAddIcon from '@/components/Icon/aui/EditorAddIcon.vue'
import KitActionMenu from '@/components/Menu/KitActionMenu.vue'
import KitMenuItem from '@/components/Menu/KitMenuItem.vue'
import KitBorderedPanel from '@/components/layout/BorderedPanel/KitBorderedPanel.vue'
import KitBorderedPanelRow from '@/components/layout/BorderedPanel/KitBorderedPanelRow.vue'

const selected = ref(null)

const selectedValue = computed(() => {
  return !selected.value ? 'Nothing selected' : \`"\${selected.value}" was selected\`
})

function select(value) {
  selected.value = value
}
<\/script>

<style scoped>
.wrapper {
  background: #f4f5f7;
  width: 300px;
}
</style>
`,ye={title:"Menu",component:q,parameters:{docs:{source:{code:le}}}},ue=i=>({components:{Comp:q},setup(){return{args:i}},template:'<Comp v-bind="args" />'}),S=ue.bind({});var C,w,$;S.parameters={...S.parameters,docs:{...(C=S.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...($=(w=S.parameters)==null?void 0:w.docs)==null?void 0:$.source}}};const be=["Menu"];export{S as Menu,be as __namedExportsOrder,ye as default};
