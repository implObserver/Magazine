"use client"; 

import { createContext, useContext } from "react";

export const EntityDescriptionContext = createContext<undefined | EntityDescriptionContextType>(undefined);

export function useEntityDescriptionContext() {
    const props = useContext(EntityDescriptionContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a EntityDescriptionContext');
    }
    return props;
}