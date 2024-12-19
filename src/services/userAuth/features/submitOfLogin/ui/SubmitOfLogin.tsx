import { SpinnerLoader } from "#/common/shared/ui/spinnerLoader";
import { Login } from "#/services/userAuth/entities/login";
import { loginStore } from "#/states/subStores/userAuth/login";
import { FormEvent, useState } from "react";
import styles from './styles/SubmitOfLogin.module.css'
import { observer } from "mobx-react";

export const SubmitOfLogin = observer(() => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submitHandle = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        await loginStore.login();
        setIsSubmitting(false);
    }

    return (
        <form className={styles.container} onSubmit={submitHandle}>
            <Login></Login>
            {isSubmitting ? (
                <SpinnerLoader></SpinnerLoader>
            ) : (
                <button className={styles.button} type='submit'>
                    Далее
                </button>
            )}
        </form>
    )
});