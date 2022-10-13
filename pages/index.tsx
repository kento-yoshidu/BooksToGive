import prisma from "../lib/prisma"
import Image from "next/image"
import Books from "./components/Books"

import { GetStaticProps } from "next"
import { Book } from "../types/Book"

const Home = ({ books }: { books: Book[] }) => (
  <>
    <h1>いらない本リスト</h1>

    <Books
      books={books}
    />
  </>
)

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const books = await prisma.book.findMany()

  return  {
    props: { books }
  }
}
