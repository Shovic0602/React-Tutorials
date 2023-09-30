import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import {books} from './books'
// const img =
//   "https://images-eu.ssl-images-amazon.com/images/I/91EtFGJvG8L._AC_UL600_SR600,400_.jpg";

// const author = "Jordan moore";
// const title = "the art and culture";


// const names = ["john", "susan", "peter"];
// const NewNames = names.map((name) => {
//   return <h1>{name}</h1>;
// });

// console.log(NewNames);

const BookList = () => {
  
  const getBook = (id) => {
    const book = books.find((book)=> book.id === id);
    console.log(book);
  }


  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, author, title, id } = book;
        return <Book book2={book} key={book.id} getBook={getBook} />;
      })}
    </section>
  );
};


const Book = (props) => {
  const { img, title, author, children ,id} = props.book2;
  const {getBook} = props;
 
  const getSingleBook = () =>{
    getBook(id);
  }
 
  return (
    <article className="book">
      <img src={img} alt="Atomic habits" />
      <h2>{title}</h2>
      <button onClick={getSingleBook} >Click me</button>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
