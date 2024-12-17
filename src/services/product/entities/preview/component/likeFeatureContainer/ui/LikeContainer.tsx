import styles from './styles/LikeContainer.module.css'

export const LikeContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles.container__like}>
            {children}
        </div>
    )
}