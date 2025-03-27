import Book from "./components/book";
import Footer from "./components/footer";
import Header from "./components/header"

const booksList = [
  {
    id: 1,
    title: "O Senhor dos Anéis",
    pages: 1178,
    isRead: true,
    isFavourite: true
  },
  {
    id: 2,
    title: "1984",
    pages: 328,
    isRead: false,
    isFavourite: false
  },
  {
    id: 3,
    title: "Dom Casmurro",
    pages: 256,
    isRead: true,
    isFavourite: false
  },
  {
    id: 4,
    title: "A Revolução dos Bichos",
    pages: 152,
    isRead: true,
    isFavourite: false
  },
  {
    id: 5,
    title: "O Pequeno Príncipe",
    pages: 96,
    isRead: true,
    isFavourite: true
  },
  {
    id: 6,
    title: "Crime e Castigo",
    pages: 671,
    isRead: false,
    isFavourite: false
  },
  {
    id: 7,
    title: "Harry Potter e a Pedra Filosofal",
    pages: 223,
    isRead: true,
    isFavourite: true
  },
  {
    id: 8,
    title: "A Arte da Guerra",
    pages: 112,
    isRead: false,
    isFavourite: false
  }
]

function App() {

  return (
    <div>
      <Header />
      <p>Meus Livros</p>
      <ul>
        { booksList.map((book) => (
          <Book
            key = { book.id }
            book = { book }
          />
        ))}
      </ul>
      <Footer />
    </div>
  )
}

export default App;
