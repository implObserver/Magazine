import { tokenAwareClient } from "#/queries/tokenAwareClient"

export const AuthService = {
    login(data: LoginFieldsType): Promise<ResponseData> {
        return tokenAwareClient.post("/api/user/login", data)
    },
}