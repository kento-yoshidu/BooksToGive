import { create } from 'zustand'

type State = {
  isSorted: boolean
  category: string | null
  changeSortState: () => void
  setCategoryState: (cate: string) => void
}

const useStore = create<State>((set) => ({
  isSorted: false,
  category: null,
  changeSortState: () => set((state) => ({ isSorted: !state.isSorted })),
  setCategoryState: (cate) => set(() => ({ category: cate }))
}))

export default useStore
