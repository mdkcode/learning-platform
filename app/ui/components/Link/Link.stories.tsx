import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Link, { LinkProps } from "./Link";

export default {
  title: "components/Link",
  component: Link,
} as Meta;

const Template: StoryFn<LinkProps> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Link somewhere",
};
