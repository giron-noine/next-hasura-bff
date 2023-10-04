"use client";
import { OutputData } from "@editorjs/editorjs";
import dynamic from "next/dynamic";
import { useState } from "react";
import type { NextPage } from "next";
import EditorRenderer from "../../components/editor/editorRenderer";

const EditorBlock = dynamic(() => import("../../components/editor/editor"), {
  ssr: false,
});

const Home: NextPage = () => {
  const [data, setData] = useState<OutputData>();
  console.log("data", data);
  return (
    <div style={style._Wrap}>
      <div>
        <p>Editor</p>
        <EditorBlock data={data} onChange={setData} holder="editorjs-container" />
      </div>

      <div>
        <p>Preview</p>
        {data && <EditorRenderer data={data} />}
      </div>
    </div>
  );
};

export default Home;

export const style = {
  _Wrap: {},
};
