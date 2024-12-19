import { AxiosError } from "axios";
import { AuthService } from "../../../../api";

export const login = async (data: LoginFieldsType) => {
    try {
        const response = await AuthService.login(data);

        const res: EmulateResponse = {
            id: 'login',
            message: 'Добро пожаловать',
            isError: false,
            data: response,
        }
        return res;
    } catch (error) {
        const axiosError = error as AxiosError;
        console.log(axiosError.response?.data)
        const data: EmulateResponse = {
            id: 'login',
            message: `Произошла ошибка авторизации`,
            isError: true,
            data: {
                status: axiosError.status as number,
                message: axiosError.response?.data,
            },
        }
        const res = {
            error: true,
            data,
        }
        return res;
    }
}