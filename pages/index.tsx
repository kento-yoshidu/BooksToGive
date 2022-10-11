import prisma from "../lib/prisma"

import { GetStaticProps } from "next"
import { Book } from "../types/Book"

import useSWR from "swr"

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Home = ({ books }: { books: Book[] }) => {
  const { data, error } = useSWR("https://www.googleapis.com/books/v1/volumes?q=夏目漱石", fetcher)

  if (error) return <div>An error has occurred.</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
      <h1>いらない本リスト</h1>

      <img
        src={data.items[0].volumeInfo.imageLinks.thumbnail}
      />

      {books.map((book) => (
        <div key={`${book.id}`}>
          <h2>{book.title}</h2>
          <p>{book.isbn}</p>
          <p>{book.rating}</p>
        </div>
      ))}
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const books = await prisma.book.findMany()

  return  {
    props: { books }
  }
}
