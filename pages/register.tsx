import React, { useState } from "react"
import { useForm } from "react-hook-form"

type FormValue = {
  isbn: string
  category: string
  rating: number
}

const Register = () => {
  const [rangeValue, setRangeValue] = useState(3)
  const { register, handleSubmit } = useForm<FormValue>()

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
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRangeValue(Number(e.target.value))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="isbn">ISBN</label>
        <input id="isbn" {...register("isbn")} />
      </div>

      <div>
        <label htmlFor="category">カテゴリー</label>
        <input id="category" {...register("category")} />
      </div>

      <div>
        <label htmlFor="rating">Rating</label>
        <input id="rating" {...register("rating")} type="range" min="1" max="5" defaultValue="3" onChange={handleChange}/> {rangeValue}
      </div>
      <button type="submit">ログイン</button>
    </form>
  )
}

export default Register
