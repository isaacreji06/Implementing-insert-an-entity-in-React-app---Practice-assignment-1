import React from "react";
import { useNavigate } from "react-router-dom";

function AddBooks() {
  const navigate=useNavigate()
    const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/")
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f4f4f4",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#ffffff",
          padding: "2rem",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          width: "400px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "1rem", color: "#333" }}>
          Add Books
        </h2>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="Title" style={{ display: "block", marginBottom: "0.5rem", color: "#555" }}>
            Title
          </label>
          <input
            type="text"
            id="Title"
            name="Title"
            placeholder="Enter the Title"
            required
            style={{
              width: "100%",
              padding: "0.8rem",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="Author" style={{ display: "block", marginBottom: "0.5rem", color: "#555" }}>
            Author
          </label>
          <input
            type="text"
            id="Author"
            name="Author"
            placeholder="Enter the Author"
            required
            style={{
              width: "100%",
              padding: "0.8rem",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="Description" style={{ display: "block", marginBottom: "0.5rem", color: "#555" }}>
            Description
          </label>
          <textarea
            id="Description"
            name="Description"
            placeholder="Enter the Description"
            required
            style={{
              width: "100%",
              padding: "0.8rem",
              border: "1px solid #ccc",
              borderRadius: "5px",
              minHeight: "100px",
            }}
          ></textarea>
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "0.8rem",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBooks;
