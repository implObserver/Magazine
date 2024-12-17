import { ExternalReset, ExternalResetContext } from "#/common/features/externalReset";
import styles from './styles/SearchPanel.module.css'
import { useCustomState } from "#/common/shared/lib";
import { MouseEvent } from "react";
import { DropdownContext } from "#/common/shared/ui/dropdownElement";
import { KeywordContainerContext } from "#/services/product/shared/ui/keywordContainer";
import { Face } from "../components/face";
import { SearchDropdown } from "../components/dropdown";

export const SearchPanelContainer = () => {
    const isCheck = useCustomState();
    const value = useCustomState('');

    const externalElementContext: ExternalResetContextType = {
        state: isCheck,
        index: 'search__box'
    }

    const clickHandle = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        e.preventDefault();
        isCheck.setState(true);
    }

    const dropdownElementContext: DropdownContextType = {
        state: isCheck.getState(),
        margin: true,
    }

    return (
        <div className="search__panel__container">
            <div
                className={styles.container__search__panel}
                onClick={clickHandle}
            >
                <ExternalResetContext.Provider value={externalElementContext}>
                    <ExternalReset>

                        <KeywordContainerContext.Provider value={{ state: value }}>
                            
                            <Face></Face>

                            <DropdownContext.Provider value={dropdownElementContext}>
                                <SearchDropdown></SearchDropdown>
                            </DropdownContext.Provider>

                        </KeywordContainerContext.Provider>
                        
                    </ExternalReset>
                </ExternalResetContext.Provider>
            </div>
        </div>
    )
}