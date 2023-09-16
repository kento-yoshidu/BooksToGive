import React, { Suspense, useState } from "react"

import PageLink from "./PageLink"
import DisplayBookImage from "./DisplayBookImage"

// import { extractBooks } from "../lib/extractBooks"
import { getBooks } from "../lib/extractBooks"

import { Book } from "../types/Book"
import useStore from "../store/store"

const BookList = ({ books, pageNumber }: { books: Book[], pageNumber?: number }) => {
  const { isSorted, category, changeSortState, setCategoryState } = useStore()

  const [bookList, setBookList] = useState(getBooks(books, pageNumber, isSorted, category))
  const [filteredCategory, setFilteredCategory] = useState<string | null>(null)

  const sortByRatingASC = () => {
    changeSortState()

    setBookList(getBooks(books, pageNumber, true, category!))

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  const filterByCategory = (e: string) => {
    setCategoryState(e)

    setBookList(getBooks(books, pageNumber, isSorted, e))

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  const reset = () => {
    setBookList(getBooks(books, pageNumber))
    setFilteredCategory(null)
    changeSortState()
    setCategoryState("")
  }

  return (
    <>
      <PageLink />

      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
        {(isSorted || filteredCategory) && (
          <button
            onClick={reset}
            className="bg-white hover:bg-gray-100 text-sm md:text-base text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            ❌ リセット    
          </button>
        )}

        {isSorted ? (
          <p
            className="bg-gray-300 text-sm md:text-base text-gray-500 font-semibold py-2 px-4 border border-gray-400 rounded shadow cursor-not-allowed"
          >
            📈 レートが高い順に並び変え中!
          </p>
        ) : (
          <button
            onClick={sortByRatingASC}
            className="bg-white hover:bg-gray-100 text-sm md:text-base text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            📈 レートが高い順に並び変え
          </button>
        )}

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
      </div>

      <div className="flex flex-wrap md:gap-x-8 md:gap-y-12">
        <Suspense fallback={<p className="my-24 text-2xl text-neutral-500">データをロードしています...。</p>}>
          {bookList.map((book, i) => {
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

export default BookList
