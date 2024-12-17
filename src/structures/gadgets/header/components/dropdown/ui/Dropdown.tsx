import { Dropdown } from '#/common/shared/ui/dropdownElement'
import styles from './styles/HeaderDropdown.module.css'

export const HeaderDropdown = () => {
    return (
        <Dropdown>
            <div className={styles.container} />
        </Dropdown>
    )
}