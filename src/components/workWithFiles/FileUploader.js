import axios from "axios";
import {useContext, useState} from "react";
import {UploadContext} from "../../context/UploadContext";

export default function FileUploader({setResult}){
    const [file, setFile] = useState()
    const {taskId} = useContext(UploadContext)

    function handleChange(event) {
        setFile(event.target.files[0])
    }

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData()
        formData.append('file', file)
        console.log(file)
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            }
        }
        axios
            .post('/upload/' + taskId, formData, config)
            .then((response) => {
                setResult(response.data)
            })

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleChange}/>
                <button type="submit">Upload</button>
            </form>
        </div>
    );

}