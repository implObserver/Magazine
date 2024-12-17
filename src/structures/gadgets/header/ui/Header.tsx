'use client';
import { DropdownContext } from "#/common/shared/ui/dropdownElement";
import styles from './styles/Header.module.css'
import { ExternalReset, ExternalResetContext } from "#/common/features/externalReset";
import { TriggerContext } from "#/common/features/hamburgerTrigger";
import { useCustomState } from "#/common/shared/lib";
import { Face } from "../components/face";
import { HeaderDropdown } from "../components/dropdown";

export const Header = () => {
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
                    <TriggerContext.Provider value={dropdownStatus}>
                        <Face></Face>
                    </TriggerContext.Provider>

                    <DropdownContext.Provider value={dropdownElementContext}>
                        <HeaderDropdown></HeaderDropdown>
                    </DropdownContext.Provider>
                </div>
            </ExternalReset>
        </ExternalResetContext.Provider>
    )
}