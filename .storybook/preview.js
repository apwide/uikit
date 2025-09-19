import '@atlaskit/css-reset/dist/bundle.css'
import './style.css'
import '../src/style.css'

const preview = {
  decorators: [
    (story) => ({
      components: { story },
      template: `<div style="padding: 20px;"><story/></div>`,
    })
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    docs: {
      inlineStories: true,
    },
  }
}

export default preview