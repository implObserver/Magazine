"use client"; 

import { createContext, useContext } from "react";

export const PriceContext = createContext<undefined | PriceContextType>(undefined);

export const usePriceContext = () => {
    const props = useContext(PriceContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a PriceContext');
    }
    return props;
}