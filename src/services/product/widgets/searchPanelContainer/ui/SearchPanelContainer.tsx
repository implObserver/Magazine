import { SearchBox } from "#/services/product/entities/searchBox";
import { ExternalReset, ExternalResetContext } from "#/common/features/externalReset";
import styles from './styles/SearchPanel.module.css'
import { useCustomState } from "#/common/shared/lib";
import { MouseEvent } from "react";

export const SearchPanelContainer = () => {
    const isCheck = useCustomState();
    const externalElementContext: ExternalResetContextType = {
        state: isCheck,
        index: 'search__box'
    }
    const clickHandle = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        e.preventDefault();
        isCheck.setState(true);
    }

    return (
        <div className="search__panel__container">
            <div
                className={styles.container__search__panel}
                onClick={clickHandle}
            >
                <ExternalResetContext.Provider value={externalElementContext}>
                    <ExternalReset>
                        <SearchBox></SearchBox>
                    </ExternalReset>
                </ExternalResetContext.Provider>
            </div>
        </div>
    )
}