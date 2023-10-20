import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { NavigationContainer } from '@react-navigation/native';

import { RootTab } from './src/Navigator/RootTab';

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <RootTab />
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
