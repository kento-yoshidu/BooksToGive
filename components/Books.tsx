import React, { useState } from "react"

import DisplayBookImage from "./DisplayBookImage"

import { Book } from "../types/Book"

const Book = ({ books }: { books: Book[] }) => {
  const initialData = books.map((book) => ({ ...book }))
  const [bookData, setBookData] = useState(books)
  const [filteredCategory, setFilteredCategory] = useState<string | null>(null)

  const sortByRatingASC = () => {
    const sortedData = bookData.sort((a, b) => {
      if (a["rating"] < b["rating"]) return 1
      if (a["rating"] > b["rating"]) return -1
      return 0
    })

    setBookData([...sortedData])
  }

  const filterByCategory = (e: string) => {
    setFilteredCategory(e)

    const filteredData = bookData.filter((book) => {
      return book.category === e
    })
    setBookData([...filteredData])

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  const reset = () => {
    setFilteredCategory("")
    setBookData([...initialData])
  }

  return (
    <>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8 md:mb-16">
        <button
          onClick={sortByRatingASC}
          className="bg-white hover:bg-gray-100 text-sm md:text-base text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          📈 レートが高い順に並び変え
        </button>

        <p>絞り込み : 
          {filteredCategory && (
            <>
              <button
                className="ml-2 mr-1 bg-white hover:bg-gray-100 text-xs font-semibold p-1 border border-gray-400 rounded shadow"
                onClick={reset}
              >
              ❌ 
              </button>
              <span>{filteredCategory}</span>
            </>
          )}
        </p>
      </div>

      <p className="text-xl">・ {bookData.length}冊の本</p>

      {bookData.map((book) => {
        let star = "⭐️".repeat(book.rating)

        if (star.length < 10) {
          star = star.padEnd((star.length + ((10 - star.length) / 2)), "★")
        }

        return (
          <div
            className="mt-6 pb-6 border-b-2 border-gray-300"
            key={`${book.id}`}
          >
            <DisplayBookImage
              isbn={book.isbn}
            />

            <p className="mb-4">カテゴリー： 
              <button
                onClick={() => filterByCategory(book.category)}
                className="ml-2 bg-white hover:bg-gray-100 text-gray-800 text-sm font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              >
                {book.category}
              </button>
            </p>

            <p className="text-gray-500">{star}</p>
          </div>
        )})
      }
    </>
  )
}

export default Book
