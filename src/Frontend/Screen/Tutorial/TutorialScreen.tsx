import { Text, Box, Button, ButtonText } from '@gluestack-ui/themed';

import { commonStyle } from '../CommonStyle';

import PiggyImage from '../../Images/piggy_bank_coins.svg';
import { welcomeScreen } from '../Welcome/WelcomeScreenStyle';
import { tutorialScreen } from './TutorialScreenStyle';

export function TutorialScreen({ navigation }: any) {
  return (
    <Box style={commonStyle.appScreen}>
      <Text
        style={tutorialScreen.skipButton}
        onPress={() => {
          navigation.navigate('RootTab');
        }}>
        Skip
      </Text>
      <Image alt="piggy" size="full" source={PiggyImage} style={tutorialScreen.tutorialImage} />
      <Text style={tutorialScreen.tutorialHeading}>Welcome to SaveQuest!</Text>
      <Text style={tutorialScreen.tutorialDesc}>
        Dive into a world where saving isn't just smart, it's an adventure. Begin your journey
        towards financial freedom with fun challenges and quests.
      </Text>
    </Box>
  );
}
