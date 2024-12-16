import { usePriceContext } from "../../../lib/context/Context"
import styles from './styles/Currency.module.css'

export const Currency = () => {
    const context = usePriceContext();
    return (
        <span className={styles.currency}>{context.currency}</span>
    )
}