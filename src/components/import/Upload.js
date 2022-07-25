import ImportButton from "./ImportButton";
import {useContext, useState} from "react";
import {ImportContext} from "../../context/ImportContext";
import UploadButton from "./UploadButton";

export default function Upload({setResult}){
    const component = () => {
        return(
            <div>
                <UploadButton setResult={setResult}/>
            </div>
        )
    }

    return(
        component()
    )
}