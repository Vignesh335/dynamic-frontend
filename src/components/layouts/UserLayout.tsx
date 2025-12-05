import { Link, useLocation } from "react-router-dom";
import type { LayoutConfig, MenuItem } from "../../types/AppConfig";

interface Props {
  config: LayoutConfig;
  children: React.ReactNode;
}

const UserLayout = ({ config, children }: Props) => {
  const location = useLocation();

  const renderSiderItem = (item: MenuItem) => {
    const active =
      item.route === location.pathname ||
      item.additionalPaths?.includes(location.pathname);

    return (
      <li
        key={item.key}
        className={`sider-item ${active ? "active" : ""}`}
        style={{
          padding: "10px 15px",
          background: active ? "#e8f1ff" : "transparent",
          borderRadius: 6,
          marginBottom: 4,
        }}
      >
        <Link to={item.route || "#"}>{item.label}</Link>
      </li>
    );
  };

  return (
    <div
      className="user-layout"
      style={{
        display: "flex",
        height: "100vh",
        background: config.theme === "dark" ? "#1e1e1e" : "#f8f9fa",
      }}
    >
      {/* SIDEBAR */}
      <aside
        style={{
          width: 220,
          padding: 20,
          background: "#fff",
          borderRight: "1px solid #eee",
        }}
      >
        <h3 style={{ marginBottom: 20 }}>User Menu</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {config.sider_items.map(renderSiderItem)}
        </ul>
      </aside>

      {/* CONTENT */}
      <main style={{ flex: 1, padding: 20 }}>{children}</main>
    </div>
  );
};

export default UserLayout;
