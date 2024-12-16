import { AuthService } from "../../../../api";


export const signUp = async (data: SignUpFieldsType) => {
    try {
        const resp = await AuthService.signup(data);
        const user = resp.data.user;
        const res = {
            id: 'signup',
            message: 'Пользователь успешно создан',
            error: false,
            data: {
                name: 200,
                message: user,
            },
        }
        return res;
    } catch (error) {
        console.log(error)
        const data = {
            id: 'signup',
            status: error.response.status,
            message: error.response.data.error,
        }
        const res = {
            error: true,
            data,
        }
        return res;
    }
}