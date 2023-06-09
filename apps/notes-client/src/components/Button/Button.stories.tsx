import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Yellow = Template.bind({});
Yellow.args = {};

export const Orange = Template.bind({});
Orange.args = { color: 'orange' };

export const Green = Template.bind({});
Green.args = { color: 'green' };
