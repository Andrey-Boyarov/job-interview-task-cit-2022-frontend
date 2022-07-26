import {useEffect, useState} from "react";
import {BACKSPACE_KEY} from "../../tools/Tools";
import "../../styles/TaskInput.css"

/**
 * One cell of matrix
 *
 * @param handle
 * @param columnIndex
 * @param array
 * @param setArray
 * @returns {JSX.Element}
 * @constructor
 */
export default function Cell({columnIndex, array, setArray, size}){
    const [income, setIncome] = useState('0')

    const updateArray = () => {
        const arr = [...array]
        arr.splice(columnIndex, 1, income)
        setArray(arr)
    }
    useEffect(() => {
        updateArray()
    }, [income])
    useEffect(() => setIncome('0'), [size])

    return(
        <div className={"Cell"}>
            <input className={"CellInput"} type={"number"}
                   value={income}
                   onChange={(e) => {
                       if (['01', '02', '03', '04', '05', '06', '07', '08', '09'].includes(e.target.value))
                            {setIncome(e.target.value.charAt(1))}
                       else if (parseInt(e.target.value) > -1)
                            {setIncome(e.target.value)}
                   }}
                   onKeyDown={e => {
                       const key = e.keyCode || e.which
                       if (['1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(income)
                           && key === BACKSPACE_KEY.code)
                       setIncome('0')
                   }}
            />
        </div>
    )
}