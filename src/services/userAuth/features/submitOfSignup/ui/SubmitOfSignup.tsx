import { Signup, signUpStore } from "#/services/userAuth/entities/signup";
import { FormEvent } from "react";

export const SubmitOfSignup = () => {

    const submitHandle = (e: FormEvent<HTMLDivElement>) => {
        e.preventDefault();
        signUpStore.signUp();
    }

    return (
        <div onSubmit={submitHandle}>
            <Signup></Signup>
        </div>
    )
}