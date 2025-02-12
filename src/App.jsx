import { useState } from "react"

import Navbar from "./Components/Navabar"
import NewsBody from "./Components/NewsBody"



const App = () => {
  const [category,setCategory] = useState("general");
  return (
    <div>
         <Navbar setCategory={setCategory} />
         <NewsBody category={category} />

      
    </div>
  )
}

export default App