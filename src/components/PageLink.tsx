import { useRouter } from "next/router"

const PageLink = () => {
  const router =useRouter()

  const { id } = router.query

  const prev = id ? Number(id) - 1 : null

  return (
    <div className="mb-8">
      <h1>Page Link {id}</h1>
    </div>
  )
}

export default PageLink
