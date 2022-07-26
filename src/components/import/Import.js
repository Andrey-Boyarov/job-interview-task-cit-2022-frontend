import ImportButton from "./ImportButton";
import {useContext, useState} from "react";
import {ImportContext} from "../../context/ImportContext";
import Upload from "./Upload";
import Result from "../Result";

export default function Import(){
    const [result, setResult] = useState()

    const resultView = () => {
        if (result) return(
            <Result answer={result}/>
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