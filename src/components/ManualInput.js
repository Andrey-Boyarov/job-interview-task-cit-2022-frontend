import TaskComboBox from "./TaskComboBox";
import TaskInput from "./TaskInput";
import {TaskContext} from "../context/TaskContext";
import '../styles/TaskComboBox.css'

export default function ManualInput({currentData, setCurrentData}){
    return(
        <div>
            <TaskComboBox className={"TaskComboBox"} context={TaskContext}/>
            <TaskInput currentData={currentData} setCurrentData={setCurrentData}/>
        </div>
    )
}