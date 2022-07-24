import Modal from "react-modal";
import {ImportContext} from "../../context/ImportContext";
import TaskComboBox from "../TaskComboBox";
import {useContext, useEffect, useState} from "react";
import axios from "axios";

export default function ImportModal({show, close, setResult}){
    const {taskId} = useContext(ImportContext)
    const [content, setContent] = useState([]) //[{id, label}]

    const loadContent = () => {
        if (taskId)
        axios
            .get('/downloadSavedByTask/' + taskId)
            .then(response => setContent(response.data))
    }
    const loadById = (id) => {
        axios
            .get('/downloadSavedById/' + id)
            .then(response => setResult(response.data))
    }
    const deleteById = (id) => {
        axios
            .get('/deleteSavedById/' + id)
        const arr = [...content]
        setContent(arr.filter(el => el.id !== id))
    }
    useEffect(loadContent, [taskId])
    const component = () => {
        if (show) {
            const arr = [...content]
            return(
                <div>
                    {
                        arr.map(el => {
                            return (
                                <li key={el.id}>
                                    <div>{el.label}</div>
                                    <button onClick={() => {
                                        loadById(el.id)
                                        close()
                                    }}>Load</button>
                                    <button onClick={() => deleteById(el.id)}>Delete</button>
                                </li>
                            )
                        })
                    }
                </div>
            )
        }
    }

    return(
        <div>
            <Modal
                isOpen={show}
                onAfterOpen={() => {}}
                onRequestClose={close}
                contentLabel="Import from save"
                ariaHideApp={false}>
                <TaskComboBox context={ImportContext}/>
                {component()}
                <button onClick={close}>Close</button>
            </Modal>
        </div>
    )
}