/* eslint-disable */
import { Mark } from 'tiptap';
import { unsupportedMark } from '@atlaskit/adf-schema'

export default class Annotation extends Mark {
    get name() {
        return 'unsupportedMark';
    }

    get schema() {
        return unsupportedMark;
    }
}
