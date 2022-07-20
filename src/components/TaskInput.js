import {useContext, useEffect, useState} from "react";
import {TaskInputContext} from "../context/TaskInputContext";
import TaskInputTypeOne from "./input_types/TaskInputTypeOne";
import TaskInputTypeTwo from "./input_types/TaskInputTypeTwo";


export default function TaskInput({currentData, setCurrentData}){
    const {taskInputId, setTaskInputId} = useContext(TaskInputContext)
    const [currentInput, setCurrentInput] = useState(0)

    const input = () => {
        if (taskInputId === 0) return <TaskInputTypeOne setData={setCurrentData}/>
        if (taskInputId === 1) return <TaskInputTypeTwo size={3} setData={setCurrentData}/>
        else return 'Waiting for choice'
    }

    useEffect(() => {
        setCurrentInput(input())
    }, [taskInputId])

    return(
        <div>
            {console.log(currentData)}
            {input()}
        </div>
    )
}