import { create } from 'zustand'

type State = {
  count: number
}

const useStore = create<State>((set) => ({
  count: 1,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}))

export default useStore
