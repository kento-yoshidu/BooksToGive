import { Book } from "../types/Book"

const extractBooks = (books: Book[], pageNumber?: number) => {
  if (!pageNumber) {
    return books.slice(0, 10)
  } else {
    const num = (pageNumber - 1) * 10
    return books.slice(num, num + 10)
  }
}

const sort = (books: Book[]) => {
  return books.slice().sort((a, b) => {
    if (a["rating"] < b["rating"]) return 1
    if (a["rating"] > b["rating"]) return -1
    return 0
  })
}

const filterCategory = (books: Book[], category: string) => {
  return books.slice().filter((book) => {
    return book.category === category
  })
}

// 本一覧を返す
export const getBooks = (books: Book[], pageNumber?: number, isSort?: boolean, category?: string) => {
  let resBook = books

  if (isSort) {
    resBook = sort(books)
  }

  if (category) {
    resBook = filterCategory(resBook, category)
  }

  return extractBooks(resBook, pageNumber)
}
