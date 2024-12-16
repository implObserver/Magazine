import { Description, DescriptionContext } from "#/services/product/shared/ui/description"
import styles from './styles/Description.module.css'
import { useProductContext } from "#/services/product/entities/product/lib/context/Context";

export const DescriptionEntity = () => {
    const context = useProductContext().description;

    const descriptionContext: EntityDescriptionContextType = {
        description: context.description
    }

    return (
        <div className={styles.entity__description}>
            <DescriptionContext.Provider value={descriptionContext}>
                <Description></Description>
            </DescriptionContext.Provider>
        </div >
    )
}