import { useSearchPanelContext } from "../lib/context/Context"
import styles from './styles/SearchPanel.module.css'

export const SearchPanel = () => {
    const context = useSearchPanelContext();

    const inputHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        context.state.setState(e.target.value);
    }

    return (
        <div className={styles.container__input}>
            <div className={styles.wrapper}>
                <input
                    type="text"
                    value={context.state.getState()}
                    onInput={inputHandle}
                    placeholder='Искать товары'
                    autoComplete="off"
                />
                <button>Найти</button>
            </div>
        </div>
    )
}