import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { View } from "react-native";
import { CarouselComp } from "./Carousel";

const CarouselCompStoryMeta: ComponentMeta<typeof CarouselComp> = {
  title: "CarouselComp",
  component: CarouselComp,
  args: {
    text: "Hello world",
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
};

export default CarouselCompStoryMeta;

type CarouselCompStory = ComponentStory<typeof CarouselComp>;

export const Basic: CarouselCompStory = (args) => <CarouselComp  />;
