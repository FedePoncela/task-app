import React, {useContext} from 'react'
import { TaskListContext } from '../context/TaskListContext'


const Top = () => {

    const {tasks}=useContext(TaskListContext);

    const GeneralStatus = (tasks) => {

        
        const statusGral = tasks.map(task=> task.status);
        const statusPending = tasks.filter(task=> task.status==="pending" );
        const statusSuspended = tasks.filter(task => task.status==="suspended");
        const statusFinished = tasks.filter(task=> task.status==="finished");
        const statusStarted = tasks.filter(task=> task.status==="started");

        if(statusGral.length<1) return "No tasks";
        else if(statusGral.length === statusPending.length) return "Pending";
        else if(statusGral.length === statusSuspended.length) return "Suspend";
        else if(statusGral.length === statusFinished.length) return "Finished";
        else if(statusStarted.length>=1) return "In Progress";
        else return "Must start a task";
 
    }



    return (
        <div className="header d-flex flex-column justify-content-around align-items-center text-white">
            <p className="h1">Task Manager</p>
            <p className="h4">Current status: {GeneralStatus(tasks)}</p>
        </div>
    )
}

export default Top
