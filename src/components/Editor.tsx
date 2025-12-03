import { useState, useEffect } from "react";
import { fetchComponentData } from "../api/api";
import type { ComponentItem } from "../types";

const Editor = ({ dataApi }: ComponentItem) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    if (dataApi) {
      fetchComponentData(dataApi).then(res => setContent(res.data.content));
    }
  }, [dataApi]);

  return (
    <div>
      <textarea
        style={{ width: "100%", height: "300px", padding: "10px", fontSize: "16px" }}
        value={content}
        onChange={e => setContent(e.target.value)}
      />
    </div>
  );
};

export default Editor;
