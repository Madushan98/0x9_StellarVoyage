
import { addDecorator } from '@storybook/react-native';
import { loadAsync } from 'expo-font';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const loadFonts = async () => {
  await loadAsync({
    'Monserrata': require('../assets/fonts/Mon.ttf'),
  });
};

loadFonts();
