import ImportButton from "./ImportButton";
import {useContext, useState} from "react";
import {ImportContext} from "../../context/ImportContext";
import UploadButton from "./UploadButton";

export default function Upload(){
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
                <UploadButton setResult={setResult}/>
                {resultView()}
            </div>
        )
    }

    return(
        component()
    )
}