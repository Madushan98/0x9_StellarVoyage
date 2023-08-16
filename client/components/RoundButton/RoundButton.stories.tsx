import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { View } from "react-native";
import { RoundButton } from "./RoundButton";
import { RoundButtonType } from "../../Models/Button";


const MyButtonMeta: ComponentMeta<typeof RoundButton> = {
  title: "RoundButton",
  component: RoundButton,
  args: {
    text: "Hello world",
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
};

export default MyButtonMeta;

type MyButtonStory = ComponentStory<typeof RoundButton>;

export const Active: MyButtonStory = (args) => <RoundButton {...args} type={RoundButtonType.Active} />;
export const Deactive: MyButtonStory = (args) => <RoundButton {...args} type={RoundButtonType.Deactive} />;

