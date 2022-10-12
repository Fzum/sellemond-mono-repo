import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { UiToggleSwitchComponent } from './ui-toggle-switch.component';

export default {
  title: 'UiToggleSwitchComponent',
  component: UiToggleSwitchComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<UiToggleSwitchComponent>;

const Template: Story<UiToggleSwitchComponent> = (
  args: UiToggleSwitchComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  title: 'Toggle Me',
  isChecked: false,
};
