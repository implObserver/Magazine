import axios from "axios";

let currentRetryCount: number = 0;

const apiUrl = process.env.SERVER_URL;

export const instance = axios.create({
    withCredentials: true,
    baseURL: apiUrl,
});

instance.interceptors.response.use(
    (response) => {
        currentRetryCount = 0;
        return response;
    },
    async (error) => {
        if (error.response) {
            if (error.response.status === 401) {
                currentRetryCount++;
                if (currentRetryCount === 1) {
                    console.warn('Попытка обновить access token');
                    await instance.get("/api/user/refresh-access-token");
                    // Повторите оригинальный запрос
                    return instance(error.config);
                } else if (currentRetryCount === 2) {
                    console.warn('Попытка обновить refresh token');
                    await instance.get("/api/user/refresh-refresh-token");
                    // Повторите оригинальный запрос
                    return instance(error.config);
                } else if (currentRetryCount === 3) {
                    console.error('Ошибка авторизации');
                }
            }
        } else {
            console.error('An unexpected error occurred:', error);
        }

        return Promise.reject(error);
    }
);