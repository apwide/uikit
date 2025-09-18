import '@atlaskit/css-reset/dist/bundle.css'
import './style.css'
import '../src/style.css'

export const decorators = [
  (story) => ({
    components: { story },
    template: `<div style="padding: 20px;"><story/></div>`,
  })
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: {
    inlineStories: true,
  },
}

