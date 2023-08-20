import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { View } from "react-native";
import icon from "../../config/icon"
import DestinationCarousel from "./DestinationCarasole";

const DestinationCarouselMeta: ComponentMeta<typeof DestinationCarousel> = {
  title: "DestinationCarouselCard",
  component: DestinationCarousel,
  args:{
   
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 32 }}>
        <Story />
      </View>
    ),
  ],
};

export default DestinationCarouselMeta;

type DestinationCarouselStory = ComponentStory<typeof DestinationCarousel>;

export const BasicDestinationCarousel: DestinationCarouselStory = () => <DestinationCarousel   />;

