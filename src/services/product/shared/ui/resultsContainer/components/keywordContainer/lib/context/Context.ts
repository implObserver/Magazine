"use client"; 

import { createContext, useContext } from "react";

export const KeywordContainerContext = createContext<undefined | KeywordContainerContextType>(undefined);

export const useKeywordContainerContext = () => {
    const props = useContext(KeywordContainerContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a KeywordContainerContext');
    }
    return props;
}