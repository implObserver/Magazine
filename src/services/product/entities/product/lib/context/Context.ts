"use client"; 

import { createContext, useContext } from "react";

export const ProductContext = createContext<undefined | ProductContextType>(undefined);

export function useProductContext() {
    const props = useContext(ProductContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a ProductContext');
    }
    return props;
}