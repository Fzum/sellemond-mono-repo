import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { UiHeadingComponent } from './ui-heading.component';

export default {
  title: 'UiHeadingComponent',
  component: UiHeadingComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<UiHeadingComponent>;

const Template: Story<UiHeadingComponent> = (args: UiHeadingComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  heading: '',
};
