import React, { Suspense, useState } from "react"

import DisplayBookImage from "./DisplayBookImage"

import { Book } from "../types/Book"

/*
const setNewBooks = (books: Book[], page: number) => {
  // オブジェクトを条件ごとに10件抜き出して返す

  return [{
    id: 1,
    isbn: "999",
    category: "test",
    rating: 5
  }]
}
*/

const Book = ({ books, pagination }: { books: Book[], pagination: number }) => {
  // const newBooks = setNewBooks(books, pagination)

  const initialData = books.map((book) => ({ ...book }))
  // const [bookData, setBookData] = useState(newBooks)
  const [bookData, setBookData] = useState(books)

  const [filteredCategory, setFilteredCategory] = useState<string | null>(null)

  const sortByRatingASC = () => {
    window.alert("ok")
    const sortedData = bookData.sort((a, b) => {
      if (a["rating"] < b["rating"]) return 1
      if (a["rating"] > b["rating"]) return -1
      return 0
    })

    // const newBooks = setNewBooks(sortedData, pagination)

    // setBookData([...newBooks])
    setBookData([...sortedData])
  }

  const filterByCategory = (e: string) => {
    setFilteredCategory(e)

    const filteredData = bookData.filter((book) => {
      return book.category === e
    })

    // const newBooks = setNewBooks(filteredData, pagination)

    // setBookData([...newBooks])

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
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
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

      <div className="flex flex-wrap md:gap-x-8 md:gap-y-12">
        <Suspense fallback={<p className="my-24 text-2xl text-neutral-500">データをロードしています...。</p>}>
          {bookData.map((book, i) => {
            let star = "⭐️".repeat(book.rating)

            if (star.length < 10) {
              star = star.padEnd((star.length + ((10 - star.length) / 2)), "★")
            }

            return (
              <div
                className="mt-6 pb-6 border-b-2 border-gray-300 w-full md:w-[45%]"
                key={book.id}
              >
                <p className="inline-block mb-4 px-4 border-zinc-500 border-2">{i + 1}</p>

                <p>id={book.id}</p>

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
            )
          })}
        </Suspense>
      </div>
    </>
  )
}

export default Book
