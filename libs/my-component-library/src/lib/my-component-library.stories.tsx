import type { Meta, StoryObj } from '@storybook/react-vite';
import { MyComponentLibrary  } from './my-component-library';
import { expect } from 'storybook/test';

const meta = {
  component: MyComponentLibrary,
  title: 'MyComponentLibrary',
} satisfies Meta<typeof MyComponentLibrary>;
export default meta;

type Story = StoryObj<typeof MyComponentLibrary>;

export const Primary = {
  args: {
  },
} satisfies Story;

