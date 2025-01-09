import type { StorybookConfig } from "@storybook/nextjs";
import { Configuration } from "webpack";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: true,
  },
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config: Configuration) => {
    const imageRule = config.module?.rules?.find((rule) => {
      const test = (rule as { test?: RegExp }).test;
      if (!test) {
        return false;
      }
      return test.test(".svg");
    });

    if (imageRule) {
      (imageRule as { exclude?: RegExp }).exclude = /\.svg$/;
      config.module?.rules?.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });
    }

    return config;
  },
};
export default config;
