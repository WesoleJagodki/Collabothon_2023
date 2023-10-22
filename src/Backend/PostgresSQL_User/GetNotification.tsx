import axios from 'axios';

const baseUrl_Notification = 'http://localhost:3000/notifications';

export const GetNotification = () => {
  axios
    .get(`${baseUrl_Notification}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
      },
    })
    .then((response) => {
        for(let i = 0; i <= 10; i++) {
            console.log('Notifications: ' + JSON.parse(JSON.stringify(response.data[i])).content);
        }
    });
};
