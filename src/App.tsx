import Book from "./components/book";
import Footer from "./components/footer";
import Header from "./components/header"



const book1 = {
  title: "O Senhor dos Anéis",
  pages: 1178,
  isRead: true,
  isFavourite: true
};

const book2 = {
  title: "1984",
  pages: 328,
  isRead: false,
  isFavourite: false
};

const book3 = {
  title: "Dom Casmurro",
  pages: 256,
  isRead: true,
  isFavourite: false
};


function App() {

  return (
    <div>
      <Header />
      <p>Meus Livros</p>
      <ul>
        <Book
          book={book1}
        />
        <Book
          book={book2}
        />
        <Book
          book={book3}
        />
      </ul>
      <Footer />
    </div>
  )
}

export default App;
