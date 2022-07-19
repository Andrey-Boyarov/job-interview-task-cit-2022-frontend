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
                       if (['01', '02', '03', '04', '05', '06', '07', '08', '09'].includes(e.target.value))
                            {setIncome(e.target.value.charAt(1))}
                       else if (parseInt(e.target.value) > -1)
                            {setIncome(e.target.value)}
                   }}
                   onKeyDown={e => {
                       const key = e.keyCode || e.which
                       console.log(key)
                       if (['1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(income)
                           && key === BACKSPACE_KEY.code)
                       setIncome('0')
                   }}
            />
        </div>
    )
}