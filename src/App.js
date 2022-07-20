import './App.css';
import TaskComboBox from './components/TaskComboBox'
import {createContext, useEffect, useState} from "react";
import {TaskContext} from "./context/TaskContext";
import TaskInput from "./components/TaskInput";
import {TaskInputContext} from "./context/TaskInputContext";
import {InputDataContext} from "./context/InputDataContext";
import Result from "./components/Result";
import BottomButtons from "./components/BottomButtons";
import ManualInput from "./components/ManualInput";
import Import from "./components/import/Import";
import {ImportContext} from "./context/ImportContext";
import FileUploader from "./components/workWithFiles/FileUploader";
import {UploadContext} from "./context/UploadContext";
import Upload from "./components/import/Upload";

function App() {
    const [taskId, setTaskId] = useState()
    const [taskInputId, setTaskInputId] = useState()
    const [inputData, setInputData] = useState()
    const [currentData, setCurrentData] = useState()
    const [answer, setAnswer] = useState()
    const [externalImport, setExternalImport] = useState({})
    const [importTaskId, setImportTaskId] = useState()
    const [uploadTaskId, setUploadTaskId] = useState()

    //todo remove
    useEffect(() => {
        setTaskInputId(taskId)
    }, [taskId])

    return (
      <div>
          <TaskContext.Provider value={{taskId, setTaskId}}>
              <InputDataContext.Provider value={{inputData, setInputData, externalImport, setExternalImport}}>
                  <TaskInputContext.Provider value={{taskInputId, setTaskInputId}}>
                      <ManualInput currentData={currentData} setCurrentData={setCurrentData}/>
                  </TaskInputContext.Provider>
                  <Result currentData={currentData}/>
                  <BottomButtons currentData={currentData} setAnswer={setAnswer}/>
              </InputDataContext.Provider>
          </TaskContext.Provider>
          <ImportContext.Provider value={{taskId: importTaskId, setTaskId: setImportTaskId}}>
              <Import/>
          </ImportContext.Provider>
          <UploadContext.Provider value={{taskId: uploadTaskId, setTaskId: setUploadTaskId}}>
              <Upload/>
          </UploadContext.Provider>
      </div>
    );
}

export default App;
