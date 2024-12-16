import { useImageContext } from "../lib/context/Context"
import styles from './styles/Preview.module.css'

export const Preview = () => {
    const context = useImageContext();

    return (
        <div className={styles.preview}>
            <img
                alt=""
                src={context.urls.url}
                srcSet={`
                    ${context.urls.srcSet[0]} 120w,
                    ${context.urls.srcSet[1]} 180w,
                    ${context.urls.srcSet[2]} 240w,
                    ${context.urls.srcSet[3]} 300w,
                    ${context.urls.srcSet[4]} 600w
                `}
                sizes="(max-width: 1456px) 15vh, 217px"
            />
        </div>
    )
}