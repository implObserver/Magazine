'use client';
import { Dropdown, DropdownContext } from "#/common/shared/ui/dropdownElement";
import styles from './styles/Header.module.css'
import { ExternalReset, ExternalResetContext } from "#/common/features/externalReset";
import { HamburgerTrigger, TriggerContext } from "#/common/features/hamburgerTrigger";
import { useCustomState } from "#/common/shared/lib";
import { LogoEntity } from "#/common/entities/logoEntity";
import Link from "next/link";
import { Button } from "#/common/shared/ui/button";
import { SearchPanelContainer } from "#/services/product/widgets/searchPanelContainer";

export const HeaderBar = () => {
    const dropdownStatus = useCustomState();

    const externalElementContext: ExternalResetContextType = {
        state: dropdownStatus,
        index: 'header',
    }

    const dropdownElementContext: DropdownContextType = {
        state: dropdownStatus.getState(),
        margin: false,
    }

    return (
        <ExternalResetContext.Provider value={externalElementContext}>
            <ExternalReset>
                <div className={styles.bar}>
                    <div className={styles.bar__header}>
                        <LogoEntity />
                        <TriggerContext.Provider value={dropdownStatus}>
                            <HamburgerTrigger></HamburgerTrigger>
                        </TriggerContext.Provider>
                        <SearchPanelContainer></SearchPanelContainer>
                        <Link className={styles.link} href={'/auth'}>
                            <Button name={'Войти'}></Button>
                        </Link>
                    </div>

                    <DropdownContext.Provider value={dropdownElementContext}>
                        <Dropdown>
                            <div className="settings" style={{
                                display: "block",
                                height: '50vh',
                                backgroundColor: 'green',
                            }}>
                            </div>
                        </Dropdown>
                    </DropdownContext.Provider>
                </div>
            </ExternalReset>
        </ExternalResetContext.Provider>
    )
}