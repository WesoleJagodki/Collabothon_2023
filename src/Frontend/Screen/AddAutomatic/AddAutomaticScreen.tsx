import { Text, Box, Image, VStack, Button, ButtonText, Badge } from '@gluestack-ui/themed';
import * as ImagePicker from 'expo-image-picker';
import React, {useState} from 'react';
import { commonStyle } from '../CommonStyle';
import {addAutomatic} from "./AddAutomaticScreenStyles";
import {registrationFinishedScreen} from "../RegistrationFinished/RegistrationFinishedScreenStyle";
import {account_detailsScreen} from "../AccountDetails/AccountDetailsStyle";

export function AddAutomaticScreen({ navigation }: any) {
    const [source, setSource] = useState<string>(require('../../Images/camera.png'));
    const [pictureStyle, setPictureStyle] = useState(addAutomatic.image);

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
            //setPictureStyle(account_detailsScreen.pickedPicture);
            setSource(result.assets[0].uri);
        }
    };

  return (
    <Box style={commonStyle.appScreen}>
        <Box shadow={4} rounded={120} style={addAutomatic.toggleBox}>
            <Badge shadow={4} rounded={120} style={addAutomatic.toggleBadge}>
                <Text style={addAutomatic.toggleText1}>Automatic</Text>
            </Badge>
            <Text style={addAutomatic.toggleText2}>Manual</Text>
        </Box>
        <Text style={addAutomatic.headerText}>Scan your receipt</Text>
        <Box style={addAutomatic.imageBox}>
            <Image source={source} style={addAutomatic.image}></Image>
        </Box>
        <Button
            style={registrationFinishedScreen.letsStartButton}
            onPress={() => navigation.navigate('LoginScreen')}>
            <ButtonText onPress={() => pickImage()}>UPLOAD IMAGE</ButtonText>
        </Button>
    </Box>
  );
}
