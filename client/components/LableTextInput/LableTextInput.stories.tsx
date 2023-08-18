import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { View } from "react-native";
import LableTextInputField from "./LableTextInput";



const MyButtonMeta: ComponentMeta<typeof LableTextInputField> = {
  title: "LableInputField",
  component: LableTextInputField,
  args:{
    inputType:"expirationDate",
    label:"16 digit number",
    placeholder:"Date",
  }
};

export default MyButtonMeta;

type LableInputStory = ComponentStory<typeof LableTextInputField>;

export const BasicLableInputField: LableInputStory = (args) => <LableTextInputField {...args}  />;

