// Sider.jsx
import React from "react";

const base: any = {
    root: {
        height: "100%",
        background: "#020617",
        color: "#e5e7eb",
        fontFamily: "system-ui, sans-serif",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
    },
    item: {
        padding: "10px 16px",
        fontSize: 14,
        cursor: "pointer",
        opacity: 0.9,
    },
    sectionLabel: {
        padding: "12px 16px 4px",
        fontSize: 11,
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        opacity: 0.5,
    },
    activeItem: {
        background: "#0f172a",
        borderRadius: 8,
    },
};

// default items
const defaultItems = ["Dashboard", "Projects", "Teams", "Reports", "Settings"];

export default function SiderTemplates({
    variant = "default",        // 'default' | 'compact' | 'grouped' | 'profile' | 'pill'
    items = defaultItems,
    width,                      // optional override
}: any) {
    switch (variant) {
        case "compact":
            return <CompactSider items={items} width={width} />;
        case "grouped":
            return <GroupedSider width={width} />;
        case "profile":
            return <ProfileSider items={items} width={width} />;
        case "pill":
            return <PillSider items={items} width={width} />;
        case "default":
        default:
            return <DefaultSider items={items} width={width} />;
    }
}

function DefaultSider({ items, width }: any) {
    return (
        <aside
            style={{
                ...base.root,
                width: width || 220,
                padding: "16px 12px",
            }}
        >
            <div
                style={{
                    fontWeight: 700,
                    fontSize: 18,
                    marginBottom: 16,
                    padding: "0 8px",
                }}
            >
                App Menu
            </div>

            {items.map((item: any, index: any) => (
                <div
                    key={item}
                    style={{
                        ...base.item,
                        ...(index === 0 ? base.activeItem : {}),
                        borderRadius: 6,
                    }}
                >
                    {item}
                </div>
            ))}
        </aside>
    );
}

function CompactSider({ items, width }: any) {
    return (
        <aside
            style={{
                ...base.root,
                width: width || 72,
                alignItems: "center",
                paddingTop: 16,
                paddingBottom: 16,
                gap: 12,
            }}
        >
            <div
                style={{
                    width: 36,
                    height: 36,
                    borderRadius: 12,
                    background: "#2563eb",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: 18,
                }}
            >
                A
            </div>

            <div
                style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    marginTop: 8,
                }}
            >
                {items.map((item: any, index: any) => (
                    <div
                        key={item}
                        title={item}
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 999,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 14,
                            background: index === 0 ? "#1d4ed8" : "transparent",
                        }}
                    >
                        {item[0]}
                    </div>
                ))}
            </div>

            <div
                style={{
                    width: 32,
                    height: 32,
                    borderRadius: 999,
                    border: "1px solid #334155",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                }}
            >
                ?
            </div>
        </aside>
    );
}
function GroupedSider({ width }: any) {
    const groups = [
        {
            label: "Main",
            items: ["Overview", "Analytics", "Activity"],
        },
        {
            label: "Management",
            items: ["Users", "Roles", "Permissions"],
        },
        {
            label: "System",
            items: ["Integrations", "Logs", "Settings"],
        },
    ];

    return (
        <aside
            style={{
                ...base.root,
                width: width || 240,
                padding: "16px 12px",
            }}
        >
            <div
                style={{
                    fontWeight: 700,
                    fontSize: 18,
                    padding: "0 8px 8px",
                }}
            >
                Control Center
            </div>

            <div style={{ flex: 1, overflow: "auto" }}>
                {groups.map((group) => (
                    <div key={group.label}>
                        <div style={base.sectionLabel}>{group.label}</div>
                        {group.items.map((item, idx) => (
                            <div
                                key={item}
                                style={{
                                    ...base.item,
                                    margin: "2px 8px",
                                    ...(item === "Overview" ? base.activeItem : {}),
                                }}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </aside>
    );
}
function ProfileSider({ items, width }: any) {
    return (
        <aside
            style={{
                ...base.root,
                width: width || 240,
                padding: "16px 16px 12px",
            }}
        >
            {/* User */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 20,
                }}
            >
                <div
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 999,
                        background: "#1d4ed8",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 600,
                    }}
                >
                    V
                </div>
                <div>
                    <div style={{ fontSize: 14, fontWeight: 600 }}>Vignesh</div>
                    <div style={{ fontSize: 12, opacity: 0.6 }}>Product Manager</div>
                </div>
            </div>

            {/* Nav */}
            <div style={{ flex: 1 }}>
                {items.map((item: any, index: any) => (
                    <div
                        key={item}
                        style={{
                            ...base.item,
                            ...(index === 0 ? base.activeItem : {}),
                            borderRadius: 8,
                        }}
                    >
                        {item}
                    </div>
                ))}
            </div>

            {/* Bottom actions */}
            <div style={{ borderTop: "1px solid #1f2937", paddingTop: 12 }}>
                <div style={base.item}>Help Center</div>
                <div style={{ ...base.item, opacity: 0.8 }}>Sign Out</div>
            </div>
        </aside>
    );
}

function PillSider({ items, width }: any) {
    return (
        <aside
            style={{
                ...base.root,
                width: width || 220,
                padding: "20px 14px",
                background: "linear-gradient(180deg,#020617,#020617,#0f172a)",
            }}
        >
            <div
                style={{
                    fontWeight: 700,
                    fontSize: 18,
                    marginBottom: 18,
                    padding: "0 4px",
                }}
            >
                Workspace
            </div>

            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
                {items.map((item: any, index: any) => (
                    <div
                        key={item}
                        style={{
                            ...base.item,
                            margin: "0 2px",
                            borderRadius: 999,
                            background: index === 0 ? "#1d4ed8" : "transparent",
                            border: index === 0 ? "1px solid #60a5fa" : "1px solid transparent",
                        }}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </aside>
    );
}
