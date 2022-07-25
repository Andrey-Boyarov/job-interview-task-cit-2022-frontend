import Modal from "react-modal";
import {ImportContext} from "../../context/ImportContext";
import TaskComboBox from "../TaskComboBox";
import {useContext, useEffect, useState} from "react";
import axios from "axios";

export default function ImportModal({show, close, setResult}){
    const {taskId} = useContext(ImportContext)
    const [content, setContent] = useState([]) //[{value, label}]

    const loadContent = () => {
        if (taskId)
        axios
            .get('/hotInput/getByTask/' + taskId)
            .then(response => setContent(response.data))
    }
    const loadById = (id) => {
        axios
            .get('/hotInput/ById/' + id)
            .then(response => setResult(response.data))
    }
    const deleteById = (id) => {
        axios
            .delete('/deleteSavedById/' + id)
        const arr = [...content]
        setContent(arr.filter(el => el.value !== id))
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
                                <li key={el.value}>
                                    <div>{el.label}</div>
                                    <button onClick={() => {
                                        loadById(el.value)
                                        close()
                                    }}>Load</button>
                                    <button onClick={() => deleteById(el.value)}>Delete</button>
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