import ImportButton from "./ImportButton";
import {useContext, useState} from "react";
import {ImportContext} from "../../context/ImportContext";
import Upload from "./Upload";

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
                <ImportButton setResult={setResult}/>
                <Upload setResult={setResult}/>
                {resultView()}
            </div>
        )
    }

    return(
        component()
    )
}