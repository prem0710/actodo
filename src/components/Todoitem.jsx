function Todoitem(props) {

    const task = props.taskArr
    const setTaskArr = props.setTaskArr

    function handleDelete(deleteid) {

        var temparr = task.filter(function (item) {
            if (item.id === deleteid) {
                return false
            }
            else {
                return true

            }
        })

        setTaskArr(temparr)
    }

    return (
        <div className="flex justify-between">
            <p>{props.index + 1}.{props.task}</p>
            <button className="text-[#e71d36]" onClick={() => handleDelete(props.id)}>Delete</button>
        </div>
    )
}

export default Todoitem