"use client"; 

import { createContext, useContext } from "react";

export const ResultsContainerContext = createContext<undefined | ResultsContainerContextType>(undefined);

export const useResultsContainerContext = () => {
    const props = useContext(ResultsContainerContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a ResultsContainerContext');
    }
    return props;
}