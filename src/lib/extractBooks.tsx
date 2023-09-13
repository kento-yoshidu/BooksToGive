import { Book } from "../types/Book"

export const extractBooks = (books: Book[], pageNumber?: number) => {
  if (!pageNumber) {
    return books.slice(0, 10)
  } else {
    const num = (pageNumber - 1) * 10
    return books.slice(num, num + 10)
  }
}
