import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { UiFooterComponent } from './ui-footer.component';

export default {
  title: 'UiFooterComponent',
  component: UiFooterComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<UiFooterComponent>;

const Template: Story<UiFooterComponent> = (args: UiFooterComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
