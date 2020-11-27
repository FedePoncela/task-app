import React from 'react'
import TaskList from './TaskList'
import TaskForm from './TaskForm'
import Top from './Top'
import TaskListContextProvider from '../context/TaskListContext'
import '../App.css'

const App = () => {
    return (
        <TaskListContextProvider>
            <div className="backg">
                <div className="app-wrapper">
                    <Top></Top>
                    <div className="d-flex flex-column justify-content-evenly main">
                        <TaskForm></TaskForm>
                        <TaskList></TaskList>

                    </div>
                </div>
            </div>  
        </TaskListContextProvider>
    );
};

export default App
