import{d as g,j as v,k as e,A as o,t,f,C as s}from"./vue.esm-bundler-Bq7iw15p.js";import{K as l}from"./KitInlineDialog-ZbgDCcwK.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Popup-GsyzzzmS.js";import"./Popper-CqRkecYS.js";const b=["onClick"],I=["onClick"],x={class:"scroll-container"},k=["onClick"],L={class:"scroll-container"},C=["onClick"],d=g({__name:"InlineDialog.story",setup(r){return(K,i)=>(f(),v("div",null,[i[10]||(i[10]=e("h3",null,"Simple inline dialog",-1)),e("p",null,[o(l,null,{trigger:t(({toggle:n})=>[e("a",{href:"",onClick:s(n,["prevent"])},"Click me!",8,b)]),default:t(()=>[i[0]||(i[0]=e("div",{class:"content"},[e("p",null,"Inline dialog content")],-1))]),_:1})]),i[11]||(i[11]=e("h3",null,"Scrolled content",-1)),e("p",null,[o(l,null,{trigger:t(({toggle:n})=>[e("a",{href:"",onClick:s(n,["prevent"])},"Click me!",8,I)]),default:t(()=>[i[1]||(i[1]=e("div",{class:"content"},[e("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium libero provident consectetur reprehenderit vero minima repudiandae atque fugiat natus necessitatibus optio architecto expedita labore totam maiores molestias facere, voluptas aut? "),e("p",null," Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem voluptatum tenetur soluta nemo! Modi magnam ea eligendi magni cupiditate, labore ipsum nesciunt ab, cum, enim fuga sed quae nihil. Sed. "),e("p",null," Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt sint vero, maxime hic optio molestiae! Libero beatae voluptatum atque illo ex, rem accusamus officiis nobis impedit nam quae ipsa harum. "),e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora rerum illo non maxime illum, distinctio necessitatibus tenetur pariatur voluptatem minus hic vero autem natus molestias culpa asperiores perferendis numquam ut? ")],-1))]),_:1})]),i[12]||(i[12]=e("h3",null,"Keep to scroll parent boundaries",-1)),e("div",x,[i[3]||(i[3]=e("p",null," Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae aspernatur, necessitatibus dolores minus ad illo. Vel ipsa, cupiditate, maxime atque dolores ut autem enim neque sit temporibus recusandae quidem cumque! ",-1)),o(l,{"boundaries-element":"scrollParent"},{trigger:t(({toggle:n})=>[e("a",{href:"",onClick:s(n,["prevent"])},"Click me!",8,k)]),default:t(()=>[i[2]||(i[2]=e("div",{class:"content"},[e("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit.")],-1))]),_:1}),i[4]||(i[4]=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aliquid quisquam ullam fugit repellendus a voluptatem repudiandae vero. Ipsam mollitia dolore dolorum possimus dolor amet deserunt repellendus distinctio sapiente provident. ",-1)),i[5]||(i[5]=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aliquid quisquam ullam fugit repellendus a voluptatem repudiandae vero. Ipsam mollitia dolore dolorum possimus dolor amet deserunt repellendus distinctio sapiente provident. ",-1))]),i[13]||(i[13]=e("h3",null,"Overflow a relative parent",-1)),e("div",L,[i[7]||(i[7]=e("p",null," Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae aspernatur, necessitatibus dolores minus ad illo. Vel ipsa, cupiditate, maxime atque dolores ut autem enim neque sit temporibus recusandae quidem cumque! ",-1)),o(l,{"position-fixed":!0},{trigger:t(({toggle:n})=>[e("a",{href:"",onClick:s(n,["prevent"])},"Click me!",8,C)]),default:t(()=>[i[6]||(i[6]=e("div",{class:"content"},[e("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit.")],-1))]),_:1}),i[8]||(i[8]=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aliquid quisquam ullam fugit repellendus a voluptatem repudiandae vero. Ipsam mollitia dolore dolorum possimus dolor amet deserunt repellendus distinctio sapiente provident. ",-1)),i[9]||(i[9]=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aliquid quisquam ullam fugit repellendus a voluptatem repudiandae vero. Ipsam mollitia dolore dolorum possimus dolor amet deserunt repellendus distinctio sapiente provident. ",-1))])]))}}),c=q(d,[["__scopeId","data-v-6a32c3f3"]]);d.__docgenInfo={exportName:"default",displayName:"InlineDialog.story",description:"",tags:{},sourceFiles:["/home/runner/work/uikit/uikit/stories/InlineDialog/InlineDialog.story.vue"]};const D=`<template>
  <div>
    <h3>Simple inline dialog</h3>
    <p>
      <KitInlineDialog>
        <template v-slot:trigger="{ toggle }">
          <a href @click.prevent="toggle">Click me!</a>
        </template>
        <div class="content">
          <p>Inline dialog content</p>
        </div>
      </KitInlineDialog>
    </p>
    <h3>Scrolled content</h3>
    <p>
      <KitInlineDialog>
        <template v-slot:trigger="{ toggle }">
          <a href @click.prevent="toggle">Click me!</a>
        </template>
        <div class="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium libero provident consectetur
            reprehenderit vero minima repudiandae atque fugiat natus necessitatibus optio architecto expedita labore
            totam maiores molestias facere, voluptas aut?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem voluptatum tenetur soluta nemo! Modi magnam
            ea eligendi magni cupiditate, labore ipsum nesciunt ab, cum, enim fuga sed quae nihil. Sed.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt sint vero, maxime hic optio molestiae!
            Libero beatae voluptatum atque illo ex, rem accusamus officiis nobis impedit nam quae ipsa harum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora rerum illo non maxime illum, distinctio
            necessitatibus tenetur pariatur voluptatem minus hic vero autem natus molestias culpa asperiores perferendis
            numquam ut?
          </p>
        </div>
      </KitInlineDialog>
    </p>
    <h3>Keep to scroll parent boundaries</h3>
    <div class="scroll-container">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae aspernatur, necessitatibus dolores minus ad illo.
        Vel ipsa, cupiditate, maxime atque dolores ut autem enim neque sit temporibus recusandae quidem cumque!
      </p>
      <KitInlineDialog boundaries-element="scrollParent">
        <template v-slot:trigger="{ toggle }">
          <a href @click.prevent="toggle">Click me!</a>
        </template>
        <div class="content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </KitInlineDialog>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aliquid quisquam ullam fugit repellendus a
        voluptatem repudiandae vero. Ipsam mollitia dolore dolorum possimus dolor amet deserunt repellendus distinctio
        sapiente provident.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aliquid quisquam ullam fugit repellendus a
        voluptatem repudiandae vero. Ipsam mollitia dolore dolorum possimus dolor amet deserunt repellendus distinctio
        sapiente provident.
      </p>
    </div>
    <h3>Overflow a relative parent</h3>
    <div class="scroll-container">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae aspernatur, necessitatibus dolores minus ad illo.
        Vel ipsa, cupiditate, maxime atque dolores ut autem enim neque sit temporibus recusandae quidem cumque!
      </p>
      <KitInlineDialog :position-fixed="true">
        <template v-slot:trigger="{ toggle }">
          <a href @click.prevent="toggle">Click me!</a>
        </template>
        <div class="content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </KitInlineDialog>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aliquid quisquam ullam fugit repellendus a
        voluptatem repudiandae vero. Ipsam mollitia dolore dolorum possimus dolor amet deserunt repellendus distinctio
        sapiente provident.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aliquid quisquam ullam fugit repellendus a
        voluptatem repudiandae vero. Ipsam mollitia dolore dolorum possimus dolor amet deserunt repellendus distinctio
        sapiente provident.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import KitInlineDialog from '@components/InlineDialog/KitInlineDialog.vue'
<\/script>

<style scoped>
.custom-trigger {
  font-size: 20px;
  cursor: pointer;
}

.content {
  padding: 10px;
}

.scroll-container {
  border: 1px solid gray;
  position: relative;
  max-width: 400px;
  max-height: 100px;
  overflow: auto;
}
</style>
`,_={title:"InlineDialog",component:c,parameters:{docs:{source:{code:D}}}},h=r=>({components:{Comp:c},setup(){return{args:r}},template:'<Comp v-bind="args" />'}),a=h.bind({});var u,m,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
  components: {
    Comp
  },
  setup() {
    return {
      args
    };
  },
  template: '<Comp v-bind="args" />'
})`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const A=["InlineDialog"];export{a as InlineDialog,A as __namedExportsOrder,_ as default};
