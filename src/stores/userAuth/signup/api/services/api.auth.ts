import { tokenAwareClient } from "#/queries/tokenAwareClient"

export const AuthService = {
    signup(data: SignUpFieldsType): Promise<ResponseData> {
        return tokenAwareClient.post("/api/user/signup", data)
    },
}