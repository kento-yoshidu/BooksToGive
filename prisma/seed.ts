import { PrismaClient } from "@prisma/client"

import { books } from "../data/books"

const prisma = new PrismaClient()

async function main() {
  await prisma.book.createMany({
    data: books
  })
}

main()
  .catch((e) => {
    console.log(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
