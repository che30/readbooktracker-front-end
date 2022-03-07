import jwtDecode from 'jwt-decode';
import backEndUrl from '../helpers/backendLink';
import data from '../helpers/data';

const getAllBooks = async () => {
  const decoded = jwtDecode(data());
  try {
    const rawResponse = await fetch(`${backEndUrl()}/api/users/${decoded.user_id}/books`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${data()}`,
      },
    });
    const content = await rawResponse.json();
    return content;
  } catch (error) {
    return error;
  }
};
export default getAllBooks;
