import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { UiHeroComponent } from './ui-hero.component';

export default {
  title: 'UiHeroComponent',
  component: UiHeroComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<UiHeroComponent>;

const Template: Story<UiHeroComponent> = (args: UiHeroComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  title: '',
  descriptionHtml: '',
};
