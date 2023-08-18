import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { View } from "react-native";
import { IconButton } from "./IconButton";
import icon from "../../config/icon"

const IconButtonMeata: ComponentMeta<typeof IconButton> = {
  title: "IconButton",
  component: IconButton,
  args: {
    text: "Login with Google",
    icon: icon.GoogleIcon
  },
};

export default IconButtonMeata;

type IconButtonStory = ComponentStory<typeof IconButton>;

export const GoogleImageButton: IconButtonStory = (args) => <IconButton {...args}  />;
export const FacebookImageButton: IconButtonStory = (args) => <IconButton {...args} text="Login with FaceBook" icon={icon.FaceBookIcon} />;

