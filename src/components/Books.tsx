import React, { Suspense, useState } from "react"
import { useRouter } from "next/router"

import DisplayBookImage from "./DisplayBookImage"

import { Book } from "../types/Book"

const setNewBooks = (books: Book[], skip: number) => {
  if (!skip) {
    return books.slice(0)
  } else {
    const num = (skip - 1) * 10
    return books.slice(num, num + 10)
  }
}

const Book = ({ books }: { books: Book[] }) => {
  const router = useRouter()
  const { id } = router.query

  const initialData = books.map((book) => ({ ...book }))

  const [bookList, setBookList] = useState(setNewBooks(books, Number(id)))

  const [filteredCategory, setFilteredCategory] = useState<string | null>(null)

  const sortByRatingASC = () => {
    const sortedData = books.sort((a, b) => {
      if (a["rating"] < b["rating"]) return 1
      if (a["rating"] > b["rating"]) return -1
      return 0
    })

    setBookList(setNewBooks(sortedData, Number(id)))
  }

  const filterByCategory = (e: string) => {
    setFilteredCategory(e)

    const filteredData = books.filter((book) => {
      return book.category === e
    })

    setBookList(setNewBooks(filteredData, Number(id)))

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  const reset = () => {
    setFilteredCategory("")
    setBookList([...initialData])
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

      <p className="text-xl">・ {bookList.length}冊の本</p>

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

export default Book
