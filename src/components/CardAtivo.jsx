import styles from './CardAtivo.module.css'

export function CardAtivo(props) {
    return (
        <h1 className={styles.cardAtivo}>
            {props.children}
        </h1>
    )
}