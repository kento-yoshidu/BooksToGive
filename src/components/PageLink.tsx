import Link from "next/link"
import { useRouter } from "next/router"

const PageLink = ({ bookCount }: { bookCount: number }) => {
  const router =useRouter()
  const { page } = router.query
  const pageCount = Math.ceil(bookCount / 10)

  let prev = null
  let next = null

  // 要リファクタリング
  if (pageCount === 1) {
    // 1ページしかないなら両方を表示させない
    prev = null
    next = null
  } else if (pageCount === Number(page)) {
    if (Number(page) === 2) {
      prev = `/`
    } else {
      prev = `/page/${Number(page) - 1}`
    }
  } else if (!Number(page)) {
    // 最初のページの場合
    prev = null  
    next = `/page/2`
  } else {
    if (Number(page) === 2) {
      prev = `/`
      next = `/page/${Number(page) + 1}`
    } else {
      prev = `/page/${Number(page) - 1}`
      next = `/page/${Number(page) + 1}`
    }
  }

  return (
    <div className="flex items-center gap-4 my-8">
      {prev ? (
        <Link
          href={prev}
        >
          <a
            className="block bg-white hover:bg-gray-100 md:text-base text-gray-800 font-semibold py-1 px-3 border border-gray-400 rounded shadow"
          >
            ⏪ Prev
          </a>
        </Link>
      ) : (
        <p
          className="bg-gray-200 text-sm md:text-base text-gray-500 font-semibold py-1 px-3 border border-gray-400 rounded shadow"
        >
            ⏪ Prev
        </p>
      )}

      <p
        className="block bg-white md:text-base text-gray-800 font-semibold py-1 px-3 border border-gray-300 rounded shadow"
      >
        ページ {page ? page : "1"}
      </p>

      {next ? (
        <Link href={next}>
          <a
            className="block bg-white hover:bg-gray-100 md:text-base text-gray-800 font-semibold py-1 px-3 border border-gray-400 rounded shadow"
          >
            Next ⏩
          </a>
        </Link>
      ) : (
        <p
          className="bg-gray-200 text-sm md:text-base text-gray-500 font-semibold py-1 px-3 border border-gray-400 rounded shadow"
        >
            Next ⏩
        </p>
      )}
    </div>
  )
}

export default PageLink
