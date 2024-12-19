import styles from './styles/Pending.module.css'

export const Pending = ({ message }: { message: string }) => {
    return (
        <div className={styles.pending}>
            <span>{message}</span>
        </div>
    )
}