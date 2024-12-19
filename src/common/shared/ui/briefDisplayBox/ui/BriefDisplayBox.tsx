import { useEffect, useState } from 'react';
import styles from './styles/BriefDisplayBox.module.css'

export const BriefDisplayBox = ({ children }: { children: React.ReactNode }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) {
        return null;
    }

    return (
        <div className={`${styles.box} styles.open styles.close`}>
            {children}
        </div>
    )
}