import { Text, Box, Button, ButtonText } from '@gluestack-ui/themed';
import { commonStyle } from '../CommonStyle';

export function TutorialScreen({ navigation }: any) {
    return (
        <Box style={commonStyle.appScreen}>
            <Button onPress={() => { navigation.navigate("RootTab"); }}>
                <ButtonText>Skip</ButtonText>
            </Button>
            <Text>SaveQuest</Text>
        </Box >
    );
}
