type BookProps = {
    book: {
        title: string,
        pages: number,
        isRead: boolean,
        isFavourite: boolean

    }
}


function Book({book}: BookProps) {
    return (
        <span>
            <li>
                {`${book.title} (${book.pages} páginas)`}
            </li>
        </span>
    )
}

export default Book;