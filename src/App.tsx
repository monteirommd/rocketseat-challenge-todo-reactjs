import { InputTask } from './components/InputTask';
import { Header } from './components/Header';

import styles from './App.module.css';
import './global.css'

function App() {
  return (
    <>
      <Header />  
      <div className={styles.wrapper}> 
        <InputTask /> 
      </div>
    </>
  )
}

export default App
