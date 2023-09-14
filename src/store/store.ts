import { create } from 'zustand'

type State = {
  isSorted: boolean
  changeSortState: () => void
}

const useStore = create<State>((set) => ({
  isSorted: false,
  changeSortState: () => set((state) => ({ isSorted: !state.isSorted }))
}))

export default useStore
