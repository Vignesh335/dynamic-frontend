import { useEffect, useState } from "react";
import { fetchComponentData } from "../api/api";
import type { ComponentItem, StatItem } from "../types";

const Stats = ({ items }: ComponentItem) => {
  const [stats, setStats] = useState<StatItem[]>(items || []);

  useEffect(() => {
    items?.forEach((item, index) => {
      if (item.valueApi) {
        fetchComponentData(item.valueApi).then(res => {
          setStats(prev => {
            const newStats = [...prev];
            newStats[index] = { ...newStats[index], value: res.data.value };
            return newStats;
          });
        });
      }
    });
  }, [items]);

  return (
    <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
      {stats.map(stat => (
        <div key={stat.label} style={{
          padding: "20px",
          background: "#f5f5f5",
          borderRadius: "8px",
          flex: 1,
          textAlign: "center"
        }}>
          <h3>{stat.value ?? "-"}</h3>
          <p>{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
