import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  const [books, setBooks] = useState([]);
  const [formData, setFormData] = useState({
    bookName: '',
    publisher: '',
    price: '',
    availableCopies: '',
  });

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setBooks([...books, formData]);
    alert('Book added successfully');
    setFormData({
      bookName: '',
      publisher: '',
      price: '',
      availableCopies: '',
    });
  };

  return (
    <div className="container">
      <h1>Welcome to our Bookstore</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="bookName">Book Name</label>
          <input
            type="text"
            className="form-control"
            id="bookName"
            name="bookName"
            value={formData.bookName}
            onChange={handleFormChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="publisher">Publisher</label>
          <input
            type="text"
            className="form-control"
            id="publisher"
            name="publisher"
            value={formData.publisher}
            onChange={handleFormChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleFormChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="availableCopies">Available Copies</label>
          <input
            type="number"
            className="form-control"
            id="availableCopies"
            name="availableCopies"
            value={formData.availableCopies}
            onChange={handleFormChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Book
        </button>
      </form>
      <div className="book-list">
        {books.map((book, index) => (
          <div className="card book-card" key={index}>
            <img
              src="https://via.placeholder.com/150"
              className="card-img-top"
              alt="Book Cover"
            />
            <div className="card-body">
              <h5 className="card-title">{book.bookName}</h5>
              <p className="card-text">{book.publisher}</p>
              <p className="card-text">${book.price}</p>
              <p className="card-text">{book.availableCopies} copies available</p>
              <Link to={`/edit/${index}`} className="btn btn-primary mr-2">
                Edit
              </Link>
              <button
                className="btn btn-danger"
                onClick={() => setBooks(books.filter((b, i) => i !== index))}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Home;