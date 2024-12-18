import { types, flow } from "mobx-state-tree";
import { signUp } from "./thunks/auth/signup";

const SignUpFieldsModel = types.model("SignUpFields", {
    username: types.string,
    email: types.string,
    password: types.string,
});

const SignUpStore = types
    .model("SignUpStore", {
        data: SignUpFieldsModel,
    })
    .actions((self) => ({
        updateData(data: typeof self.data) {
            self.data = data;
        },
        signUp: flow(function* () {
            try {
                yield signUp(self.data);
            } catch (error) {
                console.error(error);
            }
        }),
    }));

export const signUpStore = SignUpStore.create({
    data: {
        username: "",
        email: "",
        password: "",
    },
});