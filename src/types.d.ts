export interface ComponentItem {
  type: string;
  heading?: string;
  subtext?: string;
  content?: string;
  fields?: FormField[];
  buttons?: FormButton[];
  columns?: string[];
  items?: StatItem[];
  chartType?: string;
  dataApi?: string;
  valueApi?: string;
  submitApi?: string;
}

export interface FormField {
  type: string;
  name: string;
  label: string;
  validation?: string;
}

export interface FormButton {
  type: string;
  label: string;
}

export interface StatItem {
  label: string;
  value?: number;
  valueApi?: string;
}

export interface Page {
  path: string;
  layout: string | null;
  title: string;
  roles: string[];
  fullscreen?: boolean;
  components: ComponentItem[];
}

export interface Layout {
  name: string;
  theme: string;
  components: string[];
}

export interface MenuItem {
  label: string;
  path: string;
  icon?: string;
}
