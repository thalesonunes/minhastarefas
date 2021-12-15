import React from 'react';
import './Task.css';
import {CgClose} from 'react-icons/cg'
import { CgInfo } from 'react-icons/cg';


const Task = ({task, handleTaskClick, handleTaskDeletion}) => {
    return (
        <div 
            className="task-container" 
            style={task.completed ? {borderLeft: '6px solid chartreuse'} : {}}
        >
            <div className="task-title" onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>

            <div className="buttons-container">
                <button 
                    className="remove-task-button" 
                    onClick={() => handleTaskDeletion(task.id)}
                >
                    <CgClose></CgClose>
                </button>

                <button 
                    className="see-task-details-button" 
                    onClick={() => {}}
                >
                    <CgInfo> </CgInfo>
                </button>
            </div>
        </div>
    );
};
 
export default Task;