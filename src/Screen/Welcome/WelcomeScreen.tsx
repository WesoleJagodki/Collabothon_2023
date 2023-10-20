import { Button, Text, Box } from '@gluestack-ui/themed';

export function WelcomeScreen({ navigation }: any) {
  return (
    <Box style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Test 123</Text>
      <Button onPress={() => navigation.navigate('LoginScreen')}><Text>Click here</Text></Button>
    </Box>
  );
}
