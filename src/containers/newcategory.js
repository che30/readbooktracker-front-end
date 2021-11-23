import React from 'react';

const NewCategory = () => {
  const handleChange = (e) => {
    console.log(e.target.name);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handle submit');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          onChange={handleChange}
          name="category"
        />
        <button type="submit">
          submit
        </button>
      </form>
    </div>
  );
};
export default NewCategory;
