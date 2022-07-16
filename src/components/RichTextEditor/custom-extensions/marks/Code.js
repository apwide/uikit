/* eslint-disable */
import { Mark } from "tiptap";
import { code } from "@atlaskit/adf-schema";
import { toggleMark } from "tiptap-commands";
import Renderer from "../renderers/CodeBlock.vue";

export default class Code extends Mark {
  get name() {
    return "code";
  }

  get schema() {
    return code;
  }

  get view() {
    return Renderer;
  }

  commands({ type }) {
    return () => toggleMark(type);
  }
}
