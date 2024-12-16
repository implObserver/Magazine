import { makeAutoObservable } from "mobx";

class FavoritesStore {
    favorites: ProductContextType[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    addFavorite(product: ProductContextType) {
        if (!this.favorites.some(fav => fav.id === product.id)) {
            this.favorites.push(product);
        }
    }

    removeFavorite(productId: number) {
        this.favorites = this.favorites.filter(fav => fav.id !== productId);
    }
}
export const favoritesStore = new FavoritesStore();