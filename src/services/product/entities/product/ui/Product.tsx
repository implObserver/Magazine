import { PriceEntity } from "../components/price"
import { PreviewEntity } from "../components/preview";
import { DescriptionEntity } from "../components/description";
import styles from './styles/Product.module.css'

export const Product = () => {
    return (
        <div className={styles.product}>
            <PreviewEntity />
            <DescriptionEntity></DescriptionEntity>
            <PriceEntity></PriceEntity>
        </div>
    )
}