import jwtDecode from 'jwt-decode';
import data from '../helpers/data';

const CurrentUserMeasurement = async () => {
  const token = data();
  const decoded = jwtDecode(token);
  try {
    const rawResponse = await fetch(`http://127.0.0.1:3001/users/:${decoded.user_id}/measurments`, {
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
export default CurrentUserMeasurement;
