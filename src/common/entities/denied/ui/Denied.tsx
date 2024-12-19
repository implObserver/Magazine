import styles from './styles/Denied.module.css'

export const Denied = ({ message }: { message: string }) => {
    return (
        <div className={styles.denied}>
            <span>{message}</span>
        </div>
    )
}