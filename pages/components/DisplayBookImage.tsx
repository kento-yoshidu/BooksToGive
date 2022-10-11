import React from "react"
import useSWR from "swr"

const fetcher = (...args) => fetch(...args).then(res => res.json())

const DisplayBookImage = ({ isbn }: { isbn: string }) => {
  console.log(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`, fetcher)
  const { data, error } = useSWR(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`, fetcher)

  console.log({ data })

  if (error) return <div>An error has occurred.</div>
  if (!data) return <div>Loading...</div>

  return (
    <img
      src={data.items[0].volumeInfo.imageLinks.thumbnail}
    />
  )
}

export default DisplayBookImage
