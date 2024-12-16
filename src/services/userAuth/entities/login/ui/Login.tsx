
import styles from './styles/LoginForm.module.css'
import { loginStore } from '../model'
import { LoginForm, LoginFormContext } from '#/services/userAuth/shared/ui/loginForm'

export const Login = () => {
    return (
        <div className={styles.login}>
            <LoginFormContext.Provider value={loginStore}>
                <LoginForm />
            </LoginFormContext.Provider>
        </div>
    )
}