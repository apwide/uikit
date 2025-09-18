// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './Tabs.story.vue';

const sourceCode = require(`!!html-loader!./Tabs.story.vue`);

export default {
  title: 'Tabs',
  component: Comp,
  parameters: {
    docs: {
      source: {
        code: `${sourceCode}`
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

export const Tabs = Template.bind({});
