import React from "react"
import Image from "next/image"

import useSWR from "swr"

import * as Styles from "../styles/displayBookImage.module.scss"

const fetcher = (...args) => fetch(...args).then(res => res.json())

const DisplayBookImage = ({ isbn }: { isbn: string }) => {
  const { data, error } = useSWR(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`, fetcher)

  if (error) return <div>An error has occurred.</div>
  if (!data) return <div>Loading...</div>

  return (
    <div className={Styles.imageContainer}>
      <Image
        src={data.items[0].volumeInfo.imageLinks.thumbnail}
        layout="fill"
        objectFit="contain"
        className={Styles.image}
      />
    </div>
  )
}

export default DisplayBookImage
