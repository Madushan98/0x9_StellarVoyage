
import { addDecorator } from '@storybook/react-native';
import { loadAsync } from 'expo-font';
import Ionicons from "@expo/vector-icons/Ionicons"

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
    'Mulish': require('../assets/fonts/Mulish.ttf'),
    'MazzardH':require('../assets/fonts/Mazzard.ttf'),
    'Mazzard':require('../assets/fonts/MazzardH.ttf')
  });
};

loadFonts();
