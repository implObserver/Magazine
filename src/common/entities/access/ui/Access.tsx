import styles from './styles/Access.module.css'

export const Access = ({ message }: { message: string }) => {
    return (
        <div className={styles.access}>
            <span>{message}</span>
        </div>
    )
}