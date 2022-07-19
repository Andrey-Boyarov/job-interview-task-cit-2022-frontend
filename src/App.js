import './App.css';
import TaskComboBox from './components/TaskComboBox'
import {createContext, useEffect, useState} from "react";
import {TaskContext} from "./context/TaskContext";
import TaskInput from "./components/TaskInput";
import {TaskInputContext} from "./context/TaskInputContext";
import {InputDataContext} from "./context/InputDataContext";
import Result from "./components/Result";

function App() {
    const [taskId, setTaskId] = useState()
    const [taskInputId, setTaskInputId] = useState()
    const [inputData, setInputData] = useState()
    const [currentData, setCurrentData] = useState()

    //todo remove
    useEffect(() => {
        setTaskInputId(taskId)
    }, [taskId])

    return (
      <div>
          <TaskContext.Provider value={{taskId, setTaskId}}>
              <TaskComboBox/>
              <InputDataContext.Provider value={{inputData, setInputData}}>
                  <TaskInputContext.Provider value={{taskInputId, setTaskInputId}}>
                      <TaskInput currentData={currentData} setCurrentData={setCurrentData}/>
                  </TaskInputContext.Provider>
                  <Result currentData={currentData}/>
              </InputDataContext.Provider>
          </TaskContext.Provider>

      </div>
    );
}

export default App;
