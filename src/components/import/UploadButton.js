import Modal from 'react-modal';
import {useContext, useState} from "react";
import ImportModal from "./ImportModal";
import {ImportContext} from "../../context/ImportContext";
import UploadModal from "./UploadModal";

export default function UploadButton(setResult){
    const [show, setShow] = useState(false)

    const component = () => {
        return(
            <div>
                <button onClick={() => setShow(true)}>Import from file</button>
                <UploadModal show={show} close={() => setShow(false)} setResult={setResult}/>
            </div>
        )
    }

    return(
        component()
    )
}