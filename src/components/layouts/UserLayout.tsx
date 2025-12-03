import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const UserLayout = ({ children }: Props) => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <aside style={{ width: "250px", backgroundColor: "#f7f7f7", padding: "20px" }}>
        <h2>User Menu</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/orders">Orders</a></li>
        </ul>
      </aside>

      {/* Main content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Topbar */}
        <header style={{ padding: "15px", backgroundColor: "#1E90FF", color: "#fff" }}>
          <h1>User Dashboard</h1>
        </header>

        {/* Dynamic Page */}
        <main style={{ flex: 1, padding: "20px" }}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default UserLayout;
