export interface IconGridItemDescription {
  uuid: string;
  category: string;
  title: string;
  iconUrl: string;
}

export interface IconGridItem {
  heading: string;
  description: string;
  items: IconGridItemDescription[];
}
