import ContentLayouts from "./ContentLayout";
import FooterLayouts from "./FooterLayouts";
import HeaderLayouts from "./HeaderLayouts";
import SiderTemplates from "./SiderLayouts";

export default function LayoutTemplates({
    templateId = 1,
    children,
    config,
    width = "100vw",
    height = "100vh",
}: any) {

    // const sidebarItems = selectedItem?.header_items || [];
    // now shows all sidebar items
    const headerItems = config.sider?.items || [];

    // const isActive = (item: any) =>
    //     item.route === currentPath || item.additionalPaths?.includes(currentPath);

    const theme: any = {
        borderRadius: 10,
        gap: 16,
        headerBg: "#4096ff",
        contentBg: "#0052cc",
        siderBg: "#1677ff",
        footerBg: "#4096ff",
        textColor: "#fff",
    };

    const baseBox: any = {
        width,
        height,
        borderRadius: theme.borderRadius,
        overflow: "hidden",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI'",
        color: theme.textColor,
    };

    const header: any = {
        background: theme.headerBg,
        padding: "16px",
        textAlign: "center",
    };

    const footer: any = {
        background: theme.footerBg,
        padding: "16px",
        textAlign: "center",
    };

    const content: any = {
        background: theme.contentBg,
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "18px",
    };

    const sider: any = {
        background: theme.siderBg,
        minWidth: "140px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "18px",
    };

    const layout1 = (
        <div style={{ ...baseBox, display: "flex", flexDirection: "column", overflow: "auto" }}>
            <div style={header}>
                <HeaderLayouts items={headerItems} variant={config.header?.variant || "default"} />
            </div>
            <div style={content}>
                <ContentLayouts />
                {children}
            </div>
            <div style={footer}>
                <FooterLayouts templateId={8} />
            </div>
        </div>
    );

    // header + sider (left) + content
    const layout2 = (
        <div style={{ ...baseBox, display: "flex", flexDirection: "column", overflow: "auto" }}>
            <div style={header}><HeaderLayouts items={headerItems} variant={config.header?.variant || "default"} /></div>
            <div style={{ display: "flex", flex: 1 }}>
                <div style={sider}><SiderTemplates variant={config.sider?.variant || 'default'} /></div>
                <div style={content}>
                    <ContentLayouts />
                    {children}
                </div>
            </div>
            <div style={footer}>
                <FooterLayouts templateId={8} />
            </div>
        </div>
    );

    // header + content + sider (right)
    const layout3 = (
        <div style={{ ...baseBox, display: "flex", flexDirection: "column", overflow: "auto" }}>
            <div style={header}><HeaderLayouts items={headerItems} variant={config.header?.variant || "default"} /></div>
            <div style={{ display: "flex", flex: 1 }}>
                <div style={content}>
                    <ContentLayouts />
                    {children}
                </div>
                <div style={sider}>
                    <SiderTemplates variant={config.sider?.variant || 'default'} />
                </div>
            </div>
            <div style={footer}>
                <FooterLayouts templateId={8} />
            </div>
        </div>
    );

    // sider (full height) + header + content + footer
    const layout4 = (
        <div style={{ ...baseBox, display: "flex", flexDirection: "row" }}>
            <div style={{ ...sider, height: "100%" }}><SiderTemplates variant={config.sider?.variant || 'default'} /></div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    overflow: "auto",
                }}
            >
                <div style={header}><HeaderLayouts items={headerItems} variant={config.header?.variant || "default"} /></div>
                <div style={content}>
                    <ContentLayouts />
                    {/* {children} */}
                </div>
                <div style={footer}>
                    <FooterLayouts templateId={8} />
                </div>
            </div>
        </div>
    );

    const layouts: any = {
        1: layout1,
        2: layout2,
        3: layout3,
        4: layout4,
    };

    return layouts[templateId] || layout1;
}
