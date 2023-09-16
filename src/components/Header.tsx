import useStore from "../store/store"

const Header = () => {
  const { isSorted, category, allBooks } = useStore()

  return (
    <header className="fixed border-b top-0 w-full h-12 flex justify-center items-center gap-8 border-nutral">
      <p>{String(isSorted)}</p>

      {isSorted && <p>並び替え中!</p>}
      {category && <p>{category}</p>}
      {allBooks && <p>{allBooks.length}</p>}
    </header>
  )
}

export default Header
