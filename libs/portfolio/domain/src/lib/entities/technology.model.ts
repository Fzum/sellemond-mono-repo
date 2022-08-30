export interface Framework {
  uuid: string;
  title: string;
  descriptionHtml: string;
  imgUrl: string;
  link: string;
}

export interface TechstackItemDescription {
  category: string;
  title: string;
  iconUrl: string;
}

export interface TechstackItem {
  heading: string;
  description: string;
  items: TechstackItemDescription[];
}

export interface TechstackSectionContent {
  frameworks: Framework[];
  techstackItems: TechstackItem[];
}
