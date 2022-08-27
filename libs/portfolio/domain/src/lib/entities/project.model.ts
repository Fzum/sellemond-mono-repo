export interface Project {
  uuid: string;
  title: string;
  descriptionHtml: ProjectDescriptionHtml;
  imgUrl: string;
}

export interface ProjectDescriptionHtml {
  domain: string;
  technical: string;
}
