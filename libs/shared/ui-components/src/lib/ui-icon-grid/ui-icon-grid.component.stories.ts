import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { UiIconGridComponent } from './ui-icon-grid.component';
import { IconGridItem, IconGridItemDescription } from './ui-icon-grid.model';

export default {
  title: 'UiIconGridComponent',
  component: UiIconGridComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<UiIconGridComponent>;

const Template: Story<UiIconGridComponent> = (args: UiIconGridComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  iconGridItem: {
    heading: 'Some Grid Heading',
    description: 'and a description',
    items: [
      {
        uuid: 'java',
        category: 'Backend',
        title: 'Java',
        iconUrl: 'https://www.vectorlogo.zone/logos/java/java-icon.svg',
      },
      {
        uuid: 'kotlin',
        category: 'Backend',
        title: 'Kotlin',
        iconUrl:
          'https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg',
      },
      {
        uuid: 'typescript',
        category: 'Frontend',
        title: 'Typescript',
        iconUrl:
          'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg',
      },
      {
        uuid: 'html',
        category: 'Frontend',
        title: 'HTML',
        iconUrl: 'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg',
      },
      {
        uuid: 'css',
        category: 'Frontend',
        title: 'CSS / SCSS',
        iconUrl: 'https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg',
      },
      {
        uuid: 'sql',
        category: 'Database',
        title: 'SQL',
        iconUrl: 'https://www.vectorlogo.zone/logos/oracle/oracle-icon.svg',
      },
    ] as IconGridItemDescription[],
  } as IconGridItem,
};
