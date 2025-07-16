import { useState } from "react"
import Todoitem from "./Todoitem"
function Todolist(props){

    const taskArr= props.taskArr
    const setTaskArr = props.setTaskArr
    
    return(
         <div className="bg-[#8d99ae] border rounded-md p-2 flex-grow">
          <h1 className="text-2xl font-medium">Today's Activity</h1>
          {taskArr.length===0?<p>you haven't added any activity yet</p>:""}
          {
            taskArr.map(function(item,index){
                return <Todoitem  task={item.task} index={index} id={item.id} taskArr={taskArr} setTaskArr={setTaskArr} />
            })
          }
        </div>
    )
}

export default Todolist