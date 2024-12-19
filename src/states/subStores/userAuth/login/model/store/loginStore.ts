import { flow, types } from "mobx-state-tree";
import { login } from "./thunks/auth/login";
import { loginMonitorStore } from "./loginMonitor";

const LoginFieldsModel = types.model("LoginFieldsModel", {
    identifier: types.string,
    password: types.string,
});

const LoginStore = types
    .model("LoginStore", {
        data: types.optional(LoginFieldsModel, {
            identifier: "",
            password: "",
        }),
    })
    .views(() => ({
        get loginMonitor() {
            return loginMonitorStore;
        },
    }))
    .actions((self) => ({
        updateData(data: typeof self.data) {
            console.log(data)
            self.data = data;
        },
        login: flow(function* () {
            console.log(self.data.password)
            if (!self.data.identifier || !self.data.password) {
                self.loginMonitor.setError("Все поля должны быть заполнены.");
                return;
            }
            self.loginMonitor.startLogin();
            try {
                const result = yield login(self.data);
                console.log(result)
                if (result.data.isError) {
                    self.loginMonitor.setError(result.data.data.message.error);
                } else {
                    self.loginMonitor.setSuccessMessage(result.message);
                }
                self.loginMonitor.setStatus(result.data.data.status)
            } catch (error) {
                console.error("SignUp Error: ", error);
                self.loginMonitor.setError("Произошла ошибка при авторизации.");
            }
        }),
    }));

export const loginStore = LoginStore.create({});