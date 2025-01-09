import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Navigation, { NavigationProps } from "./Navigation";
import { ButtonType } from "components/Button/utils";

export default {
  title: "components/Navigation",
  component: Navigation,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
} as Meta;

const Template: StoryFn<NavigationProps> = (args) => <Navigation {...args} />;

export const Header = Template.bind({});
Header.args = {
  buttonType: ButtonType.PRIMARY,
};

export const Footer = Template.bind({});
Footer.args = {
  buttonType: ButtonType.NAVIGATION,
};
