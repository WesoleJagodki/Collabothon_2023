import { Button, Text, Box } from '@gluestack-ui/themed';
import { commonStyle } from '../CommonStyle';

export function LoginScreen({ navigation }: any) {
  return (
    <Box style={commonStyle.appScreen}>
      <Text>Login Page</Text>
      <Button onPress={() => navigation.navigate('Root')}><Text>Click here</Text></Button>
    </Box>
  );
}
