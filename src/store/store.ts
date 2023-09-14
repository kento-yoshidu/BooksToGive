import { create } from 'zustand'

type State = {
  count: number
  sortState: boolean
  changeSort: () => void
}

const useStore = create<State>((set) => ({
  count: 1,
  sortState: false,
  changeSort: () => set((state) => ({ sortState: !state.sortState }))
  /*
  decrease: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
  */
}))

export default useStore
