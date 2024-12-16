"use client"; 

import { createContext, useContext } from "react";

export const LogoContext = createContext<undefined | LogoContextType>(undefined);

export const useLogoContext = () => {
    const props = useContext(LogoContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a LogoContext');
    }
    return props;
}