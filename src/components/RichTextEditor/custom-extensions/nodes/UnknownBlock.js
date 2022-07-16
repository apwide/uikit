/* eslint-disable */
import { Node } from 'tiptap';
import { unknownBlock } from '@atlaskit/adf-schema'

export default class UnknownBlock extends Node {
    get name() {
        return 'unknownBlock';
    }

    get schema() {
        return unknownBlock;
    }
}
