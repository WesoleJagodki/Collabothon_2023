import { Button, Text, View } from '@gluestack-ui/themed';

export function WelcomeScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Test 123</Text>
      <Button onPress={() => navigation.navigate('LoginScreen')}>Click here</Button>
    </View>
  );
}
