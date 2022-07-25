import {useEffect, useState} from "react";
import LOSItem from "./LOSItem";
import LOSInput from "./LOSInput";
import {getKey} from "../../tools/Tools";

/**
 * List of values for first task
 *
 * @returns {*}
 * @constructor
 */
export default function LOSList({setData}){
    const [list, setList] = useState([])

    const destroy = (value) => {
        setList(list.filter((cur) => {return cur.value !== value}))
    }
    const component = () => {
        return list.map((element) => {
            return(
            <LOSItem key={element.value} value = {element.value} label={element.label} destroy={destroy}/>)
        })
    }
    const addElement = (label) => {
        setList([...list, {value: getKey(), label: label}])
    }
    useEffect(() => setData(list), [list])

    return(
        <div>
            <ul>
                {component()}
            </ul>
            <LOSInput addElement={addElement}/>
        </div>
    )
}