import TaskInputTypeOne from "./TaskInputTypeOne";
import {useContext, useEffect, useState} from "react";
import {TaskInputContext} from "../context/TaskInputContext";


export default function TaskInput(){
    const {taskInputId, setTaskInputId} = useContext(TaskInputContext)
    const [currentInput, setCurrentInput] = useState()

    const input = () => {
        if (taskInputId === 0) return <TaskInputTypeOne/>
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