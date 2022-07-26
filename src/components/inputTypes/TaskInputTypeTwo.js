import {useEffect, useState} from "react";
import {BACKSPACE_KEY, ENTER_KEY} from "../../tools/Tools";
import RawOfDigitsInput from "../matrix/RawOfDigitsInput";
import "../../styles/TaskInput.css"

/**
 * Second type of input for tasks - in our case for task two - the magic square
 *
 * @param size
 * @param setData
 * @returns {JSX.Element}
 * @constructor
 */
export default function TaskInputTypeTwo({defaultSize, setData}){
    const [array, setArray] = useState([])
    const [size, setSize] = useState(defaultSize)

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
    useEffect(init, [size])
    useEffect(() => {
        setData(array)
    }, [array, size])

    return(
        <div>
            <h3>Input matrix size</h3>
            <input type={"number"}
                   value={size}
                   onChange={(e) => {
                       if (['03', '04', '05', '06', '07', '08', '09'].includes(e.target.value))
                       {setSize(e.target.value.charAt(1))}
                       else if (parseInt(e.target.value) > -1)
                       {setSize(e.target.value)}
                       if ('1' === e.target.value) setSize('2')
                       if (parseInt(e.target.value) > 9) setSize('9')
                   }}
                   onKeyDown={e => {
                       const key = e.keyCode || e.which
                       if (['3', '4', '5', '6', '7', '8', '9'].includes(size)
                           && key === BACKSPACE_KEY.code)
                           setSize('2')
                   }}
            />
            <h4>Input values</h4>
            {component()}
        </div>
    )
}