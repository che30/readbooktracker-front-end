import axios from 'axios';

const sendLoginRequest = async (email, password) => {
  let result;
  try {
    result = await axios.post('http://127.0.0.1:3001/auth/login', {
      email,
      password,
    });
    localStorage.setItem('auth_token',
      JSON.stringify(result.data.auth_token));
    const cats = await axios.get('http://127.0.0.1:3001/cats',
      { headers: { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJleHAiOjE0ODg5MDEyNjR9.7txvLgDzFdX5NIUGYb3W45oNIXinwB_ITu3jdlG5Dds` } });
    localStorage.setItem('categories', JSON.stringify(cats.data));
    return result;
  } catch (error) {
    return error;
  }
};
export default sendLoginRequest;
