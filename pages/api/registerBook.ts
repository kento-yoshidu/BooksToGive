import prisma from '../../src/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { data } = req.body

  console.log(data)
  try {
    /*
    await prisma.book.create({
      data: {
        isbn: "9784798161266",
        category: "Webフロントエンド",
        rating: 3
      }
    })
    */
    res.status(200).json({ status: "OK" })
  } catch (err) {
    res.status(500).json({
      status: "ERROR"
    })
  }
}

export default handler
