import { flow, types } from "mobx-state-tree";
import { signUpMonitorStore } from "./signupMonitorStore";
import { signUp } from "./thunks/auth/signup";

const SignUpFieldsModel = types.model("SignUpFieldsModel", {
    username: types.string,
    email: types.string,
    password: types.string,
});

const SignUpStore = types
    .model("SignUpStore", {
        data: types.optional(SignUpFieldsModel, {
            username: "",
            email: "",
            password: "",
        }),
    })
    .views(() => ({
        get signUpMonitor() {
            return signUpMonitorStore;
        },
    }))
    .actions((self) => ({
        updateData(data: typeof self.data) {
            if (!data.username || !data.email || !data.password) {
                throw new Error("Все поля должны быть заполнены.");
            }
            self.data = data;
        },
        signUp: flow(function* (data: { username: string; email: string; password: string }) {
            if (!data.username || !data.email || !data.password) {
                self.signUpMonitor.setError("Все поля должны быть заполнены.");
                return;
            }
            self.signUpMonitor.startSignUp();
            try {
                const result = yield signUp(data);

                if (result.isError) {
                    self.signUpMonitor.setError(result.data.message); // Обработка ошибки
                } else {
                    self.signUpMonitor.setSuccessMessage(result.message); // Успешный результат
                }
            } catch (error) {
                console.error("SignUp Error: ", error);
                self.signUpMonitor.setError("Произошла ошибка при регистрации.");
            }
        }),
    }));

export const signUpStore = SignUpStore.create({});