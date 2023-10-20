import axios from 'axios';

const baseUrl_User = 'http://localhost:3000/users';

export const PostUser = () => {
  axios
    .post(`${baseUrl_User}`, {
      first_name: 'Example',
      last_name: 'Example',
      email: 'example@gmail.com',
      password: 'Example',
      date_of_birth: '00/00/0000',
      sex: 'Example',
    })
    .then((response) => {
      console.log('Post Data to DB: ' + JSON.stringify(response.data));
    });
};
