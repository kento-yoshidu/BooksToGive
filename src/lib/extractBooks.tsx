import { Book } from "../types/Book"

const sort = (books: Book[]) => {
  return books.slice().sort((a, b) => {
    if (a["rating"] < b["rating"]) return 1
    if (a["rating"] > b["rating"]) return -1
    return 0
  })
}

export const extractBooks = (books: Book[], pageNumber?: number, isSort?: boolean) => {
  let resBooks

  if (isSort) {
    resBooks = sort(books)
  } else {
    resBooks = books
  }

  if (!pageNumber) {
    return resBooks.slice(0, 10)
  } else {
    const num = (pageNumber - 1) * 10
    return resBooks.slice(num, num + 10)
  }
}
