import Header from "@editorjs/editorjs";
import CheckList from "@editorjs/editorjs";
import code from "@editorjs/editorjs";
import Delimiter from "@editorjs/editorjs";
import Embed from "@editorjs/editorjs";
import InlineCode from "@editorjs/editorjs";
import LinkTool from "@editorjs/editorjs";
import List from "@editorjs/editorjs";
import Quote from "@editorjs/editorjs";

const TOOLS = {
  header: {
    class: typeof Header,
  },
  checklist: CheckList,
  code: code,
  delimiter: Delimiter,
  embed: Embed,
  inlineCode: InlineCode,
  linkTool: LinkTool,
  list: List,
  quote: Quote,
};

export default TOOLS;
