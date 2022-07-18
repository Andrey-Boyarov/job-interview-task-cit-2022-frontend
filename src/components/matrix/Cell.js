import {useState} from "react";

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
export default function Cell({/*handle, */columnIndex, array, setArray}){
    const [income, setIncome] = useState(0)
    const updateArray = () => {
        setArray(
            array.splice(columnIndex, 1, income)
        )
    }

    return(
        <div>
            <input type={"number"}
                   value={income}
                   onChange={(e) => {
                       setIncome(e.target.value)
                       updateArray()
                   }}
                   // onKeyPress={event => handle(event)}
            />
        </div>
    )
}