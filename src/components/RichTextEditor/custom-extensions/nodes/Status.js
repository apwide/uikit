/* eslint-disable */
import { Node } from 'tiptap';
import { status } from '@atlaskit/adf-schema';
import Lozenge from '../renderers/Lozenge.vue';

export default class Status extends Node {
    get name() {
        return 'status';
    }

    get schema() {
        return status;
    }

    get view() {
        return Lozenge;
    }
}
