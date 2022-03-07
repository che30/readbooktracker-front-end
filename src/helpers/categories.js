const getCategories = () => {
  const categories = JSON.parse(localStorage.getItem('categories'));
  return categories;
};
export default getCategories;
