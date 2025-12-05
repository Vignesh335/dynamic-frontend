// FooterLayouts.jsx

/**
 * @typedef {Object} FooterCTA
 * @property {string} title
 * @property {string} [subtitle]
 * @property {string} [primaryBtn]
 * @property {string} [secondaryBtn]
 *
 * @typedef {Object} FooterNewsletter
 * @property {string} title
 * @property {string} [subtitle]
 * @property {string} [placeholder]
 * @property {string} [buttonText]
 *
 * @typedef {Object} FooterColumn
 * @property {string} title
 * @property {string[]} links
 *
 * @typedef {Object} FooterData
 * @property {string} [brand]
 * @property {number} [year]
 * @property {FooterCTA} [cta]
 * @property {FooterNewsletter} [newsletter]
 * @property {FooterColumn[]} [columns]
 * @property {string[]} [social]
 * @property {string[]} [legalLinks]
 * @property {string[]} [appDownloads]
 * @property {string[]} [sitemap]
 */

/**
 * Footer layout preview templates
 * templateId:
 *  1 = Simple row
 *  2 = Multi-column
 *  3 = CTA + links
 *  4 = Newsletter
 *  5 = Social only
 *  6 = Legal / compliance
 *  7 = Brand + app download
 *  8 = Mega nav
 *
 * @param {{
 *  templateId?: 1|2|3|4|5|6|7|8,
 *  width?: string|number,
 *  height?: string|number,
 *  data?: FooterData
 * }} props
 */

export const footerData = {
  brand: "Logy Byte",
  year: 2025,

  legalLinks: ["Privacy", "Terms", "Cookies", "Licensing", "Security"],

  social: ["linkedin", "twitter", "github", "youtube"],

  sitemap: [
    "Products",
    "Solutions",
    "Industries",
    "Developers",
    "Docs",
    "Community",
    "Careers",
    "Blog",
    "Support",
  ],

  columns: [
    { title: "Product", links: ["Overview", "Features", "Pricing", "Roadmap"] },
    { title: "Resources", links: ["Docs", "API", "Guides", "Community"] },
    { title: "Company", links: ["About", "Careers", "Partners", "Contact"] },
    { title: "Support", links: ["Help Center", "Status", "Security"] },
  ],

  cta: {
    title: "Ready to scale your platform?",
    subtitle: "Launch, manage and monitor everything in one place.",
    primaryBtn: "Get Started",
    secondaryBtn: "Contact Sales",
  },

  newsletter: {
    title: "Stay updated",
    subtitle: "Get product insights and release notes every month",
    placeholder: "Enter your email",
    buttonText: "Subscribe",
  },

  appDownloads: ["App Store", "Google Play"],
};

