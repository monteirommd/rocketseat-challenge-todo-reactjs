import styles from './Header.module.css'
import todoLogo from '../assets/rocketlogo.svg'

export function Header(){
    return(
        <div className={styles.contentHeader}>
            <header className={styles.contentLogo}>
                <img src={todoLogo} alt="Logo de icone de foguete" />
                <h1>todo</h1>
            </header>
        </div>
    );
}