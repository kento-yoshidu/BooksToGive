import React from "react"

import DisplayBookImage from "./DisplayBookImage"

import { Book } from "../../types/Book"

const Book = ({ books }: { books: Book[] }) => (
  <>
    {books.map((book) => (
      <div key={`${book.id}`}>
        <h2>{book.title}</h2>

        <DisplayBookImage
          isbn={book.isbn}
        />

        <p>{book.rating}</p>
      </div>
    ))}
  </>
)

export default Book
