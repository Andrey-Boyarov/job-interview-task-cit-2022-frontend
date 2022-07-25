import axios from "axios";
import {useContext, useState} from "react";
import {TaskContext} from "../context/TaskContext";

export default function BottomButtons({currentData, setAnswer}){
    const {taskId} = useContext(TaskContext)

    const calculate = () => {
        axios
            .post('/tasks/calculate/' + taskId, {currentData: currentData})
            .then(response => {
                setAnswer(response.data)
            })
    }
    const save = () => {
        axios
            .post('/hotInput/save/' + taskId, {currentData: currentData})
            .then(response => {
                response.data
            })
    }
    const component = () => {
        if (taskId) return(
            <div>
                <button onClick={calculate}>Calculate</button>
                <button onClick={save}>Save</button>
            </div>
        )
    }

    return(
        component()
    )
}