import{d as j,r as a,j as S,A as i,t as r,f as B,L as f,E as m,k as b}from"./vue.esm-bundler-bSWh6tln.js";import{f as t}from"./chunk-NAVWDHVN-nYOG0we8.js";import{_ as O}from"./KitIcon-IXZtQfsY.js";import{K as v}from"./KitDropdownItem-DY0xHaJw.js";import{K as W}from"./KitTable-kJJj6_bH.js";import{K as M}from"./KitDropdown-BZzWVijU.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./KitSpinner-BNue20UW.js";import"./KitButton-DXemt05q.js";import"./KitDraggable-rwHm5TPS.js";import"./dom-kh-IIGlH.js";import"./ChevronDownIcon-BpZDYj0q.js";import"./IconWrapper-DdkEMErG.js";import"./Popup-CYbvf_Tg.js";import"./Popper-D7RkQmME.js";const $={class:"wrapper"},V={style:{display:"flex","align-items":"center",gap:"5px"}},J=["href"],K=j({__name:"ComplexTable.story",setup(w){const I=[{id:"id",name:"ID",width:70,sortable:!0},{id:"account",name:"Acc",width:120,sortable:!0},{id:"name",name:"Name",sortable:!0},{id:"job",name:"Job",minWidth:250,sortable:!0},{id:"address",name:"Address",minWidth:250,sortable:!0},{id:"email",name:"Email",minWidth:250},{id:"action",width:130}],s=a(Array.from({length:10}).map((e,o)=>({id:o,account:t.finance.accountNumber(),name:t.person.firstName(),address:t.location.country(),email:t.internet.email(),job:t.person.jobTitle()}))),p=a(10),y=a(!1),u=a(!1),h=a("id"),_=a(!1),g=a();function C(e){setTimeout(()=>{p.value>30?y.value=!1:(s.value=[...s.value,...Array.from({length:10}).map((o,n)=>({id:p.value+n,account:t.finance.accountNumber(),name:t.person.firstName(),address:t.location.country(),email:t.internet.email(),job:t.person.jobTitle()}))],p.value+=10),e()},1e3)}function A({id:e,desc:o}){u.value=!0,h.value=e,_.value=o,setTimeout(()=>{s.value=[...s.value].sort((n,l)=>{if(n[e]===l[e])return 0;const d=n[e]>l[e]?1:-1;return o?d*-1:d}),u.value=!1},1e3)}function N(e){e&&e.setAttribute("with-dropdown","")}function E(e){e&&e.removeAttribute("with-dropdown")}return(e,o)=>(B(),S("div",$,[i(W,{ref_key:"tableRef",ref:g,columns:I,data:s.value,"sticky-header":!0,"sticky-left-column":!0,"sticky-right-column":!0,"infinite-scroll":y.value,"sorted-by":h.value,"sorted-desc":_.value,busy:u.value,onTableBottomReached:C,onSorted:A},{"header-email":r(()=>[b("span",V,[i(O,{type:"envelope"}),o[0]||(o[0]=b("span",null," email ",-1))])]),email:r(({value:n})=>[b("a",{href:`mailto:${n}`},m(n),9,J)]),action:r(({row:n,cellElement:l})=>[i(M,{label:"Actions",onOpen:d=>N(l),onClose:d=>E(l)},{default:r(()=>[i(v,null,{default:r(()=>[f("Move "+m(n.id),1)]),_:2},1024),i(v,null,{default:r(()=>[f("Edit "+m(n.id),1)]),_:2},1024),i(v,null,{default:r(()=>[f("Delete "+m(n.id),1)]),_:2},1024)]),_:2},1032,["onOpen","onClose"])]),_:1},8,["data","infinite-scroll","sorted-by","sorted-desc","busy"])]))}}),T=R(K,[["__scopeId","data-v-fdebd75c"]]);K.__docgenInfo={exportName:"default",displayName:"ComplexTable.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/Table/ComplexTable.story.vue"]};const z=`<template>
  <div class="wrapper">
    <KitTable
      ref="tableRef"
      :columns="columns"
      :data="data"
      :sticky-header="true"
      :sticky-left-column="true"
      :sticky-right-column="true"
      :infinite-scroll="infiniteScroll"
      :sorted-by="sortedBy"
      :sorted-desc="sortedDesc"
      :busy="busy"
      @table-bottom-reached="loadMoreData"
      @sorted="onSorted">
      <template #header-email>
        <span style="display: flex; align-items: center; gap: 5px">
          <KitIcon type="envelope" />
          <span> email </span>
        </span>
      </template>
      <template #email="{ value }">
        <a :href="\`mailto:\${value}\`">{{ value }}</a>
      </template>
      <template #action="{ row, cellElement }">
        <KitDropdown label="Actions" @open="dropdownOpen(cellElement)" @close="dropdownClose(cellElement)">
          <KitDropdownItem>Move {{ row.id }}</KitDropdownItem>
          <KitDropdownItem>Edit {{ row.id }}</KitDropdownItem>
          <KitDropdownItem>Delete {{ row.id }}</KitDropdownItem>
        </KitDropdown>
      </template>
    </KitTable>
  </div>
</template>

<script setup lang="ts">
import { faker } from '@faker-js/faker'
import { ref } from 'vue'
import KitIcon from '@components/Icon/KitIcon.vue'
import KitDropdownItem from '@components/Dropdown/KitDropdownItem.vue'
import KitTable from '@/components/Table/KitTable.vue'
import KitDropdown from '@/components/Dropdown/KitDropdown.vue'

const columns = [
  {
    id: 'id',
    name: 'ID',
    width: 70,
    sortable: true
  },
  {
    id: 'account',
    name: 'Acc',
    width: 120,
    sortable: true
  },
  {
    id: 'name',
    name: 'Name',
    sortable: true
  },
  {
    id: 'job',
    name: 'Job',
    minWidth: 250,
    sortable: true
  },
  {
    id: 'address',
    name: 'Address',
    minWidth: 250,
    sortable: true
  },
  {
    id: 'email',
    name: 'Email',
    minWidth: 250
  },
  {
    id: 'action',
    width: 130
  }
]

const data = ref(
  Array.from({ length: 10 }).map((_, index) => ({
    id: index,
    account: faker.finance.accountNumber(),
    name: faker.person.firstName(),
    address: faker.location.country(),
    email: faker.internet.email(),
    job: faker.person.jobTitle()
  }))
)

const lastId = ref(10)
const infiniteScroll = ref(false)
const busy = ref(false)
const sortedBy = ref('id')
const sortedDesc = ref(false)

const tableRef = ref()

function loadMoreData(callback) {
  setTimeout(() => {
    if (lastId.value > 30) {
      infiniteScroll.value = false
    } else {
      data.value = [
        ...data.value,
        ...Array.from({ length: 10 }).map((_, index) => ({
          id: lastId.value + index,
          account: faker.finance.accountNumber(),
          name: faker.person.firstName(),
          address: faker.location.country(),
          email: faker.internet.email(),
          job: faker.person.jobTitle()
        }))
      ]
      lastId.value += 10
    }
    callback()
  }, 1000)
}

function onSorted({ id, desc }) {
  busy.value = true
  sortedBy.value = id
  sortedDesc.value = desc
  setTimeout(() => {
    data.value = [...data.value].sort((a, b) => {
      if (a[id] === b[id]) {
        return 0
      }
      const result = a[id] > b[id] ? 1 : -1
      return desc ? result * -1 : result
    })
    busy.value = false
  }, 1000)
}

function dropdownOpen(cellElement) {
  if (cellElement) {
    cellElement.setAttribute('with-dropdown', '')
  }
}

function dropdownClose(cellElement) {
  if (cellElement) {
    cellElement.removeAttribute('with-dropdown')
  }
}
<\/script>

<style scoped>
.wrapper {
  max-height: 500px;
  max-width: 900px;
  display: flex;
  flex-direction: column;
}

:deep(.table-row-cell[with-dropdown]) {
  z-index: 100;
}
</style>
`,re={title:"Table",component:T,parameters:{docs:{source:{code:z}}}},F=w=>({components:{Comp:T},setup(){return{args:w}},template:'<Comp v-bind="args" />'}),c=F.bind({});var k,x,D;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(D=(x=c.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};const ie=["ComplexTable"];export{c as ComplexTable,ie as __namedExportsOrder,re as default};
