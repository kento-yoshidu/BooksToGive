import prisma from "../lib/prisma"
import Image from "next/image"

import { GetStaticProps } from "next"
import { Book } from "../types/Book"

import DisplayBookImage from "./components/DisplayBookImage"

const Home = ({ books }: { books: Book[] }) => (
  <>
    <h1>いらない本リスト</h1>

    {books.map((book) => (
      <div key={`${book.id}`}>
        <h2>{book.title}</h2>
        <DisplayBookImage
          isbn={book.isbn}
        />
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
