import { Book } from "../types/Book"

// カテゴリーでフィルターされた状態で何冊あるかを返す
export const bookCounter = (books: Book[], category: string) => {
  const arr =  books.slice().filter((book) => {
    return book.category === category
  })

  return arr.length
}
