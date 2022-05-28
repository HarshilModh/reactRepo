import React from 'react'
import { TaskList } from './TaskList'

export const Task = (props) => {
    
    const style ={
        color: "lightblue"

    }
    console.log("props.task",props.tasks)
    console.log("len...",props.tasks.length)
    return (
        <div style = {style}>        
            {
            props.tasks.length <= 0 ? "TASK NOT FOUND...." :

            props.tasks.map((t)=>{

                return <TaskList task ={t} deleteTask = {props.deleteTask} />
            })
            
            }

        </div>
    )
}
