import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {TaskContext} from "../context/TaskContext";

export default function Result({currentData}){
    const [answer, setAnswer] = useState()
    const {taskId} = useContext(TaskContext)
    const [task, setTask] = useState()

    const calculate = () => {
        axios
            .post('/calculate/' + task, {currentData: currentData})
            .then(data => {
                setAnswer(document.body.innerHTML = "<div>" + JSON.stringify(data) + "</div>")
            })
    }
    const component = () => {
        if (task > -1) return(
            <div>
                <button onClick={calculate}>Calculate</button>
                <div>Result: {answer}</div>
            </div>
        )
    }
    useEffect(() => setTask(taskId), [taskId])

    return(
        component()
    )
}