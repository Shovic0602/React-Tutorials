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
    author: "Jordan moore2",
    title: "the art and culture2",
    id: 2,
  },
];

// const names = ["john", "susan", "peter"];
// const NewNames = names.map((name) => {
//   return <h1>{name}</h1>;
// });

// console.log(NewNames);

const BookList = () => {
  const value  = 'Sake and bake';
   const displayTitle = () => {
     console.log(value);
   };
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, author, title, id } = book;
        return <Book book2={book} key={book.id} displayTitle={displayTitle} />;
      })}
    </section>
  );
};


const Book = (props) => {
  const { img, title, author, children } = props.book2;
  const {displayTitle} = props;
 
  return (
    <article className="book">
      <img src={img} alt="Atomic habits" />
      <h2>{title}</h2>
      <button onClick={displayTitle} >Click me</button>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
