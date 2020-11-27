import React, {useContext} from 'react';
import {TaskListContext} from '../context/TaskListContext'


const Task = ({task}) => {

    const {removeTask, findItem, changeStatus} = useContext(TaskListContext);

    const finished=(task.status==='finished');
    const started=(task.status==='started');
    const suspended=(task.status==='suspended');
    const pending=(task.status==='pending');


    const nuevoColor = (task) =>{

        if(finished) return "green";
        else if(started) return "#4b57ff";
        else if(suspended) return "red";
        else return "yellow";
    }

    return (

        
        <li className="list-item">
            <span style={{color: nuevoColor(task)}} >{task.title}</span>
           
           <div className="d-flex justify-content-end">
                <button
                onClick={()=>findItem(task.id)}
                disabled={finished}
                className="btn-delete task-btn">
                   <i className="fas fa-pen"></i>
               </button>

               <button
               onClick={()=>removeTask(task.id)}
               disabled={started }
               className="btn-edit task-btn">
                   <i className="fas fa-trash-alt"></i>
               </button>

               <button
               onClick={()=>changeStatus(task.title, "started", task.id)}
               disabled={started || finished}
               className="btn btn-primary">Start
               </button>

               <button
               onClick={()=>changeStatus(task.title, "finished", task.id)}
               disabled={pending || finished || suspended}
               className="btn btn-success mx-1">Finish
               </button>

               <button
               onClick={()=>changeStatus(task.title, "suspended", task.id)}
               disabled={pending || finished || suspended}
               className="btn btn-danger">Suspend
               </button>

           </div>

        </li>
        

    )
}

export default Task
