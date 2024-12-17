'use client';
import styles from './styles/SearchBox.module.css'

import { usePlugContext } from "#/common/shared/ui/plug/lib/context/Context";
import { SearchPanel, SearchPanelContext } from '#/services/product/shared/ui/searchPanel';
import { useKeywordContainerContext } from '#/services/product/shared/ui/keywordContainer/lib/context/Context';

export const SearchBox = () => {
    const trigger = usePlugContext();
    const state = useKeywordContainerContext().state;
    
    const searchPanelContext: SearchPanelContextType = {
        trigger: trigger.state,
        state,
    }

    return (
        <div className={styles.panel__search}>
            <SearchPanelContext.Provider value={searchPanelContext}>
                <SearchPanel></SearchPanel>
            </SearchPanelContext.Provider>
        </div>
    )
}