import backEndUrl from '../helpers/backendLink';

const CurrentUserMeasurement = async () => {
  try {
    const rawResponse = await fetch(`${backEndUrl()}/api/user-measurements`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('auth_token'))}`,
      },
    });
    const content = await rawResponse.json();
    return content;
  } catch (error) {
    return error;
  }
};
export default CurrentUserMeasurement;