export default function FooterLayouts({
  templateId = 1,
  width = "100%",
  height = "auto",
  data = footerData,
}: any) {
  const theme: any = {
    bg: "#020617",
    barBg: "#020617",
    accent: "#1d4ed8",
    border: "#1f2937",
    text: "#e5e7eb",
    radius: 10,
  };

  const baseBox: any = {
    width,
    height,
    borderRadius: theme.radius,
    overflow: "hidden",
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    color: theme.text,
    background: theme.bg,
    border: `1px solid ${theme.border}`,
    display: "flex",
    flexDirection: "column",
    fontSize: 11,
  };

  const bar: any = {
    padding: "8px 14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: theme.barBg,
  };

  const smallText: any = {
    fontSize: 10,
    opacity: 0.8,
  };

  const link: any = {
    fontSize: 10,
    opacity: 0.85,
    marginLeft: 8,
  };

  const pill: any = {
    display: "inline-block",
    padding: "4px 10px",
    borderRadius: 999,
    border: `1px solid ${theme.border}`,
    fontSize: 9,
    marginRight: 6,
    opacity: 0.9,
  };

  const colTitle: any = {
    fontSize: 9,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    opacity: 0.7,
    marginBottom: 4,
  };

  const colItem: any = {
    fontSize: 9,
    opacity: 0.85,
    marginBottom: 3,
  };

  const columnsRow: any = {
    display: "flex",
    flex: 1,
    padding: "8px 14px",
    gap: 16,
  };

  const column: any = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  };

  const divider: any = {
    borderTop: `1px solid ${theme.border}`,
  };

  const centerRow: any = {
    ...bar,
    justifyContent: "center",
  };

  const brand = data.brand ?? "MyCompany";
  const year = data.year ?? new Date().getFullYear();
  const legalLinks = data.legalLinks ?? ["Privacy", "Terms"];
  const columns = data.columns ?? [
    { title: "Product", links: ["Overview", "Features", "Pricing"] },
    { title: "Resources", links: ["Docs", "API", "Blog"] },
    { title: "Company", links: ["About", "Careers", "Contact"] },
    { title: "Support", links: ["Help", "Status", "Security"] },
  ];
  const cta = data.cta ?? {
    title: "Ready to get started?",
    subtitle: "Ship your next project in days, not months.",
    primaryBtn: "Get started",
    secondaryBtn: "Contact sales",
  };
  const newsletter = data.newsletter ?? {
    title: "Stay updated",
    subtitle: "Get product news and updates.",
    placeholder: "your@email.com",
    buttonText: "Subscribe",
  };
  const social = data.social ?? ["linkedin", "twitter", "youtube", "github"];
  const appDownloads = data.appDownloads ?? ["App Store", "Google Play"];
  const sitemap = data.sitemap ?? [
    "Products",
    "Solutions",
    "Industries",
    "Docs",
    "Developers",
    "Partners",
    "Careers",
    "Blog",
    "Support",
  ];

  // 1) Simple one-row footer
  const layout1 = (
    <div style={baseBox}>
      <div style={{ ...bar, marginTop: "auto" }}>
        <div style={smallText}>
          © {year} {brand}
        </div>
        <div>
          {legalLinks.map((item: any) => (
            <span key={item} style={link}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  // 2) Multi-column footer
  const layout2 = (
    <div style={baseBox}>
      <div style={columnsRow}>
        {columns.slice(0, 4).map((col: any) => (
          <div key={col.title} style={column}>
            <div style={colTitle}>{col.title}</div>
            {col.links.slice(0, 4).map((l: any) => (
              <span key={l} style={colItem}>
                {l}
              </span>
            ))}
          </div>
        ))}
      </div>
      <div style={{ ...bar, ...divider }}>
        <span style={smallText}>
          © {year} {brand}
        </span>
        <span style={smallText}>All rights reserved</span>
      </div>
    </div>
  );

  // 3) CTA + footer links
  const layout3 = (
    <div style={baseBox}>
      {/* CTA band */}
      <div
        style={{
          padding: "10px 14px",
          background:
            "linear-gradient(135deg, rgba(56,189,248,0.15), rgba(129,140,248,0.15))",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 10,
        }}
      >
        <div>
          <div style={{ fontSize: 11, fontWeight: 600 }}>{cta.title}</div>
          {cta.subtitle && (
            <div style={{ ...smallText, marginTop: 2 }}>{cta.subtitle}</div>
          )}
        </div>
        <div>
          {cta.primaryBtn && (
            <span
              style={{
                ...pill,
                background: theme.accent,
                border: "none",
                color: "#f9fafb",
              }}
            >
              {cta.primaryBtn}
            </span>
          )}
          {cta.secondaryBtn && (
            <span style={pill}>{cta.secondaryBtn}</span>
          )}
        </div>
      </div>

      {/* Columns */}
      <div style={{ ...columnsRow, borderTop: `1px solid ${theme.border}` }}>
        {columns.slice(0, 3).map((col: any) => (
          <div key={col.title} style={column}>
            <div style={colTitle}>{col.title}</div>
            {col.links.slice(0, 3).map((l: any) => (
              <span key={l} style={colItem}>
                {l}
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div style={{ ...bar, ...divider }}>
        <span style={smallText}>
          © {year} {brand}
        </span>
        <div>
          {legalLinks.slice(0, 2).map((item: any) => (
            <span key={item} style={link}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  // 4) Newsletter footer
  const layout4 = (
    <div style={baseBox}>
      {/* Newsletter row */}
      <div style={{ padding: "10px 14px" }}>
        <div style={{ fontSize: 11, fontWeight: 600 }}>{newsletter.title}</div>
        {newsletter.subtitle && (
          <div style={{ ...smallText, marginTop: 2 }}>
            {newsletter.subtitle}
          </div>
        )}
        <div
          style={{
            marginTop: 6,
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <div
            style={{
              flex: 1,
              borderRadius: 999,
              border: `1px solid ${theme.border}`,
              padding: "4px 8px",
              fontSize: 9,
              opacity: 0.8,
            }}
          >
            {newsletter.placeholder}
          </div>
          <span
            style={{
              ...pill,
              background: "#22c55e",
              border: "none",
              color: "#022c22",
            }}
          >
            {newsletter.buttonText}
          </span>
        </div>
      </div>

      {/* Links row */}
      <div
        style={{
          ...bar,
          ...divider,
          fontSize: 10,
          justifyContent: "flex-start",
          gap: 12,
        }}
      >
        {(columns[0]?.links ?? ["Product", "Docs", "Blog", "Support"])
          .slice(0, 4)
          .map((l: any) => (
            <span key={l}>{l}</span>
          ))}
      </div>

      {/* Bottom */}
      <div style={{ ...bar, ...divider, marginTop: "auto" }}>
        <span style={smallText}>
          © {year} {brand}
        </span>
        <span style={smallText}>
          {social.slice(0, 3).join(" • ")}
        </span>
      </div>
    </div>
  );

  // 5) Social icons footer
  const layout5 = (
    <div style={baseBox}>
      <div style={{ ...centerRow, flex: 1 }}>
        <div style={{ display: "flex", gap: 8 }}>
          {social.slice(0, 4).map((s: any) => (
            <span key={s} style={pill}>
              {s[0].toUpperCase()}
            </span>
          ))}
        </div>
      </div>
      <div style={{ ...centerRow, ...divider }}>
        <span style={smallText}>
          © {year} {brand} • All rights reserved
        </span>
      </div>
    </div>
  );

  // 6) Legal / compliance footer
  const layout6 = (
    <div style={baseBox}>
      <div style={{ padding: "10px 14px" }}>
        <div style={smallText}>
          © {year} {brand}
        </div>
        <div
          style={{
            marginTop: 6,
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
          }}
        >
          {legalLinks.map((item: any) => (
            <span key={item} style={pill}>
              {item}
            </span>
          ))}
        </div>
      </div>
      <div style={{ ...centerRow, ...divider, marginTop: "auto" }}>
        <span style={smallText}>Legal & Compliance</span>
      </div>
    </div>
  );

  // 7) Brand + app download footer
  const layout7 = (
    <div style={baseBox}>
      <div style={{ padding: "10px 14px", flex: 1 }}>
        <div style={{ fontSize: 13, fontWeight: 700 }}>{brand}</div>
        <div style={{ ...smallText, marginTop: 4 }}>
          A short tagline about your product or company.
        </div>
        <div style={{ marginTop: 8 }}>
          {appDownloads.map((store: any) => (
            <span key={store} style={pill}>
              {store}
            </span>
          ))}
        </div>
      </div>
      <div style={{ ...bar, ...divider }}>
        <span style={smallText}>
          © {year} {brand}
        </span>
        <div>
          {legalLinks.slice(0, 2).map((item: any) => (
            <span key={item} style={link}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  // 8) Mega navigation / sitemap footer
  const layout8 = (
    <div style={baseBox}>
      <div
        style={{
          padding: "10px 14px",
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        {sitemap.slice(0, 12).map((item: any) => (
          <span key={item} style={colItem}>
            {item}
          </span>
        ))}
      </div>
      <div style={{ ...bar, ...divider, marginTop: "auto" }}>
        <span style={smallText}>
          © {year} {brand}
        </span>
        <div>
          {legalLinks.slice(0, 3).map((item: any) => (
            <span key={item} style={link}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const layouts: any = {
    1: layout1,
    2: layout2,
    3: layout3,
    4: layout4,
    5: layout5,
    6: layout6,
    7: layout7,
    8: layout8,
  };

  return layouts[templateId] || layout1;
}
