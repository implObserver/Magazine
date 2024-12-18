'use client';
import { Plug } from "#/common/shared/ui/plug/ui/Plug";
import { ReactNode, useEffect } from "react";
import styles from './styles/ExternalReset.module.css';
import { PlugContext } from "#/common/shared/ui/plug";
import { useExternalResetContext } from "../lib/context/Context";

export const ExternalReset = ({ children }: { children: ReactNode }) => {
    const context = useExternalResetContext();

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            const element = e.target as HTMLElement;
            if (element.className.includes('plug')) {
                if (element.className.includes(context.index)) {
                    context.state.setState(false);
                }
            }
        };

        if (context.state.getState()) {
            document.addEventListener('mousedown', handler);
        }

        return () => {
            document.removeEventListener('mousedown', handler);
        }
    },)

    const plugContext: PlugContextType = {
        state: context.state.getState(),
        index: context.index,
    }

    return (
        <div className={`${context.state.getState() ? `${styles.light} ${context.index}` : ''}`}>
            <PlugContext.Provider value={plugContext}>
                {children}
                <Plug></Plug>
            </PlugContext.Provider>
        </div>
    )
}