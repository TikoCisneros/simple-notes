import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Note from './Note';
import { INote } from '@simple-notes/models';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Note',
  component: Note,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Note>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Note> = (args) => <Note {...args} />;

const DEFAULT_NOTE_DATA: INote = {
  id: 'noteID',
  text: 'Start creating Redux application',
  color: 'orange',
};

export const Orange = Template.bind({});
Orange.args = {
  data: DEFAULT_NOTE_DATA,
  index: 2,
};

export const Yellow = Template.bind({});
Yellow.args = {
  data: { ...DEFAULT_NOTE_DATA, color: 'yellow' },
  index: 1,
};

export const Green = Template.bind({});
Green.args = {
  data: { ...DEFAULT_NOTE_DATA, color: 'green' },
  index: 2,
};
