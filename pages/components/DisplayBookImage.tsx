import React from "react"
import Image from "next/image"

import useSWR from "swr"

import * as Styles from "../styles/displayBookImage.module.scss"

const fetcher = (...args: string[]) => fetch(...args).then(res => res.json())

const DisplayBookImage = ({ isbn }: { isbn: string }) => {
  const { data, error } = useSWR(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`, fetcher)

  if (error) return <div>An error has occurred.</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
      <h2>{data.items[0].volumeInfo.title}</h2>

      <div className={Styles.imageContainer}>
        <Image
          src={data.items[0].volumeInfo.imageLinks.thumbnail}
          layout="fill"
          objectFit="contain"
          className={Styles.image}
          alt="test"
        />
      </div>

      <p>{data.items[0].volumeInfo.description}</p>
    </>
  )
}

export default DisplayBookImage
