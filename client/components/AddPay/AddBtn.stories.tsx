import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { View } from "react-native";
import { AddBtn } from "./AddBtn";

const AddBtnMeta: ComponentMeta<typeof AddBtn> = {
  title: "AddBtn",
  component: AddBtn,
  args: {
    text: "Add",
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 32 }}>
        <Story />
      </View>
    ),
  ],
};

export default AddBtnMeta;

type AddBtnStory = ComponentStory<typeof AddBtn>;

export const Basic: AddBtnStory = (args) => <AddBtn {...args} />;
