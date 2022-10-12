import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { UiButtonComponent } from './ui-button.component';

export default {
  title: 'UiButtonComponent',
  component: UiButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<UiButtonComponent>;

const Template: Story<UiButtonComponent> = (args: UiButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  isAnimatedBounce: false,
};
