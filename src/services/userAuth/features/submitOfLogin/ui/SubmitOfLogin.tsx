import { Login, loginStore } from "#/services/userAuth/entities/login"; 

export const SubmitOfLogin = () => {
    const submitHandle = async (e: React.FormEvent<HTMLDivElement>) => {
        e.preventDefault();
        console.log(loginStore.data)
    }

    return (
        <div onSubmit={submitHandle}>
            <Login></Login>
        </div>
    )
}