import useStore from "../store/store"

const Header = () => {
  const { count, sortState } = useStore()

  return (
    <header className="fixed border-b top-0 w-full h-12 flex justify-center items-center gap-8 border-nutral">
      <h1>Header</h1>

      <p>cont = {count}</p>

      <p>{String(sortState)}</p>

      {sortState && <p>並び替え中!</p>}
    </header>
  )
}

export default Header
