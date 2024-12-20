import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Button, { ButtonProps } from "./Button";
import { ButtonType } from "./utils";

export default {
  title: "components/Button",
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Click Me",
  buttonType: ButtonType.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Submit",
};
