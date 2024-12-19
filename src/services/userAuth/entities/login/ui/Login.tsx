
import styles from './styles/LoginForm.module.css'
import { LoginForm, LoginFormContext } from '#/services/userAuth/shared/ui/loginForm'
import { loginStore } from '#/states/subStores/userAuth/login'

export const Login = () => {
    return (
        <div className={styles.login}>
            <LoginFormContext.Provider value={loginStore}>
                <LoginForm />
            </LoginFormContext.Provider>
        </div>
    )
}