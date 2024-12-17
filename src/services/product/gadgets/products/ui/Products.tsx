'use client';

import styles from './styles/Products.module.css'
import { AddToFavorites } from "#/services/product/features/addToFavorites";
import { examples } from "#/services/product/shared/lib/emulationResponse";
import { ProductContext } from "#/services/product/shared/lib";
import { Product } from "#/services/product/widgets/product";
import { EntityPreviewContext } from '#/services/product/entities/preview';

export const Products = () => {
    const productsJSON: Examples = examples;
    const products = Object.keys(examples).map(key => productsJSON[key]);
    const features: ProductFeatures = { like: <AddToFavorites /> };

    const fill = () => {
        return products.map((example: ProductContextType) => {
            return (
                <ProductContext.Provider key={example.id} value={example}>
                    <EntityPreviewContext.Provider value={features}>
                        <Product />
                    </EntityPreviewContext.Provider>
                </ProductContext.Provider>
            )
        })
    }

    return (
        <div className={styles.showcase__product}>
            {fill()}
        </div>
    );
};