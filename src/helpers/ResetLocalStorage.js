const ResetStore = (content) => {
  if (Object.keys(content).length !== 8) {
    localStorage.setItem('data', null);
  }
};
export default ResetStore;
