import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { View } from "react-native";
import AddPayBtn from "./AddPayBtn";

const AddPayBtnMeta: ComponentMeta<typeof AddPayBtn> = {
  title: "AddPayBtn",
  component: AddPayBtn,
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

export default AddPayBtnMeta;

type AddPayBtnStory = ComponentStory<typeof AddPayBtn>;

export const Basic: AddPayBtnStory = (args) => <AddPayBtn {...args} />;
