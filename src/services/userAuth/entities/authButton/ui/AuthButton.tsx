import { Button } from '#/common/shared/ui/button'
import styles from './styles/Button.module.css'

export const AuthButton = ({ name }) => {
    return (
        <div className={styles.button}>
            <Button name={name}></Button>
        </div>
    )
}