import "./App.css";
import { useState, useEffect } from "react";

import Input from "./components/input/Input";
import Button from "./components/button/Button";
import Card from "./components/card/Card";

import atomicImage from "./assets/atomic.jpg";
import cleanCodeImage from "./assets/clean code.jpg";
import deepWorkImage from "./assets/deepwork.jpg";
import purposeImage from "./assets/purpose.jpg";
import alchemistImage from "./assets/the alchemist.jpg";
import bigImage from "./assets/think big.jpg";

import BookCard from "./components/bookcard/BookCard";
import Modal from "./components/modal/Modal";
import Alert from "./components/alert/Alert";
import Loader from "./components/loader/Loader";


function App() {
   const [selectedBook, setSelectedBook] = useState(null);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [showAlert, setShowAlert] = useState(false);
   const [loading, setLoading] = useState(true);

   function handleViewDetails(book) {
  setSelectedBook(book);
   setIsModalOpen(true);
}
function handleAddToLibrary() {
  setShowAlert(true);
}
useEffect(() => {
  setTimeout(() => {
    setLoading(false);
  }, 2000);
}, []);

  return (
<main className="App">

  <header className="hero-section">

    <div className="hero-content">
      <span className="library-label">YOUR DIGITAL LIBRARY</span>

      <h1>ReadStack</h1>

      <p>
        Discover, organize, and explore books that inspire you.
      </p>
    </div>

  </header>
<section className="search-section">

    <Input
      placeholder="Search for a book, author or category..."
    />

  </section>
   <Alert
    show={showAlert}
    type="success"
    message="Book added to your library!"
  />

      {loading ? (
  <Loader />
) : (
      <section className="book-section">
      <p className="featured">Featured Books</p>

      <div className="book-grid">

    <BookCard
    title="Atomic Habits"
    author="James Clear"
    category="Self development"
    image={atomicImage}

     onViewDetails={() =>
    handleViewDetails({
      title: "Atomic Habits",
      author: "James Clear",
      category: "Self Development",
      image:atomicImage

    })
  }
    />

   <BookCard
   title="The Alchemist"
   author="Paulo Coelho"
   category="Fiction"
   image={alchemistImage}

    onViewDetails={() =>
    handleViewDetails({
      title: "The Alchemist",
      author: " Paulo Coelho",
      category: "Fiction",
      image:alchemistImage
    })
  }
    />

   <BookCard
   title="Clean Code"
   author="Robert C. Martin"
   category="Programming"
   image={cleanCodeImage}

    onViewDetails={() =>
    handleViewDetails({
      title: "Clean Code",
      author: "Rrobert C.Martin",
      category: "progrramming",
      image:cleanCodeImage
    })
  }
   />

   <BookCard
   title="Deep Work"
   author="Cal Newport"
   category="Self-Development"
   image={deepWorkImage}

    onViewDetails={() =>
    handleViewDetails({
      title: "Deeep Work",
      author: "Cal Newport",
      category: "Self Development",
      image:deepWorkImage
    })
  }
    />

    <BookCard
   title="Purpose Driven Life"
   author="Rick Warren"
   category="Purpose"
   image={purposeImage}
   
    onViewDetails={() =>
    handleViewDetails({
      title: "Purpose Driven Life",
      author: "Rick Warren",
      category: "Purpose Discovery",
      image:purposeImage
    })
  }
    />
    <BookCard
   title="Think Big"
   author="Ben Carson"
   category="Personal Development"
   image={bigImage}

     onViewDetails={() =>
    handleViewDetails({
      title: "Think Big",
      author: "Ben Carson",
      category: "personal Development",
      image: bigImage
    })
  }
    />

   </div>

   <Modal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
>
  {selectedBook && (
    <>
      <img
        src={selectedBook.image}
        alt={selectedBook.title}
      />

      <h2>{selectedBook.title}</h2>

      <p>{selectedBook.author}</p>

      <p>{selectedBook.category}</p>

      <Button
       text="Add to Library"
        onClick={handleAddToLibrary}
      />
    </>
  )}


</Modal>

   </section>
)}

  </main>
  );
}

export default App;