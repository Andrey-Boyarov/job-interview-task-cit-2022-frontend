import {useEffect, useState} from "react";
import {ENTER_KEY} from "../tools/Tools";
import Cell from "./matrix/Cell";
import RawOfDigitsInput from "./matrix/RawOfDigitsInput";

/**
 * Second type of input for tasks - in our case for task two - the magic square
 *
 * @param size
 * @returns {JSX.Element}
 * @constructor
 */
export default function TaskInputTypeTwo({size}){
    const [array, setArray] = useState([])

    const init = () => {
        for (let i = 0; i < size; ++i){
            setArray([...array, []])
        }
    }/*
    const handleRow = (row) => {
        for (let i = 0; i < size; ++i) setArray(array.splice(i, 1, ))
        handleMatrix(array)
    }*/
    const component = () => {
        const matrix = []
        for (let k = 0; k < size; ++k) {
            matrix.push(
                <RawOfDigitsInput key={k} size={size} rowIndex={k} matrix={array} setMatrix={setArray}/>
            )
        }
        return matrix
    }
    useEffect(init, [])

    return(
        <div>
            {component()}
        </div>
    )
}

// columnIndex={counter++}
// handleRow={handleRow}
// array={array}
// setArray={setArray}