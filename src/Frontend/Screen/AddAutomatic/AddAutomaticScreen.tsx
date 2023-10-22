import { Text, Box, Image, VStack, Button, ButtonText, Badge } from '@gluestack-ui/themed';
import {React, useState} from 'react';
import { textStyles } from '../../TextStyle';
import { commonStyle } from '../CommonStyle';
import {addAutomatic} from "./AddAutomaticScreenStyles";
import {registrationFinishedScreen} from "../RegistrationFinished/RegistrationFinishedScreenStyle";

export function AddAutomaticScreen({ navigation }: any) {
    const [source, setSource] = useState("");

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
            <Image source={require('../../Images/camera.png')} style={addAutomatic.image}></Image>
        </Box>
        <Button
            style={registrationFinishedScreen.letsStartButton}
            onPress={() => navigation.navigate('LoginScreen')}>
            <ButtonText>UPLOAD IMAGE</ButtonText>
        </Button>
    </Box>
  );
}
