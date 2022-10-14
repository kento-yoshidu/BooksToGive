import prisma from "../lib/prisma"
import Image from "next/image"
import Books from "./components/Books"

import { GetStaticProps } from "next"
import { Book } from "../types/Book"

const Home = ({ books }: { books: Book[] }) => (
  <>
    <div className="w-5/6 md:w-1/2 mx-auto mt-10">
      <h1 className="text-4xl mb-6 md:mb-8">BooksToGive</h1>

      <Books
        books={books}
      />

      <section className="my-12">
        <h1 className="text-2xl md:text-3xl">Technology</h1>
        <ul className="mt-4 md:mt-8 text-base md:text-lg">
          <li className="mb-2">⚙ Next.js</li>
          <li className="mb-2">⚙ TypeScript</li>
          <li className="mb-2">⚙ Tailwind CSS</li>
          <li className="mb-2">⚙ Prisma</li>
          <li className="mb-2">⚙ Supabase</li>
          <li className="mb-2">⚙ AWS Amplify</li>
          <li className="mb-2">⚙ Google books API</li>
        </ul>
      </section>
    </div>
  </>
)

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const books = await prisma.book.findMany()

  return  {
    props: { books }
  }
}
