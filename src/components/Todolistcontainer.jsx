import Addtodoform from "./Addtodoform"
import Todolist from "./Todolist"
import { useState } from "react"

function Todolistcontainer() {
  const [taskArr,setTaskArr] = useState([
        {
            id:1,
            task:"Go for a walk"
        },
        {
            id:2,
            task:"Do some exercise"
        },
        {
            id:3,
            task:"Eat a healthy meal"
        }
    ])
  return (
    <div>
      <div className="flex flex-warp gap-5">
        <Addtodoform taskArr={taskArr} setTaskArr={setTaskArr}/>
        <Todolist taskArr={taskArr} setTaskArr={setTaskArr}/>       
      </div>
    </div>
  )
}

export default Todolistcontainer