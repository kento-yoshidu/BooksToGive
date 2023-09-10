import Head from "next/head"
import { GetStaticProps } from "next"

import prisma from "../src/lib/prisma"

import Layout from "../src/components/Layout"
import Books from "../src/components/BookList"

import { Book } from "../src/types/Book"

const Home = ({ books }: { books: Book[] }) => (
  <>
    <Head>
      <title>BooksToGive</title>
    </Head>

    <Layout>
      <Books
        books={books}
      />
    </Layout>
  </>
)

export default Home

export const getStaticProps: GetStaticProps = async () => {
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
