// import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
// import DynamicPage from "./pages/DynamicPage";
// import AdminLayout from "./components/layouts/AdminLayout";
// import UserLayout from "./components/layouts/UserLayout";
// import PublicLayout from "./components/layouts/PublicLayout";
// import type { JSX } from "react";

// const LayoutWrapper = () => {
//   const { path } = useParams<{ path: string }>();

//   // Hardcoded pages array (same as DynamicPage for demo)
//   const pages = [
//     { path: "home", layout: "public", title: "Home Page" },
//     { path: "dashboard", layout: "user", title: "User Dashboard" },
//     { path: "admin", layout: "admin", title: "Admin Dashboard" }
//   ];

//   const page = pages.find(p => p.path === path);

//   const getLayout = (layout: string | null, children: JSX.Element) => {
//     switch (layout) {
//       case "admin":
//         return <AdminLayout>{children}</AdminLayout>;
//       case "user":
//         return <UserLayout>{children}</UserLayout>;
//       case "public":
//         return <PublicLayout>{children}</PublicLayout>;
//       default:
//         return <>{children}</>; // Fullscreen/no-layout
//     }
//   };

//   if (!page) return <div>Page not found</div>;

//   return getLayout(page.layout, <DynamicPage />);
// };

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path=":path" element={<LayoutWrapper />} />
//         <Route path="/" element={<LayoutWrapper />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import "./App.css";

import DynamicLayout from "./components/layouts/DynamicLayout";
import DynamicPage from "./pages/DynamicPage";
import appConfig from "./config/appConfig.json";

import { useEffect, useState } from "react";

const LayoutWrapper = () => {
  const { path } = useParams<{ path: string }>();
  const currentPath = `/${path ?? ""}`;
  const [selectedContent, setSelectedContent] = useState<string>("");

  const [layoutConfig, setLayoutConfig] = useState<any>(null);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  useEffect(() => {
    const layouts: any = appConfig.layouts;

    let foundLayout = null;
    let foundItem = null;
    let foundContent: any = "";

    // Search through all layouts and their sider items
    for (const layoutName of Object.keys(layouts)) {
      const layout = layouts[layoutName];

      // Sider items
      for (const item of layout.sider?.items || []) {
        if (item.route === currentPath) {
          foundLayout = layout;
          foundContent = item.content || "";
          foundItem = item;
          break;
        }
        else if (item.additionalPaths?.includes(currentPath)) {
          foundLayout = layout;
          foundContent = (item?.header_items ?? []).filter((hi: any) => hi.route === currentPath)?.[0]?.content;
          foundItem = item;
          break;
        }
      }

      if (foundLayout) break;
    }

    // fallback layout if no match
    setLayoutConfig(foundLayout ?? { theme: "light", header: {}, sider: { items: [] } });
    setSelectedItem(foundItem ?? null);
    setSelectedContent(foundContent || "");
  }, [currentPath, path]);

  // still loading → prevent flashing
  if (!layoutConfig) return <div style={{ padding: 20 }}>Loading...</div>;

  return (
    <DynamicLayout config={layoutConfig} selectedItem={selectedItem}>
      <DynamicPage path={currentPath} selectedItem={selectedItem} content={selectedContent} />
    </DynamicLayout>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutWrapper />} />
        <Route path=":path" element={<LayoutWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;
