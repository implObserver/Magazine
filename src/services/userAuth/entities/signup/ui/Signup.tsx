import { SignupForm, SignupFormContext } from '#/services/userAuth/shared/ui/signupForm'
import { signUpStore } from '#/states/subStores/userAuth/signup'
import styles from './styles/Signup.module.css'

export const Signup = () => {
    return (
        <div className={styles.container}>
            <SignupFormContext.Provider value={signUpStore}>
                <SignupForm />
            </SignupFormContext.Provider>
        </div>
    )
}