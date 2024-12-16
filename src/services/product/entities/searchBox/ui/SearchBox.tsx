'use client';
import styles from './styles/SearchBox.module.css'
import { useState } from "react"
import { usePlugContext } from "#/common/shared/ui/plug/lib/context/Context";
import { SearchPanel, SearchPanelContext } from '#/services/product/shared/ui/searchPanel';
import { Dropdown, DropdownContext } from '#/common/shared/ui/dropdownElement';
import { ResultsContainer, ResultsContainerContext } from '#/services/product/shared/ui/resultsContainer';

export const SearchBox = () => {
    const [value, setValue] = useState('');
    const trigger = usePlugContext();

    const searchPanelContext: SearchPanelContextType = {
        trigger: trigger.state,
        setValue,
        value,
    }

    const resultsContainerContext: ResultsContainerContextType = {
        setValue,
        keywords: ['lol', 'kek', 'cheburek'],
    }

    const dropdownElementContext: DropdownContextType = {
        state: trigger.state,
        margin: true,
    }

    return (
        <div className={styles.panel__search}>
            <SearchPanelContext.Provider value={searchPanelContext}>
                <SearchPanel></SearchPanel>
                <DropdownContext.Provider value={dropdownElementContext}>
                    <Dropdown>
                        <ResultsContainerContext.Provider value={resultsContainerContext}>
                            <ResultsContainer></ResultsContainer>
                        </ResultsContainerContext.Provider>
                    </Dropdown>
                </DropdownContext.Provider>
            </SearchPanelContext.Provider>
        </div>
    )
}