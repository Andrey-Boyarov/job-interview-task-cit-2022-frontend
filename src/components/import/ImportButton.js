import Modal from 'react-modal';
import {useContext, useState} from "react";
import ImportModal from "./ImportModal";
import {ImportContext} from "../../context/ImportContext";

export default function ImportButton(setResult){
    const [show, setShow] = useState(false)

    const component = () => {
        return(
            <div>
                <button onClick={() => setShow(true)}>Import from save</button>
                <ImportModal show={show} close={() => setShow(false)} setResult={setResult}/>
            </div>
        )
    }

    return(
        component()
    )
}