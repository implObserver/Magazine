import { types } from "mobx-state-tree";

const SignUpMonitorStore = types
    .model("SignUpMonitorStore", {
        isLoading: types.optional(types.boolean, false),
        error: types.maybeNull(types.string),
        successMessage: types.maybeNull(types.string),
    })
    .actions((self) => ({
        startSignUp() {
            self.isLoading = true;
            self.error = null;
            self.successMessage = null;
        },

        setSuccessMessage(message: string) {
            self.isLoading = false;
            self.successMessage = message;
        },

        setError(error: string) {
            self.isLoading = false;
            self.error = error;
        },
    }));

export const signUpMonitorStore = SignUpMonitorStore.create({
    isLoading: false,
    error: null,
    successMessage: null,
});