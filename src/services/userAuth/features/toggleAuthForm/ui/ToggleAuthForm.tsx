
import { AuthButton } from "#/services/userAuth/entities/authButton";
import { useToggleAuthFormContext } from "../lib/context/Context"
import styles from './styles/ToggleAuthForm.module.css'

export const ToggleAuthForm = () => {
    const context = useToggleAuthFormContext();

    const clickHandler = () => {
        context.state.setState(context.type);
    }

    const name = context.type === 'signup'
        ? 'Регистрация'
        : context.type === 'signin'
            ? 'Войти'
            : context.type;

    const active = context.state.getState() === context.type
        ? styles.button_active
        : styles.button;

    return (
        <div
            className={
                `${styles.button} ${active}`
            }
            onClick={clickHandler}
        >
            <AuthButton name={name}></AuthButton>
        </div>
    )
}