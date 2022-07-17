import {useContext, useEffect, useState} from "react";
import axios from 'axios'
import Select from 'react-select'
import {TaskContext} from "../context/TaskContext";


export default function TaskComboBox() {

    const {taskId, setTaskId} = useContext(TaskContext)

    const [tasks, setTasks] = useState([{value: 0, label: 'first'},{value: 1, label: 'second'}])

    const onChange = event => setTaskId(event.value)

    const loadTasks = () => {
        axios
            .get('/getTasks')
            .then(({data}) => setTasks(data))
    }

    useEffect(() => {
        loadTasks()
    }, [])

    return(
        <div>
            <Select
                options={tasks}
                placeholder={'Choose task'}
                onChange={onChange}
            />
        </div>
    )
}