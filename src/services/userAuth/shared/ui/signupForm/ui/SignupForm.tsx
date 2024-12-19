'use client';

import { observer } from 'mobx-react';
import { useSignupFormContext } from '../lib/context/Context'
import styles from './styles/UserForm.module.css'

export const SignupForm = observer(() => {
    const context = useSignupFormContext();

    const data = {
        username: context.data.username,
        email: context.data.email,
        password: context.data.password,
    }

    const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newData: SignUpFieldsType = { ...data };
        newData[e.target.id] = e.target.value
        context.updateData(newData);
    }

    return (
        <div className={styles.form}>
            <div className={styles.form_group}>
                <input
                    onChange={handle}
                    className={styles.input}
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Email"
                    value={data.email}
                    autoComplete="on"
                    required>
                </input>

                <input
                    onChange={handle}
                    className={styles.input}
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Username"
                    value={data.username}
                    autoComplete="on"
                    required>
                </input>

                <input
                    onChange={handle}
                    className={styles.input}
                    id="password"
                    name="password"
                    type="password"
                    value={data.password}
                    autoComplete="on"
                    placeholder='Password'
                    required>
                </input>
            </div>
        </div>
    )
})