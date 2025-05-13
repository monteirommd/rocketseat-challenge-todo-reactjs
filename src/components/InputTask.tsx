import styles from './InputTask.module.css'
import { PlusCircle } from '@phosphor-icons/react'

export function InputTask(){
    return(
        <main>
            <form action="" className={styles.formContent}>
                <input type="text" placeholder="Adicione uma nova tarefa" />
                <button className={styles.buttonContent}>
                    <span>Criar</span>
                    <PlusCircle size={16} weight='bold'/>
                </button>
            </form>
        </main>
    );
}