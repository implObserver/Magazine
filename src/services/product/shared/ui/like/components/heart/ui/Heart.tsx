import styles from './styles/Heart.module.css'
import { useLikeContext } from '../../../lib/context/Context';

export const Heart = () => {
    const context = useLikeContext();

    const color = context ? "#f84141" : "#bdbdbc";
    const fill = context ? "#f84141" : "#fff";

    return (
        <div
            key={Math.random()}
            className={`${styles.heart} ${styles.click}`}>
            <svg aria-hidden="true"
                id="wishlist"
                viewBox="0 0 22 21"
                xmlns="http://www.w3.org/2000/svg"
                width="max(3vh,20px)"
                height="max(3vh,20px)"
                style={{
                    color: color
                }}>
                <path
                    d="M16.226 14.753A41.24 41.24 0 0 1 11 18.934a41.22 41.22 0 0 
                        1-5.226-4.181c-1.253-1.194-2.463-2.534-3.355-3.915C1.52 
                        9.448 1 8.099 1 6.87c0-3.678 2.548-5.496 5.024-5.496 1.592 
                        0 3.109.74 4.203 2.071l.773.94.772-.94c1.09-1.327 
                        2.61-2.071 4.204-2.071C18.452 1.375 21 3.193 21 6.871c0 
                        1.228-.52 2.576-1.419 3.967-.892 1.38-2.102 2.722-3.355 3.915z"
                    stroke="currentColor"
                    fill={fill}
                    strokeWidth="2"
                >
                </path>
            </svg>
        </div >
    )
}