import TaskComboBox from "./TaskComboBox";
import TaskInput from "./TaskInput";
import {TaskContext} from "../context/TaskContext";

export default function ManualInput({currentData, setCurrentData}){
    return(
        <div>
            <TaskComboBox context={TaskContext}/>
            <TaskInput currentData={currentData} setCurrentData={setCurrentData}/>
        </div>
    )
}