import axios from "axios";

export const ENTER_KEY = {code: 13}

export const getTaskInputType = (taskId) => {
    axios
        .get('/taskInputType/' + taskId)
        .then(({data}) => {})
}
export const getKey = () => {
    return Date.now()
}