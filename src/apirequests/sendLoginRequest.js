import axios from 'axios';

const sendLoginRequest = async (email, password) => {
  try {
    const result = await axios.post('http://127.0.0.1:3001/auth/login', {
      email,
      password,
    });
    localStorage.setItem('data',
      JSON.stringify(result.data));
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export default sendLoginRequest;
