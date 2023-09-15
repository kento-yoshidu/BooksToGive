import Link from "next/link"
import { useRouter } from "next/router"

const PageLink = () => {
  const router =useRouter()

  const { id } = router.query

  const prev = id ? (id === "2" ? "/" : `/page/${Number(id) - 1}`) : null
  const next = id ? (id === "3" ? null : `/page/${Number(id) + 1}`) : `/page/2`

  return (
    <div className="flex items-center gap-4 my-8">
      <p>ページ {id ? id : "1"}</p>

      {prev && (
        <Link
          href={prev}
        >
          <a
            className="block bg-white hover:bg-gray-100 md:text-base text-gray-800 font-semibold py-1 px-3 border border-gray-400 rounded shadow"
          >
            ⏪ Prev
          </a>
        </Link>
      )}

      {next && (
        <Link href={next}>
          <a
            className="block bg-white hover:bg-gray-100 md:text-base text-gray-800 font-semibold py-1 px-3 border border-gray-400 rounded shadow"
          >
            Next ⏩
          </a>
        </Link>
      )}
    </div>
  )
}

export default PageLink
