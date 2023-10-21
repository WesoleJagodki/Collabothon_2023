import { Button, Text, Box, Center, Image, Input, InputField, HStack } from '@gluestack-ui/themed';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';

import { account_detailsScreen } from './AccountDetailsStyle';
import { commonStyle } from '../CommonStyle';
import axios from 'axios';

export function AccountDetails({ navigation }: any) {
  const [image, setImage] = useState<string>(require('../../Images/camera.png'));
  const [pictureStyle, setPictureStyle] = useState(account_detailsScreen.image);
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [dateOfBirth, setDateOfBirth] = React.useState('');
  const [sex, setSex] = React.useState('');
  const baseUrl_User = 'http://localhost:3000/users';

  const PutUser = (user_id: number) => {
    axios
      .put(`${baseUrl_User}`, {
        user_id: user_id as number,
        first_name: firstName,
        last_name: lastName,
        date_of_birth: dateOfBirth,
        sex: sex,
      })
      .catch((error) => {
        alert('An error has occurred');
        console.log(error);
      })
      .then((response) => {
        navigation.navigate('LoginScreen');
      });
  };

  const ChangeAccountDetail = () => {
    PutUser(7);
  };

  ImagePicker.useMediaLibraryPermissions();
  ImagePicker.useCameraPermissions();

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
          <InputField
            style={account_detailsScreen.input_text}
            placeholder="Enter name"
            onChangeText={setFirstName}
          />
        </Input>
        <Text style={account_detailsScreen.text}>Surname</Text>
        <Input style={account_detailsScreen.input}>
          <InputField
            style={account_detailsScreen.input_text}
            placeholder="Enter surname"
            onChangeText={setLastName}
          />
        </Input>
        <Text style={account_detailsScreen.text}>Birth Date</Text>
        <Input style={account_detailsScreen.input}>
          <InputField
            style={account_detailsScreen.input_text}
            placeholder="Enter birth date"
            onChangeText={setDateOfBirth}
          />
        </Input>
        <Text style={account_detailsScreen.text}>Gender</Text>
        <Input style={account_detailsScreen.input}>
          <InputField
            style={account_detailsScreen.input_text}
            placeholder="Enter gender"
            onChangeText={setSex}
          />
        </Input>
        <Text style={account_detailsScreen.text}>Country</Text>
        <Input style={account_detailsScreen.input}>
          <InputField style={account_detailsScreen.input_text} placeholder="Enter country" />
        </Input>
        <Button style={account_detailsScreen.button} onPress={() => ChangeAccountDetail()}>
          <Text style={account_detailsScreen.button_text}>CHOOSE PREFERENCES</Text>
        </Button>
      </Box>
    </Box>
  );
}
