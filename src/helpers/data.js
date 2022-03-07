const data = () => {
  const data = JSON.parse(localStorage.getItem('auth_token'));
  return data;
};
export default data;
