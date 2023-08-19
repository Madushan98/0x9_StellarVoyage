import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";

import { View } from "react-native";
import { ToggleSwitch } from "./Switch";

const MyToggleSwitchMeta: ComponentMeta<typeof ToggleSwitch> = {
  title: "ToggleSwitch",
  component: ToggleSwitch,
  args: {
    lable: "Hello world",
    onPressed:()=>console.log(""),
    value : false
    

  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
};

export default MyToggleSwitchMeta;

type MyToggleSwitchStories = ComponentStory<typeof ToggleSwitch>;

export const BasicSwitch: MyToggleSwitchStories = (args) => <ToggleSwitch {...args} />;
