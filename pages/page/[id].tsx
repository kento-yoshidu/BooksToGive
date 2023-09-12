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

  return (
    <>
      <Head>
        <title>BooksToGive</title>
      </Head>

      <Layout>
        <BookList books={books} pageNumber={Number(id)} />
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

  const paths = []

  for (let i = 2; i <= (Math.ceil(books.length / 10)); i++) {
    paths.push({ params: { id: String(i) }})
  }

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
