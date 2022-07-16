/* eslint-disable */
import { Node } from 'tiptap';
import { taskItem } from '@atlaskit/adf-schema';
import Renderer from '../renderers/TaskItem.vue';

export default class TaskItem extends Node {
    get name() {
        return 'taskItem';
    }

    get schema() {
        return taskItem;
    }

    get view() {
        return Renderer;
    }
}
