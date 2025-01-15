import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Stats, { StatProps } from "./Stats";

export default {
  title: "components/Stats",
  component: Stats,
} as Meta;

const Template: StoryFn<StatProps> = (args) => <Stats {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Amout",
  value: "7,041",
};
