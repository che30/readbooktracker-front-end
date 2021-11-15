import axios from 'axios';

const sendLoginRequest = async (email, password, authorization) => {
  console.log('hit the create user');
  const result = await axios.post('http://127.0.0.1:3001/auth/login', {
    email,
    password,
    Authorization: authorization,
  });
  console.log(result.data);
  return result;
};
export default sendLoginRequest;
