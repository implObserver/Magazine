import { makeAutoObservable } from "mobx";
import { create } from "mobx-persist";

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