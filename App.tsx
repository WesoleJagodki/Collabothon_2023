import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';

import { RootStack } from './src/Frontend/Navigator/RootStack';

export default function App() {
  useFonts({
    'ws-regular': require('./assets/fonts/WorkSans-Regular.ttf'),
    'ws-bold': require('./assets/fonts/WorkSans-Bold.ttf'),
  });

  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
