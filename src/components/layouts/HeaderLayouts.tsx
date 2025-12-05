
const base: any = {
    bar: {
        width: "100%",
        height: 64,
        background: "#0f172a",
        color: "#e5e7eb",
        fontFamily: "system-ui, sans-serif",
        display: "flex",
        alignItems: "center",
        padding: "0 24px",
        boxSizing: "border-box",
    },
    logo: { fontWeight: 700, fontSize: 20 },
    links: { display: "flex", gap: 24, fontSize: 15 },
    right: { display: "flex", gap: 16, marginLeft: "auto" },
    link: { cursor: "pointer", opacity: 0.85 },
    button: {
        padding: "8px 16px",
        borderRadius: 6,
        border: "none",
        fontSize: 14,
        cursor: "pointer",
        background: "#3b82f6",
        color: "white",
    },
};

export default function Header({
    variant = "default",
    brand = "MyProject",
    headerItems,
    links = ["Home", "Features", "Pricing", "Contact"],
}: any) {
    switch (variant) {
        case "centered":
            return <CenteredHeader brand={brand} links={links} />;
        case "split":
            return <SplitHeader brand={brand} links={links} />;
        case "minimal":
            return <MinimalHeader brand={brand} />;
        case "tabs":
            return <TabsHeader brand={brand} links={links} />;
        case "search":
            return <SearchHeader brand={brand} links={links} />;
        default:
            return <DefaultHeader brand={brand} links={links} />;
    }
}

function DefaultHeader({ brand, links }: any) {
    return (
        <header style={base.bar}>
            <div style={base.logo}>{brand}</div>
            <div style={{ ...base.links, marginLeft: 40 }}>
                {links.map((l: any) => (
                    <span key={l} style={base.link}>{l}</span>
                ))}
            </div>
            <div style={base.right}>
                <button style={base.button}>Sign In</button>
            </div>
        </header>
    );
}

function CenteredHeader({ brand, links }: any) {
    return (
        <header style={{ ...base.bar, justifyContent: "center", gap: 48 }}>
            <div style={{ ...base.links, order: -1 }}>
                {links.map((l: any) => (
                    <span key={l} style={base.link}>{l}</span>
                ))}
            </div>
            <div style={base.logo}>{brand}</div>
        </header>
    );
}

function SplitHeader({ brand, links }: any) {
    return (
        <header style={base.bar}>
            <div style={base.logo}>{brand}</div>
            <div style={{ ...base.links, margin: "0 auto" }}>
                {links.map((l: any) => (
                    <span key={l} style={base.link}>{l}</span>
                ))}
            </div>
            <div style={base.right}>
                <button style={base.button}>Login</button>
            </div>
        </header>
    );
}
function MinimalHeader({ brand }: any) {
    return (
        <header style={{ ...base.bar, justifyContent: "center" }}>
            <div style={base.logo}>{brand}</div>
        </header>
    );
}
function TabsHeader({ brand, links }: any) {
    return (
        <header style={{ ...base.bar, flexDirection: "column", height: 80 }}>
            <div style={{ ...base.logo, marginBottom: 6 }}>{brand}</div>
            <div style={{ ...base.links }}>
                {links.map((l: any) => (
                    <span
                        key={l}
                        style={{
                            ...base.link,
                            borderBottom: "2px solid transparent",
                            paddingBottom: 4,
                        }}
                    >
                        {l}
                    </span>
                ))}
            </div>
        </header>
    );
}
function SearchHeader({ brand, links }: any) {
    return (
        <header style={base.bar}>
            <div style={base.logo}>{brand}</div>
            <input
                placeholder="Search..."
                style={{
                    marginLeft: 32,
                    flex: 1,
                    padding: "10px 14px",
                    borderRadius: 6,
                    border: "1px solid #334155",
                    background: "#1e293b",
                    color: "#fff",
                }}
            />
            <div style={{ ...base.links, marginLeft: 32 }}>
                {links.map((l: any) => (
                    <span key={l} style={base.link}>{l}</span>
                ))}
            </div>
        </header>
    );
}
