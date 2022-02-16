import jwtDecode from 'jwt-decode';
import data from '../helpers/data';

const getAllBooks = async () => {
  const token = data();
  const decoded = jwtDecode(token);
  try {
    const rawResponse = await fetch(`https://mysterious-eyrie-66534.herokuapp.com/users/:${decoded.user_id}/books`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const content = await rawResponse.json();
    return content;
  } catch (error) {
    return error;
  }
};
export default getAllBooks;
