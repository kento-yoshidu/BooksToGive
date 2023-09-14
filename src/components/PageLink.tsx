import Link from "next/link"
import { useRouter } from "next/router"

const PageLink = () => {
  const router =useRouter()

  const { id } = router.query

  const prev = id ? (id === "2" ? "/" : `/page/${Number(id) - 1}`) : null

  const next = id ? (id === "3" ? null : `/page/${Number(id) + 1}`) : `/page/2`

  return (
    <div className="mb-8">
      <h1>Page Link {id}</h1>

      {prev && (
        <Link href={prev}>Prev</Link>
      )}

      {next && (
        <Link href={next}>Next</Link>
      )}
    </div>
  )
}

export default PageLink
