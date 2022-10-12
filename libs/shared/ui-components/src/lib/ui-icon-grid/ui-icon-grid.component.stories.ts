import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { UiIconGridComponent } from './ui-icon-grid.component';

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
    heading: '',
    description: '',
    items: [],
  },
};
