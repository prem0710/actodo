import { useState } from "react"
function Addtodoform(props){

  const taskArr = props.taskArr
  const setTaskArr = props.setTaskArr
  const [newtask,setNewtask] = useState("")

  function handleChange(evt){
    setNewtask(evt.target.value)
  }

  function addTask(){

    setTaskArr([...taskArr,{id:taskArr.length+1,task:newtask}])
    setNewtask("")
  }

    return(
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-medium">Manage Activities</h1>
          <div>
            <input value={newtask} onChange={handleChange} type="text" className="border border-black bg-transparent p-1" placeholder="Next Activity?" />
            <button onClick={addTask} className="bg-black text-white p-1 border border-black">Add</button>
          </div>
        </div>
    )
}
export default Addtodoform