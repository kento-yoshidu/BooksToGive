import Head from "next/head"
import { useRouter } from "next/router"
import { GetStaticProps } from "next"

import prisma from "../../src/lib/prisma"
import { extractBooks } from "../../src/lib/extractBooks"

import Layout from "../../src/components/Layout"
import BookList from "../../src/components/BookList"

import { Book } from "../../src/types/Book"

const Page = ({ books }: { books: Book[] }) => {
  const router = useRouter()
  const { id } = router.query

  const new_books = extractBooks(books, Number(id))

  console.log("new_books = ", new_books)

  return (
    <>
      <Head>
        <title>BooksToGive</title>
      </Head>

      <Layout>
        <BookList books={new_books} />
      </Layout>
    </>
  )
}

export default Page

export async function getStaticPaths() {
  const books = await prisma.book.findMany({
    orderBy: [
      {
        id: "desc"
      }
    ]
  })

  /*
  const paths = books.map((book: Book ) => ({
    params: { id: book.id.toString() },
  }))
  */

  const paths = [
    { params: { id: "1" }},
    { params: { id: "2" }}
  ]

  return { paths, fallback: false }
}


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
