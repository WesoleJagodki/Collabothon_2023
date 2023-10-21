import axios from 'axios';

const baseUrl_User = 'http://localhost:3000/users';

export const PutUser = (user_id: number) => {
  axios
    .put(`${baseUrl_User}`, {
      user_id: user_id as number,
      first_name: 'Jarosław',
      last_name: 'Kaczyński',
      email: 'jarek1949kaczor@gmail.com',
      password: 'Kotki2',
      date_of_birth: '18/06/1949',
      sex: 'Male',
    })
    .catch((error) => {
      alert('An error has occurred');
      console.log(error);
    });
};
