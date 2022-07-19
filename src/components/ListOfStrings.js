import LOSList from "./listOfStrings/LOSList";
import {useEffect, useState} from "react";

export default function ListOfStrings({label, setData}){
    const [array, setArray] = useState([])

    useEffect(() => setData(array), [array])
    return(
        <div>
            <div>{label}</div>
            <LOSList setData={setArray}/>
        </div>
    )
}