import React from 'react'
import { Typo } from './Typo'

export default {
  title: 'Example1/Typo',
  component: Typo,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    size: { control: 'text' },
    bold: { control: 'boolean' }
  },
};

const Template = (args) => <Typo {...args}>Заголовок</Typo>; // Создаём Template


// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = Template.bind({});
Default.args = {
    size: '16px',
    bold: false
};

export const BoldText = Template.bind({});
BoldText.args = {
    size: '20px',
    bold: true
};
