import React, {createContext, useState, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid'
import swal from 'sweetalert';

export const TaskListContext = createContext()

const TaskListContextProvider = (props) => {

    
    const initialState = JSON.parse(localStorage.getItem('tasks')) || [];

    const [tasks, setTasks] = useState(initialState);

    const [editItem, setEditItem] =useState(null);

    useEffect(()=>{
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    //Agregar tarea 
    const addTask= (title) =>{
        if(title.length>=10 && title.length<=70){
            setTasks([...tasks, {title, id: uuidv4(), status:'pending'}]); 
        }else{
            swal({
                text: "You must create a new task from 10 to 70 characters",
                icon: 'error'
              });
        }

    }

    //Eliminar tarea
    const removeTask = id =>{
        setTasks(tasks.filter(task => task.id !== id))
    }

    //Encontrar tarea
    const findItem = id => {
        const item = tasks.find(task => task.id === id);

        setEditItem(item);
    }

    //Editar tarea
    const editTask = (title, id) =>{
        if(title.length>=10 && title.length<=70){
            const newTasks = tasks.map(task=> (task.id===id ? {title, id}:task));
            setTasks(newTasks);
            setEditItem(null);
        }else{
            swal({
                text: "Task must have from 10 to 70 characters",
                icon: 'error'
              });
        }
    }

    //Modificar el estado de la tarea
    const changeStatus = (title, status, id) =>{
        const newStatus = tasks.map(task=> (task.id===id ? {title, id, status}:task));
        setTasks(newStatus);
    }



    return (<TaskListContext.Provider value={{
        tasks, 
        addTask, 
        removeTask, 
        findItem, 
        editTask, 
        editItem,
        changeStatus
        }}>

        {props.children}
    </TaskListContext.Provider>)
}

export default TaskListContextProvider;