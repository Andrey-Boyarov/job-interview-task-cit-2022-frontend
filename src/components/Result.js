import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {TaskContext} from "../context/TaskContext";

export default function Result({answer}){
    const component = () => {
        if (answer) return(
            <div>Result: {answer}</div>
        )
    }

    return(
        component()
    )
}