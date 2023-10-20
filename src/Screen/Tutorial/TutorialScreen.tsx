import { Text, Box, Button } from '@gluestack-ui/themed';
import { commonStyle } from '../CommonStyle';

export function TutorialScreen({ navigation }: any) {
    return (
        <Box style={commonStyle.appScreen}>
            <Button>Skip</Button>
            <Text>SaveQuest</Text>
        </Box >
    );
}
