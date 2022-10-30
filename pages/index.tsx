import Head from "next/head"

import prisma from "../src/lib/prisma"
import Books from "../src/components/Books"

import { GetServerSideProps } from "next"
import { Book } from "../src/types/Book"

import Layout from "../src/components/Layout"

const Home = ({ books }: { books: Book[] }) => {
  return (
    <>
      <Head>
        <title>BooksToGive</title>
      </Head>

      <Layout>
        <Books
          books={books}
        />

        <section className="my-12">
          <h1 className="text-2xl md:text-3xl">Technology</h1>
          <ul className="mt-4 md:mt-8 text-base md:text-lg">
            <li className="mb-1">⚙ Next.js</li>
            <ul className="ml-3 mb-2">
              <li className="mb-1"><span className="text-gray-600 text-sm">▶</span> useSWR&nbsp;&nbsp;&nbsp;Next Auth&nbsp;&nbsp;&nbsp;React Hook Form</li>
            </ul>
            <li className="mb-2">⚙ TypeScript</li>
            <li className="mb-2">⚙ Tailwind CSS</li>
            <li className="mb-2">⚙ Prisma</li>
            <li className="mb-2">⚙ Supabase</li>
            <li className="mb-2">⚙ Vercel</li>
            <li className="mb-2">⚙ Google Books API</li>
          </ul>
        </section>
      </Layout>
    </>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const books = await prisma.book.findMany({
    orderBy: [
      {
        id: "desc"
      }
    ]
  })

  return  {
    props: { books }
  }
}
