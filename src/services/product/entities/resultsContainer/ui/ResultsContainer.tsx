import { KeywordContainer } from "../../../shared/ui/keywordContainer";
import styles from './styles/ResultContainer.module.css'

export const ResultsContainer = () => {
    const keywords = ['key', 'word']

    const fill = () => {
        return keywords.map((keyword: string, index: number) => {
            return (
                <li key={index}>
                    <KeywordContainer keyword={keyword}></KeywordContainer>
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