"use client"; 

import { createContext, useContext } from "react";

export const ImageShowcaseContext = createContext<undefined | ImageShowcaseContextType>(undefined);

export const useImageShowcaseContext = () => {
    const props = useContext(ImageShowcaseContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a ImageShowcaseContext');
    }
    return props;
}