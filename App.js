import React from 'react';
import { useState } from 'react';
import BookCreate from './pages/BookCreate';
import BookList from './pages/BookList';

// 👇️ import Routes instead of Switch 👇️
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Navbar from './components/navbar';

 function App() {
  const [books,setBooks]=useState([]); 

  const createBook=(title)=>{
    
    const updatedBooks=[...books,{id:123,title:title}];
    setBooks(updatedBooks);

    // books.push({id:123,title:title});
    console.log(books);
    // setBooks(books);

  }
  return (
  <div>
    {/* <BookList books={books}/> */}
     {/* {books.length} */}
    {/* <BookCreate onCreate={createBook} /> */}
  <Navbar/></div>);

}


export default App;