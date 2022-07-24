import Modal from "react-modal";
import {ImportContext} from "../../context/ImportContext";
import TaskComboBox from "../TaskComboBox";
import {useContext, useState} from "react";
import axios from "axios";
import {UploadContext} from "../../context/UploadContext";
import FileUploader from "../workWithFiles/FileUploader";

export default function UploadModal({show, close, setResult}){
    const {taskId} = useContext(UploadContext)

    const component = () => {
        if (taskId) return(<FileUploader setResult={setResult}/>)
    }

    return(
        <div>
            <Modal
                isOpen={show}
                onAfterOpen={() => {}}
                onRequestClose={close}
                contentLabel="Import from save"
                ariaHideApp={false}>
                <TaskComboBox context={UploadContext}/>
                {component()}
                <button onClick={close}>Close</button>
            </Modal>
        </div>
    )
}