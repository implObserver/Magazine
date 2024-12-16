import { Price, PriceContext } from "#/services/product/shared/ui/price";
import styles from './styles/LastPrice.module.css'
import { useProductContext } from "#/services/product/entities/product/lib/context/Context";

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