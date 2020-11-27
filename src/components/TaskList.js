import React, {useContext} from 'react'
import { TaskListContext } from '../context/TaskListContext'
import Task from './Task'


const TaskList = () => {
    const {tasks}=useContext(TaskListContext);
    return (
    

        <div className="list">
            <div className="titles d-flex justify-content-around text-white">
                <span>Tasks</span>
                <span>Actions</span>
            </div>
            
            <ul>
                {tasks.map((task)=>{
                    return <Task task={task} key={task.id}></Task>
                })}
            </ul>
        </div>
    )
}

export default TaskList
