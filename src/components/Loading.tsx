const Loading = () => (
  <div className="bg-slate-100 h-screen flex justify-center items-center flex-col gap-y-12">
    <p className="text-3xl text-neutral-400">Now Loading...</p>
    <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent"></div>
  </div>
)

export default Loading
