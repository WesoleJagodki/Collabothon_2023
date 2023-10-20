import { Button, Text, View } from '@gluestack-ui/themed';

export function LoginScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Page</Text>
      <Button onPress={() => navigation.navigate('Root')}>Click here</Button>
    </View>
  );
}
