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
      <h2 className="text-lg md:text-xl mb-4">{data.items[0].volumeInfo.title}</h2>

      <div
        className={`${Styles.imageContainer} my-8`}
      >
        <Image
          src={data.items[0].volumeInfo.imageLinks.thumbnail}
          layout="fill"
          objectFit="contain"
          className={Styles.image}
          alt="test"
        />
      </div>
    </>
  )
}

export default DisplayBookImage
