import styles from './Header.module.css'
import todoLogo from '../assets/rocketlogo.svg'

export function Header(){
    return(
        <>
            <header className={styles.contentLogo}>
                <img src={todoLogo} alt="Logo de icone de foguete" />
                <h1>todo</h1>
            </header>
        </>
    );
}