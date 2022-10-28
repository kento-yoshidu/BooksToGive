import Link from "next/link"
import prisma from "../src/lib/prisma"
import Books from "../src/components/Books"

import { GetServerSideProps } from "next"
import { Book } from "../src/types/Book"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const Home = ({ books }: { books: Book[] }) => {
  return (
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
          <li className="mb-2">⚙ Vercel</li>
          <li className="mb-2">⚙ Google Books API</li>
        </ul>
      </section>
    </div>

    <footer className="py-4 bg-gray-900 text-center">
      <Link href="https://github.com/kento-yoshidu/BooksToGive">
        <a className='cursor'>
          <FontAwesomeIcon
            className="text-4xl text-white"
            icon={faGithub}
          />
        </a>
      </Link>
    </footer>
  </>
)
  }

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const books = await prisma.book.findMany()

  return  {
    props: { books }
  }
}
