import data from '../helpers/data';

const CurrentUserMeasurement = async () => {
  const user = data();
  try {
    const rawResponse = await fetch(`http://127.0.0.1:3001/users/:${user.id}/measurments`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.auth_token}`,
      },
    });
    const content = await rawResponse.json();
    return content;
  } catch (error) {
    return error;
  }
};
export default CurrentUserMeasurement;
