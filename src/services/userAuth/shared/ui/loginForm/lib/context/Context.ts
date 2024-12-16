"use client"; 

import { createContext, useContext } from "react";

export const LoginFormContext = createContext<undefined | LoginStoreType>(undefined);

export const useLoginFormContext = () => {
    const props = useContext(LoginFormContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a LoginFormContext');
    }
    return props;
}