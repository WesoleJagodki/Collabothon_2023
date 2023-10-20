import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { NavigationContainer } from '@react-navigation/native';

import { RootStack } from './src/Navigator/RootStack'

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
