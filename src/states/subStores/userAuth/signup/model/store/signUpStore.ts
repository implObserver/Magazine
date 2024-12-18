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
            console.log(data)
            self.data = data;
        },
        signUp: flow(function* () {
            if (!self.data.username || !self.data.email || !self.data.password) {
                self.signUpMonitor.setError("Все поля должны быть заполнены.");
                return;
            }
            self.signUpMonitor.startSignUp();
            try {
                const result = yield signUp(self.data);
                console.log(result)
                if (result.data.isError) {
                    self.signUpMonitor.setError(result.data.data.message.error); // Обработка ошибки
                } else {
                    self.signUpMonitor.setSuccessMessage(result.message); // Успешный результат
                }
                self.signUpMonitor.setStatus(result.data.data.status)
            } catch (error) {
                console.error("SignUp Error: ", error);
                self.signUpMonitor.setError("Произошла ошибка при регистрации.");
            }
        }),
    }));

export const signUpStore = SignUpStore.create({});