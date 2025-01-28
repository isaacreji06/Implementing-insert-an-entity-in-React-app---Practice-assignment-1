// src/components/Home.jsx

import React from "react";
import BookCard from "./components/BookCard";
import books from "./booksData";
import "./Home.css"; // Import the CSS for styling
import { Link, Navigate, useNavigate } from "react-router-dom";
import AddBooks from "./AddBooks";

const Home = () => {
  const navigate = useNavigate();
  const addBook=()=>{
    navigate("/addbook")
  }
  return (
    <div className="home-container">
      <button onClick={addBook}>Add Book</button>
      <h1>Book Library</h1>
      <div className="books-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
