'use client';

import { observer } from 'mobx-react';
import { useLoginFormContext } from '../lib/context/Context'
import styles from './styles/UserForm.module.css'

export const LoginForm = observer(() => {
    const context = useLoginFormContext();

    const data = {
        identifier: context.data.identifier,
        password: context.data.password,
    }

    const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        context.updateData({ ...context.data, [id]: value });
    }

    return (
        <form className={styles.form}>
            <div className={styles.form_group}>
                <input
                    onChange={handle}
                    className={styles.input}
                    id="identifier"
                    name="identifier"
                    type="text"
                    placeholder="Email or Username"
                    value={data.identifier}
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
                    placeholder="Password"
                    required>
                </input>
            </div>
            <button className={styles.button} type='submit'>Далее</button>
        </form>
    )
})