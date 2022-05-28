import React from 'react'

export const TaskList = (props) => {
    console.log("list",props)
    return (
        <div>
            {

            <>
            <h1>{props.task.tId}</h1>
            <h1>{props.task.tName}</h1>
            <button onClick = {(e)=>props.deleteTask(props.task)}>DELETE</button>
            </>}
        </div>
    )
}
