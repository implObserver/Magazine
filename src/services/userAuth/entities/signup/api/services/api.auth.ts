import { instance } from "#/common/shared/lib"

export const AuthService = {
    signup(data: SignUpFieldsType) {
        return instance.post("/api/user/signup", data)
    },
}