import React, { useState } from "react"
import Head from "next/head"
import  { useRouter } from "next/router"
import { useForm } from "react-hook-form"

import Layout from "../src/components/Layout"

type FormValue = {
  isbn: string
  category: string
  rating: number
}

const Register = () => {
  const router = useRouter()

  const [rangeValue, setRangeValue] = useState(3)
  const { register, handleSubmit, formState: { errors }} = useForm<FormValue>()

  const onSubmit = async (data: FormValue) => {
    const headers = {
      'Content-Type': 'application/json'
    }

    const body = { data }

    const res = await fetch(`/api/registerBook`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body),
    })

    if (res.ok) {
      router.push("/")
    } else {
      // エラーページに遷移
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRangeValue(Number(e.target.value))
  }

  return (
    <>
      <Head>
        <title>本の登録 | BooksToGIve</title>
      </Head>

      <Layout>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-8">
            <label
              htmlFor="isbn"
              className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
            >
              ISBN
            </label>
            {errors.isbn?.message && <p className="mb-1 text-sm font-bold text-red-400">{errors.isbn?.message}</p>}
            <input
              id="isbn"
              {...register("isbn", { required: "入力が必須の項目です。" })}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 md:w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              type="number"
              placeholder="123456789"
            />
          </div>

          <div className="mb-8">
            <label
              htmlFor="category"
              className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400"
            >
              カテゴリー
            </label>
            <select
              id="category"
              {...register("category")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 md:w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer"
            >
              <option>Linux</option>
              <option>Webフロントエンド</option>
              <option>クラウド</option>
              <option>ネットワーク</option>
            </select>
          </div>

          <div className="mb-8">
            <label
              htmlFor="rating"
              className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400"
            >
              Rating
            </label>
            <input
              id="rating"
              {...register("rating")}
              className="w-1/3 mb-6 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              type="range"
              min="1" max="5" defaultValue="3"
              onChange={handleChange}
            />
            <span className="ml-4 text-xl">{rangeValue}</span>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-md px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Register
          </button>
        </form>
      </Layout>
    </>
  )
}

export default Register
