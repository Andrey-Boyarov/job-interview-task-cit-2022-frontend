import axios from "axios";

export const ENTER_KEY = {code: 13}
export const BACKSPACE_KEY = {code: 8}

export const defineTaskInputType = (taskId, setTaskInputType) => {
    axios
        .get('/taskInputType/' + taskId)
        .then(response => {setTaskInputType(response.data)})
}
export const getKey = () => {
    return Date.now()
}