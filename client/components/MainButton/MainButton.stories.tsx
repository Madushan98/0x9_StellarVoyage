import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { View } from "react-native";
import { MainButton } from "./MainButton";

const MyButtonMeta: ComponentMeta<typeof MainButton> = {
  title: "MainButton",
  component: MainButton,
  args: {
    text: "Hello world",
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 32 }}>
        <Story />
      </View>
    ),
  ],
};

export default MyButtonMeta;

type MyButtonStory = ComponentStory<typeof MainButton>;

export const Basic: MyButtonStory = (args) => <MainButton {...args} />;
