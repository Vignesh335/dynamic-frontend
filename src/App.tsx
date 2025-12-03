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
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from "react-router-dom";
import DynamicPage from "./pages/DynamicPage";
import AdminLayout from "./components/layouts/AdminLayout";
import UserLayout from "./components/layouts/UserLayout";
import PublicLayout from "./components/layouts/PublicLayout";
import appConfig from "./config/appConfig.json";
import { useEffect, type JSX } from "react";

const LayoutWrapper = () => {
  const { path: paramPath } = useParams<{ path: string }>();
  let pagePath = paramPath;
  const navigate = useNavigate();

  useEffect(() => {
    if (!paramPath) {
      const defaultPage: any = appConfig.pages.find((p: any) => p.default) || appConfig.pages[0];
      navigate(defaultPage.path, { replace: true });
    }
  }, [paramPath, navigate]);

  const page: any = appConfig.pages.find(p => p.path === `/${pagePath}`);

  const getLayout = (layoutName: string | null | undefined, children: JSX.Element) => {
    if (!layoutName) return <>{children}</>; // fullscreen or no layout

    const layoutConfig = appConfig.layouts[layoutName as keyof typeof appConfig.layouts];
    if (!layoutConfig) return <>{children}</>; // fallback

    return (
      <div className={`layout ${layoutName}`} style={{ background: layoutConfig.theme === 'dark' ? '#1E1E1E' : '#fff' }}>
        {layoutConfig.components.includes("Navbar") && <div>Navbar</div>}
        {layoutConfig.components.includes("Sidebar") && <div>Sidebar</div>}
        <main>{children}</main>
        {layoutConfig.components.includes("Footer") && <div>Footer</div>}
        {layoutConfig.components.includes("AdminTopbar") && <div>Admin Topbar</div>}
      </div>
    );
  };

  if (!page) return <div>Page not found</div>;

  return getLayout(page.layout, <DynamicPage />);
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
