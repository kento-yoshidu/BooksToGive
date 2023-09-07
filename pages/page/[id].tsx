import { useRouter } from "next/router"

import { GetStaticProps } from "next"

import prisma from "../../src/lib/prisma"

import { Book } from "../../src/types/Book"

const Page = ({ books }: { books: Book[] }) => {
  console.log("books = ", books)

  const router = useRouter()
  const { id } = router.query

  return (
    <h1>Page</h1>
  )
}

export default Page

export async function getStaticPaths() {
  /*
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()
  */

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

  console.log(paths)

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
