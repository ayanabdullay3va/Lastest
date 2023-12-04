import { useState } from 'react'
import Home from "./redux/home/index"
import "./style/page.css"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
    </>
  )
}

export default App
