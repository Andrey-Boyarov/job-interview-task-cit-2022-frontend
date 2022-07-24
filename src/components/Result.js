import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {TaskContext} from "../context/TaskContext";

export default function Result({answer}){
    const {taskId} = useContext(TaskContext)
    const [task, setTask] = useState()


    const component = () => {
        if (task) return(
            <div>Result: {answer}</div>
        )
    }
    useEffect(() => setTask(taskId), [taskId])

    return(
        component()
    )
}