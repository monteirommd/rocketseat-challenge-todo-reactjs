import styles from './TaskList.module.css'
import { Task } from "./Task";

export function TaskList(){
    return(
        <>
            <header className={styles.taskHeader}>
                <div className={styles.taskInfo}>
                    <h2>Tarefas criadas</h2>
                    <span>1</span>
                </div>
                <div className={styles.taskConcluid}>
                    <h2>Concluídas</h2>
                    <span>0 de 1</span>
                </div>
            </header>
            {/* <Task /> */}
        </>
    );
}