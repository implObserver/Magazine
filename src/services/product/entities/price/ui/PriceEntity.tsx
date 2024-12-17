import { useProductContext } from "#/services/product/shared/lib";
import { ActualPrice } from "../components/actual"
import { LastPrice } from "../components/last"
import styles from './styles/PriceEntity.module.css'

export const PriceEntity = () => {
    const context = useProductContext().price;

    if (context.discount) {
        return (
            <span className={styles.entity__price}>
                <ActualPrice></ActualPrice>
                <LastPrice></LastPrice>
            </span>
        )
    } else {
        return (
            <span className={styles.entity__price}>
                <ActualPrice></ActualPrice>
            </span>
        )
    }
}