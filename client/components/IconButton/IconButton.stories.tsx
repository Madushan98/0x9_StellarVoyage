import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { View } from "react-native";
import { IconButton } from "./IconButton";
import icon from "../../config/icon"

const MyButtonMeta: ComponentMeta<typeof IconButton> = {
  title: "IconButton",
  component: IconButton,
  args: {
    text: "Login with Google",
    icon: icon.GoogleIcon
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

type MyButtonStory = ComponentStory<typeof IconButton>;

export const GoogleIconButton: MyButtonStory = (args) => <IconButton {...args}  />;
export const FacebookIconButton: MyButtonStory = (args) => <IconButton {...args} text="Login with FaceBook" icon={icon.FaceBookIcon} />;

