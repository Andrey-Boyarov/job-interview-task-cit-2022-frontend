import {useState} from "react";

export default function LOSItem({value, label, destroy}){
    const destroyThis = () => {
        destroy(value)
    }

    return(
        <div>
            <div>{label}</div>
            <button onClick={destroyThis}>delete</button>
        </div>
    )
}