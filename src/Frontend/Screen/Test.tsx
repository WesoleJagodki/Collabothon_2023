import { Text, Box } from '@gluestack-ui/themed';

import { commonStyle } from './CommonStyle';

export function Test({ navigation }: any) {
  return (
    <Box style={commonStyle.appScreen}>
      <Text>Test</Text>
    </Box>
  );
}
