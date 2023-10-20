import { Button, Text, Box } from '@gluestack-ui/themed';

export function LoginScreen({ navigation }: any) {
  return (
    <Box style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Page</Text>
        <Button onPress={() => navigation.navigate('Root')}><Text>Click here</Text></Button>
    </Box>
  );
}
