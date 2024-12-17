"use client";

import { createContext, useContext } from "react";

export const EntityPreviewContext = createContext<undefined | ProductFeatures>(undefined);

export const useEntityPreviewContext = () => {
    const props = useContext(EntityPreviewContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a EntityPreviewContext');
    }
    return props;
}