import { Button, Text, Box } from '@gluestack-ui/themed';
import React from 'react';

import { GetUser } from '../../../Backend/PostgresSQL_User/GetUser';
import { PostUser } from '../../../Backend/PostgresSQL_User/PostUser';
import { PutUser } from '../../../Backend/PostgresSQL_User/PutUser';

export function LoginScreen({ navigation }: any) {
  return (
    <Box style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Page</Text>
      <Button onPress={() => navigation.navigate('Root')}>
        <Text>Click here</Text>
      </Button>
    </Box>
  );
}
