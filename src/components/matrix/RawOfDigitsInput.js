import {useEffect, useState} from "react";
import Cell from "./Cell";
import {ENTER_KEY} from "../../tools/Tools";

/**
 * One row of matrix (contains many cells)
 *
 * @param size
 * @param rowIndex
 * @param handleRow
 * @returns {*}
 * @constructor
 */
export default function RawOfDigitsInput({size, rowIndex, matrix, setMatrix/*, handleRow*/}){
    const [array, setArray] = useState([])

    const init = () => {
        for (let i = 0; i < size; ++i){
            setArray([...array, 0])
        }
    }/*
    const handleCell = (event) => {
        const key = event.keyCode || event.which
        if (key === ENTER_KEY.code) handleRow(rowIndex, array)
    }*/
    const component = () => {
        let counter = 0
        const row = []
        for (let j = 0; j < size; ++j)
            row.push(
                <Cell key={j}
                      columnIndex={counter++}
                      // handle={handleCell}
                      array={array}
                      setArray={setArray}/>
            )
        return(
            <div>{row}</div>
        )
    }
    useEffect(init, [])
    useEffect(() => {
        setMatrix(matrix.splice(rowIndex, 1, array))
    }, [array])

    return(
        <div>
            {component()}
        </div>
    )
}