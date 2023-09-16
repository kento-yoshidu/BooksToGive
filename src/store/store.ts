import { create } from 'zustand'
import { Book } from '../types/Book'

type State = {
  allBooks: Book[]
  isSorted: boolean
  category?: string
  changeSortState: () => void
  setCategoryState: (cate: string) => void
}

const useStore = create<State>((set) => ({
  allBooks: [],
  isSorted: false,
  category: "",
  changeSortState: () => set((state) => ({ isSorted: !state.isSorted })),
  setCategoryState: (cate) => set(() => ({ category: cate }))
}))

export default useStore
