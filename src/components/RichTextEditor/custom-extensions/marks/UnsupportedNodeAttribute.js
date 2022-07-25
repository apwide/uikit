/* eslint-disable */
import { Mark } from 'tiptap'
import { unsupportedNodeAttribute } from '@atlaskit/adf-schema'

export default class Annotation extends Mark {
  get name() {
    return 'unsupportedNodeAttribute'
  }

  get schema() {
    return unsupportedNodeAttribute
  }
}
