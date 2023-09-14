import Link from "next/link"
import { useRouter } from "next/router"

const PageLink = () => {
  const router =useRouter()

  const { id } = router.query

  const prev = id ? Number(id) - 1 : null
  const next = Number(id) + 1
  

  return (
    <div className="mb-8">
      <h1>Page Link {id}</h1>

      <Link href={"/"}>Prev</Link>

      <Link href={`/page/2`}>Next</Link>
    </div>
  )
}

export default PageLink
