import { LogoEntity } from '#/common/entities/logoEntity'
import { HamburgerTrigger } from '#/common/features/hamburgerTrigger'
import { SearchPanelContainer } from '#/services/product/widgets/searchPanelContainer'
import Link from 'next/link'
import styles from './styles/Face.module.css'
import { Button } from '#/common/shared/ui/button'

export const Face = () => {
    return (
        <div className={styles.face}>
            <LogoEntity />
            <HamburgerTrigger></HamburgerTrigger>
            <SearchPanelContainer></SearchPanelContainer>
            <Link className={styles.link} href={'/auth'}>
                <Button name={'Войти'}></Button>
            </Link>
        </div>
    )
}