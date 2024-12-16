"use client"; 

import { createContext, useContext } from "react";

export const EntityPriceContext = createContext<undefined | EntityPriceContextType>(undefined);

export function useEntityPriceContext() {
    const props = useContext(EntityPriceContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a EntityPriceContext');
    }
    return props;
}