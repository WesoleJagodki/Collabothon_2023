import { Text, Box } from '@gluestack-ui/themed';

import { commonStyle } from './CommonStyle';

export function Dashboard({ navigation }: any) {
  return (
    <Box style={commonStyle.appScreen}>
      <Text>Dashboard</Text>
    </Box>
  );
}
