import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { RootTab } from './src/Navigator/RootTab';
import { WelcomeScreen } from './src/Screen/Welcome/WelcomeScreen';

const Stack = createStackNavigator();
export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Root" component={WelcomeScreen} options={{ title: 'Home' }} />
          <Stack.Screen name="RootTab" component={RootTab} />
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
