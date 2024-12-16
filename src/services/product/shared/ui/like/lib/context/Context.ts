"use client"; 

import { createContext, useContext } from "react";

export const LikeContext = createContext<undefined | boolean>(undefined);

export const useLikeContext = () => {
    const props = useContext(LikeContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a LikeContext');
    }
    return props;
}