import { KeywordContainer, KeywordContainerContext } from "../components/keywordContainer";
import { useResultsContainerContext } from "../lib/context/Context";
import styles from './styles/ResultContainer.module.css'

export const ResultsContainer = () => {
    const context = useResultsContainerContext();

    const fill = () => {
        return context.keywords.map((keyword: string, index: number) => {
            return (
                <li key={index}>
                    <KeywordContainerContext.Provider value={{ setValue: context.setValue }}>
                        <KeywordContainer keyword={keyword}></KeywordContainer>
                    </KeywordContainerContext.Provider>
                </li>
            )
        })
    }

    return (
        <div className={styles.container__result}>
            <ul>
                {fill()}
            </ul>
        </div >
    )
}