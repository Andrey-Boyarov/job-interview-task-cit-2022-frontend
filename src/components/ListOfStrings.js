import LOSList from "./listOfStrings/LOSList";
import {useEffect, useState} from "react";

export default function ListOfStrings({label, setData}){
    const [array, setArray] = useState([])

    useEffect(() => setData(array), [array])
    return(
        <div>
            <h3>{label}</h3>
            <LOSList setData={setArray}/>
        </div>
    )
}