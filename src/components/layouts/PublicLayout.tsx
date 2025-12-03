import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const PublicLayout = ({ children }: Props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Header / Navbar */}
      <header style={{ padding: "20px", backgroundColor: "#1E90FF", color: "#fff" }}>
        <h1>My App (Public)</h1>
        <nav>
          <a href="/home" style={{ margin: "0 10px", color: "#fff" }}>Home</a>
          <a href="/about" style={{ margin: "0 10px", color: "#fff" }}>About</a>
          <a href="/login" style={{ margin: "0 10px", color: "#fff" }}>Login</a>
        </nav>
      </header>

      {/* Page Content */}
      <main style={{ flex: 1, padding: "20px" }}>
        {children}
      </main>

      {/* Footer */}
      <footer style={{ padding: "20px", backgroundColor: "#f0f0f0", textAlign: "center" }}>
        © 2025 My App. All rights reserved.
      </footer>
    </div>
  );
};

export default PublicLayout;
