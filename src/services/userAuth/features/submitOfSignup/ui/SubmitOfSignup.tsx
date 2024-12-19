import { SpinnerLoader } from "#/common/shared/ui/spinnerLoader";
import { Signup } from "#/services/userAuth/entities/signup";
import { signUpStore } from "#/states/subStores/userAuth/signup";
import { observer } from "mobx-react";
import { FormEvent, useState } from "react";
import styles from './styles/SubmitOfSignup.module.css'

export const SubmitOfSignup = observer(() => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submitHandle = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        await signUpStore.signUp();
        setIsSubmitting(false);
    }

    return (
        <form className={styles.container} onSubmit={submitHandle}>
            <Signup></Signup>
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