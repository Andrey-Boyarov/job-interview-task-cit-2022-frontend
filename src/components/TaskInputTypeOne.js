/**
 * First way to input (currently for first task)
 * Two extendable lists of strings
 *
 * @returns {JSX.Element}
 * @constructor
 */
import ListOfStrings from "./ListOfStrings";
import {useEffect, useState} from "react";

export default function TaskInputTypeOne({setData}){
    const [arrayOne, setArrayOne] = useState([])
    const [arrayTwo, setArrayTwo] = useState([])
    const [localData, setLocalData] = useState({one: [], two: []})

    const updateData = () => {
        setLocalData({one: arrayOne, two: arrayTwo})
    }

    useEffect(updateData, [arrayOne, arrayTwo])
    useEffect(() => setData(localData), [localData])

    return(
        <div>
            <ListOfStrings label={'first listOfStrings'} setData={setArrayOne}/>
            <ListOfStrings label={'second listOfStrings'} setData={setArrayTwo}/>
        </div>
    )
}