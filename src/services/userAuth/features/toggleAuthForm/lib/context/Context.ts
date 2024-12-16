"use client"; 

import { createContext, useContext } from "react";

export const ToggleAuthFormContext = createContext<undefined | ToggleAuthFormContextType>(undefined);

export function useToggleAuthFormContext() {
    const props = useContext(ToggleAuthFormContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a ToggleAuthFormContext');
    }
    return props;
}