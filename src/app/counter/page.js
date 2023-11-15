'use client'
import { useState } from "react"

export default function Page() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count +1);
  }

  function decrement() {
    setCount(count -1);
  }
  
  return(
    <div className="flex h-screen items-center justify-center">
      <button onClick={increment} className="px-2 bg-white text-black h-min">+</button>
      <p className="w-24 bg-blue-700 text-center h-min">{count}</p>
      <button onClick={decrement} className="px-2 bg-white text-black h-min">-</button>
    </div>
  )
}
