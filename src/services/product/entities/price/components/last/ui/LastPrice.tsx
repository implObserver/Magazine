import { useProductContext } from "#/services/product/shared/lib";
import { Price, PriceContext } from "#/services/product/shared/ui/price";
import styles from './styles/LastPrice.module.css'

export const LastPrice = () => {
    const context = useProductContext().price;
    const price = context.discount ? context.price : '';
    const priceContext: PriceContextType = {
        price: price,
        currency: context.currency
    }

    return (
        <span className={styles.last__price}>
            <PriceContext.Provider value={priceContext}>
                <Price></Price>
            </PriceContext.Provider>
        </span>

    )
}