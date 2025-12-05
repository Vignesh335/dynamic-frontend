export interface MenuItem {
  label: string;
  key: string;
  route?: string;               // e.g. "/profile"
  additionalPaths?: string[];   // e.g. ["/profile/settings"]
  children?: MenuItem[];        // nested menus
}

export interface LayoutConfig {
  theme: string;                // "light" | "dark"
  header_items: MenuItem[];
  sider_items: MenuItem[];
}

export interface ThemesConfig {
  [key: string]: {
    primary: string;
    secondary: string;
    textColor: string;
  };
}

export interface AppSectionInfo {
  name: string;
  version: string;
}

export interface AppConfig {
  app: AppSectionInfo;

  themes: ThemesConfig;

  layouts: {
    user: LayoutConfig;
    admin: LayoutConfig;
  };
}
