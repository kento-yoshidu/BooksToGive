import { create } from 'zustand'

type State = {
  count: number
  isSorted: boolean
}

const useStore = create<State>((set) => ({
  count: 1,
  isSorted: false
  /*
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
  */
}))

export default useStore
