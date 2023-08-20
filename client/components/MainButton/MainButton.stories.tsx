import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { View } from "react-native";
import { MainButton } from "./MainButton";

const MainButtonMeta: ComponentMeta<typeof MainButton> = {
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

export default MainButtonMeta;

type MainButtonStory = ComponentStory<typeof MainButton>;

export const Basic: MainButtonStory = (args) => <MainButton {...args} />;
