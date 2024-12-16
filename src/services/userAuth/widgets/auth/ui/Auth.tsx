import { ToggleAuthForm, ToggleAuthFormContext } from '#/services/userAuth/features/toggleAuthForm';
import styles from './styles/Auth.module.css'
import { SubmitOfSignup } from '#/services/userAuth/features/submitOfSignup';
import { SubmitOfLogin } from '#/services/userAuth/features/submitOfLogin';
import { useCustomState } from '#/common/shared/lib';


export const Auth = () => {
    const type = useCustomState('signup');

    const signInContext: ToggleAuthFormContextType = {
        state: type,
        type: 'signin',
    }

    const signUpContext: ToggleAuthFormContextType = {
        state: type,
        type: 'signup',
    }

    return (
        <div className={styles.auth}>
            <div className={styles.header}>
                <div className={styles.title}>
                    {'<'}
                </div>
                <div className={styles.title}>
                    Market
                </div>
            </div>
            <div className={styles.toggle}>
                <ToggleAuthFormContext.Provider value={signInContext}>
                    <ToggleAuthForm></ToggleAuthForm>
                </ToggleAuthFormContext.Provider>
                <ToggleAuthFormContext.Provider value={signUpContext}>
                    <ToggleAuthForm></ToggleAuthForm>
                </ToggleAuthFormContext.Provider>
            </div>
            <div className={styles.form}>
                {type.getState() === 'signup'
                    ? <SubmitOfSignup />
                    : <SubmitOfLogin />}
            </div>
        </div>
    )
}