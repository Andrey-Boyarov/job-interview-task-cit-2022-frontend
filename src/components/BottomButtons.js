import axios from "axios";
import {useContext, useState} from "react";
import {TaskContext} from "../context/TaskContext";

export default function BottomButtons({currentData, setAnswer}){
    const {taskId} = useContext(TaskContext)

    const calculate = () => {
        axios
            .post('/calculate/' + taskId, {currentData: currentData})
            .then(data => {
                setAnswer(document.body.innerHTML = "<div>" + JSON.stringify(data) + "</div>")
            })
    }
    const save = () => {
        axios
            .post('/save/' + taskId, {currentData: currentData})
            .then(data => {
                setAnswer(document.body.innerHTML = "<div>" + JSON.stringify(data) + "</div>")
            })
    }
    const component = () => {
        if (taskId > -1) return(
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