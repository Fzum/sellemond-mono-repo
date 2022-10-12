import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { UiCardComponent } from './ui-card.component';

export default {
  title: 'UiCardComponent',
  component: UiCardComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<UiCardComponent>;

const Template: Story<UiCardComponent> = (args: UiCardComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  isAnimatedAll: false,
  isAnimatedScale: false,
  isAnimatedBackground: false,
};
