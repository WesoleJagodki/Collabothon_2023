import { Text, Box, Image, Button, ButtonText } from '@gluestack-ui/themed';

import { tutorialScreen } from './TutorialScreenStyle';
import { commonStyle } from '../CommonStyle';

import PiggyImage from '../../Images/piggy_bank_coins.png';
import PiggyGirlImage from '../../Images/piggy_girl_coin.png';
import PiggyGirlCalendarImage from '../../Images/piggy_girl_calendar_coin.png';

export function TutorialScreen({
  navigation,
  imageSource,
  imageStyle,
  imageAlt,
  heading,
  description,
  nextButtonText,
  nextNavigationTarget,
}: any) {
  return (
    <Box style={commonStyle.appScreen}>
      <Text
        style={tutorialScreen.skipButton}
        onPress={() => {
          navigation.navigate('RootTab');
        }}>
        Skip
      </Text>
      <Image alt={imageAlt} source={imageSource} style={imageStyle} />
      <Text style={tutorialScreen.tutorialHeading}>{heading}</Text>
      <Text style={tutorialScreen.tutorialDesc}>{description}</Text>
      <Button
        style={tutorialScreen.buttonNext}
        onPress={() => {
          navigation.navigate(nextNavigationTarget);
        }}>
        <ButtonText>{nextButtonText}</ButtonText>
      </Button>
    </Box>
  );
}

export const Tutorial1 = ({ navigation }: any) => {
  return (
    <TutorialScreen
      navigation={navigation}
      imageSource={PiggyImage}
      imageStyle={tutorialScreen.tutorialImage1}
      imageAlt="PiggyImage"
      heading="Welcome to SaveQuest!"
      description="Dive into a world where saving isn't just smart, it's an adventure.
        Begin your journey towards financial freedom with fun challenges and quests."
      nextButtonText="Next"
      nextNavigationTarget="TutorialScreen2"
    />
  );
};

export const Tutorial2 = ({ navigation }: any) => {
  return (
    <TutorialScreen
      navigation={navigation}
      imageSource={PiggyGirlImage}
      imageStyle={tutorialScreen.tutorialImage2}
      imageAlt="PiggyGirlImage"
      heading="Set Your Goals, Start Your Quests!"
      description="Whether it's a dream vacation or a new gadget,
                set your savings goals and embark on quests tailored to help
                you achieve them. Every challenge brings you closer to your aspirations."
      nextButtonText="Next"
      nextNavigationTarget="TutorialScreen3"
    />
  );
};

export const Tutorial3 = ({ navigation }: any) => {
  return (
    <TutorialScreen
      navigation={navigation}
      imageSource={PiggyGirlCalendarImage}
      imageStyle={tutorialScreen.tutorialImage3}
      imageAlt="PiggyGirlCalendarImage"
      heading="Earn Rewards, Boost Your Savings!"
      description="As you conquer quests and hit milestones,
                earn exciting rewards and points. Exchange them for vouchers,
                discounts, and more. Saving was never this rewarding!"
      nextButtonText="Let's Start"
      nextNavigationTarget="RootTab"
    />
  );
};
