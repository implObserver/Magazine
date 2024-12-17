import { AxiosError } from "axios";
import { AuthService } from "../../../../api";

export const signUp = async (data: SignUpFieldsType) => {
    try {
        const response = await AuthService.signup(data);

        const res: EmulateResponse = {
            id: 'signup',
            message: 'Пользователь успешно создан',
            isError: false,
            data: response,
        }
        return res;
    } catch (error) {
        const axiosError = error as AxiosError;
        const data: EmulateResponse = {
            id: 'signup',
            message: `Произошла ошибка`,
            isError: true,
            data: {
                status: axiosError.status as number,
                message: axiosError.message,
            },
        }
        const res = {
            error: true,
            data,
        }
        return res;
    }
}