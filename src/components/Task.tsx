import { Circle, CheckCircle, Trash } from "@phosphor-icons/react";
import styles from './Task.module.css';

interface TaskProps {
    content: string;
    concluid: true | false;
}

export function Task( { content }:TaskProps ){
    return(
        <>
            <section className={styles.taskContent}>
                <button className={styles.check}>
                    <Circle size={24}/>
                </button>
                <span>{content}</span>
                <button className={styles.delet}>
                    <Trash size={24}/>
                </button>
            </section>
        </>
    );
}