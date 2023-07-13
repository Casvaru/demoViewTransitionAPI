import { useState } from "react"

export default function counter () {
  const [counter, setCounter] = useState(0)

  const handleCounter = ()=>{
    setCounter(counter + 1)
  }
  return(
    <span class="text-5xl font-bold select-none cursor-pointer" onClick={handleCounter}>{counter}</span>
  )
}