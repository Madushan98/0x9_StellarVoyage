import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { View } from "react-native";
import { ChangeBtn } from "./ChangeBtn";

const ChangeButtonMeta: ComponentMeta<typeof ChangeBtn> = {
  title: "ChangeBtn",
  component: ChangeBtn,
  args: {
    text: "Change",
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 32 }}>
        <Story />
      </View>
    ),
  ],
};

export default ChangeButtonMeta;

type ChangeBtnStory = ComponentStory<typeof ChangeBtn>;

export const Basic: ChangeBtnStory = (args) => <ChangeBtn {...args} />;
