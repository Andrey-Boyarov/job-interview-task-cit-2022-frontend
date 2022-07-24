import {useContext, useEffect, useState} from "react";
import {TaskInputContext} from "../context/TaskInputContext";
import TaskInputTypeOne from "./inputTypes/TaskInputTypeOne";
import TaskInputTypeTwo from "./inputTypes/TaskInputTypeTwo";


export default function TaskInput({currentData, setCurrentData}){
    const {taskInputId, setTaskInputId} = useContext(TaskInputContext)
    const [currentInput, setCurrentInput] = useState(0)

    const input = () => {
        if (taskInputId === 1) return <TaskInputTypeOne setData={setCurrentData}/>
        if (taskInputId === 2) return <TaskInputTypeTwo size={3} setData={setCurrentData}/>
        else return 'Waiting for choice'
    }

    useEffect(() => {
        setCurrentInput(input())
    }, [taskInputId])

    return(
        <div>
            {input()}
        </div>
    )
}