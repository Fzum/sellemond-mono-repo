import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { UiSocialBtnComponent } from './ui-social-btn.component';

export default {
  title: 'UiSocialBtnComponent',
  component: UiSocialBtnComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<UiSocialBtnComponent>;

const Template: Story<UiSocialBtnComponent> = (args: UiSocialBtnComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
