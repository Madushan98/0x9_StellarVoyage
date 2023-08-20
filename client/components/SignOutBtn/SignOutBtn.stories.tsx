import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { View } from "react-native";
import { SignOutBtn } from "./SignOutBtn";

const SignOutBtnMeta: ComponentMeta<typeof SignOutBtn> = {
  title: "SignOutBtn",
  component: SignOutBtn,
  args: {
    text: "Sign Out",
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 32 }}>
        <Story />
      </View>
    ),
  ],
};

export default SignOutBtnMeta;

type SignOutBtnStory = ComponentStory<typeof SignOutBtn>;

export const Basic: SignOutBtnStory = (args) => <SignOutBtn {...args} />;
