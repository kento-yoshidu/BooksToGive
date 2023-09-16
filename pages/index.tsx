import Head from "next/head"
import { GetStaticProps } from "next"

import prisma from "../src/lib/prisma"

import Layout from "../src/components/Layout"
import BookList from "../src/components/BookList"

import { Book } from "../src/types/Book"
import useStore from "../src/store/store"

const Home = ({ books }: { books: Book[] }) => {
  return (
    <>
      <Head>
        <title>BooksToGive</title>
      </Head>

      <Layout>
        <BookList
          books={books}
        />
      </Layout>
    </>
  )
}

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
