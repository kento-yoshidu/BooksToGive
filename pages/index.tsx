import prisma from "../lib/prisma"

import { GetStaticProps } from "next"
import { Book } from "../types/Book"

const Home = ({ books }: { books: Book[] }) => (
    <>
      <h1>いらない本リスト</h1>

      {books.map((book) => (
        <div key={`${book.id}`}>
          <h2>{book.title}</h2>
          <p>{book.isbn}</p>
          <p>{book.rating}</p>
        </div>
      ))}
    </>
  )

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const books = await prisma.book.findMany()

  return  {
    props: { books }
  }
}
