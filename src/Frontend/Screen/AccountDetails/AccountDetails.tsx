import { Button, Text, Box, Center, Image, Input, InputField, HStack } from '@gluestack-ui/themed';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

import { account_detailsScreen } from './AccountDetailsStyle';
import { commonStyle } from '../CommonStyle';

export function AccountDetails({ navigation }: any) {
  const [image, setImage] = useState<string>(require('../../Images/camera.png'));
  const [pictureStyle, setPictureStyle] = useState(account_detailsScreen.image);

  const pickImage = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setPictureStyle(account_detailsScreen.pickedPicture);
      setImage(result.assets[0].uri);
    }
  };

  return (
    <Box style={commonStyle.appScreen}>
      <HStack style={account_detailsScreen.hstack}>
        <Box onTouchEnd={() => navigation.navigate('LoginScreen')}>
          <Image
            alt="arrow_left"
            source={require('../../Images/arrow_left.png')}
            style={account_detailsScreen.arrow}
          />
        </Box>
        <Text style={account_detailsScreen.title}>Account Details</Text>
      </HStack>
      <Box style={account_detailsScreen.image_box} onTouchEnd={pickImage}>
        <Center>
          <Image alt="Camera" source={image} style={pictureStyle} />
        </Center>
      </Box>
      <Box style={account_detailsScreen.content_box}>
        <Text style={account_detailsScreen.text}>Name</Text>
        <Input style={account_detailsScreen.input}>
          <InputField style={account_detailsScreen.input_text} placeholder="Enter name" />
        </Input>
        <Text style={account_detailsScreen.text}>Surname</Text>
        <Input style={account_detailsScreen.input}>
          <InputField style={account_detailsScreen.input_text} placeholder="Enter surname" />
        </Input>
        <Text style={account_detailsScreen.text}>Birth Date</Text>
        <Input style={account_detailsScreen.input}>
          <InputField style={account_detailsScreen.input_text} placeholder="Enter birth date" />
        </Input>
        <Text style={account_detailsScreen.text}>Gender</Text>
        <Input style={account_detailsScreen.input}>
          <InputField style={account_detailsScreen.input_text} placeholder="Enter gender" />
        </Input>
        <Text style={account_detailsScreen.text}>Country</Text>
        <Input style={account_detailsScreen.input}>
          <InputField style={account_detailsScreen.input_text} placeholder="Enter country" />
        </Input>
        <Button
          style={account_detailsScreen.button}
          onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={account_detailsScreen.button_text}>CHOOSE PREFERENCES</Text>
        </Button>
      </Box>
    </Box>
  );
}
