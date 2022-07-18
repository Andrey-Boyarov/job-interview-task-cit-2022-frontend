import {useContext, useEffect, useState} from "react";
import {TaskInputContext} from "../context/TaskInputContext";
import TaskInputTypeOne from "./TaskInputTypeOne";
import TaskInputTypeTwo from "./TaskInputTypeTwo";


export default function TaskInput(){
    const {taskInputId, setTaskInputId} = useContext(TaskInputContext)
    const [currentInput, setCurrentInput] = useState()

    const input = () => {
        if (taskInputId === 0) return <TaskInputTypeOne/>
        if (taskInputId === 1) return <TaskInputTypeTwo size={3}/>
        else return 'Waiting for choice'
    }

    useEffect(() => {
        setCurrentInput(input())
    }, [taskInputId])

    return(
        <div>
            {currentInput}
        </div>
    )
}