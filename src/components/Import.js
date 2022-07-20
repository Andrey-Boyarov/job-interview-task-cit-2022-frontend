import ImportButtons from "./import/ImportButtons";
import {useContext, useState} from "react";
import {ImportContext} from "../context/ImportContext";

export default function Import(){
    const [result, setResult] = useState()

    const resultView = () => {
        if (result) return(
            <div>
                {result}
            </div>
        )
        return('')
    }
    const component = () => {
        return(
            <div>
                <ImportButtons setResult={setResult}/>
                {resultView()}
            </div>
        )
    }

    return(
        component()
    )
}