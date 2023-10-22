import {
  Button,
  Text,
  Box,
  Center,
  Image,
  Input,
  InputField,
  HStack,
  FlatList,
  ScrollView,
  VStack,
  Heading,
} from '@gluestack-ui/themed';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { account_detailsScreen } from './NotificationsStyle';
import { commonStyle } from '../CommonStyle';
import { textStyles } from '../../TextStyle';

export function Notifications({ navigation }: any) {
  const baseUrl_Notification = 'http://localhost:3000/notifications';
  const [notificationEntries, setNotificationEntries] = useState<string[]>(['A', 'B']);

  const GetNotifications = () => {
    axios
      .get(`${baseUrl_Notification}`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET',
        },
      })
      .then((response) => {
        setNotificationEntries(
          response.data.map((dataEntry: any) => {
            return JSON.parse(JSON.stringify(dataEntry)).content;
          }),
        );
      });
  };

  useEffect(() => {
    GetNotifications();
  });

  return (
    <Box style={commonStyle.appScreen}>
      <HStack style={[account_detailsScreen.hstack]}>
        <Box onTouchEnd={() => navigation.navigate('RootTab')}>
          <Image
            alt="arrow_left"
            source={require('../../Images/arrow_left.png')}
            style={account_detailsScreen.arrow}
          />
        </Box>
        <Text style={account_detailsScreen.title}>Dashboard</Text>
      </HStack>
      <VStack style={{ alignItems: 'flex-start', alignContent: 'flex-start' }}>
        <FlatList
          data={notificationEntries}
          renderItem={({ item }) => (
            <Text style={[textStyles.body, { textAlign: 'left' }]}>• {item}</Text>
          )}
        />
      </VStack>
    </Box>
  );
}
