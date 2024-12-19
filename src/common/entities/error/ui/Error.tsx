import styles from './styles/Error.module.css'

export const Error = ({ message }: { message: string }) => {
    return (
        <div className={styles.error}>
            <span>{message}</span>
        </div>
    )
}