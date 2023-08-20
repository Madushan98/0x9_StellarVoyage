import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { View } from 'react-native';
import CurrentPay from './CurrentPay';

const CurrentPayMeta: ComponentMeta<typeof CurrentPay> = {
  title: 'CurrentPay',
  component: CurrentPay,
  // args: {
  //   cardNumber: '1234567890123456',
  // },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
};

export default CurrentPayMeta;

type CurrentPayStory = ComponentStory<typeof CurrentPay>;

export const Basic: CurrentPayStory = (args) => <CurrentPay {...args} />;
