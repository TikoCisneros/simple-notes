import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tooltip from './Tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip {...args}>
    <span>I am a text with tooltip {args.position}</span>
  </Tooltip>
);

export const Top = Template.bind({});
Top.args = {
  content: 'Top text',
};

export const Bottom = Template.bind({});
Bottom.args = {
  content: 'Bottom text',
  position: 'bottom',
};

export const Left = Template.bind({});
Left.args = {
  content: 'Left text',
  position: 'left',
};

export const Right = Template.bind({});
Right.args = {
  content: 'Right text',
  position: 'right',
};
