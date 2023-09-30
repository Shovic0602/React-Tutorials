import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
// const img =
//   "https://images-eu.ssl-images-amazon.com/images/I/91EtFGJvG8L._AC_UL600_SR600,400_.jpg";

// const author = "Jordan moore";
// const title = "the art and culture";

const books = [
  {
    img: "https://images-eu.ssl-images-amazon.com/images/I/91EtFGJvG8L._AC_UL600_SR600,400_.jpg",
    author: "Jordan moore",
    title: "the art and culture",
    id: 1,
  },
  {
    img: "https://images-eu.ssl-images-amazon.com/images/I/91EtFGJvG8L._AC_UL600_SR600,400_.jpg",
    author: "Jordan moore",
    title: "the art and culture",
    id: 2,
  },
];

// const names = ["john", "susan", "peter"];
// const NewNames = names.map((name) => {
//   return <h1>{name}</h1>;
// });

// console.log(NewNames);

const BookList = () => {
  return (
    <section className="booklist">
      <EventExamples />
      {books.map((book) => {
        const { img, author, title, id } = book;
        return <Book book2={book} key={book.id} />;
      })}
    </section>
  );
};

const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log(e.target);
    console.log(e.target.value);
    console.log(e.target.name);
    console.log("handle form input");
  };
  const handleClick = () => {
    alert("I was clicked");
  };
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log('form submitted')
  };

  return (
    <section>
      <form onSubmit={handleFormSubmission}>
      <h2>Typical Form</h2>
      <input
        type="text"
        name="example"
        onChange={handleFormInput}
        style={{ margin: "1rem 0" }}
      />
      </form>
      <button onClick={handleClick}>Click me</button>
    </section>
  );
};

const Book = (props) => {
  const { img, title, author, children } = props.book2;
  return (
    <article className="book">
      <img src={img} alt="Atomic habits" />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
