import { useCounterStore } from '../store/counter.js'

const Counter = () => {
  const { count, increment, decrement } = useCounterStore()

  return (
    <div className="border rounded p-2 flex flex-col gap-2 items-center">
      <h3 className="font-bold">Counter with Zustand</h3>

      <div className="flex items-center gap-2">
        <button
          className="bg-sky-400 p-2 min-w-14 rounded font-bold cursor-pointer"
        >
          -5
        </button>
        <button
          className="bg-green-400 p-2 min-w-14 rounded font-bold cursor-pointer"
          onClick={decrement}
        >
          -1
        </button>
        <h1 className="bg-slate-300 p-2 min-w-14 rounded font-bold text-center">
          {count}
        </h1>
        <button
          className="bg-green-400 p-2 min-w-14 rounded font-bold cursor-pointer"
          onClick={increment}
        >
          +1
        </button>
        <button
          className="bg-sky-400 p-2 min-w-14 rounded font-bold cursor-pointer"
        >
          +5
        </button>
      </div>
    </div>
  )
}

export default Counter