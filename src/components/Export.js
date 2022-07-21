import axios from "axios";
import {useContext} from "react";
import {TaskContext} from "../context/TaskContext";

export default function Export({currentData}){
    const {taskId} = useContext(TaskContext)

    const downloadFile = () => {
        axios
            .post('/download/' + taskId, currentData,{responseType: 'blob'})
            .then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'file.pdf'); //or any other extension
                document.body.appendChild(link);
                link.click();
            })
    }
    const component = () => {
        if (taskId > -1) return(<button onClick={downloadFile}>Download as file</button>)
    }

    return(
        <div>
            {component()}
        </div>
    )
}