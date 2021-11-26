import React from "react";
const NewBook = () =>{

return(
  <div>
<form>
  <input type="text"
  name="name"
  placeholder="name"
  value={book.name}
  onChange={handleChange} />
  <input type="text" 
  name="author"
  placeholder="author" 
  value={book.author} 
  onChange={handleChange}/>
  <input 
  type="text" 
  name="ISBN" 
  placeholder="ISBN" 
  value={book.isbn} 
  onChange={handleChange}/>
  <input type="text" 
  name="pages" 
  placeholder="number of pages" 
  value={book.numberOfPages}
  onChange={handleChange} />
  <button type="submit" onClick={handleSubmit}>
          submit
  </button>
</form>
  </div>
)
} 
export default NewBook;