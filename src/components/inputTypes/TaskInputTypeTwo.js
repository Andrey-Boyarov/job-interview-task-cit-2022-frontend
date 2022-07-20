import {useEffect, useState} from "react";
import {ENTER_KEY} from "../../tools/Tools";
import Cell from "../matrix/Cell";
import RawOfDigitsInput from "../matrix/RawOfDigitsInput";

/**
 * Second type of input for tasks - in our case for task two - the magic square
 *
 * @param size
 * @param setData
 * @returns {JSX.Element}
 * @constructor
 */
export default function TaskInputTypeTwo({size, setData}){
    const [array, setArray] = useState([])

    const init = () => {
        const arr = []
        for (let i = 0; i < size; ++i){
            const inside = []
            for (let s = 0; s < size; ++s){
                inside.push('0')
            }
            arr.push(inside)
        }
        setArray(arr)
    }

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
    useEffect(() => {
        setData(array)
    }, [array])

    return(
        <div>
            {component()}
        </div>
    )
}