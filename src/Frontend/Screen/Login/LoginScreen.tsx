import React from 'react';
import { Button, Text, Box } from '@gluestack-ui/themed';

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
      <Button onPress={() => GetUser()}>
        <Text>Get DB data</Text>
      </Button>
      <Button onPress={() => PostUser()}>
        <Text>Post DB data</Text>
      </Button>
      <Button onPress={() => PutUser(3)}>
        <Text>Put DB data</Text>
      </Button>
    </Box>
  );
}
