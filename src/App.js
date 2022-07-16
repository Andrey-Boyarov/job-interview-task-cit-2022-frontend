import './App.css';
import TaskComboBox from './components/TaskComboBox'
import {createContext, useState} from "react";
import {TaskContext} from "./context/TaskContext";

function App() {
    const [taskId, setTaskId] = useState(0)

    return (
      <div>
          <TaskContext.Provider value={{taskId, setTaskId}}>
              <TaskComboBox/>
          </TaskContext.Provider>

      </div>
    );
}

export default App;
