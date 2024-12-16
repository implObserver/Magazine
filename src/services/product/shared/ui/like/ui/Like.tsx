import { Heart } from '../components/heart'
import styles from './style/Like.module.css'

export const Like = () => {
    return (
        <div className={styles.like}>
            <Heart></Heart>
        </div>
    )
}