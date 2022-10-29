import prisma from '../../src/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { data } = req.body

  try {
    await prisma.book.create({
      data: {
        isbn: data.isbn,
        category: data.category,
        rating: Number(data.rating)
      }
    })
    res.status(200).json({ status: "OK" })
  } catch (err) {
    res.status(500).json({
      status: "ERROR",
      err
    })
  }
}

export default handler
