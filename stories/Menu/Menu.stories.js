// AUTO-GENERATED FILE – DO NOT EDIT
import Comp from './Menu.story.vue';

const sourceCode = require(`!!html-loader!./Menu.story.vue`);

export default {
  title: 'Menu',
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

export const Menu = Template.bind({});
