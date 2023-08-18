import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import BottomBar from "./BottomBar";
import { View } from "react-native";

const BottomBarMeta: ComponentMeta<any> = {
  title: "Bottombar",
  component: BottomBar,
};

export default BottomBarMeta;

type MyBottomBarStory = ComponentStory<typeof BottomBar>;

export const Basic: MyBottomBarStory = () => <BottomBar />;
