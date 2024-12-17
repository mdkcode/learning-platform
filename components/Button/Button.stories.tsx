import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

export default {
  title: "components/Button",
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Click Me",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Submit",
  className:
    "px-6 py-2 bg-blue-300 text-white font-semibold rounded-lg shadow-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400",
};
