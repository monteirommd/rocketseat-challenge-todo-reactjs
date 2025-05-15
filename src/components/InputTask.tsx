import { type ChangeEvent, type FormEvent, useState,  type InvalidEvent } from 'react';
import styles from './InputTask.module.css'
import { PlusCircle } from '@phosphor-icons/react'
import { Task } from './Task';
import { v4 as uuidv4 } from 'uuid';



export function InputTask(){
    const [tasks, setTasks] = useState([
        'Primeira Tasks'
    ])

    const [newTaskText, setNewTaskText] = useState('')

    function handleCreateNewTask(event: FormEvent){
        event.preventDefault();
        setTasks([...tasks, newTaskText]);
        setNewTaskText('');
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity('');
        setNewTaskText(event.target.value)
    }

    return(
        <main>
            <form onSubmit={handleCreateNewTask} className={styles.formContent}>
                <input
                    type="text"
                    placeholder="Adicione uma nova tarefa"
                    value={newTaskText}
                    onChange={handleNewTaskChange}
                />
                <button className={styles.buttonContent} type='submit'>
                    Criar
                    <PlusCircle size={16} weight='bold'/>
                </button>
            </form>
            <div className={styles.taskHeader}>
                <div className={styles.taskInfo}>
                    <h2>Tarefas criadas</h2>
                    <span>1</span>
                </div>
                <div className={styles.taskConcluid}>
                    <h2>Concluídas</h2>
                    <span>0 de 1</span>
                </div>
            </div>
            <div className={styles.taskList}>
                {tasks.map(task =>{
                    return(
                        <Task 
                        key={uuidv4()}
                        content={task}
                        concluid={false}
                        />
                    )
                })}
            </div>
        </main>
    );
}