// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './TooltipDirective.story.vue';
import sourceCode from './TooltipDirective.story.vue?raw';

export default {
  title: 'Tooltip',
  component: Comp,
  parameters: {
    docs: {
      source: {
        code: sourceCode
      }
    }
  }
};

const Template = (args) => ({
  components: { Comp },
  setup() {
    return { args };
  },
  template: '<Comp v-bind="args" />'
});

export const TooltipDirective = Template.bind({});
