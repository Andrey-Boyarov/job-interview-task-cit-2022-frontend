import {useEffect, useState} from "react";
import Cell from "./Cell";
import {ENTER_KEY} from "../../tools/Tools";
import "../../styles/TaskInput.css"

/**
 * One row of matrix (contains many cells)
 *
 * @param size
 * @param rowIndex
 * @param handleRow
 * @returns {*}
 * @constructor
 */
export default function RawOfDigitsInput({size, rowIndex, matrix, setMatrix}){
    const [array, setArray] = useState([])

    const init = () => {
        const arr = []
        for (let i = 0; i < size; ++i){
            arr.push('0')
        }
        setArray(arr)
    }

    const component = () => {
        let counter = 0
        const row = []
        for (let j = 0; j < size; ++j)
            row.push(
                <Cell key={j}
                      columnIndex={counter++}
                      array={array}
                      setArray={setArray}
                      size={size}/>
            )
        return(
            <div className={"RawOfDigitsInput"}>{row}</div>
        )
    }
    useEffect(init, [size])
    useEffect(() => {
        const arr = [...matrix]
        arr.splice(rowIndex, 1, array)
        setMatrix(arr)
    }, [array, size])

    return(
        <div>
            {component()}
        </div>
    )
}