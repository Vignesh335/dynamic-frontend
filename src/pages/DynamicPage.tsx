// import { useParams } from "react-router-dom";
// import type { Page, ComponentItem } from "../types";
// import Card from "../components/Card";
// import Table from "../components/Table";
// import Stats from "../components/Stats";
// import Form from "../components/Form";
// import Editor from "../components/Editor";
// import Hero from "../components/Hero";

// const DynamicPage = () => {
//   const { path } = useParams<{ path: string }>();

//   // Hardcoded page JSON data
//   const pages: Page[] = [
//     {
//       path: "home",
//       layout: "public",
//       title: "Welcome to My App",
//       roles: ["public", "user", "admin"],
//       components: [
//         { type: "hero", heading: "Welcome!", subtext: "This is a dynamic page" },
//         { type: "card", heading: "Feature 1", content: "Multi-role support" },
//         { type: "card", heading: "Feature 2", content: "Dynamic components" },
//         {
//           type: "stats",
//           items: [
//             { label: "Users", value: 1200 },
//             { label: "Orders", value: 530 }
//           ]
//         }
//       ]
//     },
//     {
//       path: "dashboard",
//       layout: "user",
//       title: "User Dashboard",
//       roles: ["user"],
//       components: [
//         {
//           type: "table",
//           columns: ["Order ID", "Product", "Status", "Amount"],
//           dataApi: "" // optional, leave empty for now
//         },
//         {
//           type: "form",
//           submitApi: "",
//           fields: [
//             { type: "text", name: "name", label: "Name" },
//             { type: "email", name: "email", label: "Email" }
//           ],
//           buttons: [{ type: "submit", label: "Submit" }]
//         },
//         { type: "editor", dataApi: "" }
//       ]
//     }
//   ];

//   // Find the page by path
//   const page = pages.find(p => p.path === path);

//   const renderComponent = (component: ComponentItem) => {
//     switch (component.type) {
//       case "hero":
//         return <Hero key={component.heading} {...component} />;
//       case "card":
//         return <Card key={component.heading} {...component} />;
//       case "stats":
//         return <Stats key={component.heading} {...component} />;
//       case "table":
//         return <Table key={component.columns?.join("-")} {...component} />;
//       case "form":
//         return <Form key={component.submitApi || "form"} {...component} />;
//       case "editor":
//         return <Editor key={component.dataApi || "editor"} {...component} />;
//       default:
//         return <div key={component.type}>Unknown component</div>;
//     }
//   };

//   if (!page) return <div>Page not found</div>;

//   return (
//     <div>
//       <h1>{page.title}</h1>
//       {page.components.map(renderComponent)}
//     </div>
//   );
// };

// export default DynamicPage;
import { useParams } from "react-router-dom";
import appConfig from "../config/appConfig.json";
import type { ComponentItem, Page } from "../types";
import Card from "../components/Card";
import Table from "../components/Table";
import Stats from "../components/Stats";
import Form from "../components/Form";
import Editor from "../components/Editor";
import Hero from "../components/Hero";

const DynamicPage = () => {
  const { path: paramPath } = useParams<{ path: string }>();
  let pagePath = paramPath;

  // If no path provided, fallback to default page
  if (!pagePath) {
    const defaultPage = appConfig.pages.find((p: any) => p.default);
    pagePath = defaultPage ? defaultPage.path.replace(/^\//, "") : "home"; // fallback to /home
  }

  // Then find the page
  const page: any = appConfig.pages.find(p => p.path === `/${pagePath}`);
  
  const renderComponent = (component: ComponentItem) => {
    switch (component.type) {
      case "hero": return <Hero key={component.heading} {...component} />;
      case "card": return <Card key={component.heading} {...component} />;
      case "stats": return <Stats key={component.heading} {...component} />;
      case "table": return <Table key={component.columns?.join("-")} {...component} />;
      case "form": return <Form key={component.submitApi || "form"} {...component} />;
      case "editor": return <Editor key={component.dataApi || "editor"} {...component} />;
      case "chart": return <div key={component.chartType}>[Chart placeholder]</div>;
      default: return <div key={component.type}>Unknown component</div>;
    }
  };

  if (!page) return <div>Page not found</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{page.title}</h1>
      {page.components.map(renderComponent)}
    </div>
  );
};

export default DynamicPage;
