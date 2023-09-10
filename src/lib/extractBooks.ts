import { Book } from "../types/Book"

export const extractBooks = (books: Book[], skip: number) => {
  if (!skip) {
    return books.slice(0)
  } else {
    const num = (skip - 1) * 10
    return books.slice(num, num + 10)
  }
}

