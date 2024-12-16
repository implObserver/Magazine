"use client"; 

import { createContext, useContext } from "react";

export const SegmentContext = createContext<undefined | SegmentContextType>(undefined);

export const useSegmentContext = () => {
    const props = useContext(SegmentContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a SegmentContext');
    }
    return props;
}