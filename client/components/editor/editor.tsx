import { memo, useEffect, useRef } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import TOOLS from "./tools";

type Props = {
  data?: OutputData;
  onChange(val: OutputData): void;
  holder: string;
};

const CustomEditor = ({ data, onChange, holder }: Props) => {
  const ref = useRef<EditorJS>();

  useEffect(() => {
    if (!ref.current) {
      const editor = new EditorJS({
        holder: holder,
        tools: TOOLS,
        // autofocus: true,
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

  return <div id={holder} />;
};

export default memo(CustomEditor);
