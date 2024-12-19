import { types } from "mobx-state-tree";

const LoginMonitorStore = types
    .model("LoginMonitorStore", {
        isLoading: types.optional(types.boolean, false),
        error: types.maybeNull(types.string),
        successMessage: types.maybeNull(types.string),
        info: types.optional(types.string, "Авторизация..."),
        status: types.number,
    })
    .actions((self) => ({
        startLogin() {
            self.isLoading = true;
            self.error = null;
            self.successMessage = null;
            console.log(self.isLoading)
        },

        setSuccessMessage(message: string) {
            self.isLoading = false;
            self.successMessage = message;
            console.log(self.successMessage)
        },

        setError(error: string) {
            self.isLoading = false;
            self.error = error;
            console.log(self.error)
        },

        setStatus(status: number) {
            self.status = status;
            console.log(self.status);
        }
    }));

export const loginMonitorStore = LoginMonitorStore.create({
    error: null,
    successMessage: null,
    status: 0,
});