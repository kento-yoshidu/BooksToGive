import { create } from 'zustand'

type State = {
  isSorted: boolean
  category?: string
  changeSortState: (isSort: boolean) => void
  setCategoryState: (cate: string) => void
}

const useStore = create<State>((set) => ({
  isSorted: false,
  category: "",
  changeSortState: (isSort) => set(() => ({ isSorted: isSort })),
  setCategoryState: (cate) => set(() => ({ category: cate })),
}))

export default useStore
