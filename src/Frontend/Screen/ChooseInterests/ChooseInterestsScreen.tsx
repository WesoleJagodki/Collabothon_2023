import { Text, Box, Image, Button, ButtonText, Badge } from '@gluestack-ui/themed';
import { commonStyle } from '../CommonStyle';
import { StyleSheet, TouchableOpacity, ScrollView, View } from 'react-native';
import { chooseInterestsScreen } from './ChooseInterestsScreenStyle';
import { signuploginScreen } from '../SignupLogin_Screen/SignupLoginScreenStyle';
import { tutorialScreen } from '../Tutorial/TutorialScreenStyle';

function BadgeImage({ imageSource, headerText, contentText }: any) {
  return (
    <Badge shadow={4} rounded={20} style={chooseInterestsScreen.badge}>
      <Box style={chooseInterestsScreen.imageBox}>
        <Image source={imageSource} style={chooseInterestsScreen.image} />
        <Text style={chooseInterestsScreen.headerBadgeText}>{headerText}</Text>
        <Text style={chooseInterestsScreen.contentBadgeText}>{contentText}</Text>
      </Box>
    </Badge>
  );
}

export function ChooseInterestsScreen({ navigation }: any) {
  return (
    <Box style={commonStyle.appScreen}>
      <Box style={chooseInterestsScreen.headerBox}>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Image
            source={require('../../Images/arrow_left.png')}
            style={chooseInterestsScreen.arrow}
          />
        </TouchableOpacity>
        <Text style={chooseInterestsScreen.text1}>Personalize Your Journey</Text>
      </Box>
      <Text style={chooseInterestsScreen.text2}>
        Help us understand your preferences to curate challenges and offers tailored just for you!
      </Text>
      <ScrollView>
        <BadgeImage
          imageSource={require('../../Images/Nature.png')}
          headerText={'Travel'}
          contentText={'Embark on new adventures with exclusive travel deals.'}
        />
        <BadgeImage
          imageSource={require('../../Images/Food.png')}
          headerText={'Dining Out'}
          contentText={'Savor the flavors with special dining offers.'}
        />
        <BadgeImage
          imageSource={require('../../Images/Accessories.png')}
          headerText={'Dining Out'}
          contentText={'Savor the flavors with special dining offers.'}
        />
        <BadgeImage
          imageSource={require('../../Images/Clothing.png')}
          headerText={'Dining Out'}
          contentText={'Savor the flavors with special dining offers.'}
        />
      </ScrollView>
      <Button
        style={chooseInterestsScreen.buttonNext}
        onPress={() => {
          navigation.navigate('SignupLoginScreen');
        }}>
        <ButtonText>wkn</ButtonText>
      </Button>
    </Box>
  );
}

// <Image source={require('../../Images/login.png')} style={signuploginScreen.loginImage} />
// <Text style={signuploginScreen.loginText1}>
//     SaveQuest
// </Text>
// <Text style={signuploginScreen.loginText2}>
//     Chart Your Course, Complete Quests, and Celebrate Your Savings Success!
// </Text>
// <Button
//     style={signuploginScreen.button1}
//     onPress={() => navigation.navigate('LoginScreen')}
// >
//     <ButtonText>LOG IN</ButtonText>
// </Button>
// <Button
//     style={signuploginScreen.button2}
//     onPress={() => navigation.navigate('RegistrationScreen')}
// >
//     <ButtonText>SING IN</ButtonText>
// </Button>
