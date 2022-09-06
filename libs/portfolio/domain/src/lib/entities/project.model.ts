export interface Project {
  uuid: string;
  title: string;
  info: ProjectDescriptionHtml;
  imgUrl?: string;
  link?: string;
}

export interface ProjectDescriptionHtml {
  role: string;
  technologies: ProjectTechnology[];
}

export interface ProjectTechnology {
  title: string;
  color: 'green' | 'red' | 'blue' | 'gray' | 'violet';
}
