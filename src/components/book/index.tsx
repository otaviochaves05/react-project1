import "./books.css"

type BookProps = {
    book: {
        id: number,
        title: string,
        pages: number,
        isRead: boolean,
        isFavorite: boolean

    }
}


function Book({ book }: BookProps) {
    const favouriteClass = book.isFavorite ? 'favorite-book' : '';
    return (

        <li className={`book-item ${favouriteClass}`}>
            <span>{ book.isRead ? "✅" : "⏳" }</span>
            {" "}
            <span>
                {`${book.title} (${book.pages} páginas)`}
            </span>
            {" "}
            { book.isFavorite && <span>🏅</span> }
        </li>
    )
}

export default Book;