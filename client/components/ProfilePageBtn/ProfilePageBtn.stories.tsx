import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { View } from "react-native";
import { ProfilePageBtn } from "./ProfilePageBtn";

const ProfilePageBtnMeta: ComponentMeta<typeof ProfilePageBtn> = {
  title: "ProfilePageBtn",
  component: ProfilePageBtn,
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

export default ProfilePageBtnMeta;

type ProfilePageBtnStory = ComponentStory<typeof ProfilePageBtn>;

export const Basic: ProfilePageBtnStory = (args) => <ProfilePageBtn {...args} />;
