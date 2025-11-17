import type { StorybookConfig } from '@storybook/react-vite';

export const config = {
  stories: ['../src/lib/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  addons: [],
} as const satisfies Partial<StorybookConfig>;
