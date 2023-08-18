import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { View } from "react-native";
import { ImageButton } from "./ImageButton";
import icon from "../../config/icon"

const MyButtonMeta: ComponentMeta<typeof ImageButton> = {
  title: "ImageButton",
  component: ImageButton,
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

type MyButtonStory = ComponentStory<typeof ImageButton>;

export const GoogleImageButton: MyButtonStory = (args) => <ImageButton {...args}  />;
export const FacebookImageButton: MyButtonStory = (args) => <ImageButton {...args} text="Login with FaceBook" icon={icon.FaceBookIcon} />;

