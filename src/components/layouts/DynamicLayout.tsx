import { Link, useLocation } from "react-router-dom";
import LayoutTemplates from "./LayoutTemplates";

interface Props {
  config: any;       // full layout config
  selectedItem: any; // currently selected sidebar item
  children: React.ReactNode;
}

const DynamicLayout = ({ config, selectedItem, children }: Props) => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Sidebar now uses headerItems of selectedItem
  const sidebarItems = selectedItem?.header_items || [];
  // Header now shows all sidebar items
  const headerItems = config.sider?.items || [];

  const isActive = (item: any) =>
    item.route === currentPath || item.additionalPaths?.includes(currentPath);

  return (
    <div>
      <LayoutTemplates templateId={config?.layout_id || 1} config={config}>
        {children}
      </LayoutTemplates>

      {/* {
        config.header.show_header && <header
          style={{
            width: "100%",
            height: config.header?.height || 60,
            ...config.header?.style,
          }}
        >
          <div style={{ display: "flex", gap: 20 }}>
            {headerItems.map((item: any) => (
              <Link key={item.key} to={item.route}>
                {item.label}
              </Link>
            ))}
          </div>
        </header>
      }

      <div style={{ display: "flex", flex: 1 }}>
        {
          selectedItem.show_sider &&
          sidebarItems.length > 0 &&
          <aside
            style={{
              width: config.sider?.width || 250,
              height: "100%",
              ...config.sider?.style,
            }}
          >
            {sidebarItems.map((item: any) => (
              <div
                key={item.key}
                style={{
                  padding: "10px 15px",
                  borderRadius: 6,
                  marginBottom: 5,
                  background: isActive(item) ? "#d0e2ff" : "transparent",
                }}
              >
                <Link to={item.route}>{item.label}</Link>
              </div>
            ))}
          </aside>
        }

        <main style={{ flex: 1, padding: 20 }}>{children}</main>
      </div> */}
    </div>
  );
};

export default DynamicLayout;
