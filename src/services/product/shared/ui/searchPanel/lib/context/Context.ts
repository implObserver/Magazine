"use client"; 

import { createContext, useContext } from "react";

export const SearchPanelContext = createContext<undefined | SearchPanelContextType>(undefined);

export const useSearchPanelContext = () => {
    const props = useContext(SearchPanelContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a SearchPanelContext');
    }
    return props;
}