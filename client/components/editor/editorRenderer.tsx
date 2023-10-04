import { OutputData } from "@editorjs/editorjs";

const editorJsHtml = require("editorjs-html");
const EditorJsToHtml = editorJsHtml();

type Props = {
  data: OutputData;
};

type ParsedContent = string | JSX.Element;

const EditorRenderer = ({ data }: Props) => {
  const html = EditorJsToHtml.parse(data) as ParsedContent[];
  return (
    <div key={data.time}>
      {html.map((item, index) => {
        if (typeof item === "string") {
          return <div dangerouslySetInnerHTML={{ __html: item }} key={index}></div>;
        }
      })}
    </div>
  );
};

export default EditorRenderer;
