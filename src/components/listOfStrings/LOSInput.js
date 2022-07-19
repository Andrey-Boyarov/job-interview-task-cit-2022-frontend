import {useState} from "react";
import {ENTER_KEY} from "../../tools/Tools";

export default function LOSInput({addElement}){
    const [income, setIncome] = useState('')
    const add = () => {
        if (income !== '') {
            addElement(income)
            setIncome('')
        }
    }
    const handle = (event) => {
        const key = event.keyCode || event.which
        if (key === ENTER_KEY.code) add()
    }

    return(
        <div>
            <div>
                <input type={"text"}
                       value={income}
                       onChange={(e) => setIncome(e.target.value)}
                       onKeyPress={event => handle(event)}
                />
                <button onClick={add}>Add</button>
            </div>
        </div>
    )
}