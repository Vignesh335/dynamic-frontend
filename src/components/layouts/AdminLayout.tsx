import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div style={{ display: "flex" }}>
      <aside style={{ width: "250px", background: "#222", color: "#fff" }}>Sidebar</aside>
      <div style={{ flex: 1, padding: "20px" }}>
        <header style={{ background: "#444", padding: "10px", color: "#fff" }}>Admin Topbar</header>
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
