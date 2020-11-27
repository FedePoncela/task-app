import React, {useContext, useState, useEffect} from 'react'
import {TaskListContext} from '../context/TaskListContext'


const TaskForm = () => {
    const {addTask, editItem, editTask}=useContext(TaskListContext)

    const[title, setTitle] = useState('')

    const handleChange = e => {
        setTitle(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if(!editItem){
            addTask(title);
            setTitle('');
        }else{
            editTask(title,editItem.id);
        }
    };

    useEffect(()=>{

        if(editItem){
            setTitle(editItem.title)
        }else{
            setTitle('')
        }


    }, [editItem]);

    return (
        <form onSubmit={handleSubmit} className="form d-flex flex-column justify-content-center mb-10 align-items-center">
            <input
            onChange={handleChange}
            value={title} 
            type="text" 
            className="task-input" 
            placeholder="Add task..." 
            />
          
            <button type="submit"
                className="add-task-btn">
                {editItem ? 'Edit Task':'Add Task'}
            </button>
            
        </form>
    )
}

export default TaskForm
