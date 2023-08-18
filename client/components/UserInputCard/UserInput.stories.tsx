import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { View } from "react-native";;
import { RoundButtonType } from "../../Models/Button";
import { UserInput } from "./UserInput";


const RoundButtonMeta: ComponentMeta<typeof UserInput> = {
  title: "UserInput",
  component: UserInput,
  args: {
    lable: "Hello world",
    onChange:(text)=>console.log(text)
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
};

export default RoundButtonMeta;

type UserInputStory = ComponentStory<typeof UserInput>;

export const Active: UserInputStory = (args) => <UserInput {...args} />;

