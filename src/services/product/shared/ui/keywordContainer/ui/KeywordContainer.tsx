import styles from './styles/KeywordContainer.module.css'
import { useKeywordContainerContext } from "../lib/context/Context"

export const KeywordContainer = ({ keyword }: { keyword: string }) => {
    const context = useKeywordContainerContext();

    const clickHandle = () => {
        context.state.setState(keyword);
    }

    return (
        <div className={styles.container__keyword} onClick={clickHandle}>
            <span>{keyword}</span>
            <div className={styles.container__remover}></div>
        </div>
    )
}