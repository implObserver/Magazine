import { makeAutoObservable } from "mobx";

class LoginStore {
    data: LoginFieldsType = {
        identifier: '',
        password: '',
    }

    constructor() {
        makeAutoObservable(this);
    }

    updateData(data: LoginFieldsType) {
        this.data = data;
    }
}

export const loginStore = new LoginStore();