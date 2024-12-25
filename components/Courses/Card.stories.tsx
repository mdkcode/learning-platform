import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Card, { CardProps } from "./Card";

export default {
  title: "components/Card",
  component: Card,
} as Meta;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Card title",
  content:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, delectus!",
  iconName: "code",
};
