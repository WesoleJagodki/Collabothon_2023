import axios from 'axios';

const baseUrl_User = 'http://localhost:3000/users';

export const GetUser = () => {
  axios
    .get(`${baseUrl_User}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
      },
    })
    .then((response) => {
      console.log('Get DB data: ' + JSON.stringify(response.data));
    });
};

