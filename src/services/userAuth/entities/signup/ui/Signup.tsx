import { SignupForm, SignupFormContext } from '#/services/userAuth/shared/ui/signupForm'
import { signUpStore } from '../model'

export const Signup = () => {
    return (
        <div>
            <SignupFormContext.Provider value={signUpStore}>
                <SignupForm />
            </SignupFormContext.Provider>
        </div>
    )
}