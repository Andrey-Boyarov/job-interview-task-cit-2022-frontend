import {useContext, useEffect, useState} from "react";
import axios from 'axios'
import Select from 'react-select'


export default function TaskComboBox({context}) {

    const {setTaskId} = useContext(context)

    const [tasks, setTasks] = useState([])

    const onChange = event => setTaskId(event.value)

    const loadTasks = () => {
        axios
            .get('/tasks/getTasks')
            .then(({data}) => setTasks(data))
    }

    useEffect(() => {
        loadTasks()
    }, [])

    return(
        <div>
            <div>Chose task type</div>
            <Select
                options={tasks}
                placeholder={'Choose task'}
                onChange={onChange}
            />
        </div>
    )
}