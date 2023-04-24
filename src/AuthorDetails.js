import React, { useState } from 'react';
import axios from 'axios';
import { Button, Table } from 'react-bootstrap';

const AuthorDetails = () => {
  const [authors, setAuthors] = useState([]);

  const handleShowAuthorDetails = () => {
    axios
      .get('http://jsonplaceholder.typicode.com/users')
      .then((response) => {
        const authorData = response.data.map((author) => ({
          id: author.id,
          name: author.name,
          email: author.email,
        }));
        setAuthors(authorData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h1>Author Details</h1>
      <div className="d-flex justify-content-end mb-3">
        <Button variant="primary" onClick={handleShowAuthorDetails}>
          Show Author Details
        </Button>
      </div>
      {authors.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {authors.map((author) => (
              <tr key={author.id}>
                <td>{author.name}</td>
                <td>{author.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>No author details available. Click the button above to fetch them.</p>
      )}
    </div>
  );
};

export default AuthorDetails;