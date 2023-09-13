import useStore from "../store/store"

const Header = () => {
  const { count, isSorted } = useStore()

  return (
    <header className="fixed border-b top-0 w-full h-12 flex justify-center items-center gap-8 border-nutral">
      <h1>Header</h1>

      <p>cont = {count}</p>
      <p>isSorted = {String(isSorted)}</p>
    </header>
  )
}

export default Header
