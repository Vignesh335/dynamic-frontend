import { Link } from "react-router-dom";
import type { LayoutConfig } from "../../types/AppConfig";

interface Props {
  config: LayoutConfig;
  children: React.ReactNode;
}

const AdminLayout = ({ config, children }: Props) => {
  return (
    <div
      className="admin-layout"
      style={{
        background: config.theme === "dark" ? "#111" : "#f7f7f7",
        minHeight: "100vh",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          display: "flex",
          gap: 20,
          padding: "15px 20px",
          background: "#fff",
          borderBottom: "1px solid #ddd",
        }}
      >
        {config.header_items.map((item) => (
          <Link key={item.key} to={`/${item.key}`}>
            {item.label}
          </Link>
        ))}
      </header>

      {/* CONTENT */}
      <main style={{ padding: 20 }}>{children}</main>
    </div>
  );
};

export default AdminLayout;
