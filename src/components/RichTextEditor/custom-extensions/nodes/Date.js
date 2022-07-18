/* eslint-disable */
import { Node } from 'tiptap';
import { date } from '@atlaskit/adf-schema';
import Renderer from '../renderers/Date.vue';

export default class Date extends Node {
    get name() {
        return 'date';
    }

    get schema() {
        return date;
    }

    get view() {
        return Renderer;
    }
}
