import axios from "axios";
import {useContext, useState} from "react";
import {TaskContext} from "../context/TaskContext";

export default function BottomButtons({currentData, setAnswer}){
    const {taskId} = useContext(TaskContext)

    const calculate = () => {
        axios
            .post('/calculate/' + taskId, {currentData: currentData})
            .then(response => {
                setAnswer(document.body.innerHTML = "<div>" + JSON.stringify(response.data) + "</div>")
            })
    }
    const save = () => {
        axios
            .post('/save/' + taskId, {currentData: currentData})
            .then(response => {
                setAnswer(document.body.innerHTML = "<div>" + JSON.stringify(response.data) + "</div>")
            })
    }
    const exportBtn = () => {

    }
    const component = () => {
        if (taskId) return(
            <div>
                <button onClick={calculate}>Calculate</button>
                <button onClick={save}>Save</button>
                <button onClick={exportBtn}>Export</button>
            </div>
        )
    }

    return(
        component()
    )
}