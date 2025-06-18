import Book from "./components/book";
import Footer from "./components/footer";
import Header from "./components/header"
import Title from "./components/title";
import { booksList } from "./data";
import "./App.css"


function App() {

  return (
    <div className="app">
      <Header />
      <div className="container">
        <Title>
          <p>Meus Livros</p>
        </Title>

        <ul className="books-list">
          {booksList.map((book) => (
            <Book
              key={book.id}
              book={book}
            />
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default App;
