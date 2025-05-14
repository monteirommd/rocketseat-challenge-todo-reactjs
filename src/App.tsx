import { InputTask } from './components/InputTask';
import { Header } from './components/Header';

import styles from './App.module.css';
import './global.css'
import { TaskList } from './components/TaskList';

function App() {
  return (
    <>
      <Header />  
      <div className={styles.wrapper}> 
        <InputTask /> 
        <TaskList />
      </div>
    </>
  )
}

export default App
