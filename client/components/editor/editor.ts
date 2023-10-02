import { memo, useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import TOOLS from "./tools";

const CustomEditor = ({ data, onChange, holder }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) {
      const editor = new EditorJS({
        holder: holder,
        tools: TOOLS,
        autofocus: true,
        data,
        placeholder: "Start writing your article here...",
        async onChange(api) {
          const data = await api.saver.save();
          onChange(data);
        },
      });
      ref.current = editor;
    }
    return () => {
      if (ref.current && ref.current.destroy) ref.current.destroy();
    };
  }, []);

  return (
    <>
      <div id={holder}></div>
    </>
  );
};

export default memo(CustomEditor);
