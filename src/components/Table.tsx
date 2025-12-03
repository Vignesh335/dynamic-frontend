import { useEffect, useState } from "react";
import { fetchComponentData } from "../api/api";
import type { ComponentItem } from "../types";

const Table = ({ columns, dataApi }: ComponentItem) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    if (dataApi) {
      fetchComponentData(dataApi).then(res => setData(res.data));
    }
  }, [dataApi]);

  return (
    <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "20px" }}>
      <thead>
        <tr>
          {columns?.map(col => (
            <th key={col} style={{ border: "1px solid #ccc", padding: "10px", background: "#f0f0f0" }}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx}>
            {columns?.map(col => (
              <td key={col} style={{ border: "1px solid #ccc", padding: "10px" }}>{row[col] ?? "-"}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
