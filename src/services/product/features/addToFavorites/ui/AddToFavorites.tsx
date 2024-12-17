'use client';

import { useState } from "react";
import { Like, LikeContext } from "#/services/product/shared/ui/like";
import { favoritesStore } from "#/services/product/entities/favorites";
import { useProductContext } from "#/services/product/shared/lib";

export const AddToFavorites = () => {
    const context = useProductContext();
    const [status, setStatus] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const element = e.target as HTMLElement;
        if (element.tagName === 'path') {
            setStatus(!status);
            favoritesStore.addFavorite(context);
        }
    }

    return (
        <div
            onClick={handleClick}>
            <LikeContext.Provider value={status}>
                <Like></Like>
            </LikeContext.Provider>
        </div>
    )
}