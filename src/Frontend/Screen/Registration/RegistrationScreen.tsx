import {
  Button,
  Text,
  Box,
  ButtonText,
  Center,
  Image,
  Input,
  InputField,
} from '@gluestack-ui/themed';

import { commonStyle } from '../CommonStyle';
import { registrationScreen } from './RegistrationScreenStyle';

export function RegistrationScreen({ navigation }: any) {
  return (
    <Box style={commonStyle.appScreen}>
      <Box onTouchEnd={() => navigation.navigate('LoginScreen')}>
        <Image
            alt="arrow_left"
            source={require('../../Images/arrow_left.png')}
            style={registrationScreen.arrow}
        />
      </Box>
      <Box style={registrationScreen.image_box} onTouchEnd={() => navigation.navigate('LoginScreen')}>
        <Center>
          <Image
            alt="Camera"
            source={require('../../Images/camera.png')}
            style={registrationScreen.image}
          />
        </Center>
      </Box>
      <Box style={registrationScreen.content_box}>
        <Text style={registrationScreen.text}>Name</Text>
        <Input style={registrationScreen.input}>
          <InputField style={registrationScreen.input_text} placeholder="Enter name" />
        </Input>
        <Text style={registrationScreen.text}>Surname</Text>
        <Input style={registrationScreen.input}>
          <InputField style={registrationScreen.input_text} placeholder="Enter surname" />
        </Input>
        <Text style={registrationScreen.text}>Birth Date</Text>
        <Input style={registrationScreen.input}>
          <InputField style={registrationScreen.input_text} placeholder="Enter birth date" />
        </Input>
        <Text style={registrationScreen.text}>Gender</Text>
        <Input style={registrationScreen.input}>
          <InputField style={registrationScreen.input_text} placeholder="Enter gender" />
        </Input>
        <Text style={registrationScreen.text}>Country</Text>
        <Input style={registrationScreen.input}>
          <InputField style={registrationScreen.input_text} placeholder="Enter country" />
        </Input>
        <Button
          style={registrationScreen.button}
          onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={registrationScreen.button_text}>SIGN UP</Text>
        </Button>
      </Box>
    </Box>
  );
}
