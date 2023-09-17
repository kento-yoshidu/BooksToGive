import Link from "next/link"
import { useRouter } from "next/router"

const PageLink = () => {
  const router =useRouter()

  const { page } = router.query

  const prev = page ? (page === "2" ? "/" : `/page/${Number(page) - 1}`) : null
  const next = page ? (page === "3" ? null : `/page/${Number(page) + 1}`) : `/page/2`

  return (
    <div className="flex items-center gap-4 my-8">
      <p>ページ {page ? page : "1"}</p>

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
