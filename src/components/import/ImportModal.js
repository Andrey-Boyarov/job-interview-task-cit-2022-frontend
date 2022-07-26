import Modal from "react-modal";
import {ImportContext} from "../../context/ImportContext";
import TaskComboBox from "../TaskComboBox";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import "../../styles/Modal.css"

export default function ImportModal({show, close, setResult}){
    const {taskId, setTaskId} = useContext(ImportContext)
    const [content, setContent] = useState([]) //[{value, label}]

    const loadContent = () => {
        if (taskId && show === true)
        axios
            .get('/hotInput/getByTask/' + taskId)
            .then(response => setContent(response.data))
        if (!taskId) setContent([])
    }
    const loadById = (id) => {
        axios
            .get('/hotInput/calculate/' + id)
            .then(response => setResult(response.data))
    }
    const deleteById = (id) => {
        axios
            .delete('/hotInput/delete/' + id)
        const arr = [...content]
        setContent(arr.filter(el => el.value !== id))
    }
    useEffect(loadContent, [taskId])
    useEffect(() => {if (show === false) setTaskId(null)})
    const component = () => {
        if (show) {
            const arr = [...content]
            return(
                <div>
                    {
                        arr.map(el => {
                            return (
                                <li key={el.value}>
                                    <div className={"Output"}>{el.label}</div>
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