'use client';

import { Auth } from '../../services/userAuth/widgets/auth'
import styles from './styles/Auth.module.css'

const AuthPage = () => {
    return (
        <div>
            <div
                className={`${styles.auth}
                    flex w-full h-screen border border-orange-400
                    justify-center items-center
                `}>
                <Auth></Auth>
            </div>
        </div>
    )
}

export default AuthPage;