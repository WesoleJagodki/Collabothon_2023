import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { NavigationContainer } from '@react-navigation/native';

import { RootNavigator } from './src/Navigation/RootNavigator';

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
