import { makeAutoObservable } from "mobx";
import { signUp } from "./thunks/auth/signup";

class SignUpStore {
    data: SignUpFieldsType = {
        username: '',
        email: '',
        password: '',
    }

    constructor() {
        makeAutoObservable(this);
    }

    updateData(data: SignUpFieldsType) {
        this.data = data;
    }

    async signUp() {
        await signUp(this.data);
    }
}

export const signUpStore = new SignUpStore();